function reduce(fraction) {

let arr1=[]
let arr2=[]
    for (let i = 1; i <=Math.max(...fraction) ; i++) {

        if(fraction[0]%i===0)arr1.push(i)
        if(fraction[1]%i===0)arr2.push(i)
    }
    const array=[...arr2,...arr1].sort((a,b)=>b-a)
    const number=  array.find(el=>fraction[0]%el===0&&fraction[1]%el===0)
    return [fraction[0]/number,fraction[1]/number]
    }


console.log(reduce([1,1]))


