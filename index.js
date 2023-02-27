const inquirer = require('inquirer')
const fs = require('fs');
// const util = require('util');

console.log('readme gen running')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Give your README a title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Table of contents',
            name: 'contents',
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
            message: 'Questions',
            name: 'questions',
        },

    ])
    .then((response) => {
        console.log(response);
        fs.writeFile(`test.md`, `Hello there!`, (error) => 
        error ? console.error(error) : console.log(`Success`)
        );
    })

