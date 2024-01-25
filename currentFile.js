function partsSums(ls) {
const res=[]
let sum=0
let count=ls.length-1
  ls.map((el,i,array)=>{
    sum+=array[count-i]
   res.push(sum)
  })
  res.unshift(0)
  return res.reverse()
}


console.log(partsSums([0, 1, 3, 6, 10],[]))// [20, 20, 19, 16, 10, 0]
//console.log(partsSums([1, 2, 3, 4, 5, 6],[]))// [21, 20, 18, 15, 11, 6, 0]



// function partsSums(ls) {
//
//   const fu=(arr)=>{
//     return arr.reduce((acc,el)=>acc+el,0)
//   }
//
//   let res=[]
//
//   let count=0
//
//   do{
//     if(count===0){
//       ls.splice(0,0)
//       res.push(fu(ls))
//       count++
//     }else{
//       ls.splice(0,count)
//       res.push(fu(ls))
//     }
//
//   } while (ls.length)
//
//   return res
// }




// function partsSums(ls,res) {
//
//   if(ls.length===0){
//     res.push(0)
//     return res
//   }
//   const fu=(arr)=>{
//     return arr.reduce((acc,el)=>acc+el,0)
//   }
//   res.push(fu(ls))
//   ls.splice(0,1)
//   return partsSums(ls,res)
// }
