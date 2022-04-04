function solution(progresses, speeds) {
    var answer = [];
    let progMap = progresses.map((v,i) => Math.ceil((100 - v) / speeds[i]))
    let firstDay = progMap[0]

    let index = 0
    for(let i in progMap){
        if(progMap[i] <= firstDay){
            answer[index] = (answer[index]||0) + 1
        }else{
            index += 1
            firstDay = progMap[i]
            answer[index] = (answer[index]||0) + 1
        }
    }

    return answer;
}

console.log(solution(
    [95, 90, 99, 99, 80, 99],
    [1, 1, 1, 1, 1, 1]
))