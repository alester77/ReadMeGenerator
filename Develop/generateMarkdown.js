// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `![badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license == 'Apache') {
    return `![badge](https://img.shields.io/badge/license-APACHE-orange)`;
  } else if (license == 'GNU') {
    return `![badge](https://img.shields.io/badge/license-GNU-blueviolet)`;
  } else {
    return '';
  }};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `[Information about MIT License](https://choosealicense.com/licenses/mit/)`;
  } else if (license == 'Apache') {
    return `[Information about the Apache License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license == 'GNU') {
    return `[Information about the GNU License](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  ## License
  Project under a ${license} license.  
  ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Description](#description)  
  -[Installation](#installation)  
  -[Usage](#usage)  
  -[License](#license)  
  -[Credits](#contributing)  
  -[Test](#test)  
  -[Contact Me with Questions](#questions)  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage} 
  ${renderLicenseLink(data.license)}

  To add a screenshot: 
  // ![alt text] (assets/images/screenshot.png)
  
  ## Credits
  ${data.contribution}

  ### Questions? 
  Github: ${data.gitHub}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
