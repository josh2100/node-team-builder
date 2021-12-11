// look at app.js in generate portfolio for reference
// my stuff
const generateTeamPage = require("./src/page-template");
const writeFile = require("./utils/generate-site");

// Node modules
const inquirer = require("inquirer");
// const jest require jestn

const promptTeam = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your team name!");
          return false;
        }
      },
    },
  ]);
};

const promptTeamMember = (teamData) => {
  // If there's no 'team members' array property, create one
  if (!teamData.members) {
    teamData.members = [];
  }

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

promptTeam().then(promptTeamMember);
