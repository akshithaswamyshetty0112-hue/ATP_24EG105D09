This project is a simple React application built using Vite. It displays a collection of product cards using data stored in a local product array.

Project Files
index.html – Main HTML file for the Vite application.
main.jsx – Entry point that renders the React app.
App.jsx – Contains the product data and renders multiple Product components using the map() function.
Product.jsx – Displays individual product details such as title, price, and description.
App.css and index.css – Files used for styling the application.
vite.config.js – Configuration file for Vite.
t – Placeholder file.
Running the Project

Install the required dependencies first:

npm install

Start the development server using:

npm run dev

After running the command, open the local Vite URL displayed in the terminal to view the application in the browser.

Important Note

In App.jsx, the Product component is imported from the ./components/Product.jsx path.
However, if Product.jsx is currently placed in the project root folder, you should either:

move Product.jsx into a components folder, or
update the import path in App.jsx

Otherwise, the project may show module import errors while running.