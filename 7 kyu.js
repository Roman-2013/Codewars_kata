//#1
const  getMiddle=(s)=> {
    let number=Math.ceil(s.length/2)
    if (s.length % 2 === 0) {
        return s.split('').splice(number-1,2).join('')
    } else {
        return s.split('').splice(number-1,1).join('')
    }
}
//#2
const  calculateYears=(principal, interest, tax, desired)=> {
    let Y = 0
    if(principal ===desired) return 0

    for (let i = 0; principal <= desired; i++) {
        let dohod = principal * interest
        let procent = dohod * tax
        principal += (dohod - procent)
        Y += 1
    }
    return Y
}

//#3
const  openOrSenior=(data)=>data.map((el)=> el[0]>=55 & el[1]>7? el='Senior': el='Open')

//#4
const solve = (s) => {
    let countToLower = 0
    let countToUpper = 0
    for (let i = 0; i < s.length; i++) {
        debugger
        if (s[i] === s[i].toUpperCase()) countToUpper++
        if (s[i] === s[i].toLowerCase()) countToLower++
    }
    return countToLower >= countToUpper
        ? s.toLowerCase()
        : s.toUpperCase()
}

//#5
const  filter_list=(l)=>  l.filter(el=>typeof el==='number')

//#6
const findShort = (s) => {
    let res = 100
    s.split(' ').forEach(el => {
        el.length < res
            ? res = el.length
            : ''
    })
    return res
}

//#7
function largestPairSum (numbers) {
    return numbers.sort((a,b)=>b-a)[0]+numbers[1]
}

//#8
function sumDigits(number) {
    let str=Math.abs(number).toString().split('')
    let sum=0
    str.map(el=>{
        sum += Number(el)
    })
    return sum
}

//#9
const isSquare = (n) => {
    for (let i = 0; i*i <= n; i++) {
        if(i*i===n)return true
    }
    return  false
}


//#10
const  min=(arr, toReturn) =>toReturn === 'value'? Math.min(...arr):arr.findIndex(el =>el=== Math.min(...arr))

//#11
const predictAge=(...res)=>Math.floor( Math.sqrt([...res].reduce((accum,current)=> accum+(current*current),0))/2)

//#12
function repeats(arr) {
    let obj={}
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]===1){
            delete obj[arr[i]]
        }else{
            obj[arr[i]]=1
        }
    }
    let sum=0
    for (let key in obj){
        sum+=Number(key)
    }
    return sum
}

//#13
const  sortItOut=(array)=>{
    const even=[]
    const odd=[]
    for (let i = 0; i < array.length; i++) {
        if(Math.floor(array[i])%2===0){
            even.push(array[i])
        }else {
            odd.push(array[i])
        }
    }
    return [...odd.sort((a,b)=>a-b),...even.sort((a,b)=>b-a)]
}

//#14
const  decode=(string)=> {
    const dec={4:6,6:4,5:0,0:5,1:9,9:1,2:8,8:2,3:7,7:3}
    return string.split('').map(el=>el=dec[el]).join('')
}

//#15
function rowSumOddNumbers(n) {
    let obj={}
    for (let i = 1; i <=n ; i++) {

        obj[i]=[]
    }
    let temp=0
    for (let i = 1; n > obj[n].length ; i++) {
        for (let j = temp; i > obj[i].length; j++) {
            temp+=1
            if(j%2!==0){

                obj[i].push(j)
            }
        }
    }
    return obj[n].reduce((acc,val)=>acc+val,0)
}

//#16
const wordsToMarks=(string)=>string.split('').reduce((acc,value)=>acc+value.charCodeAt(0)-96,0)

//#17
function removeSmallest(a) {
    let number=a.indexOf(Math.min(...a))
    return a.filter((el,index)=>index!==number)
}

//#18
const  minValue=(values)=>{
    let sortArray= values.sort((a,b)=>a-b)
    let resArray=[]
    for (let i = 0; i < sortArray.length ; i++) {
        if(sortArray[i] !==sortArray[i+1]){
            resArray.push(sortArray[i])
        }
    }
    return +resArray.join('')

}

//#19
const  isLeapYear=(year)=> {
    if(year%100===0){
        if (year%400===0){
            return true
        }
        return false
    }
    if(year%4===0) return true
    return false
}
//#20
const  longest=(s1, s2)=> {
    let str=[]
    const array=[...s1.split(''),...s2.split('')]
    for (let i = 0; i < array.length; i++) {
        if(str.includes(array[i])!==true){
            str.push(array[i])
        }
    }
    return str.sort().join('')
}

//#21
const  reverseMiddle=(array)=>array.length%2===0
    ?array.slice(array.length/2-1,array.length/2+1).reverse()
    :  array.slice(array.length/2-1,array.length/2+2).reverse()


//#22
function factorial(n){
    if(n<=1){
        return 1
    }
    return factorial(n-1)*n
}

//#23
const  candies=(kids)=> {
    if (kids.length <= 1) return -1
    const max = Math.max(...kids)
    return kids.reduce((acc,value)=>acc+(max-value),0)
}

//#24
const  isTriangle=(a,b,c)=> {
    return  a <= 0 || b <= 0 || c <= 0
        ? false
        : !(a + b <= c || b + c <= a || c + a <= b)
}

//#25
String.prototype.toJadenCase = function () {
    let array=this.split(' ')
    let a= array.map((el)=>[el[0].toUpperCase(), el.slice(1)])
    return a.map(el=>el.join('')).join(' ')
}

//#26
function getDivisorsCnt(n){
    let result=0
    for (let i = 1; i <=Math.sqrt(n) ; i++) {
        debugger
        if(n%i===0){
            result+=(i===n/i)?1:2
        }
    }
    return result
}

