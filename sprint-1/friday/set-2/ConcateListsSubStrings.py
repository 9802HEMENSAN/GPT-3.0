# ### Problem **6: Concatenate two lists in the following order**

# ```
# list1 = ["Hello ", "take "]
# list2 = ["Dear", "Sir"]
# ```

# **Expected output:**

# ```
# ['Hello Dear', 'Hello Sir', 'take Dear', 'take Sir']
# ```

list1 = ["Hello ", "take ", "Welcome ", "Thanks "]
list2 = ["Dear", "Sir"]

concatenatedList=[]

for str1 in list1 : 
   for str2 in list2 : 
      concatenatedList.append(str1+str2)

print(concatenatedList)
