**Problem 24:**

- **Prerequisite**: Understand how to limit results in SQL / MongoDB
- **Problem**: Write a query to fetch the top 5 restaurants when ordered by **`average_rating`** in descending order.


To fetch the top 5 restaurants when ordered by average_rating in descending order, you can use the following queries:

In SQL:

 
SELECT *
FROM Restaurants
ORDER BY average_rating DESC
LIMIT 5;

In MongoDB:
 
db.Restaurants.find()
  .sort({ average_rating: -1 })
  .limit(5);
  
Both queries will retrieve the top 5 restaurants based on their average_rating in descending order. Adjust the field name and limit as per your schema and requirements.