const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer("Bob");
  expect(typeof engineer).toBe("object");
});

test("creates engineer with engineer role", () => {
  const engineer = new Engineer("Jim");

  expect(engineer.role).toBe("Engineer");
});

test("employee getRole() returns role", () => {
  const engineer = new Engineer("Jim", 20, "jim@mail.com");

  expect(engineer.getRole()).toBe("Engineer");
});

test("engineer getName() returns name", () => {
  const engineer = new Engineer("Jim", 20, "jim@mail.com");

  expect(engineer.getName()).toBe("Jim");
});

test("engineer getId() returns id", () => {
  const engineer = new Engineer("Jim", 20, "jim@mail.com");

  expect(engineer.getId()).toBe(20);
});

test("engineer getEmail() returns email", () => {
  const engineer = new Engineer("Jim", 20, "jim@mail.com");

  expect(engineer.getEmail()).toBe("jim@mail.com");
});
