function solution(distance, rocks, n) {
    rocks.sort((a,b) => a-b)
    rocks.unshift(0)
    rocks.push(distance)
    
    let distanceList = rocks.map((v,i) => {
        if(i !== rocks.length-1){
            return rocks[i+1] -v
        }
    })
    distanceList.pop()
    console.log(distanceList)
    for(let j=0;j<n;j++){
        let minNum = Math.min(...distanceList)
        const minIndex = distanceList.indexOf(minNum)
        if(minIndex === 0){
            const a = distanceList.splice(0,2)
            distanceList.unshift(a[0]+a[1])
        }
        else if(minIndex === distanceList.length -1){
            const a = distanceList.splice(distanceList.length -2,2)
            console.log(a,distanceList)
            distanceList.push(a[0]+a[1])
        }else{
            let right = distanceList[minIndex]+distanceList[minIndex+1]
            let left = distanceList[minIndex]+distanceList[minIndex-1]
            if(right >= left){
                distanceList.splice(minIndex-1,2,left)
            }else{
                distanceList.splice(minIndex,2,right)
            }
        }
        console.log(minNum,distanceList)
    }
    return Math.min(...distanceList)
}

console.log(solution(
    23, [3, 6, 9, 10, 14, 17], 2
))