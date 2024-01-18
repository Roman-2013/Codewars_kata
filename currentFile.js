function beginning(xs) {
    const arr = xs.split('')
    let res = [+arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (Number(res.join(''))+1 === +arr.splice(i, i)) {
            return res
        }else {
            res.push(arr[i+1])
        }
    }
    console.log(arr.splice(1, 1))

}

console.log(beginning('123456789101112131415'))//1
console.log(beginning('1112'))//1