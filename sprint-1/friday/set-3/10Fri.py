def calculate_average_score(scores):
    total = sum(scores)
    count = len(scores)
    print(total,count)
    average = total // count
    return average

# Debugging scenario
student_scores = {'Alice': [85, 90, 92], 'Bob': [76, 88]}

# Calculate average scores for each student
averages = {}
for student, scores in student_scores.items():
    average_score = calculate_average_score(scores) 
    averages[student] = average_score

# Print the average scores
for student, average in averages.items():
    print(f" (student): {average}")
