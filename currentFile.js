function calculator(a,b,sign){

  if(typeof a!=='number' || typeof b!=='number' || !/[+\/*-]/g.test(sign)){
    return "unknown value"
  }

  return `${a}${sign}${b}`
}


console.log(calculator(1,2,"-"))//3
console.log(calculator(6,"h","*"))//"unknown value"
console.log(calculator(6,2,"$"))//"unknown value"