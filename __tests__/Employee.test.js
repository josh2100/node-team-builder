const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Bob");
  expect(typeof employee).toBe("object");
});

test("creates employee with employee role", () => {
  const employee = new Employee("Jim");
  expect(employee.role).toBe("Employee");
});
