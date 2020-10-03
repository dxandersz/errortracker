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
const port = process.env.PORT || "3000";

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

app.use('*', (err, req, res, next) => {
  console.error(err);
    res.status(404).json({error: 'Not Found'});
  });

/** 
 * Server Activation
*/

app.listen(port, () => {
  console.log(`Listening to requests on https://localhost:${port}`);
});