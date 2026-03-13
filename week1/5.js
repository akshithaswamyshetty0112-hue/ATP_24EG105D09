function bigNumber(a,b,c){
    let num=0
    if(a>b&&a>c){
        num=a
    }
    else if(b>a&&b>c){
        num=b
    }
    else{
        num=c
    }
    return num
}
let result=bigNumber(10,15,12)
console.log(result)