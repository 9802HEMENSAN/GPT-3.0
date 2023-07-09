**Problem 12:**

- **Prerequisite**: Understand how to skip rows / documents in SQL / MongoDB

Skipping documents in MongoDB:

In MongoDB, you can use the skip() method in combination with the find() method to skip a certain number of documents and retrieve the subsequent documents. Here's an example:

=> db.customers.find().skip(5);


Skipping rows in SQL:

In SQL, you can use the OFFSET clause in combination with the LIMIT clause to skip a certain number of rows and retrieve the subsequent rows. Here's an example:

=> SELECT * FROM customers OFFSET 5;

In this SQL query, the OFFSET clause is used to skip the first 5 rows from the "customers" table. The result will be a result set that starts from the 6th row onwards.



- **Problem**: Write a query to fetch all customers except the first two when ordered by **`id`** in ascending order.

=>  db.customers.find().sort({ id: 1 }).skip(2);

=>  SELECT * FROM customers ORDER BY id ASC OFFSET 2;
