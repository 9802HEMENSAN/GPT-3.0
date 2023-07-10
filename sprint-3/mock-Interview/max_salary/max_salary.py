employees = [
    {"name" : "John", "salary" : 3000 , "designation" : "developer"},
    {"name" : "Emma", "salary" : 4000 , "designation" : "manager"},
    {"name" : "Kelly", "salary" : 3500 , "designation" : "tester"},
]

def max_salary_employee(employees):
   max_salary=0
   for employee in employees : 
       if employee["salary"] > max_salary : 
            max_salary = employee["salary"]

   for employee in employees : 
       if employee["salary"] == max_salary : 
            print(employee)
   return

max_salary_employee(employees)