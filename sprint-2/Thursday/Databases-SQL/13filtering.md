**Problem 13:**

- **Prerequisite**: Understand filtering with multiple conditions in SQL / MongoDB

Filtering with multiple conditions in MongoDB:

In MongoDB, you can use the $and and $or operators to filter data with multiple conditions. Here's an example of filtering data with multiple conditions using the $and operator:

db.customers.find({
  $and: [
    { age: { $gt: 30 } },
    { city: 'New York' }
  ]
});


db.customers.find({
  $or: [
    { age: { $gt: 30 } },
    { city: 'New York' }
  ]
});

Filtering with multiple conditions in SQL:

In SQL, you can use the AND and OR operators to filter data with multiple conditions.  

SELECT * FROM customers WHERE age > 30 AND city = 'New York';

SELECT * FROM customers WHERE age > 30 OR city = 'New York';



- **Problem**: Write a query to fetch all customers whose **`id`** is greater than 2 and **`name`** starts with 'B'.

db.customers.find({ 
    $and: [ { id: { $gt: 2 } },
            { name: /^B/ } ] 
        });


SELECT * FROM customers WHERE id > 2 AND name LIKE 'B%';

