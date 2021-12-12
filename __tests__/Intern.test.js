const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("creates manager object", () => {
  const intern = new Intern("Bob");
  expect(typeof intern).toBe("object");
});
