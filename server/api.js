/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server. 
|
*/

const express = require("express");

// import models so we can interact with the database
const Advertisement = require("./advertisement");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const MY_NAME = "Anonymous User";

router.get("/ads", (req, res) => {
  // empty selector means get all documents
  Advertisement.find({}).then((ads) => res.send(ads));
});

router.post("/ad", (req, res) => {
  const newAdvertisement = new Advertisement({
    creator_name: MY_NAME,
    content: req.body.content,
  });

  newAdvertisement.save().then((ad) => res.send(ad));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
