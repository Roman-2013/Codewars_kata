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


//#7
function findUniq(arr) {
    let currentValue = {}
    for (let i = 0; i < arr.length; i++) {
        if (!currentValue[arr[i]]) {
            currentValue[arr[i]] = 1
            console.log('dsf')
        }else {
            currentValue[arr[i]] +=1
        }

    }
    for (let key in currentValue ){
        if(currentValue[key]===1){
            return +key
        }
    }
}

//#8
function countSmileys(arr) {
    if(arr.length===0){
        return 0
    }
    let counter=0
    arr.map(el=>{
        if(el===':D'||el===':~)'||el===';~D'||el===':)'||el===';-D'||el===':-D'||el===';)'||el===';~)'||el===':-)'||el===';D'||el===';-)'||el===':~D'){
            counter+=1
        }
    })
    return  counter
}

//#9
function duplicateCount(text){
    const textLowerCaseArray=text.toLowerCase().split('')
    let res={}
    for (let i = 0; i <textLowerCaseArray.length ; i++) {
        if(res[textLowerCaseArray[i]]){
            res[textLowerCaseArray[i]]+=1
        }else {
            res[textLowerCaseArray[i]]=1
        }
    }
    let count=0
    for (let el in res){
        if(res[el]>1){
            count+=1
        }
    }
    return count
}

//#10
function solve(s) {
    const array=s.split(/[aeiou]/g)
    let res={}

    for (let i = 0; i <array.length ; i++) {
        if (array[i].length===0){
            res[i]=0
        }else if(array[i].length===1){
            res[i]= array[i].charCodeAt()-96
        }else {
            res[i]= array[i].split('').reduce((acc,el)=>acc+el.charCodeAt()-96,0)
        }
    }
    let arr=[]
    for(let el in res){
        arr.push(res[el])
    }
    return Math.max(...arr)

}