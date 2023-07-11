**Problem 32:**

- **Prerequisite**: Understand how to use the COUNT function in SQL / MongoDB's aggregate functions
- **Problem**: Write a query to count the number of rides for a given **`driver_id`**.


**sql**

SELECT COUNT(*) AS ride_count
FROM Rides
WHERE driver_id = {driver_id};


In SQL, the COUNT() function is used to count the number of rows returned by a query. In this query, we are using the COUNT() function to count the number of rides for a specific driver_id. The AS keyword is used to assign an alias to the count result as "ride_count". The WHERE clause is used to filter the rows based on the given driver_id.

**mongodb**

db.rides.count({ driver_id: ObjectId("driverObjectId") });

In MongoDB, the count() method is used to count the number of documents that match a specific condition. In this case, we are using the count() method to count the number of rides for a specific driver_id. We provide the condition { driver_id: ObjectId("driverObjectId") } to match the desired driver based on the given driverObjectId.

Make sure to replace "driverObjectId" with the actual ObjectId for the desired driver.