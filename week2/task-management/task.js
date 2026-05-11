



 //ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js'
                    let tasks=[]
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                          if(!validateTitle()&&!validatePriority()&&!validateDueDate()){
        return "invalid task"
    }
    tasks.push({title,priority,dueDate})
    return true
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    //function completeTask(taskId) {
                      // Find task and mark as complete
                     // if(!taskId){
                      //  return false
                     // }
                      //else{
                        //return true
                      //}
                    //}
                 export {addTask,getAllTasks}
                  // Export functions

