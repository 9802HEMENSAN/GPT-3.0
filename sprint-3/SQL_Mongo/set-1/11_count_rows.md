**Problem 11:**

- **Prerequisite**: Understand how to count rows / documents in SQL / MongoDB
- **Problem**: Write a query to count the number of customers.

To count the number of customers in SQL, you can use the COUNT() function along with the SELECT statement. Here's an example query:

SELECT COUNT(*) AS customer_count FROM Customers;

This query uses the COUNT(*) function to count the number of rows in the Customers table. The AS keyword is used to assign the count value to the alias customer_count.

In MongoDB, you can use the countDocuments() method to count the number of documents in a collection. Here's an example query:

db.Customers.countDocuments();

In this query, countDocuments() is a method that counts the number of documents in the Customers collection.

