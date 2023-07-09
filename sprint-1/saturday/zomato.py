from tabulate import tabulate
import os
import json
from termcolor import colored
 
# Global variables
menu_file = "menu.json"
orders_file = "orders.json"
users_file = "users.json"

admin_username = "admin"
admin_password = "admin123"

def save_menu(menu):
    with open(menu_file, "w") as file:
        json.dump(menu, file)

def save_orders(orders):
    with open(orders_file, "w") as file:
        json.dump(orders, file)

# def save_users(users):
#     with open(users_file, "w") as file:
#         json.dump(users, file)

def save_users(users):
    with open(users_file, "w") as file:
        json.dump(users, file)


def load_menu():
    if os.path.exists(menu_file):
        with open(menu_file, "r") as file:
            menu = json.load(file)
    else:
        menu = []
    return menu

def load_orders():
    if os.path.exists(orders_file):
        with open(orders_file, "r") as file:
            orders = json.load(file)
    else:
        orders = {}
    return orders

def load_users():
    if os.path.exists(users_file):
        with open(users_file, "r") as file:
            users = json.load(file)
    else:
        users = []
    return users

# # Register a new user
# def register(users):
#     username = input("Enter username: ")
#     password = input("Enter password: ")
#     wallet = float(input("Enter initial wallet amount: "))
#     user = {"username": username, "password": password, "wallet": wallet}
#     users.append(user)
#     save_users(users)
#     print("Registration successful.\n")



def register(users):
    username = input("Enter username: ")
    password = input("Enter password: ")
    wallet = float(input("Enter initial wallet amount: "))
    user = {"username": username, "password": password, "wallet": wallet}
    users.append(user)
    save_users(users)
    print("Registration successful.\n")


# # Login
def login(users):
    username = input("Enter username: ")
    password = input("Enter password: ")
    for user in users:
        if user["username"] == username and user["password"] == password:
            print("Login successful.\n")
            return user
    print("Invalid username or password.\n")
    return None





# Display the menu
def display_menu(menu):
    headers = ["Dish ID", "Name", "Price", "Availability"]
    rows = [[item["dish_id"], item["name"], colored(f"${item['price']}", 'yellow'), colored("Available", 'green') if item["availability"] else colored("Not available", 'red')] for item in menu]
    print(tabulate(rows, headers=headers, tablefmt="fancy_grid"))
    print()


# Add a new dish to the menu
def add_dish(menu):
    dish_id = input("Enter dish ID: ")
    name = input("Enter dish name: ")
    price = float(input("Enter dish price: "))
    availability = True
    menu.append({"dish_id": dish_id, "name": name, "price": price, "availability": availability})
    save_menu(menu)
    print("Dish added successfully.\n")

# Remove a dish from the menu
def remove_dish(menu):
    dish_id = input("Enter dish ID to remove: ")
    for item in menu:
        if item["dish_id"] == dish_id:
            menu.remove(item)
            save_menu(menu)
            print("Dish removed successfully.\n")
            return
    print("Dish not found.\n")

# Update the availability of a dish
def update_availability(menu):
    dish_id = input("Enter dish ID to update availability: ")
    for item in menu:
        if item["dish_id"] == dish_id:
            availability = input("Enter availability (yes/no): ").lower() == "yes"
            item["availability"] = availability
            save_menu(menu)
            print("Availability updated successfully.\n")
            return
    print("Dish not found.\n")

# Take a new order
def take_order(menu, orders, user):
    display_menu(menu)
    customer_name = input("Enter customer name: ")
    dish_ids = input("Enter dish IDs (separated by commas): ").split(",")
    order = {}
    order["customer_name"] = customer_name
    order["items"] = []
    order["status"] = "received"
    total_price = 0
    for dish_id in dish_ids:
        for item in menu:
            if item["dish_id"] == dish_id.strip() and item["availability"]:
                order["items"].append(item)
                total_price += item["price"]
                break
        else:
            print(f"Dish with ID {dish_id.strip()} not found or not available. Skipping...")
    if order["items"]:
        order_id = str(len(orders) + 1)
        order["total_price"] = total_price
        if total_price > user["wallet"]:
            print("Insufficient funds in wallet. Order cannot be placed.\n")
        else:
            orders[order_id] = order
            user["wallet"] -= total_price
            save_orders(orders)
            save_users(user)
            print(f"Order placed successfully. Order ID: {order_id}\n")
            print(f"Total Price: ${total_price}")
            print(f"Remaining Wallet Balance: ${user['wallet']}\n")
    else:
        print("No valid items in the order. Order not placed.\n")

