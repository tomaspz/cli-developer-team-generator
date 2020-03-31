# Generate HTML with Team Members with Node and CLI.

* This Node CLI application asks questions to the user to collect information about employees.
* The application prompts the user for information about the team members.
* The abstract class "Employee" is used for inheritance of the team members.
* There are 3 types of team members: "Manager", "Engineer" and "Intern".
* The user can input any number and any type of team members.
* When the questionnaire is finished, the app generates an HTML webpage displaying all the team's members. 
* The HTML file displays a nicely formatted team roster based on the information provided by the user.
* All the classes for the employees passed all unit tests. Writing readable, reliable, and maintainable code is very important in programming. Testing is crucial to make sure the code is designed properly.

### Dependencies

We use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for information based on their role with the company:
* the "Employee" has a name, id and email.
* the "Manager" has all the properties of the "Employee" plus the office number.
* the "Engineer" has all the properties of the "Employee" plus the GitHub username.
* the "Intern" has all the properties of the "Employee" plus the school.

We use [Jest npm package](https://www.npmjs.com/package/jest) for all the testing on the classes.

### User Story

```
As a team MANAGER

I WANT access to a CLI app,
WHEN I am working in a project,
SO, I can easily generate my developer's team information.

I WANT to generate a webpage that displays my team's basic info
SO that I have quick access to emails, schools, office numbers and GitHub profiles.

I WANT common information for all users
AND specific information for each role,
SO I can distinguish each user role.
```

### Screenshot

### Animated Gif

### GitHub Repo URL

[CLI Developer Team Generator](https://github.com/tomaspz/cli-developer-team-generator)

### Deployed App Sample URL

[Sample Team Generated HTML](https://tomaspz.github.io/cli-developer-team-generator/output/team.html)


### Installation Instructions in Your Own Repository

1. Copy the following directories and its contents at the root of your repo: `lib`, `templates`, `test`.
2. Copy the following files at the root of your repo: `app.js`, `package.json` and `.gitignore`.
3. The directory structure should looks like this:

```
lib/                    // classes and helper code
    Employee.js
    Engineer.js
    htmlRenderer.js
    Intern.js
    Manager.js
templates/              // HTML templates
    engineer.html
    intern.html
    main.html
    manager.html
test/                   // jest tests
    Employee.test.js
    Engineer.test.js
    Intern.test.js
    Manager.test.js
app.js                  // application entry point
package.json            // node dependencies
.gitignore              // ignore node-modules when pushing to GitHub
```

4. Run `npm install` to install all the dependencies included in `package.json`. The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.
5. Run `npm run test` to make sure that all the tests pass.
6. Run `node app.js` to start the questionnaire.