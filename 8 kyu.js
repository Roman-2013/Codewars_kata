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

//#23
function apple(x){
    return Number (x)**2>1000
        ?'It\'s hotter than the sun!!'
        :'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//#24
function strCount(str, letter){
    let res=str.split('').filter((el)=>el===letter)
    return res.length
}

//#25
function replace(s){
    //coding and coding....
    return s.replace(/[aeiou]/gi,'!')


}

//#26
function peopleWithAgeDrink(old) {
    const name=old
    switch (true){
        case old<14 :
            return "drink toddy"
        case old<18:
            return "drink coke"
        case old<21:
            return "drink beer"
        default:
            return "drink whisky"
    }
};

//#27
function toCsvText(array) {
    return array.join('\n')
}

//#28
function rainAmount(mm){
    if (mm < 40) {
        return "You need to give your plant "+`${40-mm}`+"mm of water"
    }
    else {
        return "Your plant has had more than enough water for today!"
    }
}

//#29
// Sum Numbers
function sum (numbers) {
    return numbers.reduce((acc,ell)=>ell+acc,0)

};

//#30
function pillars(numPill, dist, width) {
    if(numPill<2){
        return 0
    }else  if(numPill===2){
        return dist*100
    }else {
        return dist*(numPill-1)*100+width*(numPill-2)
    }
}

//#31
function all( arr, fun ) {
    console.log(arr)
    let res=true
    for (let i = 0; i <arr.length ; i++) {
        if(!fun(arr[i])){
            res=false
        }else{
            res=true
        }
    }
    return  res
}

//#32
function howManyDalmatians(number){
    const dogs= ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    const  respond = number <= 10 ? dogs[0] :number <= 50 ? dogs[1] : number === 101  ?dogs[3] : dogs[2]
    return respond
}

//#33
function numberToString(num) {
    return num.toString()
}

//#34
const  expressionMatter=(a, b, c)=> Math.max((a*b*c),(a+b+c),(a*(b+c)),((a+b)*c))

//#35
function calculator(a,b,sign){
    if(typeof a!=='number' || typeof b!=='number' || !/[+\/*-]/g.test(sign)){
        return "unknown value"
    }
    return eval(`${a}${sign}${b}`)
}
