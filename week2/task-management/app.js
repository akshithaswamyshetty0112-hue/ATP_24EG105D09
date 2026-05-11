import { addTask,getAllTasks } from './task.js';
addTask("eating","high",'2024-12-12')
addTask("sleeping","high",'2024-3-3')
const tasks=getAllTasks()
console.log(tasks)