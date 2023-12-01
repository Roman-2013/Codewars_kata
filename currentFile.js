const findShort = (s) => {
    let res = 100
    s.split(' ').forEach(el => {
        el.length < res
            ? res = el.length
            : ''
    })
    return res
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))//3