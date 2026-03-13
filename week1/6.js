function array(marks){
    let sum=0
    for(let index=0;index<marks.length;index++){
        sum=sum+marks[index]
    }
    return sum
}
let marks=[1,2,3,4]
let result=array(marks)
console.log(result)