**Problem 14:**

- **Prerequisite**: Understand how to use OR conditions in SQL / MongoDB

db.customers.find({ $or: [ { city: 'New York' },
                           { city: 'London' } ] 
                  });

SELECT * FROM customers WHERE city = 'New York' OR city = 'London';


- **Problem**: Write a query to fetch all customers whose **`id`** is less than 3 or **`name`** ends with 's'.

db.customers.find({ $or: [ { id: { $lt: 3 } }, 
                           { name: /s$/ } ] 
                  });

SELECT * FROM customers WHERE id < 3 OR name LIKE '%s';


