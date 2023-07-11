**Problem 12:**

- **Prerequisite**: Understand how to skip rows / documents in SQL / MongoDB
- **Problem**: Write a query to fetch all customers except the first two when ordered by **`id`** in ascending order.


To fetch all customers except the first two when ordered by id in ascending order in SQL, we can use the OFFSET clause along with the ORDER BY clause. Here's an example query:

SELECT * FROM Customers ORDER BY id ASC OFFSET 2;

This query selects all columns (*) from the Customers table, orders the result by the id column in ascending order (ASC), and uses the OFFSET clause to skip the first two rows.

In MongoDB, we can use the find() method with the skip() and sort() methods to achieve the same result. Here's an example query:

db.Customers.find().sort({ id: 1 }).skip(2);

In this query, find() retrieves all documents from the Customers collection, sort() is used to sort the result based on the id field in ascending order, and skip(2) is used to skip the first two documents.

Both queries will fetch all customers except the first two when ordered by id in ascending order, with SQL returning a table-like result and MongoDB returning a cursor or an array of documents.




