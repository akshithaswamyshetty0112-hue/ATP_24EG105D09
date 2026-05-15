# Week 4 – React Routing Application

This project contains a React application developed during Week 4 using React, Vite, and React Router. The main objective of this project was to understand client-side routing and learn how navigation works in single-page applications (SPA).

The application includes multiple pages such as Home, Register, Login, and a Technologies section with nested routes. Through this project, I practiced routing concepts, component organization, and building reusable layouts in React.

## Technologies Used

- React
- Vite
- React Router
- Tailwind CSS
- ESLint

## Project Structure

react-app-3/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Java.jsx
│   │   ├── Login.jsx
│   │   ├── Nodejs.jsx
│   │   ├── Register.jsx
│   │   ├── RootLayout.jsx
│   │   ├── Technologies.jsx
│   │   └── Vue.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js


## Features

- Single Page Application built using React and Vite
- Navigation using React Router
- Shared layout with reusable Header and Footer components
- Nested routes for technology pages
- Component-based architecture
- Tailwind CSS styling
- ESLint support for code quality

## Application Routes

| Route | Description |
|---------|-------------|
| '/' | Home page |
| '/register' | User registration page |
| '/login' | User login page |
| '/technologies' | Technologies section |
| '/technologies/java' | Java page |
| '/technologies/nodejs' | Node.js page |
| '/technologies/vue' | Vue page |

By default, the Technologies page redirects to the Java section.

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js
- npm

Check installed versions:

node -v
npm -v
## Installation

Install project dependencies using:

npm install


## Running the Project

Start the development server:


npm run dev
After starting the server, open the URL displayed in the terminal:


http://localhost:5173


## Available Commands

| Command | Purpose |
|-----------|----------|
| npm run dev | Starts development server |

## Concepts Practiced

This project helped in understanding:

- React component structure
- React Router navigation
- Nested routes
- Layout components
- Single Page Applications (SPA)
- Component reusability
- Project organization
- Tailwind utility styling

## Learning Outcomes

By completing this project, I learned:

- How client-side routing works in React
- How nested routes are implemented
- How reusable layouts simplify application structure
- How React applications are organized
- How multiple components work together in a single application

## Note

- Routing configuration is handled inside App.jsx
- Shared layout is managed through RootLayout.jsx
- Navigation links are created in Header.jsx
- Nested technology pages are rendered inside Technologies.jsx

This week focused on understanding React fundamentals and implementing navigation using React Router in a single-page application.