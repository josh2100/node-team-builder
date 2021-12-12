const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer("Bob");
  expect(typeof engineer).toBe("object");
});
