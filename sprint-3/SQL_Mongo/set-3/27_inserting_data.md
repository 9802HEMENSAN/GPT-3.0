**Problem 27:**

- **Prerequisite**: Understand inserting data into SQL tables / MongoDB collections
- **Problem**: Insert five rows / documents into the **`Rides`** table / collection with data of your choice.


**sql**

INSERT INTO Rides (id, driver_id, passenger_id, start_location, end_location, distance, ride_time, fare)
VALUES
    (1, 101, 201, 'Location A', 'Location B', 10.5, 30.75, 25.99),
    (2, 102, 202, 'Location C', 'Location D', 8.2, 20.5, 18.75),
    (3, 103, 201, 'Location E', 'Location F', 15.1, 45.25, 35.50),
    (4, 101, 203, 'Location G', 'Location H', 6.5, 18.75, 15.99),
    (5, 104, 204, 'Location I', 'Location J', 12.3, 35.5, 28.99);

**mongodb**
 
 db.rides.insertMany([
    {
        id: 1,
        driver_id: ObjectId("driverObjectId1"),
        passenger_id: ObjectId("passengerObjectId1"),
        start_location: "Location A",
        end_location: "Location B",
        distance: 10.5,
        ride_time: 30.75,
        fare: 25.99
    },
    {
        id: 2,
        driver_id: ObjectId("driverObjectId2"),
        passenger_id: ObjectId("passengerObjectId2"),
        start_location: "Location C",
        end_location: "Location D",
        distance: 8.2,
        ride_time: 20.5,
        fare: 18.75
    },
    {
        id: 3,
        driver_id: ObjectId("driverObjectId3"),
        passenger_id: ObjectId("passengerObjectId1"),
        start_location: "Location E",
        end_location: "Location F",
        distance: 15.1,
        ride_time: 45.25,
        fare: 35.50
    },
    {
        id: 4,
        driver_id: ObjectId("driverObjectId1"),
        passenger_id: ObjectId("passengerObjectId3"),
        start_location: "Location G",
        end_location: "Location H",
        distance: 6.5,
        ride_time: 18.75,
        fare: 15.99
    },
    {
        id: 5,
        driver_id: ObjectId("driverObjectId4"),
        passenger_id: ObjectId("passengerObjectId4"),
        start_location: "Location I",
        end_location: "Location J",
        distance: 12.3,
        ride_time: 35.5,
        fare: 28.99
    }
]);
