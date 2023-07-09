**Problem 5:**

- **Prerequisite**: Understand basic WHERE clause in SQL / MongoDB's find method
- **Problem**: Write a query to fetch the customer with the **`id`** of 3.

Fetching the customer with the id of 3 in SQL:
 
SELECT * FROM customers WHERE id = 3;

Fetching the customer with the id of 3 in MongoDB:

db.customers.find({ id: 3 });



