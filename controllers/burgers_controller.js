// Dependencies
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
  //GET request to grab database contents
router.get("/", function(req, res) {
   burger.selectAll(function(data) {
     var hbsObject = {
       burgers: data
     };
     console.log(hbsObject);
     res.render("index", hbsObject);
   });
});
  //POST request to add a burger to the database
router.post("/", function(req, res) {
  if(req.body.burger_name !== "") {
    burger.insertOne(req.body.burger_name.trim(), function() {
      res.redirect("/");
    });
  }
});
  // PUT request to update a burger's status
router.put("/:id", function(req, res) {
  console.log(req.params.id);

	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;