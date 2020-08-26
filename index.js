const fs = require('fs')
// const prompt = require('prompt');
const inquirer = require('inquirer');
const { parse } = require('path');

// prompt.start();
let finalOutput = []
// 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Test', 'Questions'
const promptChoices = [
  'Title',
  'Please give a description of your project?',
  'Installation instructions',
  'Usage Information',
  'License',
  'Contributing Guidelines',
  'Test Instructions',
  'Questions']


console.log('This is the README.md creator please take your time and fill this out.');

var questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your page?',
    default: false,
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please give a description of your project?',
    default: false,
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Installation instructions',
    default: false,
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Usage Information',
    default: 'No usage information necessary',
  },
  {
    type: 'input',
    name: 'Contribution',
    message: 'Details if contributing',
    default: 'No usage information necessary',
  },
  {
    type: 'input',
    name: 'Testing',
    message: 'Testing information',
    default: 'No usage information necessary',
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a License for your application please...',
    choices: ['MIT', 'mpl-2.0', 'apache-2.0', 'gpl-3.0', 'unlicense'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is your github username?',
    filter: function (answers) {
      if(answers){
      return `https://github.com/${answers}`
      }else{
        return ''
      }

    }
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address',
    default: false,
    filter: function (answers) {
      if(answers){
        return `${answers} This is my e-mail please feel free to contact me through here also go to my github leave me a message and contact me with any questions you may have`
      }else{
        return '' 
      }
    }
  },
];

inquirer.prompt(questions).then((answers) => {
  // console.log('\nOrder receipt:');
  //console.log('the big test', answers)

  console.log(JSON.stringify(answers, null, '  '));
  let fileJson = JSON.stringify(answers, null, '  ')
  // console.log('this is the fileJson output', fileJson)
  let parsedObj = JSON.parse(fileJson)
  console.log('parsed', parsedObj)


  //  let finalOutput = [];

  // for (const property in parsedObj) {
  //   finalOutput +=
  //     `
  //   ${property}:
  //   ${parsedObj[property]}
  //    `
  //    console.log( `${property}:
  //     ${parsedObj[property]}`)
  // }
  console.log(parsedObj.Email)




  fs.writeFile(parsedObj.Title + '.md',

    `
## Title 
${parsedObj.Title}

## Description

${parsedObj.Description} 
## Table Of Contents 
* [Title](#Title)
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Questions](#Questions)

${parsedObj.Installation}
## Usage 

${parsedObj.Usage}
# Contributing 

${parsedObj.Contribution}
## Testing

${parsedObj.Testing}
## Questions

${parsedObj.Github}
${parsedObj.Email}    

    `


    , function (err) {
      //console.log('this is in the write file portion' + finalOutput)
      if (err) throw err;

    });

});

// prompt.get(promptChoices, function (err, result) {

//   console.log(result)

//   let obj = JSON.stringify(result);
//   console.log(obj);
//   let parsedObj = JSON.parse(obj);
//   console.log(parsedObj);

//   let finalOutput = [];

//   for (const property in parsedObj) {
//     finalOutput +=
//       `
//     ${property}:
//     ${parsedObj[property]}
//      `
//      console.log( `${property}:
//       ${parsedObj[property]}`)
//   }


  // let obj = JSON.stringify(answers);
  // console.log(obj);
  // let parsedObj = JSON.parse(fileJson);
  // console.log(parsedObj);


  //   let obj = JSON.stringify(result);
//   console.log(obj);
//   let parsedObj = JSON.parse(obj);
//   console.log(parsedObj);









// });


