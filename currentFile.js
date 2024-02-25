function sumMul(n,m){
    if(n==m || m<n)return "INVALID"
let res=0
debugger
    for (let i = n; i < m; i++) {
        if(i%n===0)res+=i
    }
return res

}

console.log(sumMul(2,9))