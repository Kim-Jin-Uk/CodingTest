def solution(prices):
    answer = [0 for i in prices]
    for i in range(len(prices)):
        for j in range(i+1,len(prices)):
            answer[i] += 1
            if prices[j] < prices[i]:
                break
    return answer

print(solution(
    [1,3,9,2,5,3,4,2,1]
))