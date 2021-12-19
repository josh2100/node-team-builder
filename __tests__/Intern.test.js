const Intern = require("../lib/Intern");

test("creates intern object", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(typeof intern).toBe("object");
});

test("creates intern with intern role", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.role).toBe("Intern");
});

test("intern getRole() returns role", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.getRole()).toBe("Intern");
});

test("intern getName() returns name", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.getName()).toBe("Jim");
});

test("intern getId() returns id", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.getId()).toBe(20);
});

test("intern getEmail() returns email", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.getEmail()).toBe("jim@mail.com");
});

test("intern getSchool() returns school name", () => {
  const intern = new Intern("Jim", 20, "jim@mail.com", "MIT");

  expect(intern.getSchool()).toBe("MIT");
});
