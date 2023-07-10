

def reverse_str(str) : 
    reverse=""
    for i in range (len(str)-1, -1, -1 ) : 
         reverse+=str[i]

    return reverse

reversed=reverse_str("Python is fun")
print(reversed)