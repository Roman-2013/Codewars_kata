function evaporator(content, evap_per_day, threshold){
    let day=0
    const ProcentGlobal=(content*threshold)/100
    const fun=(content,evap_per_day)=>{
        if(content<ProcentGlobal){
            return
        }
            day++
        let procent=(content*evap_per_day)/100
        let newContent=content-procent
        return fun(newContent,evap_per_day)
    }
    fun(content,evap_per_day)
    return day
}

console.log(evaporator(10, 10, 5))//29

