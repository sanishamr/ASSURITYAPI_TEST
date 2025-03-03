const assert = require('assert');

//API URL
const API_URL = "https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false";



//Function to make API request and validate response
async function testAPI() {

    try {
        const response = await fetch(API_URL);

        
        assert.strictEqual(response.status, 200, "Expected HTTP status 200");

        const data = await response.json();

        //Acceptance Criteria 1 : Validate Name= "Carbon credits" else display error message as " Category name Mismatch"

        assert.strictEqual(data.Name, "Carbon credits", "Category name mismatch");

        //Acceptance Criteria 2: Validate CanRelist = true 
        assert.strictEqual(data.CanRelist, true, "Expected CanRelist to be true");


       // Accepatnce Criteria 3:  Validate The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"   

        const galleryPromoName = data.Promotions.find(promo => promo.Name === "Gallery");
        assert.ok(galleryPromoName, "Gallery promotion Name not found");
        assert.ok(galleryPromoName.Description.includes("Good position in category"), "Gallery description mismatch");

        console.log("All tests passed!");
    }   catch (error) {
        console.error("Test failed:", error.message);
        process.exit(1);
    }
}

testAPI();