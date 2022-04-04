function solution(w, h) {
    let answer = 1;

    let minus = 0

    const max = Math.max(w,h)
    const min = Math.min(w,h)

    const block = max/min

    for(let i = 1;i <= min; i++){
        const ma = Math.ceil(i*block)
        const mi = Math.floor(block*(i-1))

        minus += ma - mi
    }

    answer = max*min - minus

    return answer;
}

console.log(solution(
    8, 12
))