from re import T


def solution(key, lock):
    import numpy as np
    a = np.array(key)
    wanted = np.array([[abs(j-1) for j in i]for i in lock])
    key_arr = [a,np.rot90(a,1),np.rot90(a,2),np.rot90(a,3)]

    answer = [False]

    def set_answer(answer):
        answer.append(True)

    def moveTR(keyvalue, lockvalue,answer):
        if keyvalue.sum() >= lockvalue.sum():
            if np.array_equal(keyvalue ,lockvalue):
                set_answer(answer)
                return True
            else:
                # move top
                key = keyvalue[1:]
                key = np.append(key,[np.array([0]*len(keyvalue))],axis=0)
                moveTR(key,lockvalue,answer)
                # move right
                v = np.delete(keyvalue,0,axis=1)
                key = np.append(v, [[0]]*len(keyvalue), axis = 1)
                moveTR(key,lockvalue,answer)
        else: return False

    def moveTL(keyvalue, lockvalue,answer):
        if keyvalue.sum() >= lockvalue.sum():
            if np.array_equal(keyvalue ,lockvalue):
                set_answer(answer)
                return True
            else:
                # move top
                key = keyvalue[1:]
                key = np.append(key,[np.array([0]*len(keyvalue))],axis=0)
                moveTL(key,lockvalue,answer)
                # move left
                v = np.delete(keyvalue,-1,axis=1)
                key = np.append([[0]]*len(keyvalue),v, axis = 1)
                moveTL(key,lockvalue,answer)
        else: return False

    def moveBR(keyvalue, lockvalue,answer):
        if keyvalue.sum() >= lockvalue.sum():
            if np.array_equal(keyvalue ,lockvalue):
                set_answer(answer)
                return True
            else:
                # move bot
                key = keyvalue[:-1]
                key = np.append([np.array([0]*len(keyvalue))],key,axis=0)
                moveBR(key,lockvalue,answer)
                # move right
                v = np.delete(keyvalue,0,axis=1)
                key = np.append(v, [[0]]*len(keyvalue), axis = 1)
                moveBR(key,lockvalue,answer)
        else: return False

    def moveBL(keyvalue, lockvalue,answer):
        if keyvalue.sum() >= lockvalue.sum():
            if np.array_equal(keyvalue ,lockvalue):
                set_answer(answer)
                return True
            else:
                # move bot
                key = keyvalue[:-1]
                key = np.append([np.array([0]*len(keyvalue))],key,axis=0)
                moveBL(key,lockvalue,answer)
                # move left
                v = np.delete(keyvalue,-1,axis=1)
                key = np.append([[0]]*len(keyvalue),v, axis = 1)
                moveBL(key,lockvalue,answer)
        else: return False
    
    

    for i in range(len(key_arr)):
        moveTR(key_arr[i],wanted,answer)
        moveTL(key_arr[i],wanted,answer)
        moveBR(key_arr[i],wanted,answer)
        moveBL(key_arr[i],wanted,answer)

    return answer[-1]

print(solution(
    [[0, 0, 0], 
    [1, 0, 0], 
    [0, 1, 1]],	[[1, 1, 1], [1, 1, 0], [1, 0, 1]]
))
