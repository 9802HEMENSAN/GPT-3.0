**Problem 7:**

- **Prerequisite**: Understand how to order data in SQL / MongoDB
- **Problem**: Write a query to fetch all customers, ordered by **`name`** in descending order.

To fetch all customers, ordered by name in descending order in SQL, you can use the following query:

SELECT * FROM Customers ORDER BY name DESC;

In MongoDB, you can use the sort() method to achieve the same result. Here's an example query:

db.Customers.find().sort({ name: -1 });


