const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// let rightEmail = "tomaspz@yahoo.com"
// let wrongEmail = "7@moc"
// console.log("Right email: " + emailAnswerValidator(rightEmail));
// console.log("Wrong email: " + emailAnswerValidator(wrongEmail));

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let employeeQuestions = [
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

let managerQuestion = 
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
;

let engineerQuestion = 
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }
;

let internQuestion = 
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
;

inquirer.prompt(employeeQuestions).then(employeeAnswers => {
    const {name, id, email} = employeeAnswers;
    console.log(name);
    console.log(id);
    console.log(email);
    let employee = new Employee(name, id, email);
    switch(employeeAnswers.role) {
        case "Manager": inquirer.prompt(managerQuestion)
                        .then(managerAnswer => {
                            console.log(managerAnswer);
                            const {officeNumber} = managerAnswer;
                            let manager = new Manager(name, id, email, officeNumber);
                            // let manager = {name, id, email, officeNumber};
                            console.log(manager);
                        })
                        .catch(error => {
                            if (error) {throw error;}
                            console.log("Error in the Manager!");
                        });
                        break;

        case "Engineer": inquirer.prompt(engineerQuestion)
                        .then(engineerAnswer => {
                            const {github} = engineerAnswer;
                            // console.log(engineerAnswer);
                            //let engineer = {name, id, email, github};
                            let engineer = new Engineer(name, id, email, github);
                            console.log(engineer);
                        })
                        .catch(error => {
                            if (error) {throw error;}
                            console.log("Error in the Manager!");
                        });
                        break;

        case "Intern":  inquirer.prompt(internQuestion)
                        .then(internAnswer => {
                            console.log(internAnswer);
                            const {school} = internAnswer;
                            let intern = new Intern(name, id, email, school);
                            //let intern = {name, id, email, school};
                            console.log(intern);
                        })
                        .catch(error => {
                            if (error) {throw error;}
                            console.log("Error in the Manager!");
                        });
                        break;
    }
    //  if(employeeAnswers.role === "Manager") {

    //  }
})
.catch(error => {
    if (error) {
        throw error;
    }
    console.log("Sorry there was an error. Try again!");
});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
