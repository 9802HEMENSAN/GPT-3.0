**Problem 39:**

- **Prerequisite**: Understand the use of INNER JOIN in SQL / Lookup in MongoDB
- **Problem**: Assuming there is another collection/table called **`Drivers`** with **`driver_id`** and **`name`** fields, write a query to find the name of the driver with the highest **`fare`**.


**sql**

SELECT d.name FROM Drivers d JOIN Rides r ON d.driver_id = r.driver_id WHERE r.fare = (SELECT MAX(fare)FROM Rides);

In SQL, we can use a JOIN operation to combine the "Drivers" and "Rides" tables based on the driver_id column. Then, we can use a subquery (SELECT MAX(fare) FROM Rides) to find the maximum fare. Finally, we filter the result to retrieve the name of the driver with the highest fare.

**mongodb**

db.rides.aggregate([
  {
    $sort: { fare: -1 }
  },
  {
    $lookup: {
      from: "Drivers",
      localField: "driver_id",
      foreignField: "driver_id",
      as: "driver"
    }
  },
  {
    $limit: 1
  },
  {
    $project: {
      _id: 0,
      driver_name: { $arrayElemAt: ["$driver.name", 0] }
    }
  }
]);

In MongoDB, we use the $sort stage to sort the documents based on the fare field in descending order (-1). Then, we perform a $lookup operation to join the "Drivers" collection based on the driver_id field. The $limit stage is used to retrieve only the first document after sorting. Finally, we use the $project stage to shape the result and extract the driver_name from the joined "Drivers" collection.

Please note that in the MongoDB example, we assume that the "Drivers" collection has a field called name where the driver's name is stored.
