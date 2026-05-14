# Task Management

This folder contains a small modular task management application written in JavaScript.

## Files

### app.js
Main application file.

It imports task functions, adds sample tasks, gets all tasks, and prints them to the console.

### task.js
Task operations module.

It includes functions for:
- Adding a new task
- Getting all tasks
- Marking a task as completed

The task module uses validation functions before adding task data.

### validator.js
Input validation module.

It includes functions for:
- Validating task title
- Validating task priority
- Validating due date

## How to Run

Use Node.js from this folder:

node app.js


If ES module imports are not enabled, add a `package.json` file with:
{
  "type": "module"
}
