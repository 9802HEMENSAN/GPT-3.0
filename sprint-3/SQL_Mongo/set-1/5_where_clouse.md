**Problem 5:**

- **Prerequisite**: Understand basic WHERE clause in SQL / MongoDB's find method
- **Problem**: Write a query to fetch the customer with the **`id`** of 3.


To fetch the customer with the id of 3 in SQL, we can use the following query:

SELECT * FROM Customers WHERE id = 3;

In MongoDB, we can use the find() method with a query filter to fetch the customer with the id of 3. 

db.Customers.find({ id: 3 });