# Update the status of an order
def update_order_status(orders):
    order_id = input("Enter order ID to update status: ")
    if order_id in orders:
        status = input("Enter new status: ")
        orders[order_id]["status"] = status
        save_orders(orders)
        print("Order status updated successfully.\n")
    else:
        print("Order not found.\n")

# Display all orders or filter by status
def display_orders(orders):
    status_filter = input("Enter status to filter by (leave blank for all orders): ")
    headers = ["Order ID", "Customer Name", "Status", "Total Price"]
    rows = []
    for order_id, order in orders.items():
        if not status_filter or order["status"] == status_filter:
            total_price = order.get("total_price", "N/A")
            rows.append([colored(order_id, 'cyan'), colored(order["customer_name"], 'cyan'), colored(order["status"], 'yellow'), colored(f"${total_price}", 'yellow')])
    print(tabulate(rows, headers=headers, tablefmt="fancy_grid"))
    print()

# Admin login
def admin_login():
    username = input("Enter admin username: ")
    password = input("Enter admin password: ")
    return username == admin_username and password == admin_password

# Admin functionalities
def admin_menu(menu, orders):
    while True:
        print("Admin Menu")
        print("===========")
        print("1. Display Menu")
        print("2. Add Dish")
        print("3. Remove Dish")
        print("4. Update Availability")
        print("5. Display Orders")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║      Menu               ║")
            print("    ╚═════════════════════════╝")
            display_menu(menu)
        elif choice == "2":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║     Add Dish            ║")
            print("    ╚═════════════════════════╝")
            add_dish(menu)
        elif choice == "3":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║     Remove Dish         ║")
            print("    ╚═════════════════════════╝")
            remove_dish(menu)
        elif choice == "4":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║  Update Availability    ║")
            print("    ╚═════════════════════════╝")
            update_availability(menu)
        elif choice == "5":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║  Display Orders         ║")
            print("    ╚═════════════════════════╝")
            display_orders(orders)
        elif choice == "6":
            save_menu(menu)
            save_orders(orders)
            print("Thank you for using Zomato Chronicles. Have a great day!")
            break
        else:
            print("Invalid choice. Please try again.\n")

# User functionalities
# User functionalities
def user_menu(menu, orders, user):
    while True:
        print("User Menu")
        print("=========")
        print("1. Display Menu")
        print("2. Place Order")
        print("3. Update Order Status")
        print("4. Check Wallet Balance")
        print("5. Logout")  # Added logout option

        choice = input("Enter your choice: ")

        if choice == "1":
            # Display menu code
            display_menu(menu)
        elif choice == "2":
            # Place order code
            take_order(menu, orders, user)
        elif choice == "3":
            # Update order status code
            update_order_status(orders)
        elif choice == "4":
            print("\n")
            print("    ╔═════════════════════════╗")
            if user:
                print(f"    ║ Wallet Balance: ${user['wallet']}")
            else:
                print("    ║ Please log in to check your wallet balance.")
            print("    ╚═════════════════════════╝")
        elif choice == "5":
            # Logout code
            print("Logged out successfully.\n")
            break
        else:
            print("Invalid choice. Please try again.\n")

# Main function
def main():
    menu = load_menu()
    orders = load_orders()
    users = load_users()

    print("Welcome to Zomato Chronicles!")

    while True:
        print("1. Register")
        print("2. Login")
        print("3. Admin Login")
        print("4. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║         Register        ║")
            print("    ╚═════════════════════════╝")
            register(users)
        elif choice == "2":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║          Login          ║")
            print("    ╚═════════════════════════╝")
            user = login(users)
            if user:
                user_menu(menu, orders, user)
        elif choice == "3":
            print("\n")
            print("    ╔═════════════════════════╗")
            print("    ║       Admin Login       ║")
            print("    ╚═════════════════════════╝")
            if admin_login():
                admin_menu(menu, orders)
            else:
                print("Invalid admin credentials.\n")
        elif choice == "4":
            save_menu(menu)
            save_orders(orders)
            save_users(users)
            print("Thank you for using Zomato Chronicles. Have a great day!")
            break
        else:
            print("Invalid choice. Please try again.\n")

# Run the program
if __name__ == "__main__":
    main()