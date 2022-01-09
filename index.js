// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
    const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is title of your project?',
    },
    { 
      type: 'input',
      name: 'projectDescription',
      message: 'Provide a description for your projcet',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Provide some instalation instructions',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Provide usage information',
      },
      {
        type: 'input',
        name: 'contributionGuidlines',
        message: 'Provide contribution guidlines',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Would you like to provide test instructions',
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub user name?',
      },
      {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
      },
      {
          type: 'list',
          name: 'license',
          message: "What license's should your project have",
          choices: ['MIT','IBM','Apache 2.0','none']
      }

  ]



  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{
        console.log('generated readme')
        writeToFile("README.md",generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();



  

    
