![image](https://github.com/WebDevMullins/average-joes/assets/6474546/998b6043-1cfe-4069-847c-5880ae3c62cc)

# Average Joe's 2.0 &middot; [![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WebDevMullins/svg-logo-maker/blob/main/LICENSE)

Welcome to Average Joe's 2.0, the virtual home of our dedicated gym for fitness enthusiasts and beginners alike.  
This project is designed as a full-stack application for Group Project 2, featuring user authentication, membership management, and member profiles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributors](#contributors)
- [License](#license)

## Features

| | |
| --- | --- |
| *User Authentication*| Secure login and registration system with encrypted passwords and session management |
| *Membership Selection* | Users can choose between different membership tiers with varying benefits |
| *Responsive Design* | A polished UI that's adaptable to a variety of devices and screen sizes |
| *Dark Mode* | Dark version switcher for Tailwind CSS and Flowbite using JavaScript |

### Technologies Used

| Technology | Description |
| --- | --- |
|<img src="https://img.shields.io/badge/Bcrypt%20-blue" alt=".ENV Badge"> | A library to help you hash passwords |
| <img src="https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat" alt=".ENV Badge"> | Load enviroment variables from a .env file |
| <img src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat" alt="Express Badge"> | Fast, unopinionated, minimalist web framework for Node.js |
| <img src="https://img.shields.io/badge/Handlebars.js-000?logo=handlebarsdotjs&logoColor=fff&style=flat" alt="Handlebars.js Badge"> | A Handlebars view engine for Express which doesn't suck |
| <img src="https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat" alt="Heroku Badge"> | A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud |
| <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat" alt="MySQL Badge"> | MySQL client for Node.js with focus on performance |
| <img src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge"> | Server-side programming |
| <img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat" alt="Sequelize Badge"> | Easy-to-use and promise-based Node.js ORM tool | 
| <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS Badge"> | A utility-first CSS framework for rapidly building custom user interfaces |


## Installation

### Clone repo to destinaton.

```bash
git clone https://github.com/WebDevMullins/average-joes.git
```

### Install dependencies using:

```bash
npm install
```

Rename the `.env.EXAMPLE` file to `.env`. Update with your credentials.

```bash
DB_NAME=databasename #replace with the database name
DB_USER=yourusername # replace with your user name
DB_PASSWORD=yourpassword # replace with your password
SESSION_SECRET='' # secret string
```

### Databse Setup

Log in to MySQL, and use the following command to set up database:

```bash
source db/schema.sql
```

In a terminal, run the following command to seed the database:

```bash
npm run seed
```

## Usage

From the root directory, run the following to start the application:

```bash
npm run start
```

## Demo

### [Deployed Site on Heroku](https://wdm-average-joes-88b9a3337bf4.herokuapp.com)

### [Walkthrough Video](https://drive.google.com/file/d/1Bv-VhVX7c2o0p6TJycRB0Yxbhc3c00GO/view)
![image](https://github.com/WebDevMullins/average-joes/assets/6474546/79cd695b-7a62-444f-b749-8bb0d7be6a43)

# Contributors

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.  
Any contributions you make are greatly appreciated.

<a href="https://github.com/webdevmullins/average-joes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=webdevmullins/average-joes" />
</a>

## License

Average Joe's 2.0 is [MIT licensed](./LICENSE).
