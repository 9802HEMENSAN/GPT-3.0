**Problem 23:**

- **Prerequisite**: Understand how to use the AVG function in SQL / MongoDB's aggregate functions
- **Problem**: Write a query to calculate the average **`average_rating`** of all restaurants.

To calculate the average average_rating of all restaurants, you can use the following queries:

In SQL:
 
SELECT AVG(average_rating) AS average_rating
FROM Restaurants;
 
In MongoDB:
 
db.Restaurants.aggregate([
  {
    $group: {
      _id: null,
      average_rating: { $avg: "$average_rating" }
    }
  }
]);

Both queries will calculate the average value of the average_rating field across all restaurants. The result will be the average rating of all restaurants. Adjust the field name based on your schema if necessary.