// Employee constructor
class Employee {
  constructor(name, id, email) { 
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  // Methods
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
