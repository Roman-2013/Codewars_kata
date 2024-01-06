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



console.log(alphabetWar('dzdtyhiww'))// "Let's fight again!"

