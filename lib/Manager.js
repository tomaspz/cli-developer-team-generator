// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name); // call the super class constructor and pass in the name parameter
      super(id);
      super(email);
      this.officeNumber = officeNumber;
    }
  
    getRole() {
      return "Manager";
    }
}

module.exports = Manager;