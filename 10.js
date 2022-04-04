function solution(jobs) {
    let answer = 0;
    let time = 0
    let process_time = 0
    let sum = 0

    let job_arr =[]

    jobs.sort(function(a, b) { 
        return a[0] - b[0];
    });

    for(let i in jobs){
        if(jobs[i][0] > process_time){
            
            process_time = jobs[i][0]
            job_arr.push(jobs[i][1])
        }else if (jobs[i][0] === process_time){
            const s = process_time
            for (let j in sorted(job_arr)){
                process_time += job_arr[j]
                answer += process_time - s
            }
            job_arr = []
        }
        
    }

    return ;
}

console.log(solution(
    [[0, 3], [1, 9], [2, 6],[1,9]]
))