function solution(n, k, cmd) {
    let matrixX = []
    let clearList = []

    for(let i=0;i<n;i++){
        matrixX[i] = i
    }
    function U(x){
        k -= x
    }
    function D(x){
        k += x
    }
    function C(){
        console.log("clear",matrixX[k])
        clearList.push(matrixX[k])
        matrixX.splice(k,1)
        if (k === n-clearList.length){
            k -= 1
        }
    }
    function Z(){
        console.log("zaaaaaaa")
        console.log(clearList)
        const zIndex = clearList.pop()
        console.log(clearList,zIndex)
        console.log("zbbbbbbb")
        if(zIndex < matrixX[k]){
            k += 1
        }
        matrixX.push(zIndex)
        matrixX.sort()
    }

    for(let i of cmd){
        console.log(i)
        if(i[0] === "U"){
            U(parseInt(i.split(" ")[1]))
        }else if(i[0] === "D"){
            D(parseInt(i.split(" ")[1]))
        }else if(i === "C"){
            C()
        }else{
            Z()
        }
        console.log(matrixX,k)
    }

    var answer = "O".repeat(n);
    
    for(let i of clearList){
        
        answer = answer.substr(0, i) + "X" + answer.substr(i+1)
    }
    return answer;
}

console.log(solution(
    8,	2,	["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]
))