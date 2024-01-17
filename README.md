# Off-The-Beaten-Path

Let us steer you in the right direction! is your go-to off-roading assistance application. Whether you're stuck in mud, sand, or rocky terrain, simply submit a request detailing your situation and required tools, and our dedicated community is ready to provide the help you need, ensuring you navigate the trails with ease.


## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Questions](#questions)



## Description
Whether you find yourself mired in mud, navigating challenging rocky terrain, or facing any off-road predicament, our platform simplifies the process of getting help.

To use the app, adventurers can submit a detailed assistance request outlining their specific situation. The user-friendly form allows them to describe how their vehicle is stuck and specify the tools or assistance required for recovery. This information ensures that the rescuer arriving at the scene is well-prepared and equipped to tackle the unique challenges of each situation.

Conversely, experienced off-road enthusiasts looking to lend a hand can browse through incoming assistance requests and choose the ones that align with their skills and equipment. This two-way interaction fosters a supportive community of off-roading enthusiasts who share a passion for exploration and are ready to assist fellow adventurers in times of need.

Our platform prioritizes safety, efficiency, and camaraderie, making off-road excursions more enjoyable and worry-free. Whether you're a seasoned off-road expert or a newcomer seeking assistance, "Off The Beaten Path!" is the bridge that connects off-road enthusiasts and ensures everyone can explore with confidence. Let the off-road community have your back when the path gets tough!



### Screenshots
**Screenshots of application:**
![example-1](./example-goes-here)
![example-2](./example-goes-here)



## Technologies Used
This collaborative full-stack application is powered by Node.js and Express.js, creating a robust RESTful API. Handlebars.js serves as the template engine for seamless rendering of dynamic content. MySQL, along with the Sequelize ORM, is utilized for efficient database management, supporting both GET and POST routes for retrieving and adding new data.
In addition to the core technologies, we wanted users to incorporate their emails to enhance the functionality of our application. This innovative addition will help each user have their own account based on their email.
The project follows the Model-View-Controller (MVC) paradigm, ensuring a well-organized folder structure. Authentication is implemented through express-session and cookies, prioritizing user security. API keys and sensitive information are safeguarded using environment variables for enhanced privacy.
Deployment is achieved seamlessly using Heroku, with the application hosted live along with its data. The user interface is polished, responsive, and interactive, providing an engaging experience for users.
The project adheres to high-quality coding standards, encompassing file structure, naming conventions, and best practices for class/id naming, indentation, and quality comments.



## Installation
1. Clone the repo: `git clone https://github.com/Conartisttt/Off-Road-Unstucker`
2. Open in VS Code. If you do not have VS Code, [install it](https://code.visualstudio.com/).
3. Using the terminal, ensure that Node.js v16 is installed. If not, download and install it from the [official Node.js website](https://nodejs.org/).
4. Once Node.js v16 is installed, in the terminal, run the command `npm init -y` to initialize and create a `package.json` where project files will be stored.
5. Next, use the terminal to run the command `npm install` to install the dependencies associated with this application. Developers may need to install additional libraries directly from the command line. To do so, use the commands:
   - `npm install [name of the new library, package, or technology]` to install any additional libraries introduced as new additions to the project. In this project these would be:
     - `npm install bcrypt@^5.0.0`
     - `npm install connect-session-sequelize@^7.0.4`
     - `npm install dotenv@^8.2.0`
     - `npm install express@^4.17.1`
     - `npm install express-handlebars@^5.2.0`
     - `npm install express-session@^1.17.1`
     - `npm install mysql2@^2.2.5`
     - `npm install sequelize@^6.3.5`
6. To run the application, within the terminal, type the command `node server.js`.


## Features
**Off-Road Assistance Requests:** Users can submit assistance requests detailing their off-road predicaments, specifying the type of help and tools needed.
**Collaborative Support:** Experienced off-road enthusiasts can browse and take on assistance requests that align with their skills, fostering a supportive community.
**Dynamic Form:** The application provides a user-friendly form for submitting requests, allowing users to describe their stuck situation and required assistance.
**Advanced Technologies:** Leveraging Node.js, Express.js, and Handlebars.js, the application seamlessly combines a robust back end with an intuitive front end.
**Database Management:** MySQL and Sequelize ORM are employed to handle the database, ensuring efficient storage and retrieval of user requests.
**Authentication Security:** User authentication is implemented using express-session and cookies, prioritizing the protection of user information.
**Innovative Addition:** The project incorporates [name of the new library, package, or technology], enhancing functionality and introducing a unique element to the off-road assistance experience.
**Responsive and Polished UI:** The user interface is designed to be responsive, providing an optimal viewing experience across various devices.
**Heroku Deployment:** The application is seamlessly deployed using Heroku, ensuring accessibility along with its data.



## Usage Information
To run this application, use the command line to navigate to the directory of the application, in the command line you can install all dependencies (`npm i`), then type the command `node server.js`. The server will be running, in your browser you can type in 'http://localhost:3001' to reach the site and are free to interact.



## Contribution Guidelines
The collaboration between Conner, Gisela, and Kiki has made a magical site that is open to collaboration. If you choose to do so, open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.


## License
This application has no License.


## Questions
Have additional questions? [Contact Gisela through her GitHub account](https://github.com/PotionSela). [Contact Conner through his GitHub](https://github.com/Conartisttt). [Contact Kiki through her GitHub](https://github.com/AngelCatLatte)