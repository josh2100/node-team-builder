const Employee = require("./Employee");

// Constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  // Methods
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
