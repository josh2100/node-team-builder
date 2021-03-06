const Employee = require("./Employee");

// Constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }
  // Methods
  getRole() {
    return this.role;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
