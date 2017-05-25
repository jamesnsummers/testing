var should    = require("chai").should(),
expect        = require("chai").expect,
supertest     = require("supertest"),
api           = supertest("http://localhost:3000");

// describe("GET /candies", function(){
//   tests will be written inside this function
// });

describe("Candies", function(){
  it("should return a 200 response", function(done){
    api.get("/candies")
    .set("Accept", "application/json")
    .expect(200, done)
  });
});
