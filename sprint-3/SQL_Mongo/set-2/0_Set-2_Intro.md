# Set 2 : Beginner Level

**Set 2: Beginner Level - Advanced**

We will be using a **`Restaurants`** table / collection for this set of problems. The schema represents a list of restaurants like one might find in a delivery app like Zomato. Each restaurant has an **`id`**, **`name`**, **`cuisine_type`** (e.g., Italian, Chinese), **`location`**, **`average_rating`**, and **`delivery_available`** (a boolean indicating if delivery is available).

**MongoDB Schema:**

```
{
  "_id": ObjectId(), 
  "name": String,
  "cuisine_type": String,
  "location": String,
  "average_rating": Number,
  "delivery_available": Boolean
}
```

**SQL Schema:**

CREATE TABLE Restaurants (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    cuisine_type VARCHAR(100),
    location VARCHAR(255),
    average_rating DECIMAL(3,2),
    delivery_available BOOLEAN
);