//#1
const  getMiddle=(s)=> {
    let number=Math.ceil(s.length/2)
    if (s.length % 2 === 0) {
        return s.split('').splice(number-1,2).join('')
    } else {
        return s.split('').splice(number-1,1).join('')
    }
}
//#2
const  calculateYears=(principal, interest, tax, desired)=> {
    let Y = 0
    if(principal ===desired) return 0

    for (let i = 0; principal <= desired; i++) {
        let dohod = principal * interest
        let procent = dohod * tax
        principal += (dohod - procent)
        Y += 1
    }
    return Y
}

//#3
const  openOrSenior=(data)=>data.map((el)=> el[0]>=55 & el[1]>7? el='Senior': el='Open')

//#4
const solve = (s) => {
    let countToLower = 0
    let countToUpper = 0
    for (let i = 0; i < s.length; i++) {
        debugger
        if (s[i] === s[i].toUpperCase()) countToUpper++
        if (s[i] === s[i].toLowerCase()) countToLower++
    }
    return countToLower >= countToUpper
        ? s.toLowerCase()
        : s.toUpperCase()
}

//#5
const  filter_list=(l)=>  l.filter(el=>typeof el==='number')

//#6
const findShort = (s) => {
    let res = 100
    s.split(' ').forEach(el => {
        el.length < res
            ? res = el.length
            : ''
    })
    return res
}

//#7
function largestPairSum (numbers) {
    return numbers.sort((a,b)=>b-a)[0]+numbers[1]
}

//#8
function sumDigits(number) {
    let str=Math.abs(number).toString().split('')
    let sum=0
    str.map(el=>{
        sum += Number(el)
    })
    return sum
}

//#9
const isSquare = (n) => {
    for (let i = 0; i*i <= n; i++) {
        if(i*i===n)return true
    }
    return  false
}
