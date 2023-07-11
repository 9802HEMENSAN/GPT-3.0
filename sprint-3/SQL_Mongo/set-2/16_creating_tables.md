**Problem 16:**

- **Prerequisite**: Understand creating tables in SQL / collections in MongoDB
- **Problem**: Create a **`Restaurants`** table / collection with the fields defined above

SQL Table creation : 

CREATE TABLE Restaurants (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  cuisine_type VARCHAR(255),
  location VARCHAR(255),
  average_rating DECIMAL(3, 1),
  delivery_available BOOLEAN
);

IN MONGODB  : 

db.createCollection("Restaurants", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "cuisine_type", "location", "average_rating", "delivery_available"],
      properties: {
        id: {
          bsonType: "int",
          description: "Restaurant ID"
        },
        name: {
          bsonType: "string",
          description: "Restaurant name"
        },
        cuisine_type: {
          bsonType: "string",
          description: "Type of cuisine"
        },
        location: {
          bsonType: "string",
          description: "Restaurant location"
        },
        average_rating: {
          bsonType: "decimal",
          description: "Average rating of the restaurant"
        },
        delivery_available: {
          bsonType: "bool",
          description: "Indicates if delivery is available"
        }
      }
    }
  }
});

In MongoDB, the collection is created using the db.createCollection() method, and we specify a JSON schema to define the structure and validation rules for the documents in the collection. The schema ensures that each document has the required fields with the specified data types.


