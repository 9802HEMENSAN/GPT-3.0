### Problem **1: Print the following pattern**

# Write a program to print the following number pattern using a loop.

# ```
# 1
# 1 2
# 1 2 3
# 1 2 3 4
# 1 2 3 4 5
# ```

rows=5

for i in range(1,rows+1) : 
    for j in range(1,i+1) :
        print(j,end=" ")
    print()