//#27
function nbDig(n, d) {
    let res=0
    for (let i = 0; i <=n ; i++) {
        let number=i**2
        number.toString().split('').map(el=>Number(el)===d?res+=1:'')
    }
    return res

}

//#28
function barista(coffees) {
    const sort = coffees.sort((a, b) => a - b)
    let accum = 0
    for (let i = 1; i <= coffees.length; i++) {
        if (i === 1) {
            accum += sort[0]
        } else {
            accum += sort.slice(0, i).reduce((el, acc) => el + acc, 0) + (2 * (i - 1))
        }
    }
    return accum
}

//#29
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

//#30
const dontGiveMeFive = (start, end) => {
    let count = 0
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            count++
        }
    }
    return count
}

//#31
const alphabetWar=(fight)=>{
    const Left={
        w : 4,
        p : 3,
        b : 2,
        s : 1
    }
    const Right={
        m : 4,
        q : 3,
        d : 2,
        z : 1
    }
    let L=[]
    let LCount=0
    let R=[]
    let RCount=0
    for (let i = 0; i <fight.length ; i++) {
        if(fight[i]==='w'||fight[i]==='p'||fight[i]==='b'||fight[i]==='s'){
            L.push(fight[i])
        }else if (fight[i]==='m'||fight[i]==='q'||fight[i]==='d'||fight[i]==='z') {
            R.push(fight[i])
        }
    }
    for(let key of L){
        LCount+=Left[key]
    }
    for(let key of R){
        RCount+=Right[key]
    }

    return LCount>RCount?'Left side wins!':LCount===RCount?"Let's fight again!":"Right side wins!"
}

//#32
function reduce(fraction) {
    let arr1=[]
    let arr2=[]
    for (let i = 1; i <=Math.max(...fraction) ; i++) {
        if(fraction[0]%i===0)arr1.push(i)
        if(fraction[1]%i===0)arr2.push(i)
    }
    const array=[...arr2,...arr1].sort((a,b)=>b-a)
    const number=  array.find(el=>fraction[0]%el===0&&fraction[1]%el===0)
    return [fraction[0]/number,fraction[1]/number]
}

//#33
function nameFile(fmt, nbr, start) {
    if(start%1!==0 ||nbr%1!==0||nbr<=0 ){
        return []
    }

    const value=/<index_no>/g
    const result=[]
    for (let i = 0; i <nbr ; i++) {
        result.push(fmt.replace(value,start+i))
    }
    return  result
}

//#34
function addBinary(a,b) {
    const sum=a+b
    return sum.toString(2)
}

//#35
function nbYear(p0, percent, aug, p,year=0) {
    console.log(p0, percent, aug, p,year)

    if (p0 >= p) {
        return year
    }
    ++year
    const people=Math.floor(p0+p0*(percent/100)+aug)
    return nbYear(people,percent,aug,p,year)

}
//#36
const inviteMoreWomen=(L) =>0< L.reduce((acc,el)=>acc+el,0)


//#37
var capitals = function (word) {
    const arr=word.split('')
    const res=[]
    arr.map((el,i)=>{
        if( el===el.toUpperCase()) res.push( i)
    })
    return res
};

//#38
function descendingOrder(n) {
    let arr = n.toString().split('').sort((a,b)=>b-a)
    return +arr.join('')
}

//#39
function seaSick(x){
    const arr=x.split('')
    if(arr.length===1){
        return "No Problem"
    }
    let count=0
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]!==arr[i+1]){
            count++
        }
    }
    return arr.length*20/100<count?"Throw Up":"No Problem"
}

//#40
function covfefe(str) {
    if (str.includes('coverage')) {
        return str.replaceAll('coverage', 'covfefe')
    } else {
        return str + ' ' + 'covfefe'
    }
}

//#41
function catchSignChange(arr) {
    let count=0
    for (let i = 1; i <=arr.length-1 ; i++) {
        arr[i]===0?arr[i]=1:arr[i]
        arr[i-1]===0?arr[i-1]=1:arr[i]
        if(arr[i]<=0 && arr[i-1]>0){
            count+=1
        }
        if(arr[i]>=0 && arr[i-1]<0){
            count+=1
        }
    }
    return  count
}

//#42
function wordValue(a) {
    const res=[]
    const findCode=(leter)=>{
        if(leter===' '){
            return 0
        }
        return leter.charCodeAt()-96
    }
    for (let i = 0; i < a.length; i++) {
        let count=0
        const array=a[i].split('')
        array.map(el=>{
            return count+=findCode(el)
        })
        res.push(count*(i+1))
    }
    return res
}

//43
const  solution=(start, finish,jumping=0)=> {
    if(start===finish){
        return jumping
    }
    if(start+3<=finish){
        return solution(start+3,finish,jumping+1)
    }else {
        return solution(start+1,finish,jumping+1)
    }
}

//#44
function printerError(s) {
    let  countError=0
    s.toLowerCase().split('').map(el=>{
        if(/[n-z]/g.test(el)){
            countError+=1
        }
    })
    return `${countError}/${s.length}`
}

//#45
function isSortedAndHow(array) {
    const arrayPositive = [...array].sort((a, b) => a - b).join('')
    const arrayNegative = [...array].sort((a, b) => b - a).join('')
    if (array.join('') === arrayPositive) {
        return 'yes, ascending'
    }
    if (array.join('') === arrayNegative) {
        return 'yes, descending'
    }
    return 'no'
}

//#46
function noOdds( values ){
    const res=[]
    values.map(el=>{
        if(el%2 ==0){
            res.push(el)
        }
    })
    return res
}
