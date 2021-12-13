// const teamMembers = require("../index.js");

// change to a function that takes array as argument!

const pageTemplate = (team) => {
  let teamMembers = [];
  let teamHtml = [];

  // Get the members except manager into teamMembers
  for (let i = 1; i < team.length; i++) {
    const element = team[i];

    teamMembers.push(element);
  }

  teamMembers.forEach((element) => {
    /// return a hunk of html
    teamHtml.push(element.name);
    teamHtml.push(element.id);
    teamHtml.push(`
    <div>employee name: ${element.name}</div>
    <div>employee name: ${element.id}</div>
    <div>employee name: ${element.email}</div>
    
    `);
  });

  return `
  manager 
  ${team[0].name}
  ${team[0].role}
  ${team[0].email}
  ${team[0].officeNumber}

  team members here
  ${teamHtml}
  `;
};
// header
// manager
`
=====
html is fun
`;

//
const generateTeamPage = (aboutText) => {
  return `html header`;
};

const generateTeamMembers = (projectsArr) => {
  // use forEach to make a section for each team member
  return `a`;
};

module.exports = pageTemplate;
