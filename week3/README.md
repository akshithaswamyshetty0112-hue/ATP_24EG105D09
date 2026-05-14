# Week 3 – Backend API Development

This project contains the backend application developed during Week 3 using Node.js, Express.js, MongoDB, and Mongoose. The main objective of this project was to understand backend development concepts and build REST APIs for handling user and product data.

The project follows a structured approach using separate routes, controllers, and models to maintain clean and organized code.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- ES Modules

## Project Structure

```text
week3/
├── APIs/
│   ├── ProductAPI.js
│   └── UserAPI.js
├── controllers/
│   ├── productController.js
│   └── userController.js
├── models/
│   ├── productModel.js
│   └── userModel.js
├── .env
├── package.json
├── package-lock.json
├── product-req.http
├── server.js
├── temp
└── user-req.http
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB running locally

## Installation

Install all required dependencies:

```bash
npm install
```

## Environment Configuration

Create or update the `.env` file and add the following values:

```text
PORT=3000
DB_URL=mongodb://localhost:27017/ATP
SECRET_KEY=abcdefghijklmnopqrstuvwxyz
```

## Running the Application

Start MongoDB first.

Run the server using:

```bash
node server.js
```

The application will run at:

```text
http://localhost:3000
```

If everything runs successfully, the terminal displays:

```text
database connected successfully
server listening to port 3000...
```

## API Endpoints

### User APIs

Base Route:

```text
/user-api
```

| Method | Route | Purpose |
|----------|--------|----------|
| GET | `/users` | Fetch all users |
| GET | `/users/:id` | Fetch user by ID |
| POST | `/users` | Add new user |
| PUT | `/users` | Update user details |
| DELETE | `/users/:id` | Remove user |

Example User Data:

```json
{
  "id": 1,
  "name": "akshitha",
  "age": 20
}
```

---

### Product APIs

Base Route:

```text
/product-api
```

| Method | Route | Purpose |
|----------|--------|----------|
| GET | `/products` | Fetch all products |
| POST | `/products` | Add a new product |
| PUT | `/products` | Update product details |
| DELETE | `/products/:id` | Remove product |

Example Product Data:

```json
{
  "productId": 1,
  "productName": "Laptop",
  "brand": "HP",
  "price": 45000
}
```

## Testing APIs

The project includes request files for testing APIs directly inside VS Code:

- `user-req.http`
- `product-req.http`

These files can be executed using the REST Client extension.

## Concepts Practiced

This project helped in understanding:

- REST API development
- Express routing
- Controllers and modular structure
- MongoDB database integration
- Mongoose schemas and models
- CRUD operations
- Environment variables
- Backend project organization

## Learning Outcomes

By building this project, I learned:

- How client requests are handled in backend applications
- How to structure APIs using routes and controllers
- How to connect Node.js applications with MongoDB
- How CRUD operations work using Mongoose
- How backend applications are organized in real projects

## Note

- ES Modules are used (`"type":"module"`).
- Data is stored in MongoDB collections.
- APIs are organized separately for better maintainability.
- Request testing files are included for easier API testing.

This week focused on understanding backend fundamentals and implementing REST APIs using Node.js and MongoDB.