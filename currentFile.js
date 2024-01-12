function solve(s) {
const array=s.split(/[aeiou]/g)
    let res={}

    for (let i = 0; i <array.length ; i++) {
      if (array[i].length===0){
          res[i]=0
      }else if(array[i].length===1){
          res[i]= array[i].charCodeAt()-96
      }else {
          res[i]= array[i].split('').reduce((acc,el)=>acc+el.charCodeAt()-96,0)
      }
        }
    let arr=[]
    for(let el in res){
        arr.push(res[el])
    }
    return Math.max(...arr)

}


console.log(solve('zobbcorre'))//26

//97
//122
