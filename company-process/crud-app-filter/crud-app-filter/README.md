 Problem Objective
To create a Product Listing application similar to myntra , with the following features of, filtering, sorting, and protected routes.

(Setup)
Create the basic Redux store with all the components of actionTypes, actions, reducer.js and store.js, and connect it with the React application component
Setup the Routes for different pages, required in the application.
  <Route path="/" element={<HomePage />} /> (Product List will be displayed here)
  <Route path="/admin" element={<Admin />} /> (For adding products to DB)
  <Route path="/products/:id" element={<SingleProduct />} />
  <Route path="/products/:id/edit" element={<EditProduct />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
[db.json]

Setup json-server to run on port 8080. db.json file.
Part-1 (Admin)
Create admin page to add data to the DB
The Admin page will be a private route
Part-2 (Initial Render)
Render the data present in the db.json file, inside the ProductList component, when the application mounts.
Use Redux to store the data recieved from db.json
Part-3 (Filter component)
Create a filter component, that filters the data based on the category type.
It should show the filter category on the URL search params, when the user changes the filter category.
Make sure that the URL search params and the filter data in the UI (checkboxes) persist when the URL is opened in another tab
Note:

Filter and sorting should work together.
Filter and sort data in the URL should persist across page refreshes and different browser tabs.
Make sure the data is also re-rendering based on the selected params
Part-3 (Sort component)
Create a sort component, that sorts the data based on price.
It should show the sorted category on the URL search params, when the user changes the sort criteria.
Make sure that the URL search params and the sort data in the UI (checkboxes) persist when the URL is opened in another tab
Part-4 (Authentication)
Create the login functionality to authenticate the user (use reqres.in api)
Make sure to separate the product data and the auth data in different reducers (use combineReducers)
Part-5 (Protected Routes)
Make the SingleProduct page and EditProduct page, a protected route.
Create a higher order component, that checks if the user is authenticated.
If the user is not authenticated, redirect him to the Login page, else take him to the protected route.
Part-6 (Optional)
Can create the Edit functionality of the products, inside the EditProduct page.
General Info
Use Redux Thunks to make API calls
API calls should have all the (Request, Success and Failure types)