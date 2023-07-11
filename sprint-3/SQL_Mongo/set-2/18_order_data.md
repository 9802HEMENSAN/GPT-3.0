**Problem 18:**

- **Prerequisite**: Understand how to order data in SQL / MongoDB
- **Problem**: Write a query to fetch all restaurants, ordered by **`average_rating`** in descending order.


To fetch all restaurants and order them by average_rating in descending order, you can use the following queries:

In SQL:

SELECT *
FROM Restaurants
ORDER BY average_rating DESC;

In MongoDB:

db.Restaurants.find().sort({ average_rating: -1 });

Both queries will retrieve all restaurants and order them based on the average_rating field in descending order. The restaurants with higher average ratings will appear first in the result.



