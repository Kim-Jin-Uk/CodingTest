function solution(numbers) {
    var answer = []
    const numberList = numbers.split('')

    function makeNumber(s,visitList){
        let check = true
        for (let i =2; i<parseInt(s)/2+1;i++){
            if(parseInt(s)%i === 0){
                check = false
                break
            }
        }
        if(check && s!=='' && parseInt(s)!==1 && parseInt(s)!== 0){
            answer.push(parseInt(s))
        }

        for (let i =0;i<numberList.length;i++){
            if(!visitList.includes(i)){
                makeNumber(s+numberList[i],[...visitList,i])
            }
        }
    }
    makeNumber('',[])
    answer = new Set(answer)
    for(let i of answer){
        console.log(i)
    }
    return answer.size
}

console.log(solution(
    "1231"
))