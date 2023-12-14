const  findOdd=(A)=> {
    const obj = {}
    for (let i = 0; i < A.length; i++) {
        if (!obj[A[i]]) {
            obj[A[i]] = 1
        } else {
            obj[A[i]] += 1
        }
    }
    for (let key in obj) {
        if (obj[key] % 2 !== 0)
            return +key
    }
}


console.log(findOdd([7]))//2