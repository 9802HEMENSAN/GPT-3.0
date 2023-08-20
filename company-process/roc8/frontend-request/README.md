Here’s your attempt key which you will use while submitting your answers: 64852bM313cRI

The key is unique to you. If you use another candidate's key, your candidature will be rejected.

All the best!

You can start the test anytime but make sure you submit everything below by Aug 20th 9pm IST. Manage your time accordingly.

Exam ID: gghpc4z5p4rqlqjgj2ft28zy


1. Generate Tokenendpoint : https://dev-test.cimet.io/generate-token
Api-key : 4NKQ3-815C2-8T5Q2-16318-55301
Method: Post
You need to generate a token using the token API. (it will last for 3hrs, check the response and try to reuse the key)



2. Get Products endpoint: https://dev-test.cimet.io/plan-list
Api-key : 4NKQ3-815C2-8T5Q2-16318-55301
Auth-token : {{token generated in previous step}}
Method: Post
Request Body: {"session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"}
Once you have the token, you can access our products.




You are given three components, i.e. Listing, Card and SingleProduct. DO NOT modify the function definition otherwise the test cases will fail.

The Card component accepts products prop - taking the products data fetched from the API.

The SingleProduct component accepts product - taking a single product to display single product data.

When you're fetching the data, add a simple loading state that says Loading... only. Match the text.

Once the data is fetched, render all the products in a div that has data-testid="product-card". It is a wrapper around single product and will be used to test your component.
Make sure you're displaying all the necessary details mentioned in the given UI on your component. Take a look at the object which is returned from the API to know what needs to be displayed.
Take a look at the Tests.test.js file to know what test cases are being asked and what test-id attributes needs to be there.8. While adding the logos, give the images a data-testid of the Image URL that you receive from the response object.
Note
To add packages to your project, simply head over to the package.json file and add package name and the respective version. Once done, refresh the page (in-editor browser).