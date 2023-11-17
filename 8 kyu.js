//#1
const  sumOfDifferences=(arr)=> {
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
const  main =(verb, noun)=>{
    return verb + noun
}
//#4
function powersOfTwo(n){
    let array=[]
    for (let i = 0; i <= n; i++) {
        array.push(2**i)
    }
    return array
}

//5
const   defineSuit=(card)=> {
    const array=card.split('')
    return array[card.length - 1] === '♠'
        ? 'spades'
        : array[card.length - 1] === '♦'
            ? 'diamonds'
            : array[card.length - 1] === '♥'
                ? 'hearts'
                : 'clubs'
}
