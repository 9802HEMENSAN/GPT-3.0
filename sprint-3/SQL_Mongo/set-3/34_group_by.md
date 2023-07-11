**Problem 34:**

- **Prerequisite**: Understand using GROUP BY in SQL / MongoDB's aggregate functions
- **Problem**: Write a query to calculate the total **`fare`** for each **`driver_id`**.


**sql**

SELECT driver_id, SUM(fare) AS total_fare FROM Rides GROUP BY driver_id;

In SQL, the SUM() function is used to calculate the sum of a column. In this query, we are using the SUM() function to calculate the total fare for each driver_id. The AS keyword is used to assign an alias to the calculated sum as "total_fare". The GROUP BY clause is used to group the rows by the driver_id.


**mongodb**

db.rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      total_fare: { $sum: "$fare" }
    }
  }
]);

In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents for aggregation. In this case, we are grouping the documents by the driver_id using "$driver_id" as the _id field. The $sum operator is used within the $group stage to calculate the sum of the "fare" field. The result is returned with the "total_fare" field.
