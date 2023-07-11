**Problem 15:**

- **Prerequisite**: Understand how to use NULL checks in SQL / MongoDB
- **Problem**: Write a query to fetch all customers where the **`phone_number`** field is not set or is null.

To fetch all customers where the phone_number field is not set or is NULL in SQL, you can use the IS NULL or IS NOT NULL operators. Here's an example query:
 
 SELECT * FROM Customers WHERE phone_number IS NULL OR phone_number = '';

This query selects all columns (*) from the Customers table and uses the WHERE clause with the IS NULL and equality operators to filter the result. The phone_number IS NULL condition matches customers where the phone_number field is not set or is NULL. The phone_number = '' condition matches customers where the phone_number field is an empty string.

In MongoDB, you can use the $exists operator to check if a field exists or not. Here's an example query:

db.Customers.find({ $or: [{ phone_number: { $exists: false } }, { phone_number: '' }] });

In this query, the $or operator is used to specify the logical OR condition for the multiple conditions. The array contains two objects: { phone_number: { $exists: false } } matches customers where the phone_number field does not exist, and { phone_number: '' } matches customers where the phone_number field is an empty string.

Both queries will fetch all customers where the phone_number field is not set or is NULL, with SQL returning a table-like result and MongoDB returning a cursor or an array of documents.

