// change to a function that takes array as argument!

const pageTemplate = (team) => {
  let teamMembers = [];
  let teamHtml = [];

  // Get the members EXCEPT manager into teamMembers
  for (let i = 1; i < team.length; i++) {
    const element = team[i];

    teamMembers.push(element);
  }

  teamMembers.forEach((element) => {
    // Conditional to change card based on intern or engineer
    const engineerOrIntern = () => {
      if (element.role === "Engineer") {
        return `<a href="https://github.com/${element.github}">Github: ${element.github}</a>`;
      } else {
        return `School: ${element.school}`;
      }
    };

    teamHtml.push(`<div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div class="card mx-auto mb-3">
            <h3 class="card-header">${element.name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.role}</li>
              <li class="list-group-item">ID: ${element.id}</li>
              <li class="list-group-item">   
                <a href="mailto:${element.email}">Email: ${element.email}</a>
              </li>
              <li class="list-group-item">${engineerOrIntern()}</li>
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
    <header class="text-center bg-primary">
      <h1 class="">Software Team Profile</h1>
    </header>

    <!-- Main -->
    <main class="container">
      <section class="row justify-content-center">
        <!-- Manager -->
        <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div class="card mx-auto mb-3">
            <h3 class="card-header">${team[0].name}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${team[0].role}</li>
              <li class="list-group-item">ID: ${team[0].id}</li>
              <li class="list-group-item">
                <a href="mailto:${team[0].email}">Email: ${team[0].email}</a>
              </li>
              <li class="list-group-item">Office Number: ${
                team[0].officeNumber
              }</li>
            </ul>
          </div>
        </div>
        <!-- Others -->
${teamHtml.join("")}
        <!-- end row -->
      </section>
    </main>
  </body>
</html> 
  `;
};

module.exports = pageTemplate;
