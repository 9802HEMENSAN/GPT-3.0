**Problem 20:**

- **Prerequisite**: Understand how to use NULL checks in SQL / MongoDB
- **Problem**: Write a query to fetch all restaurants where the **`cuisine_type`** field is not set or is null.

To fetch all restaurants where the cuisine_type field is not set or is null, you can use the following queries:

In SQL:

SELECT *
FROM Restaurants
WHERE cuisine_type IS NULL OR cuisine_type = '';

In MongoDB:

db.Restaurants.find({
  $or: [
    { cuisine_type: null },
    { cuisine_type: { $eq: '' } }
  ]
});


Both queries will retrieve all restaurants where the cuisine_type field is either not set (null) or an empty string. Adjust the field name based on your schema if necessary.