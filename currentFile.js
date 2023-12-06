const  sortItOut=(array)=>{
    const even=[]
    const odd=[]
    for (let i = 0; i < array.length; i++) {
        if(Math.floor(array[i])%2===0){
            even.push(array[i])
        }else {
            odd.push(array[i])
        }
    }
return [...odd.sort((a,b)=>a-b),...even.sort((a,b)=>b-a)]
}

console.log(sortItOut([ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6]))//1.1, 3.3, 5.5, 6.6, 4.4, 2.2