// look at app.js in generate portfolio for reference
// my stuff
const generateTeamPage = require("./src/page-template");
const writeFile = require("./utils/generate-site");

// Node modules
const inquirer = require("inquirer");
const jest = require("jest");

// const Employee = require("./lib/Employee");  not necessary for this page?
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require("./src/page-template");

let teamMembers = [];

const newManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your team Manager?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your team Manager name!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "What is the employee ID of your team Manager?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your team Manager employee ID!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is the email address of your team Manager?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your team Manager email address.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of your team Manager?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your team Manager office number.");
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      let manager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.officeNumber
      );
      teamMembers.push(manager);
      console.log(teamMembers);
      promptTeamMember();
    });
  // after asking questions, package up manager data as an employee
  // manager extends employee
  // and pushes it into teamMembers[];
  //.then(new manager stuff)
};

const promptTeamMember = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message:
          "Would you like to add an Engineer, an Intern, or finish the page?",
        choices: ["Engineer", "Intern", "Finish Page"],
      },
    ])
    .then((responses) => {
      switch (responses.choice) {
        case "Engineer":
          newEngineer();
          break;
        case "Intern":
          newIntern();
          break;
        default:
          generatePage();
      }
    });
};

const newEngineer = () => {
  // console.log(teamMembers);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your engineer's name.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "What is the id of the engineer?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the engineer's id!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is the email of the engineer?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the engineer's email.");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "github",
        message: "What is GitHub username of the engineer?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username.");
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.github
      );
      teamMembers.push(engineer);
      promptTeamMember();
    });
};

const newIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter your intern's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the intern?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the intern's id.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address for the intern?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the intern's email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Whats the school of the intern?",
        validate: (v) => {
          if (v) {
            return true;
          } else {
            console.log("Please enter the intern's school.");
            return false;
          }
        },
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.name,
        responses.id,
        responses.email,
        responses.school
      );
      teamMembers.push(intern);
      promptTeamMember();
    });
};

const generatePage = () => {
  console.log('Creating team page, look in "dist" directory for output!');
  writeFile(pageTemplate(teamMembers));
};

newManager();
