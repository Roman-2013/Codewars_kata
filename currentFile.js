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

//console.log(catchSignChange([1,3,4,5])  )//0
console.log(catchSignChange([-7,-7,7,0])  )//2