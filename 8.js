function solution(record) {
    let answer = {};
    let count = []
    let real = []

    for(let i = 0; i < record.length; i ++){
        const key = record[i].split(' ')
        if(key[2] !== undefined){
            answer[key[1]] = key[2]
        }
        count.push([key[1],key[0]])
    }

    for (let i in count){
        if (count[i][1] === 'Enter'){
            real.push(answer[count[i][0]]+"님이 들어왔습니다.")
        }else if(count[i][1] === 'Leave'){
            real.push(answer[count[i][0]]+"님이 나갔습니다.")
        }
    }
    return real;
}

console.log(solution(
    [
        "Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"
        ,"Enter uid1224 Muzi1", "Enter uid4557 Prodo1","Leave uid1224"
    ]
))