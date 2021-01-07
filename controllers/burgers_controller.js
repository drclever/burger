const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        // Send back the ID of the new burger
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    var burgerId = req.params.id;
  
    burger.updateOne(burgerId, result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
// Export routes for server.js to use.
module.exports = router;