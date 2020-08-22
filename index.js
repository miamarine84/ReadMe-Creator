const fs = require('fs')
const prompt = require('prompt');
const inquirer = require('inquirer');

prompt.start();

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

prompt.get(promptChoices, function (err, result) {

  console.log(result)

  let obj = JSON.stringify(result);
  console.log(obj);
  let parsedObj = JSON.parse(obj);
  console.log(parsedObj);

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

  // fs.writeFile(parsedObj.Title + '.md', finalOutput, function (err) {
  //   console.log('this is in the write file portion' + finalOutput)
  //   if (err) throw err;

  // });
});


