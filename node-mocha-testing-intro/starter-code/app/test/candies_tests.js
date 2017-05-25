var should    = require("chai").should(),
expect        = require("chai").expect,
supertest     = require("supertest"),
api           = supertest("http://localhost:3000");

// test for HTTP GET requests
describe("GET /candies", function(){
  // testing for initial load of page and that it loads
  it("should return a 200 response", function(done){
    api.get("/candies")
    .set("Accept", "application/json")
    .expect(200, done)
  });
  // testing to make sure the get request returns an array
  it("should return an array", function(done){
    api
      .get("/candies")
      .set("Accept", "application/json")
      .end(function(error, response){
        expect(response.body).to.be.an('array');
        done()
      });
  });
  // test to make sure the return has an object with a field of 'name'
  it("should return an object that have a field called 'name' ", function(done){
  api
    .get("/candies")
    .set("Accept", "application/json")
    .end(function(error, response){
      expect(response.body[0]).to.have.property('name');
      done()
    });
  });
});

//test for HTTP POST request
describe("POST /candies", function(){
  // before the page is finished loading run the following tests...
  before(function(done){
   api
   .post("/candies")
   .set("Accept", "application/json")
   .send({
     "id": 5,
     "name": "Lollipop",
     "color": "Red"
   }).end(done)
  });
  // test to make sure it posts to the candy collection on the POST request
  it("should add a candy object to the collection candies and return it", function(done){
  api.get("/candies")
  .set("Accept", "application/json")
  .end(function(error, response){
    expect(response.body.length).to.equal(5);
    done()
    });
  });

});
