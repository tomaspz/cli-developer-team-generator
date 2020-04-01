const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const promisify = require('./node_modules/util.promisify');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Create an array to hold the team members
let teamMembersArray = [];

// Common questions
const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member's id?",
    },
    {
        type: "input",
        message: "What is the team member's email?",
        name: "email",
        validate: function(value){
            var pass = value.match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
                );
            if (pass) {
                return true;
            } 
            return "Please enter a valid email address!";      
        }
    },
    {
        type: "list",
        message: "What is the role of the team member?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const managerQuestion = 
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    };

const engineerQuestion = 
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    };

const internQuestion = 
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    };

const askForMoreEmployeesQuestion =       
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: 'Do you want to add another team member?',
        default: false
    };

async function askForMoreEmployees() {

    try {
        const answer = await inquirer.prompt(askForMoreEmployeesQuestion);
        if(answer.moreEmployees){
            await askQuestions();
        }
        return teamMembersArray;
    } catch (error) {
        console.log("Error in the askForMoreEmployees function")
    }

}; 

async function askQuestions () {

    try {
        const employeeAnswers = await inquirer.prompt(employeeQuestions);
        const {name, id, email} = employeeAnswers;

        switch(employeeAnswers.role) {
            case "Manager": try {
                                const managerAnswer = await inquirer.prompt(managerQuestion);
                                const {officeNumber} = managerAnswer;
                                let manager = new Manager(name, id, email, officeNumber);
                                teamMembersArray.push(manager);
                                await askForMoreEmployees();
                            } catch (error) {
                                console.log("Error in the Manager!");
                            };
                            break;
            case "Engineer": try {
                                const engineerAnswer = await inquirer.prompt(engineerQuestion);
                                const {github} = engineerAnswer;
                                let engineer = new Engineer(name, id, email, github);
                                teamMembersArray.push(engineer);
                                await askForMoreEmployees();
                            } catch (error) {
                                console.log("Error in the Engineer!");
                            }
                            break;

            case "Intern": try {
                                const internAnswer = await inquirer.prompt(internQuestion);
                                const {school} = internAnswer;
                                let intern = new Intern(name, id, email, school);
                                teamMembersArray.push(intern);
                                await askForMoreEmployees()
                            } catch (error) {
                                console.log("Error in the Intern!");
                            }
                            break;
        } // end of switch statement
    } catch (error) {
        console.log("Sorry there was an error. Try again!");
    } // end of try-catch  
}; // end of askQuestions

async function main() {
    await askQuestions();

    // render the team members into an html file
    const renderedHtml = render(teamMembersArray);

    // if the output directory does not exist, create it
    var dir = './output';
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    };

    // write the rendered html to the team.html file
    fs.writeFile(outputPath, renderedHtml, error => {
        if(error) throw error;
        console.log('The file has been saved!');
    });
}

main().then(()=>console.log('Finished!')).catch((err)=>console.log(err));
