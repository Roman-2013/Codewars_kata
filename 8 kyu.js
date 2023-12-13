//#1
const sumOfDifferences = (arr) => {
    if (!arr.length || arr.length === 1) {
        return 0
    }
    arr.sort((a, b) => b - a)
    let result = 0
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] - arr[i + 1]
    }
    return result
}

//#2
const calculateAge = (yearOfBirth, year) => {
    if (yearOfBirth < year) {
        if (year - yearOfBirth === 1) {
            return `You are ${year - yearOfBirth} year old.`
        }
        return `You are ${year - yearOfBirth} years old.`
    }
    if (yearOfBirth > year) {
        if (yearOfBirth - year === 1) {
            return `You will be born in ${yearOfBirth - year} year.`
        }
        return `You will be born in ${yearOfBirth - year} years.`
    }
    return 'You were born this very year!'
}

//#3
const main = (verb, noun) => {
    return verb + noun
}

//#4
function powersOfTwo(n) {
    let array = []
    for (let i = 0; i <= n; i++) {
        array.push(2 ** i)
    }
    return array
}

//5
const defineSuit = (card) => {
    const array = card.split('')
    return array[card.length - 1] === '♠'
        ? 'spades'
        : array[card.length - 1] === '♦'
            ? 'diamonds'
            : array[card.length - 1] === '♥'
                ? 'hearts'
                : 'clubs'
}

//#6
const multipleOfIndex = (array) => {
    let Array = []
    if (array[0] === 0) {
        Array.push(0)
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            Array.push(array[i])
        }
    }
    return Array
}

//#7
function distinct(a) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        let temp = a[i]
        if (!arr.includes(temp)) {
            arr.push(temp)
        }
    }
    return arr
}

//#8
const sakuraFall = (v) => v <= 0 ? 0 : 400 / v

//#9
const mergeArrays = (arr1, arr2) => {
    let res = []
    if (arr1.length === 0 & arr2.length === 0) return []
    let concatArray = [...arr1, ...arr2].sort((a, b) => a - b)
    for (let i = 0; i < concatArray.length; i++) {
        if (!res.includes(concatArray[i])) {
            res.push(concatArray[i])
        }
    }
    return res
}

//#10
function toBinary(n) {
    let res = ''
    while (n > 0) {
        res=n%2+res
        n = Math.floor(n / 2)
    }
    return +res
}

//#11
const  typeValidation=(variable, type) =>typeof variable === type


//#12
const  getSize=(a, b, c)=>[2*(a*b+a*c+c*b),a*b*c]

//#13
const  seatsInTheater=(nCols, nRows, col, row)=> (nCols-(col-1))*(nRows-row)

//#14
const  include=(arr, item)=>arr.includes(item)

//#15
function whoseMove(lastPlayer, win) {
    if(lastPlayer==="white"){
        return win
            ? "white"
            : "black"
    }
    if(lastPlayer==="black"){
        return win
            ? "black"
            : "white"
    }

}

//#16
const  array=(string) =>string.split(',').length<=2
    ? null
    : string.split(',').filter((el,index,array)=>index !==0 & index !==array.length-1).join(' ')


//#17
function ensureQuestion(s) {
    let array = s.split('')
    if (array[array.length - 1] === '?') {
        return s
    } else {
        array.push('?')
        return array.join('')
    }
}

//#18
function spEng(sentence){
    return sentence.toLowerCase().indexOf('english')!==-1
}


//#19
const betterThanAverage=(classPoints, yourPoints)=> classPoints.reduce((acc,value)=>acc+value,0)/classPoints.length<yourPoints

//#20
const  chromosomeCheck=(sperm)=> sperm.indexOf('Y')===-1
    ?"Congratulations! You're going to have a daughter."
    :"Congratulations! You're going to have a son."

//#21
function validateHello(greetings) {
    if (greetings.toLowerCase().includes('hello')) {
        return true
    } else if (greetings.toLowerCase().includes('ciao')) {
        return true
    } else if (greetings.toLowerCase().includes('salut')) {
        return true
    } else if (greetings.toLowerCase().includes('hallo')) {
        return true
    } else if (greetings.toLowerCase().includes('hola')) {
        return true
    } else if (greetings.toLowerCase().includes('ahoj')) {
        return true
    } else if (greetings.toLowerCase().includes('czesc')) {
        return true
    } else {
        return false
    }
}

//#22
const  hexToDec=(hex)=>parseInt(hex,16)