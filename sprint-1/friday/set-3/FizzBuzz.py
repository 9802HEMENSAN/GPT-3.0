 
# 1. **FizzBuzz**: Write a Python program that prints the numbers from 1 to 100, but for multiples of three, print "Fizz" instead of the number, for multiples of five, print "Buzz", and for multiples of both three and five, print "FizzBuzz".
#     - *Input*: None
#     - *Output*: "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16,..."


for i in range(1,100) :
    if(i%3==0 and i%5==0) : 
        print("FizzBuzz")
    elif(i%3==0) : 
        print("Fizz")
    elif(i%5==0) : 
        print("Buzz")
    else : 
        print(i)