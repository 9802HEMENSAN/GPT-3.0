def is_palindrome_number(num):
    str = str(num)
    reverse = str[::-1]

    if str == reverse:
        return True
    else:
        return False

print(is_palindrome_number(121))  # True
print(is_palindrome_number(123))  # False
