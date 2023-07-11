**Problem 28:**

- **Prerequisite**: Understand how to order data in SQL / MongoDB
- **Problem**: Write a query to fetch all rides, ordered by **`fare`** in descending order.

**sql**

SELECT * FROM Rides ORDER BY fare DESC;

**mongodb**

db.rides.find().sort({ fare: -1 });


In both SQL and MongoDB, the ORDER BY clause is used to sort the results. By specifying fare DESC, we are ordering the rides by fare in descending order.

Please note that in SQL, the SELECT * statement retrieves all columns from the table. In MongoDB, the find() method without any parameters retrieves all documents from the collection.