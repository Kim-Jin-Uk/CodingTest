function solution(citations) {
    citations.sort((a,b)=>b-a)
    console.log(citations)
    for(let i =0;i< citations.length;i++){
        if (i+1 > citations[i]){return i}
    }
    return 0

    var answer = 0;
    citations.sort((a,b)=>b-a)
    let h = 0
    while(h+1<=citations[h]) h++
    answer = h
    return answer;
}

console.log(solution(
    [4, 0, 6, 1, 5]
))