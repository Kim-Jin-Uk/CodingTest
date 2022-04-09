function solution(begin, target, words) {
    var answer = []
    words.unshift(begin)
    let graph = {}
    let targetIndex = 0
    for(let i=0;i< words.length;i++){
        graph[i] = []
        if(words[i] === target){targetIndex=i}
        for(let j=0;j<words.length;j++){
            let counter = 0
            for(let k =0;k<words[j].length;k++){
                if(words[i][k] !== words[j][k]){
                    counter += 1
                }
                if(counter > 1){
                    break
                }
            }
            if(counter ===1){
                graph[i].push(j)
            }
        }
    }
    let visit = [0]
    function move(start,visit){
        if(start === targetIndex){
            // console.log(visit)
            answer.push(visit.length-1)
            return true
        }
        for(let i of graph[start]){
            if(!visit.includes(i)){
                move(i,[...visit,i])
            }
        }
    }
    move(0,visit)
    if(answer.length === 0){
        return 0
    }
    answer.sort((a,b) => a-b)
    return answer[0]
}

console.log(solution(
    "hit",	"cog",	["hot", "dot", "dog", "lot", "log", "cog"]	
))