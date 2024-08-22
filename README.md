# Social-network-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Credits](#credits)

- [Features](#features)

- [Usage-Information](#usage-information)

- [Suggested-Future-Development](#suggested-future-development)

- [Contribution-Guidelines](#contribution-guidelines)

- [Test-Instructions](#test-instructions)

- [License](#license)

- [Questions](#questions)

## Description

This application was created as the start of a full stack social network application using a MongoDB database, Express.js routing, and the Mongoose ODM. It sets up the initial CRUD API routes for said application which allow users to be created, searched for, updated, and deleted. Users can also share their thoughts, react to friends' thoughts, create a friend list, and subsequently delete thoughts, reactions, friends, and themselves as a user. Although this application is still at the ground floor of its full potential, the MongoDB database and API middleware routing is an integral first step in leaning about the potential of MongoDB and the Mongoose ODM.

Some of the main challenges I encountered when creating this application were that although MongoDB is much more fluid and loose than Sequel (SQL) when it comes to how data is queried and added to the database, I did notice that the errors were much more elusive creating troubleshooting much more difficult. Also finding the most efficient ways to delete data on cascade and join tables was a challenge. Since MongoDB seems to require less code than SQL, there was a bit of a learning curve since there is a lot happening under the hood that I still have yet to fully understand.

With the exception of the challenges faced, I did learn yet another powerful tool within the MERN stack to add to my knowledge of full stack development. With this application I hope to continue its development adding a full-front end UI with React, in turn creating a full stack application strictly through the use of MERN.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1pioIILUrqjeEg_HnsBBjwchSox0L-EU7/view

## Screenshots

![Screenshot1-week-18-challenge](https://github.com/rmessett15/Social-Network-API/assets/120127903/7336192b-6af2-4a8f-8a87-06212c8d46ad)

![Screenshot2-week-18-challenge](https://github.com/rmessett15/Social-Network-API/assets/120127903/93900a36-ecb1-4d4e-8d65-4549416d5493)

## Technologies Used

This application is powered by Node.js (v16.19.1), Express.js (v.14.18.2), JavaScript, MongoDB, and Mongoose (ODM). It utilizes the node package manager (npm) dependencies express (v4.18.2), and mongoose (v7.2.2). Nodemon (v2.0.22) was utilized as a devDependency allowing the server to refresh when edits were made to application. Jest (v.29.5.0) is installed as a devDependency for future unit testing. MongoDB Compass acted as the interactive shell used to visually see the database. Also, the Insomnia application, was utilized to test the functionality of routes within the program.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/Social-Network-API.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:

   - Command for express will be npm i express@4.18.2
   - Command for mongoose will be npm i mongoose
   - Command for nodemon will be npm i nodemon
   - Command for jest will be npm i jest

6. Next, you will want to make sure you have access to a MongoDB account and MongoDB Compass, these will allow you to interact with the database and visually confirm what changes are being made in the database. (Link for MongoDB & MongoDB Compass download -> https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

7. Once all dependencies are installed, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run dev to keep the server spun up between code edits.

8. From there, you can utilize applications such as Insomnia to test the functionality of the API routes within the program and make edits to the code base (Link to install Insomnia -> https://docs.insomnia.rest/insomnia/install).

## Credits

The general structuring of routes and file organization followed much of the week-18 mini challenge. I worked with a tutor, Mila Hose who also helped me establish the general formatting of my controller files and my route files. Also Elizabeth Olsavsky, another student in the cohort helped me debug my createThought route, allowing me to add each thought to the thought array associated with each user.

## Features

Features of this application include the ability to create users/thoughts, find all users/thoughts, find a single user/single thought, update user/thought information, and delete a user/thought. The ability to add reactions to particular thoughts, and friends to users is also a notable feature -> when a thought, reaction, or friend is added to the database, it will update within the user object accordingly.

## Usage Information

As of now the usage of this application can be conducted through spinning up the server with npm run start or nodemon with npm run dev, then heading over to an application like Insomnia or Postman and testing different API end points. For further information on starting up the server, MongoDB Compass and MongoDB installation navigate to the Installation section above.

## Suggested Future Development

- Add additional seed data with the node package manager faker-js
- Continue development of additional routes adding likes or up-votes
- Create a front-end UI that will enable users to interact with the application in a cohesive and intuitive way
- Include unit testing with Jest

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

NOTICE: Contributor Covenant is released under the Creative Commons Attribution 4.0 International Public License, which requires that attribution be included.

## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>
