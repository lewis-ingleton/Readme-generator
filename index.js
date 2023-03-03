const inquirer = require('inquirer')
const fs = require('fs');
function lisenceBadge(lisence) {
    if (lisence === 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (lisence === 'GPLv2') {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (lisence === 'Apache') {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (lisence === 'GPLv3') {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (lisence === 'BSD 3-clause') {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }

}

const generateMarkdown = (response) => {
    return `# ${response.title}
${lisenceBadge(response.lisence)} 
    
## Project description
${response.description}

## Table of contents
- [Installation](#installation-instructions)
- [Usage](#usage)
- [Contribute](#contribute)
- [GitHub username](#github-username)
- [Email](#email)


## Installation
${response.installation}

## Usage
${response.usage}

## Contribute
${response.contribute}

## Contact me if you have any questions
https://github.com/${response.githubQs}

${response.emailQs}
`
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Give your README a filename (dont include file-extension)',
            name: 'filename',
        },
        {
            type: 'input',
            message: 'Project title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Lisence',
            name: 'lisence',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause']
        },
        {
            type: 'input',
            message: 'Contribute',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Whats your GitHub username?',
            name: 'githubQs',
        },
        {
            type: 'input',
            message: 'Whats your email?',
            name: 'emailQs',
        },

    ])
    .then((response) => {
        const MDgeneration = generateMarkdown(response);
        console.log(response)
        fs.writeFile(`${response.filename}.md`, MDgeneration, (error) =>
            error ? console.error(error) : console.log(`Success`)
        );
    })


