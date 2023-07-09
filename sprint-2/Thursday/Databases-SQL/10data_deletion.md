**Problem 10:**

- **Prerequisite**: Understand data deletion in SQL / MongoDB

Data deletion in MongoDB:

In MongoDB, you can use the deleteOne() or deleteMany() methods to remove documents from a collection. These methods allow you to specify the filter criteria to identify the document(s) to delete. Here's a general syntax for deleting data in MongoDB:

=>        db.collection.deleteOne(filter);
=>        db.collection.deleteMany(filter);



Certainly! I can explain how data deletion works in SQL and MongoDB.

Data deletion in SQL:

In SQL, you can use the DELETE statement to remove one or more records from a table. The DELETE statement allows you to specify conditions to identify the records to delete. Here's a general syntax for deleting data in SQL:

=>      DELETE FROM table_name WHERE condition;

- **Problem**: Write a query to delete the customer with **`id`** 2

=>Mongo =>   db.customers.deleteOne({ id: 2 });

=>SQL =>     DELETE FROM customers WHERE id = 2;
