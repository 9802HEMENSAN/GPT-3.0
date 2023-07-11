**Problem 31:**

- **Prerequisite**: Understand using string patterns in SQL (LIKE clause) / using regex in MongoDB
- **Problem**: Write a query to fetch all rides whose **`start_location`** or **`end_location`** contains 'Downtown'.


**sql**

  SELECT * FROM Rides
WHERE start_location LIKE '%Downtown%' OR end_location LIKE '%Downtown%';

In SQL, the LIKE operator is used for pattern matching. The % symbol represents a wildcard that matches any sequence of characters. By using %Downtown%, we are searching for the term 'Downtown' anywhere within the start_location or end_location columns.

**mongodb**

db.rides.find({
  $or: [
    { start_location: /Downtown/ },
    { end_location: /Downtown/ }
  ]
});

In MongoDB, we can use regular expressions (regex) to perform pattern matching. The /Downtown/ regex pattern searches for the term 'Downtown' within the start_location or end_location fields.

The $or operator is used in MongoDB to specify that either condition should match. The $or operator accepts an array of conditions, and in this case, we have two conditions: one for start_location and one for end_location.