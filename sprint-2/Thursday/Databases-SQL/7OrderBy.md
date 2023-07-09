**Problem 7:**

- **Prerequisite**: Understand how to order data in SQL / MongoDB

Ordering data in MongoDB:

-> db.customers.find().sort({ name: 1 }); // ASC
-> db.customers.find().sort({ name: -1 });// DESC

In MongoDB, you can use the sort() method to specify the sorting order of the documents returned by a query. The sort() method takes a document as a parameter, where each field represents a column to sort on and its corresponding sort order. Here's an example:

Ordering data in SQL:

-> SELECT * FROM customers ORDER BY name ASC;
-> SELECT * FROM customers ORDER BY name DESC;

In SQL, you can use the ORDER BY clause to specify the sorting order of the result set. The ORDER BY clause allows you to sort data based on one or more columns in ascending (ASC) or descending (DESC) order. Here's an example:

- **Problem**: Write a query to fetch all customers, ordered by **`name`** in descending order.

Mongo
-> db.customers.find().sort({ name: 1 }); // ASC
-> db.customers.find().sort({ name: -1 });// DESC

SQL
-> SELECT * FROM customers ORDER BY name ASC;
-> SELECT * FROM customers ORDER BY name DESC;