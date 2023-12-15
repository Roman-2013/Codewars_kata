//#1
const solution = (string) => {
    if (string === '') {
        return ''
    }
    let Array=[]
    for (let i = 0; i <string.length ; i++) {
        Array.push(string[i]===string[i].toUpperCase()?' '+string[i] :string[i])
    }
    return Array.join('')
}

//#2
const  likes=(names)=> {
    if(names.length===0) return `no one likes this`
    if(names.length===1) return `${names[0]} likes this`
    if(names.length===2) return `${names[0]} and ${names[1]} like this`
    if(names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    if(names.length>3) return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
}

//#3
const arrayDiff = (a, b) => {
    let res = [...a]
    for (let i = 0; i < b.length; i++) {
        res = res.filter(el => el !== b[i])
    }
    return res
}
//#4
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

//#5
const deleteNth = (arr, n) => {
    const resArray = []
    for (let i = 0; i < arr.length; i++) {
        let temp = resArray.filter(el => el === arr[i])
        if (temp.length < n) {
            resArray.push(arr[i])
        }
    }
    return resArray
}


//#6
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
