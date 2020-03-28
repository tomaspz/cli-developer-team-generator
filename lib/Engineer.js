// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super([name, id, email]); // calls super class constructor and pass in parameters
      this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole() {
      return "Engineer";
    }
}

module.exports = Engineer;