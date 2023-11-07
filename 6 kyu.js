//#1
const solution = (string) => {
    if (string === '') {
        return ''
    }
    let Array=[]
    for (let i = 0; i <string.length ; i++) {
        Array.push(string[i]===string[i].toUpperCase()?' '+string[i] :string[i])
    }
    return Array.join('')
}