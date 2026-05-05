//initialization of array
let marks=[90,70,80,60,50]
//logic for finding smallest in a array
let a=marks[0]
for(let index=0;index<marks.length;index++){
    if(a>marks[index]){
        a=marks[index]
    }
}
//printing the result
console.log("smallest number is",a)
