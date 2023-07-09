import json
menu = []
orders = []

def save_data():
    data = {
        "menu": menu,
        "orders": orders
    }
    with open("data.json", "w") as file:
        json.dump(data, file)

def load_data():
    try:
        with open("data.json", "r") as file:
            data = json.load(file)
            global menu
            global orders
            menu = data["menu"]
            orders = data["orders"]
    except FileNotFoundError:
        pass

def add_dish():
    dish_id = int(input("Enter dish ID: "))
    dish_name = input("Enter dish name: ")
    price = float(input("Enter price: "))
    availability = True
    
    menu.append({"dish_id": dish_id, "dish_name": dish_name, "price": price, "availability": availability})
    print("Dish added to the menu successfully!")
    save_data()
     

def remove_dish():
    dish_id = int(input("Enter dish ID to remove: "))
    for dish in menu:
        if dish["dish_id"] == dish_id:
            menu.remove(dish)
            print("Dish removed from the menu successfully!")
            save_data()
            break
    else:
        print("Dish not found in the menu.")
 
def update_availability():
    dish_id = int(input("Enter dish ID to update availability: "))
    availability = input("Enter availability (yes or no): ").lower() == "yes"
    
    for dish in menu:
        if dish["dish_id"] == dish_id:
            dish["availability"] = availability
            print("Availability updated successfully!")
            save_data()
            break
    else:
        print("Dish not found in the menu.")

def display_menu():
    print("Menu:")
    for dish in menu:
        print(f"Dish ID: {dish['dish_id']}, Dish Name: {dish['dish_name']}, Price: {dish['price']}, Availability: {'Yes' if dish['availability'] else 'No'}")

def take_order():
    customer_name = input("Enter customer name: ")
    dish_ids = input("Enter dish IDs (comma-separated): ").split(",")
    order_dishes = []
    valid_dish_ids = []
    
    for dish_id in dish_ids:
        dish_id = int(dish_id.strip())
        for dish in menu:
            if dish["dish_id"] == dish_id:
                valid_dish_ids.append(dish_id)
                if dish["availability"]:
                    order_dishes.append(dish)
                else:
                    print(f"Dish {dish_id} is not available. Skipping from the order.")
                break
        else:
            print(f"Dish {dish_id} not found in the menu.")
    
    if order_dishes:
        order_id = len(orders) + 1
        order_status = "received"
        order = {"order_id": order_id, "customer_name": customer_name, "dishes": order_dishes, "status": order_status}
        orders.append(order)
        print("Order placed successfully!")
        save_data()
    
    if valid_dish_ids:
        invalid_dish_ids = set(dish_ids) - set(map(str, valid_dish_ids))
        if invalid_dish_ids:
            print(f"The following dish IDs are invalid: {', '.join(invalid_dish_ids)}")

def update_order_status():
    order_id = int(input("Enter order ID to update status: "))
    new_status = input("Enter new status: ")
    
    for order in orders:
        if order["order_id"] == order_id:
            order["status"] = new_status
            print("Order status updated successfully!")
            save_data()
            break
    else:
        print("Order not found.")

def review_orders():
    print("Orders:")
    for order in orders:
        print(f"Order ID: {order['order_id']}, Customer Name: {order['customer_name']}, Status: {order['status']}")
        print("Dishes:")
        for dish in order["dishes"]:
            print(f"Dish ID: {dish['dish_id']}, Dish Name: {dish['dish_name']}, Price: {dish['price']}")
        print("----")
 

 
def main():
    load_data()
    while True:
        print("\nZesty Zomato - Food Delivery System")
        print("1. Add Dish to Menu")
        print("2. Remove Dish from Menu")
        print("3. Update Dish Availability")
        print("4. Display Menu")
        print("5. Take New Order")
        print("6. Update Order Status")
        print("7. Review Orders")
        print("8. Exit")
        
        choice = input("Enter your choice (1-8): ")
        
        if choice == "1":
            add_dish()
        elif choice == "2":
            remove_dish()
        elif choice == "3":
            update_availability()
        elif choice == "4":
            display_menu()
        elif choice == "5":
            take_order()
        elif choice == "6":
            update_order_status()
        elif choice == "7":
            review_orders()
        elif choice == "8":
            save_data()
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
 