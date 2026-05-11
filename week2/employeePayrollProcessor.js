/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
  //  1. filter() employees from IT department
  let r1=employees.filter((empObj)=>{
    if(empObj.department==="IT"){
        return empObj
    }
  })
  console.log(r1)
    //2. map() to add:
    //      netSalary = salary + 10% bonus
    let r2=employees.map((empObj)=>{
    let netSalary=empObj.salary+0.1*empObj.salary;
    return netSalary
})
console.log(r2)
    //3. reduce() to calculate total salary payout
     let r3=employees.reduce((acc,empObj)=>acc+empObj.salary,0)
    console.log(r3)
    //4. find() employee with salary 30000
    let r4=employees.find((empObj)=>empObj.salary===30000)
    console.log(r4)
    //5. findIndex() of employee "Neha"
    let r5=employees.findIndex((empObj)=>empObj.name==="Neha")
    console.log(r5)





