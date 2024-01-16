function sortArray(array) {
    console.log(array)
const arrOdd=[]
const arrEven=array
    for (let i = 0; i <array.length ; i++) {
        if(array[i]%2!==0){
            arrOdd.push(array[i])
           array[i]=null
        }
    }
    console.log(arrEven)
const sortArrOdd=arrOdd.sort((a,b)=>a-b)
return arrEven.map((el,i,array)=>{
   if(el===null){
       return el=sortArrOdd.shift()
   }else {
       return  el
   }
})
}

console.log(sortArray([0, 1, 2, 3, 4, 9, 8, 7, 6, 5]))//[1, 3, 2, 8, 5, 4]