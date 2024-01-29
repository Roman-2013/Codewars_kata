const  solution=(start, finish,jumping=0)=> {

debugger

  if(start===finish){
    return jumping
  }

  if(start+3<=finish){

   return solution(start+3,finish,jumping+1)
  }else {
    return solution(start+1,finish,jumping+1)
  }
}


console.log(solution(1,5))//2