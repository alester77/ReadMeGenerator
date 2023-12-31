// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Input title of your project.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Input description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Input installation steps for your project.',
  },
   {
    type: 'input',
    name: 'usage',
    message: 'Input usage instructions for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please pick a license.',
    choices: ['MIT', 'Apache', 'GNU', "None"],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Input contribution credits for your project.',
  },

  {
    type: 'input',
    name: 'test',
    message: 'Input test instructions for your project.',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'GitHub URL: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Contact Email: ',
  },
  

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`${fileName} has been saved.`)
    }
      
  }); 
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (data) {
    writeToFile("createdREADME.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
