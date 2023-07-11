**Problem 45:**

- **Prerequisite**: Understand how to alter table schemas in SQL / adding and modifying fields in MongoDB documents
- **Problem**: Write a query to add a **`tip`** field to the **`Rides`** table / collection.


**sql**

ALTER TABLE Rides
ADD COLUMN tip DECIMAL(6,2);


In SQL, the ALTER TABLE statement is used to modify an existing table. The ADD COLUMN clause is used to add a new column to the table. In this case, we are adding the "tip" column with the data type DECIMAL(6,2), which represents a decimal number with a total of 6 digits and 2 decimal places.

**mongodb**

db.rides.updateMany({}, { $set: { tip: 0 } });


In MongoDB, you can use the updateMany() method to add a new field to all existing documents in the collection. The first parameter {} specifies an empty filter, which matches all documents in the collection. The second parameter { $set: { tip: 0 } } uses the $set operator to set the initial value of the "tip" field to 0 for all documents.

Please note that altering the table structure or schema may have different syntax or requirements depending on the database system you are using. Make sure to adjust the query syntax accordingly to the specific database system you are working with.