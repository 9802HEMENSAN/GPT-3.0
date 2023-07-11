**Problem 8:**

- **Prerequisite**: Understand data updating in SQL / MongoDB
- **Problem**: Write a query to update the **`address`** of the customer with **`id`** 4.

To update the address of the customer with id 4 in SQL, we can use the following query:

UPDATE Customers SET address = 'New Address' WHERE id = 4;

In MongoDB, you can use the updateOne() method to update the address of the customer with id 4. Here's an example query:

db.Customers.updateOne({ id: 4 }, { $set: { address: 'New Address' } });

In this query, the first object { id: 4 } specifies the query filter to identify the document with id equal to 4. The second object { $set: { address: 'New Address' } } is the update operation using the $set operator to set the new value for the address field.
