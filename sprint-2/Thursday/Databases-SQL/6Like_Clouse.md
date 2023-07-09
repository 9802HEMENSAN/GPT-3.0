**Problem 6:**

- **Prerequisite**: Understand using string patterns in SQL (LIKE clause) / using regex in MongoDB

The LIKE clause in SQL is used to perform pattern matching on string values. It allows you to search for values that match a specific pattern. Here's an example:

SELECT * FROM customers WHERE name LIKE 'J%';

Using regular expressions (regex) in MongoDB:

In MongoDB, you can use regular expressions (regex) to perform advanced pattern matching and text searching. The $regex operator is used to specify the regex pattern. Here's an example:

db.customers.find({ name: { $regex: '^J' } });


- **Problem**: Write a query to fetch all customers whose **`name`** starts with 'A'.

Fetching all customers whose name starts with 'A' in MongoDB:

-> db.customers.find({ name: { $regex: '^A' } });

In this MongoDB query, the $regex operator is used with the pattern '^A'. The '^' symbol represents the start of a string. This query retrieves all customers whose name starts with the letter 'A'. It will return all documents where the "name" field starts with 'A', such as 'Alice', 'Andrew', 'Anna', etc.


Fetching all customers whose name starts with 'A' in SQL:

-> SELECT * FROM customers WHERE name LIKE 'A%';

In this SQL query, the LIKE clause with the pattern 'A%' is used. The '%' symbol is a wildcard that matches any sequence of characters. This query retrieves all customers whose name starts with the letter 'A'. It will return all rows where the "name" column starts with 'A', such as 'Alice', 'Andrew', 'Anna', etc.
 
Both the SQL and MongoDB queries will fetch all customers whose name starts with 'A'.

