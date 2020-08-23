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
  // 'License',
  'Contributing Guidelines',
  'Test Instructions',
  'Questions']


  console.log('Hi, welcome to Node Pizza');

  var questions = [
    {
      type: 'input',
      name: 'pageTitle',
      message: 'What is the title of your page?',
      default: false,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project?',
      default: false,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'No installation instructions necessary',
      default: false,
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Information',
      default: 'No usage information necessary',
    },
    // {
    //   type: 'input',
    //   name: 'phone',
    //   message: "What's your phone number?",
    //   validate: function (value) {
    //     var pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     );
    //     if (pass) {
    //       return true;
    //     }
  
    //     return 'Please enter a valid phone number';
    //   },
    // },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a License for your application please...',
      choices: ['MIT', 'mpl-2.0', 'apache-2.0', 'gpl-3.0','unlicense'],
      filter: function (val) {
        return val.toLowerCase();
      },
    },
    // {
    //   type: 'input',
    //   name: 'quantity',
    //   message: 'How many do you need?',
    //   validate: function (value) {
    //     var valid = !isNaN(parseFloat(value));
    //     return valid || 'Please enter a number';
    //   },
    //   filter: Number,
    // },
    // {
    //   type: 'expand',
    //   name: 'toppings',
    //   message: 'What about the toppings?',
    //   choices: [
    //     {
    //       key: 'p',
    //       name: 'Pepperoni and cheese',
    //       value: 'PepperoniCheese',
    //     },
    //     {
    //       key: 'a',
    //       name: 'All dressed',
    //       value: 'alldressed',
    //     },
    //     {
    //       key: 'w',
    //       name: 'Hawaiian',
    //       value: 'hawaiian',
    //     },
    //   ],
    // },
    // {
    //   type: 'rawlist',
    //   name: 'beverage',
    //   message: 'You also get a free 2L beverage',
    //   choices: ['Pepsi', '7up', 'Coke'],
    // },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',

      transformer: function(answers){
        return `https://github.com/${answers}`
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
      default: 'none'
      
    },
  ];
  
  inquirer.prompt(questions).then((answers) => {
    console.log('\nOrder receipt:');
    console.log('the big test', answers)
    //   let obj = JSON.stringify(result);
//   console.log(obj);
//   let parsedObj = JSON.parse(obj);
//   console.log(parsedObj);
    console.log(JSON.stringify(answers, null, '  '));
    let fileJson = JSON.stringify(answers, null, '  ')
    console.log(fileJson)

      for (const property in fileJson) {
    finalOutput +=
      `
    ${property}:
    ${fileJson[property]}
     `
      }
      // fs.writeFile(fileJson.pageTitle + '.md', finalOutput, function (err) {
      //   console.log('this is in the write file portion' + finalOutput)
      //   if (err) throw err;
    
      // });
    
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










// });


