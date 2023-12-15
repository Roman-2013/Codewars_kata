const multiplicationTable=(size)=> {
const resArray=[]
    for (let i = 1; i <=size ; i++) {
        let arr=[]
        resArray.push(arr)
        for (let j = 1; j <=size ; j++) {
            arr.push(j*i)

        }
    }
return resArray
}


console.log(multiplicationTable(3))