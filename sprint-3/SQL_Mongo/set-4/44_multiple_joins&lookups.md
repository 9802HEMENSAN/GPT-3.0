**Problem 44:**

- **Prerequisite**: Understand the use of multiple JOINs in SQL / multiple Lookups in MongoDB
- **Problem**: Assuming there's another collection/table **`Passengers`** with **`passenger_id`** and **`name`** fields, write a query to return a list of all rides including the driver's name and passenger's name.


**sql**

SELECT Rides.id, Drivers.name AS driver_name, Passengers.name AS passenger_name FROM Rides
JOIN Drivers ON Rides.driver_id = Drivers.driver_id
JOIN Passengers ON Rides.passenger_id = Passengers.passenger_id;

In SQL, we use the JOIN operation to combine the "Rides" table with the "Drivers" and "Passengers" tables based on the corresponding driver_id and passenger_id columns. By specifying the join conditions Rides.driver_id = Drivers.driver_id and Rides.passenger_id = Passengers.passenger_id, we ensure that the appropriate rows are joined. Then, we select the desired columns from the tables, and we assign aliases to the driver's name and passenger's name using the AS keyword.


**mongodb**

db.rides.aggregate([
  {
    $lookup: {
      from: "Drivers",
      localField: "driver_id",
      foreignField: "driver_id",
      as: "driver"
    }
  },
  {
    $lookup: {
      from: "Passengers",
      localField: "passenger_id",
      foreignField: "passenger_id",
      as: "passenger"
    }
  },
  {
    $unwind: "$driver"
  },
  {
    $unwind: "$passenger"
  },
  {
    $project: {
      _id: 0,
      ride_id: "$id",
      driver_name: "$driver.name",
      passenger_name: "$passenger.name"
    }
  }
]);

In MongoDB, we use the $lookup stage to perform a left join operation and combine the "Rides" collection with the "Drivers" and "Passengers" collections based on the corresponding fields (driver_id and passenger_id). The from field specifies the name of the collection to join, and the localField and foreignField specify the fields to match on. We assign the joined documents from "Drivers" and "Passengers" to arrays using the as field.

Then, we use the $unwind stage to deconstruct the arrays created by the $lookup stage. This allows us to access the driver and passenger documents individually.

Finally, we use the $project stage to shape the output, including the desired fields (ride_id, driver_name, and passenger_name), and exclude the _id field.

These queries will return a list of all rides including the driver's name and passenger's name.
