//function to search in a array
function search(marks,b){
    for(let index=0;index<marks.length;index++){
        if(b==marks[index]){
            return index
        }
        else{
            return "notfound"
        }
    }
}
//initialization of array
marks=[8,9,7,3]
//passing array and element to search as parameters and storing the result in a variable
let result=search(marks,8)
//printing the result
console.log(result)
