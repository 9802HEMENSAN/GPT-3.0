# 1. **Selection Sort**: Implement the selection sort algorithm in Python.
#     - *Input*: [64, 25, 12, 22, 11]
#     - *Output*: "[11, 12, 22, 25, 64]"

def SelectionSort(arr) : 

    for i in range(len(arr)) : 
        min_index= i

        for j in range(i+1, len(arr)) : 
            if arr[j] < arr[min_index] : 
                min_index=j
        
        #Swap the found minimum element with the first element
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

arr=[64, 25, 12, 22, 11]
result=SelectionSort(arr)
print(result)