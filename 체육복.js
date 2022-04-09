function solution(n, lost, reserve) {
    var answer = n - lost.length;

    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)

    const l = [...lost]
    const r = [...reserve]
    for(let i of l){
        if(r.includes(i)){
            lost.splice(lost.indexOf(i),1)
            reserve.splice(reserve.indexOf(i),1)
            answer += 1
        }
    }

    for(let i of reserve){
        if(lost.includes(i)){
            lost.splice(lost.indexOf(i),1)
            answer += 1
        }else if(lost.includes(i-1)){
            lost.splice(lost.indexOf(i-1),1)
            answer += 1
        }else if(lost.includes(i+1)){
            lost.splice(lost.indexOf(i+1),1)
            answer += 1
        }
    }

    return answer;
}

console.log(solution(
    7,	[2,3,4],	[1,2,3,6]
))