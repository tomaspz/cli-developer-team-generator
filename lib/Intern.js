// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name); // call the super class constructor and pass in the name parameter
      super(id);
      super(email);
      this.school = school;
    }
    getSchool() {
      return this.school;
    }
    getRole() {
      return "Intern";
    }
}

module.exports = Intern;