function explode(x){
const sum=x.reduce((acc,ell)=>{
  if(typeof ell==='number'){
     return ell+acc
  }
  return 0+acc
},0)
  const res=[]
if(sum===0){
  return 'Void!'
}

  for (let i = 0; i < sum; i++) {
    res.push(x)
  }



  return res
}


console.log(explode([9, 3]))// [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3]))// [['a', 3],['a', 3],['a', 3]]