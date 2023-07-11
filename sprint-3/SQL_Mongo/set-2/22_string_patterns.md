**Problem 22:**

- **Prerequisite**: Understand using string patterns in SQL (LIKE clause) / using regex in MongoDB
- **Problem**: Write a query to fetch all restaurants whose **`location`** contains 'New York'.

To fetch all restaurants whose location contains 'New York', you can use the following queries:

In SQL:

SELECT *
FROM Restaurants
WHERE location LIKE '%New York%';


In MongoDB:

db.Restaurants.find({ location: /New York/ });

Both queries will retrieve all restaurants where the location field contains the string 'New York'. Adjust the field name and pattern based on your schema if necessary. In SQL, the % symbol is used as a wildcard to match any sequence of characters, while in MongoDB, a regular expression /New York/ is used to match the pattern.