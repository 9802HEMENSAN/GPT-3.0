**Problem 15:**

- **Prerequisite**: Understand how to use NULL checks in SQL / MongoDB

Using NULL checks in MongoDB:

In MongoDB, you can use the $exists operator to check for the existence of a field or attribute, which indirectly checks for NULL values. Here's an example:

=>  db.customers.find({ email: { $exists: false } });

=>  db.customers.find({ email: { $exists: true } });


Using NULL checks in SQL:

In SQL, you can use the IS NULL and IS NOT NULL operators to check for NULL values in columns. Here's an example:

=> SELECT * FROM customers WHERE email IS NULL;

=> SELECT * FROM customers WHERE email IS NOT NULL;

- **Problem**: Write a query to fetch all customers where the **`phone_number`** field is not set or is null.

db.customers.find({ 
    $or: [
     { phone_number: { $exists : false } }, 
     { phone_number: null } ] 
 });

SELECT * FROM customers WHERE phone_number IS NULL;


