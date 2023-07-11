**Problem 37:**

- **Prerequisite**: Understand using the GROUP BY clause in SQL / using aggregate in MongoDB
- **Problem**: Write a query to find the average **`fare`** and **`distance`** for each **`driver_id`**.


**sql**

SELECT driver_id, AVG(fare) AS average_fare, AVG(distance) AS average_distance FROM Rides GROUP BY driver_id;

In SQL, the AVG() function is used to calculate the average of a column. In this query, we are using the AVG() function to calculate the average fare and distance for each driver_id. The AS keyword is used to assign aliases to the calculated averages as "average_fare" and "average_distance". The GROUP BY clause is used to group the rows by the driver_id.


**mongodb**

db.rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      average_fare: { $avg: "$fare" },
      average_distance: { $avg: "$distance" }
    }
  }
]);

In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents for aggregation. In this case, we are grouping the documents by the driver_id using "$driver_id" as the _id field. The $avg operator is used within the $group stage to calculate the average of the "fare" and "distance" fields. The results are returned with the "average_fare" and "average_distance" fields.

In both SQL and MongoDB, these queries will calculate the average fare and distance for each driver_id.
