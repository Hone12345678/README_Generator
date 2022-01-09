
// TODO: Create a function that returns a license badge based on which license is passed in

// const { info } = require("console");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="none") { 
    return`[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }else{
    return''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n * [Liscense](#license) \n`
  }else{
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `##License
    This project is under license ${license}`
  }else{
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}

  ## Description
  ${answers.projectDescription}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Badges](#badges)
  - [Contribution](#contribution)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  - ${answers.installationInstructions}

  ## Usage
  - ${answers.usageInformation}

  ## Badges
  ${renderLicenseBadge(answers.license)}

  ## Contribution
  - ${answers.contributionGuidlines}

  ## License
  ${renderLicenseLink(answers.license)}

  ${renderLicenseSection(answers.license)}

  ##Questions
  - Link to my Github https://github.com/${answers.gitHubUsername}
  - Email me at...${answers.userEmail}
   
  `
}


module.exports = generateMarkdown;
