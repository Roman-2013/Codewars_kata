function findUniq(arr) {
    let currentValue = {}
    for (let i = 0; i < arr.length; i++) {
        if (!currentValue[arr[i]]) {
            currentValue[arr[i]] = 1
            console.log('dsf')
        }else {
            currentValue[arr[i]] +=1
        }

    }
    for (let key in currentValue ){
        if(currentValue[key]===1){
            return +key
        }
    }
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))//1