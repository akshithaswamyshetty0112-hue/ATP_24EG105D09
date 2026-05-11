



 //ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js'
                    let tasks=[]
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                          if(!validateTitle(title)&&!validatePriority(priority)&&!validateDueDate(dueDate)){
        return "invalid task"
    }
    tasks.push({title,priority,dueDate})
    return true
                      // Validate using imported functions
                      function validateTask(title, priority, dueDate) {
                        return validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate);
                      }   
                      
                      // If valid, add to tasks array
                      if (validateTask(title, priority, dueDate)) { 
                        tasks.push({ id: Date.now(), title, priority, dueDate, completed: false });
                        return true;
                      } else {
                        return false;
                      } 
                      // Return success/error message
                      return validateTask(title, priority, dueDate) ? "Task added successfully" : "Invalid task details";                     

                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      const task = tasks.find(t => t.id === taskId);        
                      if (task) {
                        task.completed = true;
                        return true;
                      } else {
                        return false;
                      }
                    }
                    
                //export functions 
                 export {addTask,getAllTasks,completeTask}
                 
                
