**Problem 8:**

- **Prerequisite**: Understand data updating in SQL / MongoDB
Updating data in MongoDB:

db.collection.updateOne(filter, update, options);

db.customers.updateOne(
  { id: 1 },
  { $set: { email: 'newemail@example.com' } }
);

In MongoDB, you can use the updateOne() or updateMany() methods to update documents in a collection. These methods allow you to specify the filter criteria to identify the document(s) to update and the changes to apply. Here's a general syntax for updating data in MongoDB:

Updating data in SQL:

In SQL, you can use the UPDATE statement to modify existing records in a table. The UPDATE statement allows you to specify which columns and values should be updated based on specified conditions. Here's a general syntax for updating data in SQL

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

UPDATE customers
SET email = 'newemail@example.com'
WHERE id = 1;



- **Problem**: Write a query to update the **`address`** of the customer with **`id`** 4.

Updating the address of the customer with id 4 in MongoDB:

    db.customers.updateOne(
    { id: 4 },
    { $set: { address: 'New Address' } }
    );

Updating the address of the customer with id 4 in SQL:

    UPDATE customers
    SET address = 'New Address'
    WHERE id = 4;
