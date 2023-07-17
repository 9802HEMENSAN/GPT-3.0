# **Part 2: Average Age of Employees with Job Titles Starting with 'S'**

# Given a nested dictionary representing a company's employees and their details, write a Python function that determines the average age of all the employees who have a job title starting with the letter 'S'. The function should accept the nested dictionary as input and return the average age as a float value. If there are no employees with job titles starting with 'S', the function should return 0.

company = {
    'employees': {
        'John': {'age': 35, 'job_title': 'Manager'},
        'Emma': {'age': 28, 'job_title': 'Software Engineer'},
        'Kelly': {'age': 41, 'job_title': 'Senior Developer'},
        'Sam': {'age': 30, 'job_title': 'Software Engineer'},
        'Mark': {'age': 37, 'job_title': 'Senior Manager'},
        'Sara': {'age': 32, 'job_title': 'Software Engineer'},
    }
}

def average_age_of_employees_with_s_job_title(company):
    sum = 0
    count = 0

    for employee in company['employees']:
        if company['employees'][employee]['job_title'].startswith('S'):
            sum += company['employees'][employee]['age']
            count += 1

    company['average_age'] = sum / count
    
    return company['average_age']


print(average_age_of_employees_with_s_job_title(company))  # 31.0