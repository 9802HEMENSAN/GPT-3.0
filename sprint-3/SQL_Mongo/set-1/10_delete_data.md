**Problem 10:**

- **Prerequisite**: Understand data deletion in SQL / MongoDB
- **Problem**: Write a query to delete the customer with **`id`** 2.

To delete the customer with id 2 in SQL, we can use the following query:

DELETE FROM Customers WHERE id = 2;

This query uses the DELETE statement with the WHERE clause to specify the condition for deletion. It will remove the row from the Customers table where the id is equal to 2.

In MongoDB, we can use the deleteOne() method to delete the customer with id 2. Here's an example query:

db.Customers.deleteOne({ id: 2 });

In this query, the object { id: 2 } specifies the query filter to identify the document with id equal to 2. The deleteOne() method will delete the first matching document that satisfies the filter.