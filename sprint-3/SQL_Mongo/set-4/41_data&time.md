**Problem 41:**

- **Prerequisite**: Understand date and time functions in SQL / MongoDB
- **Problem**: Assuming there's a **`ride_date`** field of date type in the **`Rides`** table / collection, write a query to find all rides that happened in the last 7 days.


**sql**

SELECT * FROM Rides WHERE ride_date >= CURDATE() - INTERVAL 7 DAY;

In SQL, we use the CURDATE() function to get the current date. We subtract INTERVAL 7 DAY from the current date to calculate the date 7 days ago. Then, we use the WHERE clause to filter the rows based on the ride_date being greater than or equal to the date 7 days ago.

**mongodb**

const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

db.rides.find({ ride_date: { $gte: sevenDaysAgo } });

In MongoDB, we create a JavaScript Date object to represent the date 7 days ago using new Date(). We subtract 7 days from the current date using setDate() method. Then, we use the $gte operator to find documents where the ride_date is greater than or equal to the calculated date.

These queries will help you find all rides that happened in the last 7 days.
