# 8. **Factorial Calculation**: Write a Python function that calculates the factorial of a number.
#     - *Input*: 5
#     - *Output*: "Factorial of 5 is 120."

def factorial(number):
    fact = 1
    for i in range(1, number + 1):
        fact *= i
    return fact

# Example usage
number = 5
result = factorial(number)
print(f"Factorial of {number} is {result}.")
