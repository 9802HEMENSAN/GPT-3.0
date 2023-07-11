 **Problem 6:**

- **Prerequisite**: Understand using string patterns in SQL (LIKE clause) / using regex in MongoDB
- **Problem**: Write a query to fetch all customers whose **`name`** starts with 'A'.


To fetch all customers whose name starts with 'A' in SQL, you can use the LIKE clause with the pattern 'A%'. Here's an example query:

SELECT * FROM Customers WHERE name LIKE 'A%';

In MongoDB, you can use regular expressions (regex) to achieve a similar result. Here's an example query using the $regex operator:

db.Customers.find({ name: /^A/ });
