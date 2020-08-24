const fs = require('fs')
// const prompt = require('prompt');
const inquirer = require('inquirer');

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


console.log('Hi, welcome to Node Pizza');

var questions = [
  {
    type: 'input',
    name: '## Title',
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
    message: 'No installation instructions necessary',
    default: false,
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Usage Information',
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
      return `https://github.com/${answers}`
    }
  },
  {
    type: 'input',
    name: 'E-Mail',
    message: 'What is your email address',
    default: 'none',
    filter: function (answers) {
      return `${answers} Please feel free to also go to my github leave me a message or contact me with any questions you may have`
    }
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log('the big test', answers)

  console.log(JSON.stringify(answers, null, '  '));
  let fileJson = JSON.stringify(answers, null, '  ')
  console.log('this is the fileJson output', fileJson)
  let parsedObj = JSON.parse(fileJson)
  console.log('parsed',parsedObj)
  let docTitle = parsedObj.pageTitle
  console.log(docTitle)

   let finalOutput = [];

  for (const property in parsedObj) {
    finalOutput +=
      `
    ${property}:
    ${parsedObj[property]}
     `
     console.log( `${property}:
      ${parsedObj[property]}`)
  }

console.log(finalOutput)

  fs.writeFile(parsedObj.docTitle + '.md', finalOutput, function (err) {
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


