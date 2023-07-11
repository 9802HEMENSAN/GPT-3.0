**Problem 43:**

- **Prerequisite**: Understand the use of complex mathematical operations in SQL / MongoDB
- **Problem**: Write a query to calculate the fare per mile for each ride and return the ride ids and their fare per mile, ordered by fare per mile in descending order.

**sql**

SELECT id, fare / distance AS fare_per_mile FROM Rides ORDER BY fare_per_mile DESC;

In SQL, we divide the fare column by the distance column to calculate the fare per mile for each ride. By using the AS keyword, we assign the calculated value an alias as "fare_per_mile". The ORDER BY clause is used to sort the result set in descending order based on the fare per mile.

**mongodb**

db.rides.aggregate([
  {
    $project: {
      _id: 0,
      id: 1,
      fare_per_mile: { $divide: ["$fare", "$distance"] }
    }
  },
  {
    $sort: { fare_per_mile: -1 }
  }
]);

In MongoDB, we use the $project stage to shape the output and calculate the fare per mile by using the $divide operator. The $divide operator divides the fare field by the distance field to calculate the fare per mile. The $sort stage is used to sort the results in descending order based on the fare per mile.

These queries will calculate the fare per mile for each ride and return the ride ids and their fare per mile, ordered by fare per mile in descending order.
