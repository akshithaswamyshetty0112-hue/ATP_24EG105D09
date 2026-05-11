
//i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      
    function validateTitle(title){
    if(!title){
        return "title required"
    }
    if(title.length<=3){
        return "minimum 3 characters required"
    }
    return true
}
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        const priorities=['LOW','MEDIUM','HIGH']
                        let result=priorities.includes(priority)
                        if(result===false){
                            return "invalid priority"
                        }
                        return true
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        let dueDate=new Date('2024-10-20')//yyyy-mm--dd
                        let today=new Date()
                        if(dueDate>today){
                            return "invalid duedate"
                        }
                        return true
                      }
                      export{validateTitle,validateDueDate,validatePriority}