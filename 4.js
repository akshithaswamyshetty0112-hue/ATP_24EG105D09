let marks=[90,70,80,60,50]
let a=marks[0]
for(let index=0;index<marks.length;index++){
    if(a>marks[index]){
        a=marks[index]
    }
}
console.log("smallest number is",a)