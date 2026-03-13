import { addTask, getAllTasks, completeTask } from './task.js';

console.log("=== Todo App ===");

// Add tasks
console.log(addTask("Finish Assignment", "high", "2026-05-01"));
console.log(addTask("Buy groceries", "medium", "2026-04-01"));
console.log(addTask("Exercise", "low", "2026-04-10"));

// Display tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// Complete a task
console.log("\nCompleting task 1");
console.log(completeTask(1));

// Display tasks again
console.log("\nUpdated Tasks:");
console.log(getAllTasks());