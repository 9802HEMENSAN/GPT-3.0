**Problem 19:**

- **Prerequisite**: Understand filtering with multiple conditions in SQL / MongoDB
- **Problem**: Write a query to fetch all restaurants that offer **`delivery_available`** and have an **`average_rating`** of more than 4.

To fetch all restaurants that offer delivery_available and have an average_rating of more than 4, you can use the following queries:

In SQL:

SELECT *
FROM Restaurants
WHERE delivery_available = true AND average_rating > 4;

In MongoDB:

db.Restaurants.find({
  delivery_available: true,
  average_rating: { $gt: 4 }
});

Both queries will retrieve all restaurants that meet the specified conditions: delivery_available is true and average_rating is greater than 4. Adjust the field names and values based on your schema if necessary.



