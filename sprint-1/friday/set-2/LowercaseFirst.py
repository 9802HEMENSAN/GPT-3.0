# ### Problem **4: Arrange string characters such that lowercase letters should come first**

# Given string contains a combination of the lower and upper case letters. Write a program to arrange the characters of a string so that all lowercase letters should come first.

# **Given**:

# ```
# str1 = PyNaTive
# ```

# **Expected Output**:

# ```
# yaivePNT
# ```

str1 = "PyNaTive"

lowercase=[]
uppercase=[]

for char in str1 : 
    if char.islower() : 
        lowercase.append(char)
    else : 
        uppercase.append(char)

result="".join(lowercase+uppercase)
print(result)