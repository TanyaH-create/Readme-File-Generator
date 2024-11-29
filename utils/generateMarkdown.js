// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      case 'Apache 2.0':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      case 'GPLv3':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      case 'MPLv2.0':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      case 'GNUv3':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      case `None`:
        return '';
    } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'GPLv3':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MPLv2.0':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'GNUv3':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case `None`:
      return '';
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  const licenseBadge = renderLicenseBadge(license);
  const licneseLink = renderLicenseLink(license);
  return `
## License
This project is licensed under the ${license} license. A complete version of the ${license} license is available at ${license.link}.
Any contribution made to this project will be icense under the ${license}.
 `;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //generate license section
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
${licenseBadge} 

## Table of COntents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}


## Tests
${data.test}

##Questions
If you have any questions, feel free to contact me at ${data.email}./n
You can also find me on GitHub at [${data.githubUsername}](${data.githubLink}/n

${licenseSection}
`;
}

export default generateMarkdown;
