# Node Team Builder

This Node.js command line application asks details about a software engineering team and generates a webpage for it. Clickable links are made for email addresses and GitHub portfolios

Demo video at (link here)

# Description

This is a node project in which a user can dynamically generate an HTML file from their command line interface. Inquirer is used to generate questions, and an HTML file is generated from the data provided. This was built with Node.js, JavaScript, Inquirer, and Jest.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Technologies](#technologies)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Use npm install to install inquirer, jest, and associated modules, which are required for this application.

## Usage

![Node Team Builder Screenshot](./images/screenshot.png)

Run node index on your command line while in root directory. Answer all the questions, then check out the "dist" directory to see the final output.

## License

This project is licensed under the MIT license.

![MIT Badge](https://img.shields.io/npm/l/f)

## Contributions

Fork the project and create a pull request. Let me know how you think you can contribute and we will talk.

## Technologies Used

Node.js, Inquirer.js, Jest, Bootstrap

## Credits

Created by Joshua Schermann, special thanks to the University of Minnesota Coding Bootcamp

## Questions

Post an issue if you see a bug or suggested improvement.

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
