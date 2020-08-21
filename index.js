const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
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
        type: "list",
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
    }
  ])
};

const generateHTML = (data) => {
        return `  
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
};

const init = async() => {
    try {
        const data = await promptUser();
        const html = generateHTML(data);
        await writeFileAsync("README.md", html);
        } catch (error) {
            console.log(error);
    }
};
init();