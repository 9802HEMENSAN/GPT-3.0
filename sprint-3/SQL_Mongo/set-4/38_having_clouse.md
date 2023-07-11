**Problem 38:**

- **Prerequisite**: Understand using HAVING clause in SQL / using match in MongoDB's aggregate pipeline
- **Problem**: Write a query to find **`driver_id`** that have completed more than 5 rides.

**sql**

SELECT driver_id, COUNT(*) AS ride_count FROM Rides GROUP BY driver_id HAVING COUNT(*) > 5;

In SQL, the COUNT() function is used to count the number of rows returned by a query. In this query, we are using the COUNT() function to count the number of rides for each driver_id. The GROUP BY clause is used to group the rows by the driver_id. The HAVING clause is used to filter the groups based on the count of rides, specifying that it should be greater than 5.


**mongodb**

db.rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      ride_count: { $sum: 1 }
    }
  },
  {
    $match: {
      ride_count: { $gt: 5 }
    }
  }
]);

In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents for aggregation. In this case, we are grouping the documents by the driver_id using "$driver_id" as the _id field. The $sum operator is used within the $group stage to calculate the count of rides as ride_count. The $match stage is used to filter the groups, specifying that the ride_count should be greater than 5.

These queries will find the driver_id that have completed more than 5 rides.
