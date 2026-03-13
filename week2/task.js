import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// Add new task
export function addTask(title, priority, dueDate) {

  if (!validateTitle(title)) {
    return "Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Due date must be in future";
  }

  const task = {
    id: tasks.length + 1,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);

  return "Task added successfully";
}

// Get all tasks
export function getAllTasks() {
  return tasks;
}

// Complete task
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;

  return "Task marked as completed";
}