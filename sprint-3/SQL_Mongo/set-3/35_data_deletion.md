**Problem 35:**

- **Prerequisite**: Understand data deletion in SQL / MongoDB
- **Problem**: Write a query to delete the ride with **`id`** 2.


**sql**

DELETE FROM Rides WHERE id = 2;

In SQL, the DELETE statement is used to delete records from a table. In this query, we are using the DELETE statement to delete the ride with id 2. The WHERE clause is used to identify the specific ride based on its id.


**mongodb**

db.rides.deleteOne({ id: 2 });

In MongoDB, the deleteOne() method is used to delete a single document that matches a specific condition. In this case, we are using the deleteOne() method to delete the ride with id 2. The { id: 2 } condition specifies the ride to be deleted based on its id.

These queries will delete the ride with id 2.
