function solution(name) {
    let notAList = []
    let right = 0
    let left = name.length
    let changeRL = name.length
    let changeLR = name.length

    let upDownNum = 0
    const eng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0; i<name.length;i++){
        if(name[i] !== 'A' && i> 0){
            notAList.push(i)
            if (i > right){right = i}
            if (i < left){left = i}
        }
        const upNum = eng.indexOf(name[i])
        
        if(upNum > 13){
            upDownNum += 26 - upNum
        }else{
            upDownNum += upNum
        }
    }
    for(let i=0;i< notAList.length-1;i++){
        let v = 2*notAList[i] + name.length - notAList[i+1]
        if(changeRL > v){changeRL = v}
    }
    for(let i =notAList.length-1;i>0;i--){
        let v = 2*(name.length - notAList[i]) + notAList[i-1]
        if(changeLR > v){changeLR = v}
    }

    left = name.length - left
    let minimum = Math.min(left,right,changeRL,changeLR)
    minimum += upDownNum
    return minimum;
}

console.log(solution(
    "BBBBAAAABA"
))