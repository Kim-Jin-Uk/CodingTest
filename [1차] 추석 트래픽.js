function solution(lines) {
    var answer = 0;
    let time_list = []
    for(let i of lines){
        const time = i.split(" ")
        const first_date = new Date(time[0]+" "+time[1])
        const first_time = first_date.getTime()
        const process_time = parseFloat(time[2].replace("s",""))*1000 -1
        time_list.push([first_time-process_time,first_time])
    }

    for (let i in time_list){
        result = 0
        for (let j=i;j<time_list.length;j++){
            if(time_list[j][0] <= time_list[i][1]+999){
                result += 1
            }
        }
        if (answer < result){
            answer = result
        }
    }

    return answer;
}

console.log(
    solution(
        [
            "2016-09-15 20:59:57.421 0.351s",
            "2016-09-15 20:59:58.233 1.181s",
            "2016-09-15 20:59:58.299 0.8s",
            "2016-09-15 20:59:58.688 1.041s",
            "2016-09-15 20:59:59.591 1.412s",
            "2016-09-15 21:00:00.464 1.466s",
            "2016-09-15 21:00:00.741 1.581s",
            "2016-09-15 21:00:00.748 2.31s",
            "2016-09-15 21:00:00.966 0.381s",
            "2016-09-15 21:00:02.066 2.62s"
            ]
    )
)