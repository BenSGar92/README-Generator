const inquirer = require ('inquirer');
const fs = require ('fs');

inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your application."
    },
    {
        type: "input",
        name: "install",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is this application used for?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who contributed on this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "checkbox",
        name: "license",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],
        message: "Please select a license."
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },  
  ])
.then(function(data) {
    console.log(data);
    const boilerREADME =`
       
# ${data.title}

# Table of Contents

- # [Description](#description)
- # [Installation](#installation) 
- # [Usage](#usage)
- # [Contributing](#contributing)
- # [Test](#test)

## Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

    ${data.description}
## Installation:
    ${data.install}
## Usage
    ${data.usage}
## Contributing
    ${data.contributing}
## Test
    ${data.test}
## Credit

## License
    For more information about the License, click on the link below.

- [License])https://opensource.org/Licenses/${data.license})
`






    fs.writeFile("README.md", boilerREADME, function(err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");
      
  });
});