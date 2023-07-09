**Problem 4:**

- **Prerequisite**: Understand how to select specific fields in SQL / MongoDB
- **Problem**: Write a query to select only the **`name`** and **`email`** fields for all custome


Selecting specific fields in SQL:

-> SELECT name, email FROM customers;

In this SQL query, the SELECT statement specifies the "name" and "email" fields to be retrieved from the "customers" table. The result will be a result set containing only these two fields for all customers.

-> Selecting specific fields in MongoDB:

db.customers.find({}, { name: 1, email: 1, _id: 0 });
 
Both SQL and MongoDB queries will retrieve only the "name" and "email" fields for all customers.
 