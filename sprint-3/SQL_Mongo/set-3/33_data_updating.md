**Problem 33:**

- **Prerequisite**: Understand data updating in SQL / MongoDB
- **Problem**: Write a query to update the **`fare`** of the ride with **`id`** 4.


**sql**

UPDATE Rides
SET fare = {new_fare}
WHERE id = 4;

In SQL, the UPDATE statement is used to modify existing records in a table. In this query, we are using the UPDATE statement to update the fare of the ride with id 4. The SET keyword is used to specify the column and the new value. The WHERE clause is used to identify the specific ride based on its id.


**mongodb**

db.rides.updateOne(
  { id: 4 },
  { $set: { fare: {new_fare} } }
);

In MongoDB, the updateOne() method is used to update a single document that matches a specific condition. In this case, we are using the updateOne() method to update the fare of the ride with id 4. The first parameter { id: 4 } specifies the condition to match the desired ride. The second parameter { $set: { fare: {new_fare} } } is used to set the new value for the fare field.

Make sure to replace {new_fare} with the actual new fare value you want to update.