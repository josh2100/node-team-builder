const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Bob");
  expect(typeof manager).toBe("object");
});

test("creates manager with manager role", () => {
  const manager = new Manager("Jim");

  expect(manager.role).toBe("Manager");
});

test("manager getRole() returns role", () => {
  const manager = new Manager("Jim", 20, "jim@mail.com", 100);

  expect(manager.getRole()).toBe("Manager");
});

test("manager getName() returns name", () => {
  const manager = new Manager("Jim", 20, "jim@mail.com", 100);

  expect(manager.getName()).toBe("Jim");
});

test("manager getId() returns id", () => {
  const manager = new Manager("Jim", 20, "jim@mail.com", 100);

  expect(manager.getId()).toBe(20);
});

test("manager getEmail() returns email", () => {
  const manager = new Manager("Jim", 20, "jim@mail.com", 100);

  expect(manager.getEmail()).toBe("jim@mail.com");
});

test("manager getOfficeNumber() returns office number", () => {
  const manager = new Manager("Jim", 20, "jim@mail.com", 100);

  expect(manager.getOfficeNumber()).toBe(100);
});
