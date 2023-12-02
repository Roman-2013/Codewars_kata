function largestPairSum (numbers) {
    return numbers.sort((a,b)=>b-a)[0]+numbers[1]
}

console.log(largestPairSum([10,14,2,23,19]))//42

function largestPairSum (numbers) {
    let sort=numbers.sort((a,b)=>b-a)
    return sort[0]+sort[1]
}