function remove (string) {
    let revers=string.split()
    for (let i = revers.length; i < revers.length; i--) {
        if(revers[i]==='!'){
            revers.shift()
        }
    }
    return revers
}

console.log(remove("Hi!!!"))//'Hi'