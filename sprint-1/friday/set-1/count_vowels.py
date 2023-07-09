# 6. **Count Vowels**: Write a Python program that counts the number of vowels in a given string.
#     - *Input*: "Hello"
#     - *Output*: "Number of vowels: 2"

def countVowels(input_string):
    vowel_count = 0
    vowels = ['a', 'e', 'i', 'o', 'u']

    for char in input_string:
        if char.lower() in vowels:
            vowel_count += 1

    return vowel_count

# Example usage
string = "Hello"
vowel_count = countVowels(string)
print(f"Number of vowels: {vowel_count}")

