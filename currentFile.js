function distinct(a) {
    let arr=[]
    for (let i = 0; i < a.length; i++) {
        let temp=a[i]
        if(!arr.includes(temp)){
            arr.push(temp)
        }
    }
    return arr
}

console.log(distinct([1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]))//[1,2,3]

// if (!object[temp]) {
//     object.push( temp)
// }
