# 1. **Dictionary Manipulation**: Create a dictionary with keys as names and values as ages. Write functions to add a new name-age pair, update the age of a name, and delete a name from the dictionary.
#     - *Input*: Add "John": 25, Update "John": 26, Delete "John"
#     - *Output*: "{}, {'John': 26}, {}"

def addPerson(Dictionary,name,age) : 
    Dictionary[name]=age

def UpdateAge(Dictionary,name,newAge) :
    if name in  Dictionary :
        Dictionary[name]=newAge

def DeletePerson(Dictionary,name) : 
       if name in Dictionary :
            del Dictionary[name]

people={}
#Add a new name-age pair
addPerson(people,"John",25)
print(people)

#Update age of a name
UpdateAge(people,"John",26)
print(people)

#Delete a name-age pair
DeletePerson(people,"John")
print(people)