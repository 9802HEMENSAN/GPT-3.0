**Problem 9:**

- **Prerequisite**: Understand how to limit results in SQL / MongoDB

Limiting results in MongoDB:

In MongoDB, you can use the limit() method to restrict the number of documents returned by a query. The limit() method takes a numerical value as a parameter, indicating the maximum number of documents to retrieve. Here's an example:

Ex. =>   db.customers.find().limit(5);

Limiting results in SQL:

In SQL, you can use the LIMIT clause to restrict the number of rows returned by a SELECT statement. The LIMIT clause specifies the maximum number of rows to retrieve. Here's an example:

Ex.=> SELECT * FROM customers LIMIT 5;

 
- **Problem**: Write a query to fetch the top 3 customers when ordered by **`id`** in ascending order.

Fetching the top 3 customers when ordered by id in ascending order in MongoDB:

=> db.customers.find().sort({ id: 1 }).limit(3);


Fetching the top 3 customers when ordered by id in ascending order in SQL:

=> SELECT * FROM customers ORDER BY id ASC LIMIT 3;

In this SQL query, the ORDER BY clause specifies that the result set should be ordered by the "id" column in ascending order (ASC). The LIMIT clause restricts the result set to only 3 rows. This query retrieves the top 3 customers with the smallest "id" values

Both the SQL and MongoDB queries will fetch the top 3 customers when ordered by id in ascending order.

