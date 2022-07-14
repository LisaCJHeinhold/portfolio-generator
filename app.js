const inquirer = require('inquirer');
// import inquirer from 'inquirer'
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const [name, github] = profileDataArgs;
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });