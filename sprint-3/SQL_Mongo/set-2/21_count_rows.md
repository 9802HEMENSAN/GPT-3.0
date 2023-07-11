**Problem 21:**

- **Prerequisite**: Understand how to count rows / documents in SQL / MongoDB
- **Problem**: Write a query to count the number of restaurants that have **`delivery_available`**.


To count the number of restaurants that have delivery_available, you can use the following queries:

In SQL:

SELECT COUNT(*)
FROM Restaurants
WHERE delivery_available = true;

In MongoDB:

db.Restaurants.count({ delivery_available: true });

Both queries will count the number of restaurants that have delivery_available set to true. Adjust the field name based on your schema if necessary.
