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
marks=[8,9,7,3]
let result=search(marks,8)
console.log(result)