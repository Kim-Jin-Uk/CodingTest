// function solution(participant, completion) {
//     participant.sort()
//     completion.sort()
//     const sol_arr = participant.filter((v,i) => {return v !== completion[i]})
//     var answer = sol_arr[0];
//     return answer;
// }

var solution=(participant,completion)=>
participant.find(participant=>!completion[participant]--,completion.map(participant=>completion[participant]=(completion[participant]|0)+1))

p = ["mislav", "stanko", "mislav", "ana"]
c = ["stanko", "ana", "mislav"]
console.log(solution(p,c));