**Problem 36:**

- **Prerequisite**: Understand using the MAX and MIN functions in SQL / using sort and limit in MongoDB
- **Problem**: Write a query to find the ride with the highest and lowest **`fare`**.


**sql**

To find the ride with the highest fare:

SELECT * FROM Rides ORDER BY fare DESC LIMIT 1;

To find the ride with the lowest fare:
 
 SELECT * FROM Rides ORDER BY fare ASC LIMIT 1;

 In SQL, we use the ORDER BY clause to sort the rows based on the fare field. By specifying DESC, we sort in descending order to find the ride with the highest fare. Similarly, by specifying ASC, we sort in ascending order to find the ride with the lowest fare. The LIMIT 1 clause is used to retrieve only the first row in the sorted results.


**mongodb**

To find the ride with the highest fare:

db.rides.find().sort({ fare: -1 }).limit(1);

To find the ride with the lowest fare:

db.rides.find().sort({ fare: 1 }).limit(1);


In MongoDB, we use the sort() method to sort the documents based on the fare field. By specifying -1, we sort in descending order to find the ride with the highest fare. Similarly, by specifying 1, we sort in ascending order to find the ride with the lowest fare. The limit(1) method is used to retrieve only the first document in the sorted results.

These simplified queries will help you find the ride with the highest and lowest fare.



