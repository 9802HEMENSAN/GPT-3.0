**Problem 29:**

- **Prerequisite**: Understand using math operations in SQL / MongoDB
- **Problem**: Write a query to calculate the total **`distance`** and total **`fare`** for all rides.

**sql**

 SELECT SUM(distance) AS total_distance, SUM(fare) AS total_fare FROM Rides;

 In SQL, the SUM() function is used to calculate the sum of a column. In this query, we are using the SUM() function to calculate the total distance and total fare for all rides. The AS keyword is used to assign aliases to the calculated sums as "total_distance" and "total_fare". The FROM clause specifies the table "Rides" from which the sums are calculated.


 **mongodb**

 db.rides.aggregate([
  {
    $group: {
      _id: null,
      total_distance: { $sum: "$distance" },
      total_fare: { $sum: "$fare" }
    }
  }
]);

In MongoDB, we use the aggregate() method to perform aggregation operations. The $group stage is used to group the documents for aggregation. In this case, we are grouping all documents into a single group with _id: null. The $sum operator is used within the $group stage to calculate the sum of the "distance" and "fare" fields. The result is returned with the "total_distance" and "total_fare" fields.
