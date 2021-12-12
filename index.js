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

//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const promptTeam = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the name of your team Manager?",
      validate: (managerInput) => {
        if (managerInput) {
          return true;
        } else {
          console.log("Please enter your team Manager name!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the EMPLOYEE ID of your team Manager?",
      validate: (employeeIdInput) => {
        if (employeeIdInput) {
          return true;
        } else {
          console.log("Please enter your team Manager employee ID!");
          return false;
        }
      },
    },
  ]);
  // after asking questions, package up manager data as an employee
  // manager extends employee
  // and pushes it into teamMembers[];
  //.then(new manager stuff)
};

const promptTeamMember = (teamData) => {
  // If there's no 'team members' array property, create one
  //   if (!teamData.members) {
  //     teamData.members = [];
  //   }

  console.log(`
  =================
  Add a New Team Member
  =================`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Team member?",
        validate: (teamMember) => {
          if (teamMember) {
            return true;
          } else {
            console.log("Please enter your team member!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What does this guy know? (Check all that apply)",
        choices: ["choice", "choice2", "choice3"],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the GitHub username to your teammate. (Required)",
        validate: (githubLink) => {
          if (githubLink) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to enter another team member?",
        default: false,
      },
    ])
    .then((projectData) => {
      teamData.members.push(projectData);
      if (projectData.confirmAddMember) {
        return promptTeamMember(teamData);
      } else {
        return teamData;
      }
    });
};

promptTeam()
  .then(promptTeamMember)
  .then((teamData) => {
    console.log(teamData);
  });
