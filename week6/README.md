# Employee Management MERN App

This project is a full-stack employee management application built with MongoDB, Express, React, Node.js, and Vite. It contains a backend API for employee CRUD operations and a frontend React app for creating, listing, viewing, editing, and deleting employees.

## Project Structure


week6/
├── Employeeb/          # Backend Express + MongoDB API
│   ├── APIs/
│   │   └── EmployeeAPI.js
│   ├── models/
│   │   └── EmployeeModel.js
│   ├── req.http
│   ├── server.js
│   └── package.json
├── Employeef/          # Frontend React + Vite app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── store/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md


## Features

- Create a new employee
- View all employees
- View employee details
- Edit employee information
- Delete employees
- MongoDB database integration with Mongoose
- React Router based page navigation
- React Hook Form based forms
- Zustand and Context API examples for counter state
- Configurable frontend API URL
- CORS support for local and deployed frontend origins

## Tech Stack

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

### Frontend

- React
- Vite
- React Router
- React Hook Form
- Axios
- Tailwind CSS
- Zustand

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB Atlas connection string or a local MongoDB database

## Backend Setup

Go to the backend folder:


cd Employeeb
Install dependencies:


npm install


Create a `.env` file inside `Employeeb`:

env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173


`MONGODB_URL` is also supported by the backend as an alternative to `MONGODB_URI`.

Start the backend:

npm nodemon server.js


The backend will run at:

http://localhost:4000


## Frontend Setup

Open a new terminal and go to the frontend folder:

bash
cd Employeef


Install dependencies:


npm install


Optional: create a `.env` file inside `Employeef` if you want to override the default backend URL:

env
VITE_API_URL=http://localhost:4000


Start the frontend:

bash
npm run dev


The frontend will run at:


http://localhost:5173


## API Endpoints

Base URL:
http://localhost:4000/emp-api


### Create Employee

http
POST /employees
Content-Type: application/json


Request body:

json
{
  "name": "Ravi",
  "email": "ravi@mail.com",
  "mobile": 9999999999,
  "designation": "Developer",
  "companyName": "CTS"
}


### Get All Employees

http
GET /employees


### Update Employee

http
PUT /employees/:id
Content-Type: application/json


Request body:

json
{
  "name": "Ravi Kumar",
  "email": "ravi@mail.com",
  "mobile": 9999999999,
  "designation": "Senior Developer",
  "companyName": "CTS"
}

### Delete Employee

http
DELETE /employees/:id


You can also test these endpoints from:


Employeeb/req.http


## Employee Data Model

Each employee contains:

- `name`: required string, minimum 4 characters
- `email`: required unique string
- `mobile`: required number
- `designation`: required string
- `companyName`: required string
- `createdAt`: generated automatically
- `updatedAt`: generated automatically

## Frontend Routes

- '/' - Home page
- '/create-emp' - Create employee form
- '/list' - Employee list
- '/employee' - Selected employee details
- '/edit - Edit selected employee

## Available Scripts

### Backend

The backend currently does not define a custom start script. Run it with:

npm nodemon server.js

### Frontend


npm run dev




Previews the production build locally.

## Running the Complete Project

1. Start MongoDB or prepare your MongoDB Atlas URI.
2. Start the backend from `Employeeb`.
3. Start the frontend from `Employeef`.
4. Open `http://localhost:5173` in the browser.
5. Use the navigation bar to create and manage employees.

## Notes

- Keep backend secrets such as `MONGODB_URI` inside `.env`.
- Do not commit `.env` files to version control.
- The frontend uses `VITE_API_URL` when available, otherwise it defaults to `http://localhost:4000`.
- The backend allows CORS from `http://localhost:5173` by default.
