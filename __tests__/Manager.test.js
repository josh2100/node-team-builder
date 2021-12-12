const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Bob");
  expect(typeof manager).toBe("object");
});

// test("creates employee with employee role", () => {
//   const employee = new Employee("Jim");
//   expect(employee.role).toBe("Employee");
// });
