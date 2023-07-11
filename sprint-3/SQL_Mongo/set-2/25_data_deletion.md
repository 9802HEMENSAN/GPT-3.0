**Problem 25:**

- **Prerequisite**: Understand data deletion in SQL / MongoDB
- **Problem**: Write a query to delete the restaurant with **`id`** 3.

To delete the restaurant with id 3, you can use the following queries:

In SQL:

DELETE FROM Restaurants
WHERE id = 3;

In MongoDB:
 
db.Restaurants.deleteOne({ id: 3 });

Both queries will delete the restaurant that matches the specified id value. Adjust the field name and value based on your schema if necessary.