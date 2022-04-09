function solution(brown, yellow) {
    var answer = [];
    for(let i = 3; i<(brown+yellow)/2 +1;i++){
        if((brown+yellow)%i === 0){
            if((i-2)*((brown+yellow)/i-2) === yellow){
                if(i > (brown+yellow)/i){
                    answer = [i,(brown+yellow)/i]
                }else{
                    answer = [(brown+yellow)/i,i]
                }
                break
            }
        }
    }

    return answer;
}

console.log(
    solution(
        10,2
    )
)