function solution(numbers) {
    var answer = '';
    let result = {}
    let zeroChecker = true
    for(let i of numbers){
        if(i !== 0){zeroChecker = false}
        const key = [i.toString()[0]]
        result[key] = result[key] ? [...result[key],i.toString()] : [i.toString()]
    }
    if(zeroChecker){return '0'}
    for(let i in result){
        answer = result[i].sort((a,b) => parseInt(b+a) - parseInt(a+b)).join('')+answer
    }
    return answer;
}

console.log(solution(
    [ 5, 9,3, 34, 30]
))