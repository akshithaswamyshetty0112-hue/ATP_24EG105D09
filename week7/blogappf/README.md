# Blog App Frontend

React frontend for the blog application.

## Features

- Home page and article listing
- Register and login screens
- Role-based protected pages
- User profile with article reading and comments
- Author profile with article writing, editing, and management
- Admin profile with dashboard and account status controls
- Authentication state stored with Zustand
- API requests with Axios
- Toast notifications with React Hot Toast

## Tech Stack

- React
- Vite
- React Router
- Zustand
- Axios
- React Hook Form
- React Hot Toast
- Tailwind CSS

## Setup

Install dependencies:


npm install


Create a `.env` file in `blogappf/`.

Example:

env
VITE_API_URL=http://localhost:5000


Set `VITE_API_URL` to the backend server URL. If it is missing, the app defaults to:


http://localhost:5000

## Run

Start the development server:
npm run dev


Vite usually starts at:
http://localhost:5173

## Project Structure


blogappf/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   │   └── api.js
│   ├── store/
│   │   └── authStore.js
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .env


## Main Routes

| Path | Description |
| --- | --- |
| '/' | Home page |
| '/register' | Register page |
| '/login' | Login page |
| '/user-profile' | User-only profile |
| '/author-profile' | Author-only profile |
| '/author-profile/articles' | Author article list |
| '/author-profile/write-article' | Create article |
| '/admin-profile' | Admin-only profile |
| '/article/:id' | Article details |
| '/edit-article' | Edit article |
| '/unauthorized' | Unauthorized access page |

## Backend Connection

The API base URL is configured in:
src/config/api.js

The frontend sends requests with credentials so the backend auth cookie can be used. Make sure the backend CORS settings include the frontend URL.

## Notes

- Start the backend before using login, registration, or protected pages
- The frontend and backend URLs must match the values in both `.env` files
- Environment variables for Vite must start with `VITE_`
