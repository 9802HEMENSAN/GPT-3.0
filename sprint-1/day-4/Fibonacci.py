# 9. **Fibonacci Sequence**: Write a Python function that generates the first n numbers in the Fibonacci sequence.
#     - *Input*: 5
#     - *Output*: "[0, 1, 1, 2, 3]"
# 10.

def fibonacci_sequence(n):
    sequence = [0, 1]

    if n <= 2:
        return sequence[n]

    while len(sequence) < n:
        next_number = sequence[-1] + sequence[-2]
        sequence.append(next_number)

    return sequence

# Example usage
n = 5
result = fibonacci_sequence(n)
print(result)
