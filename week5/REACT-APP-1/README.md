# React Product App

A simple React application built with Vite. The app displays a responsive grid of product cards using sample product data and a reusable `Product` component.

## Features

- React component-based UI
- Product card listing
- Responsive grid layout
- Vite development server
- ESLint configuration

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Project Structure


REACT-APP-1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Product.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md

## Getting Started

Install dependencies:


npm install


Start the development server:

npm run dev


Build the project for production:

npm run build

## Main Files

- `src/main.jsx` renders the React app.
- `src/App.jsx` stores sample product data and maps it into product cards.
- `src/components/Product.jsx` displays each product's title, price, and description.

## Notes

This project uses local sample data inside `App.jsx`. You can replace it later with data from an API or external JSON file.
