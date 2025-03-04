#  JavaScript to test the API Endpoint


## Description
In this project we used JavaScript’s fetch() function to make HTTP requests to the API endpoints.
For parsing and validating the response received, .json() method is used. 
The response is saved to a variable and validated against the requirements.
Assert module is used for verifying the conditions. The assert.strictEqual() function tests strict equality between the actual and expected parameters.

## Requirements
Given API End Point = ' https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false'

This script tests the API endpoint to validate the following acceptance criteria : 
- Name = "Carbon credits"
- CanRelist = true
- The Promotions element with Name = "Gallery" has a Description containing "Good position in category"
Method used : 'GET'


## How to Run
1. Install Node.js from https://nodejs.org
2. Open a terminal and navigate to this project folder.
3. Run the test using below command:
   node filename.js --> node apitest.js