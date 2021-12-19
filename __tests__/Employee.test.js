const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("Bob");
  expect(typeof employee).toBe("object");
});

test("creates employee with employee role", () => {
  const employee = new Employee("Jim");
  expect(employee.role).toBe("Employee");
});

test("employee getRole() returns role", () => {
  const employee = new Employee("Jim", 20, "jim@mail.com");

  expect(employee.getRole()).toBe("Employee");
});

test("employee getName() returns name", () => {
  const employee = new Employee("Jim", 20, "jim@mail.com");

  expect(employee.getName()).toBe("Jim");
});

test("employee getId() returns id", () => {
  const employee = new Employee("Jim", 20, "jim@mail.com");

  expect(employee.getId()).toBe(20);
});

test("employee getEmail() returns email", () => {
  const employee = new Employee("Jim", 20, "jim@mail.com");

  expect(employee.getEmail()).toBe("jim@mail.com");
});
