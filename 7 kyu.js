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