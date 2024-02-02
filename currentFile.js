const binaryArrayToNumber = arr => {
const sting=+arr.join('')
    console.log(sting)
    let i=0
    console.log( +i.toString(2))
 while (sting !== +i.toString(2)){
    debugger
    i+=1
  }
return i
};

console.log(binaryArrayToNumber([0,0,1,0]))//2