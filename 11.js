function solution(x,y,table){
    let answer = 0

    for (let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            if(table[i][j] === 0){
                answer += 1
                tableOne(x,y,i,j,table)
            }
        }
    }

    return answer
}

function tableOne(X,Y,i,j,table){
    table[i][j] = 1
    if (i < X-1 && table[i+1][j] === 0){
        tableOne(X,Y,i+1,j,table)
    }
    if(j < Y-1 && table[i][j+1] === 0){
        tableOne(X,Y,i,j+1,table)
    }
}

console.log(
    "answer",
    solution(
        5,6,[
            [0,0,1,1,0,1],
            [0,0,0,1,1,0],
            [1,1,1,1,1,0],
            [0,0,0,0,0,1],
            [0,0,0,0,0,0]
        ]
    )
)