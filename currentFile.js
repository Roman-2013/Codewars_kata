function barista(coffees) {
    const sort = coffees.sort((a, b) => a - b)
    let accum = 0
    for (let i = 1; i <= coffees.length; i++) {
        if (i === 1) {
            accum += sort[0]
        } else {
            accum += sort.slice(0, i).reduce((el, acc) => el + acc, 0) + (2 * (i - 1))
        }
    }
    return accum
}


console.log(barista([5, 4, 3, 2, 1]))//55
//2,3,4
