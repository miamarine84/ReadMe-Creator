const fs = require('fs')
const inquirer = require('inquirer');

console.log('This is the README.md creator please take your time and fill this out.');
let licenseDescription;
let questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your page?',

  },
  {
    type: 'input',
    name: 'Description',
    message: 'Project Decription',
    default: 'No description information is available',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Installation instructions',
    default: 'No installation information is available',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Usage Information',
    default: 'No Usage information is available',
  },
  {
    type: 'input',
    name: 'Contribution',
    message: 'Details if contributing',
    default: 'No contribution information is available',
  },
  {
    type: 'input',
    name: 'Testing',
    message: 'Testing information',
    default: 'No Testing information is available',
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a License for your application please...',
    choices: ['MIT', 'ISC', 'Unlicense'],
    filter: function(answers){
      if('MIT' == answers){
        licenseDescription = 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.'
      }else if('ISC' == answers){
        licenseDescription = 'The ISC license is a permissive free software license published by the Internet Software Consortium, nowadays called Internet Systems Consortium (ISC). It is functionally equivalent to the simplified BSD and MIT licenses, but without language deemed unnecessary following the Berne Convention.'
      } else if('Unlicense' == answers){
        'User chose to be unlicensed instead'
      }
    }
  },
  {
    type: 'input',
    name: 'Github',
    message: 'What is your github username?',
    filter: function (answers) {
      if(answers){
      return `https://github.com/${answers}`
      }else{
        return 'No GitHub link was entered'
      }

    }
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email address',
    filter: function (answers) {
      if(answers){
        return `${answers} This is my e-mail please feel free to contact me through here also go to my github leave me a message and contact me with any questions you may have`
      }else{
        return 'No email address was entered' 
      }
    }
  },
];

inquirer.prompt(questions).then((answers) => {

  let fileJson = JSON.stringify(answers, null, '  ')

  let parsedObj = JSON.parse(fileJson)


  fs.writeFile(parsedObj.Title + '.md',

    `
![license](https://img.shields.io/badge/license-${parsedObj.License}-blue.svg)(http://${parsedObj.License}.org/)

## Table Of Contents 
* [Title](#title)
* [Description](#projectdescription)
* [Installation](#installation)
* [Usage](#usage)
* [License](#License)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)


## Title 

${parsedObj.Title}

## Project Description

${parsedObj.Description}

## Installation

${parsedObj.Installation}

## Usage 

${parsedObj.Usage}

## License
${licenseDescription}

## Contributing 

${parsedObj.Contribution}

## Testing

${parsedObj.Testing}

## Questions

${parsedObj.Github}

${parsedObj.Email}    

    `


    , function (err) {
   
      if (err) throw err;

    });

});
