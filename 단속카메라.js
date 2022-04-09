function solution(routes) {
    let answer = [routes[0]]
    for (let i=1;i<routes.length;i++){
        let checker = true
        for(let j of answer){
            // console.log(routes[i],j)
            // for(let k of answer){
            //     console.log(k)
            // }
            // console.log('----------------')
            if((routes[i][0] <= j[1] && routes[i][1] > j[1])||(routes[i][1] >= j[0] && routes[i][0] < j[0])){
                if(routes[i][0] <= j[1] && routes[i][1] >= j[1]){
                    console.log("check",routes[i],j)
                    j[0] = Math.max(routes[i][0],j[0]) 
                }if(routes[i][1] >= j[0] && routes[i][0] <= j[0]){
                    j[1] = Math.min(routes[i][1],j[1]) 
                }
                checker = false
                break
            }
        }
        if(checker){
            answer.push(routes[i])
        }
    }
    // for(let k of answer){
    //     console.log(k)
    // }
    // console.log('----------------')
    return answer.length;
}

console.log(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]))