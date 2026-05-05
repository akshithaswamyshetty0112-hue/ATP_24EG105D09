//function
function array(marks){
    let sum=0
    //logic
    for(let index=0;index<marks.length;index++){
        sum=sum+marks[index]
    }
    //returning result
    return sum
}
//initialization of array
let marks=[1,2,3,4]
//passing array as parameter to function and storing the result in a variable
let result=array(marks)
//printing result
console.log(result)
