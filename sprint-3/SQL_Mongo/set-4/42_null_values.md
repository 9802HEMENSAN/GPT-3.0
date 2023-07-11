**Problem 42:**

- **Prerequisite**: Understand the concept of NULL values and how to handle them in SQL / MongoDB
- **Problem**: Write a query to find all rides where the **`end_location`** is not set.

**sql**

SELECT * FROM Rides WHERE end_location IS NULL;

In SQL, the IS NULL operator is used to check for null values. In this query, we are using the IS NULL operator in the WHERE clause to filter the rows where the end_location is not set (i.e., it has a null value).


**mongodb**

db.rides.find({ end_location: { $exists: false } });

In MongoDB, the $exists operator is used to check if a field exists or not. By setting { $exists: false }, we filter the documents where the end_location field does not exist.

These queries will help you find all rides where the end_location is not set.
