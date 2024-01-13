var capitals = function (word) {
   const arr=word.split('')
    const res=[]
     arr.map((el,i)=>{
        if( el===el.toUpperCase()) res.push( i)
    })
    return res
};

console.log(capitals('CodEWaRs'))// [0,3,4,6]