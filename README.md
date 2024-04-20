# API for Personal Finance management

## Project Description

This is an API project with backend build with ExpressJS/NodeJS and database on MySql to manage companies verification and retrieval.

## Table of Contents

- [Features](#features)
- [Development Features](#development-features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Routes](#api-routes)
- [API Response](#api-response)
- [Backend](#backend)
- [Database](#database)

## Features

- Fetch two companies at a time which are not fetched previously
- Verify a company email address

## Development Features

- Custom Error handling is done for errors
- Eslint is used for linting and for finding errors with standard rules
- Prettier is used for code formatting
- Lint-staged is used for running prettier and eslint on all changed files in each commit
- Husky is used to provide git hooks for pre-commit and pre-push

## Technologies Used

- Express.js
- Postgresql
- Node.js
- Sequelize

## Prerequisites

- Node.js [Installation Guide](https://nodejs.org/)

## Installation

1. Clone the repository:

git clone <REPO_URL>

2. Navigate to the project directory:

cd ATG-POC1

3. Install dependencies for the server:

npm install

4. Set up environment variables (a .env file is needed for this expressJS server, instructions provided in `Configuration`).

5. Start the server:

In root directory:

- To start the server using Nodemon **npm run dev**
- To start the server without Nodemon **npm start**

## Configuration

- Create a `.env` file in the root directory of the project with the content mentioned in the **.env.example** file:
- Fill the environment variables values

FOR EXAMPLE:

```.env
PORT=

# application deployment status
APP_ENV=

#database credentials
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
```

> To setup the database locally, then make a connection in you local mysql server and fill the details in the .env

## API Routes

### Company

- **GET /api/company**

  - Content-Type: _none_
  - Description: To fetch two new companies (not fetched previously).

- **PUT /api/company**
  - Content-Type: _none_
  - Description: To verify a company's email.

## Backend

- Router are created for authentication.
- Controllers are created for handling routes of these routers.

## Database

MySql is used as a primary database for this project along with Sequelize as an ORM.
