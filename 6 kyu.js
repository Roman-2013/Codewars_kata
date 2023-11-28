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

//#2
const  likes=(names)=> {
    if(names.length===0) return `no one likes this`
    if(names.length===1) return `${names[0]} likes this`
    if(names.length===2) return `${names[0]} and ${names[1]} like this`
    if(names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    if(names.length>3) return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
}
