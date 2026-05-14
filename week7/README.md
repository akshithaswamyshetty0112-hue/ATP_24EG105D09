# MERN Blog Application

This folder contains a full-stack blog application built with a Node.js/Express backend and a React/Vite frontend.

## Folder Structure

```text
week7/
|-- blogappb/    # Backend API server
|-- blogappf/    # Frontend React application
`-- README.md    # Complete project documentation
```

## Features

- User, author, and admin roles
- Register, login, logout, and cookie-based authentication
- Protected routes based on role
- Authors can create, edit, view, and soft-delete their own articles
- Users can read active articles and add comments
- Admin can view dashboard counts and block or unblock users/authors
- Profile image upload using Cloudinary
- MongoDB data storage with Mongoose

## Tech Stack

Backend:

- Node.js
- Express
- MongoDB and Mongoose
- JWT authentication
- bcryptjs password hashing
- multer and Cloudinary for profile images

Frontend:

- React
- Vite
- React Router
- Zustand
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS

## Backend Setup

Go to the backend folder:

```bash
cd blogappb
npm install
```

Create a `.env` file inside `blogappb/`.

Example:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

`SECRET_KEY` can also be provided as `JWT_SECRET`.

Cloudinary variables are required only when uploading profile images.

Start the backend:

```bash
npm start
```

The backend listens on the `PORT` value from `.env`. If no port is provided, it defaults to `4000`.

## Frontend Setup

Go to the frontend folder:

```bash
cd blogappf
npm install
```

Create a `.env` file inside `blogappf/`.

Example:

```env
VITE_API_URL=http://localhost:5000
```

If `VITE_API_URL` is missing, the frontend defaults to:

```text
http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Vite usually runs at:

```text
http://localhost:5173
```

Other frontend commands:

```bash
npm run build
npm run preview
npm run lint
```

## Run The Full App

Open two terminals from the `week7` folder.

Terminal 1:

```bash
cd blogappb
npm start
```

Terminal 2:

```bash
cd blogappf
npm run dev
```

The backend must be running before login, registration, and protected frontend pages can work.

## Backend Project Structure

```text
blogappb/
|-- APIs/
|   |-- AdminAPI.js
|   |-- AuthorAPI.js
|   |-- CommonAPI.js
|   `-- UserAPI.js
|-- config/
|   |-- cloudinary.js
|   |-- cloudinaryUpload.js
|   |-- env.js
|   `-- multer.js
|-- middlewares/
|   `-- VerifyToken.js
|-- models/
|   |-- ArticleModel.js
|   `-- UserModel.js
|-- server.js
|-- package.json
`-- .env
```

## Frontend Project Structure

```text
blogappf/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- config/
|   |   `-- api.js
|   |-- store/
|   |   `-- authStore.js
|   |-- styles/
|   |-- App.jsx
|   |-- main.jsx
|   |-- App.css
|   `-- index.css
|-- index.html
|-- vite.config.js
|-- package.json
`-- .env
```

## API Routes

### Auth Routes

Base path: `/auth`

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/users` | Register a user, author, or admin |
| `POST` | `/login` | Login and create auth cookie |
| `GET` | `/logout` | Clear auth cookie |
| `GET` | `/check-auth` | Check current login status |
| `PUT` | `/password` | Change password for logged-in account |

### User Routes

Base path: `/user-api`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/articles` | Get active articles |
| `GET` | `/article/:id` | Get one active article |
| `PUT` | `/articles` | Add a comment to an article |

### Author Routes

Base path: `/author-api`

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/article` | Publish an article |
| `GET` | `/articles` | Get logged-in author's articles |
| `PUT` | `/articles` | Edit an author's article |
| `PATCH` | `/articles` | Soft-delete or restore an article |

### Admin Routes

Base path: `/admin-api`

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/dashboard` | Get admin dashboard counts |
| `GET` | `/users` | Get users and authors |
| `PATCH` | `/users/:userId/status` | Block or unblock an account |

## Frontend Routes

| Path | Description |
| --- | --- |
| `/` | Home page |
| `/register` | Register page |
| `/login` | Login page |
| `/user-profile` | User-only profile |
| `/author-profile` | Author-only profile |
| `/author-profile/articles` | Author article list |
| `/author-profile/write-article` | Create article |
| `/admin-profile` | Admin-only profile |
| `/article/:id` | Article details |
| `/edit-article` | Edit article |
| `/unauthorized` | Unauthorized access page |

## Data Models

User:

- `firstName`
- `lastName`
- `email`
- `password`
- `role`: `USER`, `AUTHOR`, or `ADMIN`
- `profileImageUrl`
- `isUserActive`

Article:

- `author`
- `title`
- `category`
- `content`
- `comments`
- `isArticleActive`

## Request Samples

The backend folder includes REST client files:

- `admin-req.http`
- `author-req.http`
- `user-req.http`

These can be opened in VS Code with a REST client extension to test the API.

## Notes

- Do not commit real database URLs, JWT secrets, or Cloudinary credentials.
- Only one admin account can be created.
- Blocked users cannot log in.
- Cookies are configured differently for development and production.
- CORS allows localhost during development and configured frontend origins.
- The frontend and backend URLs must match the values in both `.env` files.
- Environment variables for Vite must start with `VITE_`.
