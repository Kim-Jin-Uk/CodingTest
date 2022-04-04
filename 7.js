function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let w_sum = 0
    let index = 0
    let bridge_arr = Array.from({ length: bridge_length }, () => 0)
    while(true){
        if(weight < w_sum + truck_weights[index]){
            w_sum -= bridge_arr[0]
            bridge_arr.shift()
           
            if(truck_weights[index] && weight < w_sum + truck_weights[index]){
                bridge_arr.push(0)
            }else{
                if(truck_weights[index]){
                    bridge_arr.push(truck_weights[index])
                    w_sum += truck_weights[index]
                    index += 1
                }
            }
            answer += 1
        }else{
            w_sum -= bridge_arr[0]
            bridge_arr.shift()
            if(truck_weights[index]){
                bridge_arr.push(truck_weights[index])
                w_sum += truck_weights[index]
                index += 1
            }
            answer += 1
        }

        if(bridge_arr.length === 0){
            break
        }
    }

    
    return answer;
}

function s(bridge_length, weight, truck_weights) {
    let bridge = Array.from({ length: bridge_length }, () => 0);
  
    let time = 0;
  
    while (bridge.length) {
      bridge.shift();
      time += 1;
  
      if (truck_weights.length) {
        let sum = bridge.reduce(function add(sum, curValue) {
          return sum + curValue;
        });
  
        if (sum + truck_weights[0] <= weight) {
          bridge.push(truck_weights.shift());
        } else {
          bridge.push(0);
        }
      }
    }
  
    return time;
  }

console.log(solution(
    100,	100,	[10,10,10,10,10,10,10,10,10,10,9,20,21]
))

console.log(s(
    100,	100,	[10,10,10,10,10,10,10,10,10,10,9,20,21]
))