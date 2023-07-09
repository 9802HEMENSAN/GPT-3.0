**Problem 3:**

- **Prerequisite**: Understand basic data fetching in SQL / MongoDB
- **Problem**: Write a query to fetch all data from the **`Customers`** table / collection.

Fetching all data from the Customers table in SQL:

SELECT * FROM customers;

In this SQL query, the SELECT * statement retrieves all columns from the customers table. The result will be a result set containing all rows and columns from the table.

Fetching all data from the Customers collection in MongoDB:

=> db.customers.find({});

In MongoDB, the find() method with an empty query {} retrieves all documents from the customers collection. By omitting any specific conditions in the query object, you fetch all the documents present in the collection.

Both SQL and MongoDB queries will return all the data present in the Customers table or collection, respectively.

