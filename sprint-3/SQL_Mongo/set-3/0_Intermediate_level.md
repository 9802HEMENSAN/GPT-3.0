# Set 3: Intermediate Level

**Set 3: Intermediate Level**

We'll continue with a **`Rides`** table / collection for this set of problems. The schema represents a list of rides one might find in a ride-hailing app like Uber. Each ride has an **`id`**, **`driver_id`**, **`passenger_id`**, **`start_location`**, **`end_location`**, **`distance`** (in miles), **`ride_time`** (in minutes), and **`fare`** (in dollars).

**MongoDB Schema:**

```
{
  "_id": ObjectId(),
  "driver_id": ObjectId(),
  "passenger_id": ObjectId(),
  "start_location": String,
  "end_location": String,
  "distance": Number,
  "ride_time": Number,
  "fare": Number
}

```

**SQL Schema:**

```
CREATE TABLE Rides (
    id INT PRIMARY KEY,
    driver_id INT,
    passenger_id INT,
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    distance DECIMAL(5,2),
    ride_time DECIMAL(5,2),
    fare DECIMAL(6,2)
);

```