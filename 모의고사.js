function solution(answers) {
    var answer = [0,0,0];
    const first = [1,2,3,4,5]
    const second = [ 2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    for(let i=0;i<answers.length;i++){
        if(first[i%5] === answers[i]){
            answer[0] += 1
        }
        if(second[i%8] === answers[i]){
            answer[1] += 1
        }
        if(third[i%10] === answers[i]){
            answer[2] += 1
        }
    }

    const max = Math.max(...answer)
    let result = []
    for(let i =0;i<answer.length;i++){
        if(answer[i] === max){result.push(i+1)}
    }
    return result;
}

console.log(solution(
    [1,3,2,4,2]
))