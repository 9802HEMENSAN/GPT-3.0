**Problem 1:**

- **Prerequisite**: Understand creating tables in SQL / collections in MongoDB
- **Problem**: Create a **`Customers`** table / collection with the following fields: **`id`** (unique identifier), **`name`**, **`email`**, **`address`**, and **`phone_number`**.

SQL:
To create a Customers table in SQL, you can use the following query:

CREATE TABLE Customers (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  address VARCHAR(255),
  phone_number VARCHAR(20)
);

MongoDB:
In MongoDB, data is organized into collections. To create a Customers collection with the specified fields, you can use the following syntax:

db.Customers.insertOne({
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  address: "123 Main St",
  phone_number: "123-456-7890"
});

