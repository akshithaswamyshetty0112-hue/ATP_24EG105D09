/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//Tasks:
 //   1. filter() all credit transactions
let r1=transactions.filter((transObj)=>{
    if(transObj.type==="credit"){
       return transObj
    }
  })
  console.log(r1)
 //   2. map() to extract only transaction amounts
 let r2=transactions.map((transObj)=>transObj.amount)
    console.log(r2)
 //   3. reduce() to calculate final account balance
 let r3=transactions.reduce((accu,transObj)=>{
    
    if(transObj.type==="credit"){
      accu=accu+transObj.amount
    }else if(transObj.type==="debit"){
      accu=accu-transObj.amount
    }
    return accu
  },0
  )
  console.log(r3)
  //  4. find() the first debit transaction
  let r4=transactions.find((transObj)=>transObj.type==="debit")
  console.log(r4)
   // 5. findIndex() of transaction with amount 10000
   let r25=transactions.findIndex((transObj)=>transObj.amount===10000)
  console.log(r25)