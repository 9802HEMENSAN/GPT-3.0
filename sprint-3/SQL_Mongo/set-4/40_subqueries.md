**Problem 40:**

- **Prerequisite**: Understand the concept of subqueries in SQL / using multiple stages in MongoDB's aggregate pipeline
- **Problem**: Write a query to find the top 3 drivers who have earned the most from fares. Return the drivers' ids and total earnings.


**sql**

SELECT driver_id, SUM(fare) AS total_earnings FROM Rides GROUP BY driver_id ORDER BY total_earnings DESC LIMIT 3;

In SQL, we use the SUM() function to calculate the sum of the fare column. We GROUP BY the driver_id to group the rows by the driver and calculate the total earnings for each driver. Then, we use the ORDER BY clause to sort the results in descending order based on the total earnings. Finally, we use the LIMIT clause to retrieve only the top 3 rows.

**mongodb**

db.rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      total_earnings: { $sum: "$fare" }
    }
  },
  {
    $sort: { total_earnings: -1 }
  },
  {
    $limit: 3
  },
  {
    $project: {
      _id: 0,
      driver_id: "$_id",
      total_earnings: 1
    }
  }
]);

In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents by driver_id and calculate the sum of fares using the $sum operator. Then, we use the $sort stage to sort the results in descending order based on the total earnings. The $limit stage is used to retrieve only the top 3 results. Finally, we use the $project stage to shape the output and include only the driver_id and total_earnings fields while excluding the _id.

These queries will help you find the top 3 drivers who have earned the most from fares, returning their driver IDs and total earnings.
