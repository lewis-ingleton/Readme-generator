const inquirer = require('inquirer')
const fs = require('fs');

const generateMarkdown = (response) => {
    return `# ${response.title}`

        // `## Project description`,
        // `${response.description}`

        // `## Table of contents`,
        // `${response.contents}`,

        // `## Installation instructions`,
        // `${response.instructions}`,

        // `## Usage`,
        // `${response.usage}`,

        // `## Lisence`,
        // `${response.lisence}`,

        // `## Contribute`,
        // `${response.contribute}`

}

console.log('readme gen running')

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
        // {
        //     type: 'input',
        //     message: 'Table of contents',
        //     name: 'contents',
        // },
        // {
        //     type: 'input',
        //     message: 'Installation instructions',
        //     name: 'installation',
        // },
        // {
        //     type: 'input',
        //     message: 'Usage',
        //     name: 'usage',
        // },
        // {
        //     type: 'list',
        //     message: 'Lisence',
        //     name: 'lisence',
        //     choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause']
        // },
        // {
        //     type: 'input',
        //     message: 'Contribute',
        //     name: 'contribute',
        // },
        // {
        //     type: 'input',
        //     message: 'Tests',
        //     name: 'tests',
        // },
        // {
        //     type: 'input',
        //     message: 'Questions',
        //     name: 'questions',
        // },

    ])
    .then((response) => {
        const MDgeneration = generateMarkdown(response);

        fs.writeFile(`${response.filename}.md`, MDgeneration, (error) =>
            error ? console.error(error) : console.log(`Success`)
        );
        console.log('hell0', MDgeneration);
    })


