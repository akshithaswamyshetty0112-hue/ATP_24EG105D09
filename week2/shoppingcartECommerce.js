/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.*/

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
 //   1. Use filter() to get only inStock products
 let r1=cart.filter((cartObj)=>{
    if(cartObj.inStock===true)
        return cartObj})
console.log(r1)
  //  2. Use map() to create a new array with:  { name, totalPrice }
  let r2=cart.map((cartObj)=>{ 
    let totalPrice=cartObj.price*cartObj.quantity
    return cartObj.name+totalPrice})
console.log(r2)
    //3. Use reduce() to calculate grand total cart value
    let r3=cart.reduce((acc,cartObj)=>(cartObj.price*cartObj.quantity)+acc,0)
console.log(r3)
//  4. Use find() to get details of "Mouse"
let r4=cart.find((cartObj)=>cartObj.name==="Mouse")
console.log(r4)
//    5. Use findIndex() to find the position of "Keyboard"
let r5=cart.findIndex((cartObj)=>cartObj.name==="Keyboard")
console.log(r5)










