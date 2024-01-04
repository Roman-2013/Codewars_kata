function nbDig(n, d) {
let res=0
    for (let i = 0; i <=n ; i++) {
let number=i**2
        number.toString().split('').map(el=>Number(el)===d?res+=1:'')
    }
return res

}

console.log(nbDig(5750, 0))//4700
