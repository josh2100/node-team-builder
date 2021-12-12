// look at app.js in generate portfolio for reference
// my stuff
const generateTeamPage = require("./src/page-template");
const writeFile = require("./utils/generate-site");

// Node modules
const inquirer = require("inquirer");
const jest = require("jest");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamMembers = [];

const promptTeam = () => {
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
    .then((choice) => {
      switch (choice) {
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
  console.log(teamMembers);
};

const newIntern = () => {
  console.log(teamMembers);
};

const generatePage = () => {
  console.log(teamMembers);
};

promptTeam()
  .then(promptTeamMember)
  .then((teamData) => {
    console.log(teamData);
  });
