# Snack inventory
inventory = []

# Sales record
sales_record = []

# Function to display the main menu
def display_menu():
    print("Mumbai Munchies: The Canteen Chronicle")
    print("1. Add a snack to the inventory")
    print("2. Remove a snack from the inventory")
    print("3. Update the availability of a snack")
    print("4. Record a sale")
    print("5. View inventory")
    print("6. View sales record")
    print("0. Exit")

# Function to add a snack to the inventory
def add_snack():
    snack_id = input("Enter snack ID: ")
    snack_name = input("Enter snack name: ")
    snack_price = float(input("Enter snack price: "))
    snack_availability = input("Is the snack available? (yes/no): ")
    snack = {
        "ID": snack_id,
        "Name": snack_name,
        "Price": snack_price,
        "Availability": snack_availability.lower() == "yes"
    }
    inventory.append(snack)
    print("Snack added to the inventory.")

# Function to remove a snack from the inventory
def remove_snack():
    snack_id = input("Enter snack ID to remove: ")
    for snack in inventory:
        if snack["ID"] == snack_id:
            inventory.remove(snack)
            print("Snack removed from the inventory.")
            return
    print("Snack not found in the inventory.")

# Function to update the availability of a snack
def update_availability():
    snack_id = input("Enter snack ID to update availability: ")
    for snack in inventory:
        if snack["ID"] == snack_id:
            new_availability = input("Is the snack available now? (yes/no): ")
            snack["Availability"] = new_availability.lower() == "yes"
            print("Availability updated.")
            return
    print("Snack not found in the inventory.")

# Function to record a sale
def record_sale():
    snack_id = input("Enter snack ID sold: ")
    quantity = int(input("Enter quantity sold: "))
    for snack in inventory:
        if snack["ID"] == snack_id:
            if snack["Availability"]:
                sale = {
                    "ID": snack_id,
                    "Quantity": quantity
                }
                sales_record.append(sale)
                snack["Availability"] = False
                print("Sale recorded.")
                return
            else:
                print("Snack is unavailable.")
                return
    print("Snack not found in the inventory.")

# Function to view the inventory
def view_inventory():
    print("Snack Inventory:")
    if not inventory:
        print("No snacks in the inventory.")
    else:
        for snack in inventory:
            print("ID:", snack["ID"])
            print("Name:", snack["Name"])
            print("Price:", snack["Price"])
            print("Availability:", "Yes" if snack["Availability"] else "No")
            print("-------------------------")

# Function to view the sales record
def view_sales_record():
    print("Sales Record:")
    if not sales_record:
        print("No sales recorded.")
    else:
        for sale in sales_record:
            print("ID:", sale["ID"])
            print("Quantity:", sale["Quantity"])
            print("-------------------------")

# Main program loop
while True:
    display_menu()
    choice = input("Enter your choice: ")

    if choice == "1":
        add_snack()
    elif choice == "2":
        remove_snack()
    elif choice == "3":
        update_availability()
    elif choice == "4":
        record_sale()
    elif choice == "5":
        view_inventory()
    elif choice == "6":
        view_sales_record()
    elif choice == "0":
        print("Exiting the program.")
        break
    else:
        print("Invalid choice. Please try again.")
