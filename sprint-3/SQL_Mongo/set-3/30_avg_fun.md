**Problem 30:**

- **Prerequisite**: Understand how to use the AVG function in SQL / MongoDB's aggregate functions
- **Problem**: Write a query to calculate the average **`ride_time`** of all rides.

**sql**

 SELECT AVG(ride_time) AS average_ride_time
FROM Rides;

In SQL, the AVG() function is used to calculate the average of a column. In this query, we are using the AVG() function to calculate the average ride_time of all rides. The AS keyword is used to assign an alias to the calculated average as "average_ride_time". The FROM clause specifies the table "Rides" from which the average is calculated.


**mongodb**

db.rides.aggregate([
  {
    $group: {
      _id: null,
      average_ride_time: { $avg: "$ride_time" }
    }
  }
]);


In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents for aggregation. In this case, we are grouping all documents into a single group with _id: null. The $avg operator is used within the $group stage to calculate the average of the "ride_time" field. The result is returned with the "average_ride_time" field.
