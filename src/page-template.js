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
    // make if statement to change card based on intern or engineer
    // .join to eliminate commas
    // Add a card for each member
    teamHtml.push(`

            <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div class="card mx-auto mb-3">
            <h3 class="card-header">${element.name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.role}</li>
              <li class="list-group-item">ID:${element.id}</li>
              <li class="list-group-item">
                Email Address: ${element.email}
              </li>
              <li class="list-group-item">Office Phone: 555-321-8008</li>
            </ul>
          </div>
        </div>
    `);
  });

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- bootstrap stylesheet -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <!-- your stylesheet -->
    <!-- <link rel="stylesheet" href="./assets/css/style.css" /> -->
    <title>Software Team Profile</title>
  </head>
  <body>
    <!-- Header -->
    <header class="text-center">
      <h1 class="">Software Team Profile</h1>
    </header>

    <!-- Main -->
    <main class="container">
      <section class="row">
        <!-- Manager -->
        <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div class="card mx-auto mb-3">
            <h3 class="card-header">${team[0].name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${team[0].role}</li>
              <li class="list-group-item">ID: ${team[0].id}</li>
              <li class="list-group-item">
                Email: ${team[0].email}
              </li>
              <li class="list-group-item">Office Phone: 555-321-8008</li>
            </ul>
          </div>
        </div>
        <!-- Others -->
${teamHtml}
        <!-- end row -->
      </section>
    </main>
  </body>
</html>
  
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
