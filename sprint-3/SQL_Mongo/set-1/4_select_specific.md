**Problem 4:**

- **Prerequisite**: Understand how to select specific fields in SQL / MongoDB
- **Problem**: Write a query to select only the **`name`** and **`email`** fields for all customers

To select only the name and email fields for all customers in SQL, we can use the following query:

SELECT name, email FROM Customers;

In MongoDB, you can use the find() method with a projection to select specific fields. Here's an example:

db.Customers.find({}, { name: 1, email: 1 });




