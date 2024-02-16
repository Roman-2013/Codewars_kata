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

//#11
function additionWithoutCarrying(a,b) {
    const numberA = a.toString().split('').reverse()
    const numberB = b.toString().split('').reverse()
    let res = []
    let arr=[]
    let length = Math.max(numberA.length, numberB.length)
    for (let i = 0; i <= length - 1; i++) {
        res.push((Number(numberA[i]) || 0) + (Number(numberB[i]) || 0))
    }
    for (let key of res){
        // if(key.toString().length>0){
        arr.push( key.toString()[1]|| key.toString()[0])
    }
    return +arr.reverse().join('')

}

//#12
function sortArray(array) {
    const arrOdd=[]
    const arrEven=array
    for (let i = 0; i <array.length ; i++) {
        if(array[i]%2!==0){
            arrOdd.push(array[i])
            array[i]=null
        }
    }
    const sortArrOdd=arrOdd.sort((a,b)=>a-b)
    return arrEven.map((el,i,array)=>{
        if(el===null){
            return el=sortArrOdd.shift()
        }else {
            return  el
        }
    })
}

//#13
function order(words){
    const arr=words.split(' ')
    const res=[]
    for (let i = 1; i <=arr.length ; i++) {
        arr.map(el=>{
            if(el.includes(`${i}`)){
                res.push(el)
            }
        })
    }
    return res.join(' ')

}

//#14
function getBestWord(points, words) {
    const obj = {}

    for (let i = 65; i < 91; i++) {
        obj[String.fromCharCode(i)] = points[i - 65]
    }

    const res=[]

    for (let i = 0; i <words.length ; i++) {
        const value=words[i].split('').reduce((acc, el) => obj[el] + acc, 0)
        res.push({[words[i]]:[value,words[i].length]})
    }

    let value=res[0]
    console.log(value[Object.keys(value)][0])
    for(let key in res){
        for(let key2 in res[key]){

            if(res[key][key2][0]===value[Object.keys(value)][0] && res[key][key2][1]< value[Object.keys(value)][1]){
                value=res[key]
            }else if(res[key][key2][0]>value[Object.keys(value)][0]){
                value=res[key]
            }
            //console.log(res[key][key2][0])
        }
    }
    return words.indexOf(Object.keys(value).join())

}


//#15
function partsSums(ls) {
    const res=[]
    let sum=0
    let count=ls.length-1
    ls.map((el,i,array)=>{
        sum+=array[count-i]
        res.push(sum)
    })
    res.unshift(0)
    return res.reverse()
}

//#16
function isPangram(string){
    const lowerCaseString=string.toLowerCase()
    const res={}
    const array=lowerCaseString.replace(/[^\a-zA-Z]/g,'').split('')

    array.map(el=>{
        res[el.charCodeAt()-96]=1

    })
    return Object.keys(res).length===26
}


//#17
function twoSum(numbers, target) {
    for (let i = 0; i <numbers.length ; i++) {
        let currentNumber=numbers[i]
        for (let j = i+1; j <numbers.length ; j++) {
            let secondValue=numbers[j]
            if(currentNumber+secondValue===target){
                return [i,j]
            }
        }
    }
}

//#18
const  duplicateEncode=(word)=>{
    const array=word.toLowerCase().split('')
    return array.map((el,index,array)=>{
        if(array.indexOf(el)===array.lastIndexOf(el)){
            return '('
        }else{
            return ')'
        }
    }).join('')
}

//#19
function alphabetPosition(text) {
    const arrNumber = text.toLowerCase().match(/[a-z]/g)
    return arrNumber?.map(el => el.charCodeAt() - 96).join(' ') || ''
}


//#20
function dataReverse(data) {
    let res = []
    let eightLeter = []
    for (let i = 0; i <= data.length; i++) {
        if (eightLeter.length === 8) {
            res=[...eightLeter,...res]
            eightLeter = []
        }
        eightLeter.push(data[i])
    }
    return res
}

//#21
function encode(string) {
    const obj = {a: 1, e: 2, i: 3, o: 4, u: 5}
    const array = string.split('')
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            array[i] = obj[array[i]]
        }
    }
    return array.join('')
}
function decode(string) {
    const obj = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
    const array = string.split('')
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]])
            array[i] = obj[array[i]]
    }
    return array.join('')
}

