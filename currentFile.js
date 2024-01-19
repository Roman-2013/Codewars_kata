function getBestWord(points, words) {
    const obj = {}

    for (let i = 65; i < 91; i++) {
        obj[String.fromCharCode(i)] = points[i - 65]
    }

    const res=[]

    for (let i = 0; i <words.length ; i++) {
        const value=words[i].split('').reduce((acc, el) => obj[el] + acc, 0)
        res.push({[words[i]]:[value,words[i].length]})
    }

    let value=res[0]
    console.log(value[Object.keys(value)][0])
for(let key in res){
    for(let key2 in res[key]){

       if(res[key][key2][0]===value[Object.keys(value)][0] && res[key][key2][1]< value[Object.keys(value)][1]){
           value=res[key]
       }else if(res[key][key2][0]>value[Object.keys(value)][0]){
           value=res[key]
       }
        //console.log(res[key][key2][0])
    }
}
    return words.indexOf(Object.keys(value).join())

}

var points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10];
var simpleWords = ['WHO', 'IS', 'THE', 'BEST', 'OF', 'US'];
var rndmWords = ['NOQ', 'TXAY', 'S', 'OM', 'ESFT', 'CJUKQ', 'QL', 'QO', 'ASTK', 'Y'];
var firstBestWord = ['JGPCWVWFW', 'JXHNKBJJG'];
console.log(getBestWord(points, simpleWords))//0
// console.log(getBestWord(points, rndmWords))//5
// console.log(getBestWord(points, firstBestWord))//5
console.log(getBestWord(points, [ 'AAA', 'B', 'A', 'E', 'I' ]))//5