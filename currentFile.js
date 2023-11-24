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

console.log(solve('CODe'))//"CODE"