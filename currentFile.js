String.prototype.toJadenCase = function () {
    let array=this.split(' ')
    let a= array.map((el)=>[el[0].toUpperCase(), el.slice(1)])
return a.map(el=>el.join('')).join(' ')


}


let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase())//, "How Can Mirrors Be Real If Our Eyes Aren't Real");

