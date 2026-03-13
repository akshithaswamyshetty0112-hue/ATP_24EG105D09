/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/

const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
    let userCopy={...user}
    userCopy.name="Akshitha"
    userCopy.preferences.theme="light"
    console.log(user)
    console.log(userCopy)



    //the changes are name and theme ===== when we change name in copied object the name is changed only in copied object whereas
    //when we change the preferences.theme in copied user it also chnages in original user also since it is a shallow copy it cannot copy the nested objects
    //both have same for nested objects

