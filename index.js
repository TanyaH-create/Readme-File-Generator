// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
//capture answers into object
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: "What is your project title?",
    },
    {
        type: 'input',
        name: 'description', 
        message: "Enter a short description of your project:",
    },
    {
        type: 'input',
        name: 'installation', 
        message: "Enter the installation steps, one per line."
    }, 
    {
        type: 'input',
        name: 'usage', 
        message: "Enter usage information for your project:",
    }, 
    {
        type: 'input',
        name: 'contributing', 
        message: "What are the contribution instructions for your project?",
    }, 
    {
        type: 'input',
        name: 'tests', 
        message: "What are the test instructions for your project?",
    }, 
    {
        type: 'list',
        name: 'license', 
        message: "Choose a license for our project:",
        choices: ["MIT", "Apache 2.0","GPLv3","MPLv2.0","GNUv3","None"]
    }, 
    {
        type: 'input',
        name: 'githubUsername', 
        message: "Enter your gitHub username:",
    },
    {
        type: 'input',
        name: 'githubLink', 
        message: "Enter your gitHub address link:",
    },
    {
        type: 'input',
        name: 'email', 
        message: "Enter your email address:",
    },
];

 // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //write to the file
  fs.writeFile(fileName, data, (err) => {
    if(err) {
       console.error('Error writing file:', err);
       } else {
       console.log('Readme successfully created!');
       }
    });
}
// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README Generator!\n')
    console.log('Please answer the following questions about your project:\n')

    inquirer
    .prompt(questions)
    //promise function: use answers to generate the readme file
    .then((answers) => {
        //call markdown generator to create README content
        const readmeContent = generateMarkdown(answers);

        //call function to wrie the file
        writeToFile('README.md', readmeContent);
     })
    //handle errors that occur during asynchronous operations
    .catch((error) => {
        //errors due to not supporting TTY, running in a  non-terminal environment
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in current environment")
        }else{
            //general error check
            console.error('An error occured:', error);
    }   
});
}

// Function call to initialize app
init();
