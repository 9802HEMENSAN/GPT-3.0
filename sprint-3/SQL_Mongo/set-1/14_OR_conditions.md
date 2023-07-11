**Problem 14:**

- **Prerequisite**: Understand how to use OR conditions in SQL / MongoDB
- **Problem**: Write a query to fetch all customers whose **`id`** is less than 3 or **`name`** ends with 's'.

To fetch all customers whose id is less than 3 or name ends with 's' in SQL, you can use the OR operator in the WHERE clause. Here's an example query:

SELECT * FROM Customers WHERE id < 3 OR name LIKE '%s';

This query selects all columns (*) from the Customers table and uses the WHERE clause with the OR operator to apply multiple conditions. The id < 3 condition filters the result to include customers with an id less than 3, and the name LIKE '%s' condition matches customers where the name column ends with the letter 's'.

In MongoDB, you can use the $lt operator for numeric comparisons and regular expressions (regex) for string pattern matching. Here's an example query:

db.Customers.find({ $or: [ { id: { $lt: 3 } }, { name: /s$/ } ] });

In this query, the $or operator is used to specify the logical OR condition for the multiple conditions. The array contains two objects: { id: { $lt: 3 } } matches customers with an id less than 3, and { name: /s$/ } matches customers where the name field ends with the letter 's'.

Both queries will fetch all customers whose id is less than 3 or name ends with 's', with SQL returning a table-like result and MongoDB returning a cursor or an array of documents.
