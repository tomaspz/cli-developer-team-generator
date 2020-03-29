// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email); // calls super class constructor and pass in parameters
      this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
      return this.officeNumber;
    }
    getRole() {
      return "Manager";
    }
}

module.exports = Manager;