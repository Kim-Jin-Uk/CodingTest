function solution(s) {
    let answer = [];
    if(s.length === 1){
        return 1
    }
    for(let i = 1;i<=s.length/2;i++){
        let len = s.length
        let o_num = 0
        let o_sum = 0
        for(let j = 0; j < s.length;j+=i){
            if(s.substr(j, i) === s.substr(j+i, i)){
                len -= i
                o_num += 1
            }else if(s.substr(j, i) === s.substr(j-i, i) && o_num > 0){
                console.log((o_num+1).toString())
                o_sum += (o_num+1).toString().length
                o_num = 0
            }
        }
        answer.push(len+o_sum)
    }
    return Math.min.apply(null,answer);
}

console.log(solution("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxww"))