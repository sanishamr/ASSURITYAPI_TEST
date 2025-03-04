const assert = require('assert');

/**
 * Description: Verify the endpoint " https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false" 
 * and validate the following acceptance Criteria's
 * Acceptance Criteria:
        Name = "Carbon credits"
        CanRelist = true
        The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category
**/


//Given API endpoint
const apiUrl = "https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false";


//Function to make API request and validate responses
async function testApi() {

    try {
        //Make HTTP GET request to the API endpoint and store the response 
    
        const response = await fetch(apiUrl);
        console.log("Response payload and status code for GET Request: ", response);

        // Validate the GET request is successful and status code 200 is received
        assert.strictEqual(response.status, 200, "Expected HTTP status code is 200");
       
        
        //Parse json Response
        const userData = await response.json();
  
        // Validate response data to verify the acceptance criteria's:

        //Acceptance Criteria 1 : Validate Name= "Carbon credits" present in response payload, else display error message as " Category name Mismatch"
        const CategoryName = await userData.Name;
        console.log("Category Name from response payload: ",CategoryName);
        assert.strictEqual(CategoryName, "Carbon credits", "Category name mismatch");

        //Acceptance Criteria 2: Validate CanRelist = true from Response payload
        const canRelistValue = await userData.CanRelist;
        console.log("CanRelist value from response payload :", canRelistValue);
        assert.strictEqual(canRelistValue, true, "Expected CanRelist to be true");


        // Accepatnce Criteria 3:  Validate The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"   
       
           //Step 1 : Validate the Promotion element with Name ="Gallery" exist in response 
            const galleryPromoName= userData.Promotions.find(promotion => promotion.Name === "Gallery");
            console.log("Promotion Name exist in Response payload :", galleryPromoName);
            assert.ok(galleryPromoName, "Gallery promotion Name not found");

           //Step 2: Once Step 1 is verified successfully for Promotions element with Name = "Gallery", check the description contains the text "Good position in category" 
           //else display error message as "Gallery description mismatch"
            const DescGalleryPromoName = galleryPromoName.Description;
            console.log("Description for Promotion Name Gallery from payload is :",DescGalleryPromoName);
            assert.ok(DescGalleryPromoName.includes("Good position in category"), "Gallery description mismatch");

        
        console.log("All tests passed!");
    }   catch (error) {
        console.error("Test failed:", error.message);
        
    }
}

//Call the function to test the API Endpoint
testApi();