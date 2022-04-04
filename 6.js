function solution(priorities, location) {
    let answer = 0;
    let target = location
    let max = Math.max.apply(null, priorities)
    while(true){
        console.log(priorities,max,target)
        if(priorities[0] === max){
            priorities.shift()
            answer += 1
            if(target === 0){
                break
            }else{
                max = Math.max.apply(null, priorities)
            }
        target -= 1
        }else{
            if(target === 0){
                target = priorities.length -1
            }else{
                target -= 1
            }
            let p = priorities.filter((v,i) => i!==0)
            p.push(priorities[0])
            priorities = p
        }
    }

    return answer;
}

console.log(solution([2, 1, 9, 1, 9, 1],1))