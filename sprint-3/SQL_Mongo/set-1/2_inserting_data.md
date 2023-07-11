**Problem 2:**

- **Prerequisite**: Understand inserting data into SQL tables / MongoDB collections
- **Problem**: Insert five rows / documents into the **`Customers`** table / collection with data of your choice.

Here's an example of inserting a row of data into the "customers" table:

INSERT INTO customers (id, name, email, age)
VALUES (1, 'John Doe', 'johndoe@example.com', 30);


Inserting Data into MongoDB Collections:
In MongoDB, you can insert data into a collection using the insertOne() or insertMany() method. Here's an example:


db.collection("customers").insertOne({
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30
});


You can also use the insertMany() method to insert multiple documents into a collection at once. Here's an example:

db.collection("customers").insertMany([
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", age: 25 },
  { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", age: 35 }
]);
