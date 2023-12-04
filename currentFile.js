const isSquare = (n) => {
    for (let i = 0; i*i <= n; i++) {
        if(i*i===n)return true
    }
    return  false
}


console.log(isSquare(25))//true