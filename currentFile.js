function sumDigits(number) {
    let str=Math.abs(number).toString().split('')
 let sum=0
    str.map(el=>{
        sum += Number(el)
    })
    return sum
}

console.log(sumDigits(827))