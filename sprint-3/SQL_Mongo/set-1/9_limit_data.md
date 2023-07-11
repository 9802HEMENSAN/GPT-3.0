**Problem 9:**

- **Prerequisite**: Understand how to limit results in SQL / MongoDB
- **Problem**: Write a query to fetch the top 3 customers when ordered by **`id`** in ascending order.


To fetch the top 3 customers when ordered by id in ascending order in SQL, you can use the following query:

SELECT * FROM Customers ORDER BY id ASC LIMIT 3;

In this query, find() retrieves all documents from the Customers collection, sort() is used to sort the result based on the id field in ascending order, and limit() limits the result to the top 3 documents.


In MongoDB, you can use the find() method with the sort() and limit() methods to achieve the same result. Here's an example query:

db.Customers.find().sort({ id: 1 }).limit(3);

In this query, find() retrieves all documents from the Customers collection, sort() is used to sort the result based on the id field in ascending order, and limit() limits the result to the top 3 documents.