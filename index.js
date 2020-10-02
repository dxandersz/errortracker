// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

/**
  * App Variables
  */



const app = express();
const port = process.env.port || "4000";

/**
  * Session Configuration
  */

const session = {
    secret: "Onetimeadonkeyateacarrot!",
    cookie: {},
    resave: false,
    saveUninitialized: false
};

if (app.get("env") === "production") {
    // Serve secure cookies, needs HTTPS
    session.cookie.secure = true;
}

/**
  * Passport Configuration
  */

/**
   * App Configuration
   */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));

/**
    * Routes Definitions
    */

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

/** 
 * Server Activation
*/

app.listen(port, () => {
    console.log(`Listening to requests on https://localhost:${port}`);
})