**Problem 17:**

- **Prerequisite**: Understand inserting data into SQL tables / MongoDB collections
- **Problem**: Insert five rows / documents into the **`Restaurants`** table / collection with data of your choice.

INSERT INTO Restaurants (id, name, cuisine_type, location, average_rating, delivery_available)
VALUES
  (1, 'Restaurant A', 'Italian', 'New York', 4.5, true),
  (2, 'Restaurant B', 'Chinese', 'London', 3.8, false),
  (3, 'Restaurant C', 'Mexican', 'Los Angeles', 4.2, true),
  (4, 'Restaurant D', 'Indian', 'Mumbai', 4.7, true),
  (5, 'Restaurant E', 'Japanese', 'Tokyo', 4.0, false);

And here's an example of how you can insert five documents into the Restaurants collection in MongoDB:


db.Restaurants.insertMany([
  {
    id: 1,
    name: "Restaurant A",
    cuisine_type: "Italian",
    location: "New York",
    average_rating: 4.5,
    delivery_available: true
  },
  {
    id: 2,
    name: "Restaurant B",
    cuisine_type: "Chinese",
    location: "London",
    average_rating: 3.8,
    delivery_available: false
  },
  {
    id: 3,
    name: "Restaurant C",
    cuisine_type: "Mexican",
    location: "Los Angeles",
    average_rating: 4.2,
    delivery_available: true
  },
  {
    id: 4,
    name: "Restaurant D",
    cuisine_type: "Indian",
    location: "Mumbai",
    average_rating: 4.7,
    delivery_available: true
  },
  {
    id: 5,
    name: "Restaurant E",
    cuisine_type: "Japanese",
    location: "Tokyo",
    average_rating: 4.0,
    delivery_available: false
  }
]);


These queries will insert five rows/documents into the Restaurants table/collection with the specified data. Adjust the values as per your preference.