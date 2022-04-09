function solution(tickets) {
    var answer = [];
    let graph = {}
    for(let i of tickets){
        graph[i[0]] = graph[i[0]] ? [...graph[i[0]],i[1]] : [i[1]]
    }

    let visit = ["ICN"]
    function move(start,tickets,visit){
        // console.log(start,tickets[0],visit,graph[start])
        if (tickets.length === 0){
            answer.push(visit)
            return true
        }
        for (let i of graph[start]){
            for(let j of tickets){
                if (j[0] === start && j[1] === i){
                    let startCheck = false
                    for(let k of tickets){
                        if(k[0] === i || tickets.length === 1){
                            startCheck = true
                            break
                        }
                    }
                    if(startCheck){
                        let check = true
                        let ticketList = tickets.filter((v) => {
                            if (v[0] === start && v[1] === i && check){
                                check = false
                                return false
                            }
                            return true
                        })
                        // for(let j of ticketList){
                        //     console.log("ticket",j)
                        // }
                        move(i,ticketList,[...visit,i])
                    }
                }
            }
        }
    }

    move("ICN",[...tickets],[...visit])
    answer.sort()


    return answer[0];
}

console.log(solution(
    [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
))