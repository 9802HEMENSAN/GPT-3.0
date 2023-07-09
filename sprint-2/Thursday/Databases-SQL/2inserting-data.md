**Problem 2:**

- **Prerequisite**: Understand inserting data into SQL tables / MongoDB collections
- **Problem**: Insert five rows / documents into the **`Customers`** table / collection with data of your choice.



INSERT INTO customers (id, name, email, address, phone_number)
VALUES
  (1, 'John Doe', 'john@example.com', '123 Main St', '123-456-7890'),
  (2, 'Jane Smith', 'jane@example.com', '456 Elm St', '987-654-3210'),
  (3, 'David Johnson', 'david@example.com', '789 Oak St', '555-123-4567'),
  (4, 'Emily Brown', 'emily@example.com', '321 Pine St', '111-222-3333'),
  (5, 'Michael Wilson', 'michael@example.com', '555 Cedar St', '444-555-6666');

In MongoDB :- 

  db.customers.insertMany([
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    phone_number: '123-456-7890',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: '456 Elm St',
    phone_number: '987-654-3210',
  },
  {
    id: '3',
    name: 'David Johnson',
    email: 'david@example.com',
    address: '789 Oak St',
    phone_number: '555-123-4567',
  },
  {
    id: '4',
    name: 'Emily Brown',
    email: 'emily@example.com',
    address: '321 Pine St',
    phone_number: '111-222-3333',
  },
  {
    id: '5',
    name: 'Michael Wilson',
    email: 'michael@example.com',
    address: '555 Cedar St',
    phone_number: '444-555-6666',
  }
]);
