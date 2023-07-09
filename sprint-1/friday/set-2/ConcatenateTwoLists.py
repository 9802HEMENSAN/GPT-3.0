# ### Problem **5: Concatenate two lists index-wise**

# Write a program to add two lists index-wise. Create a new list that contains the 0th index item from both the list, then the 1st index item, and so on till the last element. any leftover items will get added at the end of the new list.

# **Given**:

# ```
# list1 = ["M", "na", "i", "Ke"]
# list2 = ["y", "me", "s", "lly"]
# ```

# **Expected output:**

# ```
# ['My', 'name', 'is', 'Kelly']
# ```

list1 = ["M", "na", "i", "Ke", "s", "lly"]
list2 = ["y", "me", "s", "lly"]

concatenatedList=[]

minLength=min(len(list1),len(list2))

for i in range(minLength):
    concatenatedList.append(list1[i]+list2[i])

# Add any leftover elements from list1
concatenatedList.extend(list1[minLength:])

# Add any leftover elements from list2
concatenatedList.extend(list2[minLength:])

print(concatenatedList)