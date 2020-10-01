// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
  * App Variables
  */

const app = express();
const port = process.env.port || "4000";

/**
   * App Configuration
   */

/**
    * Routes Definitions
    */

app.get("/", (req, res) => {
    res.status(200).send("Track your coding error messages and solutions!")
})

/** 
 * Server Activation
*/

app.listen(port, () => {
    console.log(`Listening to requests on https://localhost:${port}`);
})