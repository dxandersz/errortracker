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

const authRouter = require("./auth");

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

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:4000/callback"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

/**
   * App Configuration
   */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use("/", authRouter);

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