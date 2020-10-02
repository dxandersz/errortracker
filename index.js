// index.js

/**
 * Required External Modules
 */

const express =require("express");
const path = require("path");

/**
  * App Variables
  */

const app = express();
const port = process.env.PORT || "4000";

/**
  * Session Configuration
  */


/**
  * Passport Configuration
  */


/**
   * App Configuration
   */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
    * Routes Definitions
    */

app.get("/", (req, res) => {
  res.render("index",{title: "Home" });
});

/** 
 * Server Activation
*/

app.listen(port, () => {
  console.log(`Listening to requests on https://localhost:${port}`);
});