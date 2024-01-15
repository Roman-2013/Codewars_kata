function additionWithoutCarrying(a,b) {
    const numberA = a.toString().split('').reverse()
    const numberB = b.toString().split('').reverse()

    let res = []
    let arr=[]
    let length = Math.max(numberA.length, numberB.length)
    for (let i = 0; i <= length - 1; i++) {
        res.push((Number(numberA[i]) || 0) + (Number(numberB[i]) || 0))
    }
    // const res2 = res.map(el => el.toString().split())
    //
    //
    for (let key of res){
        // if(key.toString().length>0){
        arr.push( key.toString()[1]|| key.toString()[0])
        }


return +arr.reverse().join('')

}


console.log(additionWithoutCarrying(99999,0))//9999
console.log(additionWithoutCarrying(999,999))//8880