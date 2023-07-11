**Problem 13:**

- **Prerequisite**: Understand filtering with multiple conditions in SQL / MongoDB
- **Problem**: Write a query to fetch all customers whose **`id`** is greater than 2 and **`name`** starts with 'B'.

To fetch all customers whose id is greater than 2 and name starts with 'B' in SQL, you can use the following query:

SELECT * FROM Customers WHERE id > 2 AND name LIKE 'B%';

This query selects all columns (*) from the Customers table and uses the WHERE clause to apply multiple conditions. The id > 2 condition filters the result to include only customers with an id greater than 2, and the name LIKE 'B%' condition ensures that the name column starts with the letter 'B'.

In MongoDB, you can use the $gt operator for numeric comparisons and regular expressions (regex) for string pattern matching. Here's an example query:

db.Customers.find({ id: { $gt: 2 }, name: /^B/ });

In this query, the object { id: { $gt: 2 }, name: /^B/ } specifies the query filter with multiple conditions. The { $gt: 2 } condition matches customers with an id greater than 2, and the /^B/ regular expression matches customers where the name field starts with the letter 'B'.