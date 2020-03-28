// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, userNameGitHub) {
      super(name); // call the super class constructor and pass in the name parameter
      super(id);
      super(email);
      this.userNameGitHub = userNameGitHub;
    }
    getGitHub(){
        return this.userNameGitHub;
    }
    getRole() {
      return "Engineer";
    }
}

module.exports = Engineer;