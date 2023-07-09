**Problem 11:**

- **Prerequisite**: Understand how to count rows / documents in SQL / MongoDB

SELECT COUNT(*) FROM table_name;

db.collection.countDocuments({});

Counting documents in MongoDB:

In MongoDB, you can use the countDocuments() method to count the number of documents that match a specified condition or retrieve the total number of documents in a collection. Here's an example of how to count the documents in a collection:

Counting rows in SQL:

In SQL, you can use the COUNT() function to count the number of rows that match a specified condition or retrieve the total number of rows in a table. Here's an example of how to count the rows in a table:

SELECT COUNT(*) FROM table_name;
 
- **Problem**: Write a query to count the number of customers.

db.customers.countDocuments({});

SELECT COUNT(*) FROM customers;

Both the SQL and MongoDB queries will count the number of customers.