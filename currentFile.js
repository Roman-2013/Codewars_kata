function spinAround(turns) {
   console.log(turns)
  let res=[]
   let count360=0

   for (let i = 0; i <turns.length ; i++) {

      if (turns[i] === 'left') {
         count360 += -1
         if ( count360 % 5 === 0) {
            res.push(count360)
         }

      } else {
         count360 += 1
         if ( count360 % 5 === 0) {
            res.push(count360)
         }

      }
   }
   return  res
}


//console.log(spinAround(['left', 'right', 'left', 'right']))//0
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']))