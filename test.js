const assert = require('assert');

const API_URL = "https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false";

async function testAPI() {
    try {
        const response = await fetch(API_URL);
        assert.strictEqual(response.status, 200, "Expected HTTP status 200");

        const data = await response.json();

        assert.strictEqual(data.Name, "Carbon credits", "Category name mismatch");
        assert.strictEqual(data.CanRelist, true, "Expected CanRelist to be true");

        const galleryPromo = data.Promotions.find(promo => promo.Name === "Gallery");
        assert.ok(galleryPromo, "Gallery promotion not found");
        assert.ok(galleryPromo.Description.includes("Good position in category"), "Gallery description mismatch");

        console.log("✅ All tests passed!");
    } catch (error) {
        console.error("❌ Test failed:", error.message);
        process.exit(1);
    }
}

testAPI();