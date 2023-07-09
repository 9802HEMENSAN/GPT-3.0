# 1. **Palindrome Check**: Write a Python function that checks whether a given word or phrase is a palindrome.
#     - *Input*: "madam"
#     - *Output*: "The word madam is a palindrome."

def CheckPalindrome( phrase) :
   pal=""
   for char in phrase:
      pal=pal+ char

   print(pal)
   print(phrase)
   if pal==phrase :
       return True 
   else : 
       return False 
   
word ="mada"

result=CheckPalindrome(word)

if result : 
   print("The word {result} is a palindrome")
else :
   print("The word {result} is not a palindrome")