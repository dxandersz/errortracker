# errortracker
Succeeding as a coder means learning how to better parse error messages, but excelling as a coder means trimming down the time that you spend searching for solutions to problems you've already solved. As a student, one of the biggest problems I faced was confronting the same issue time and time again and trying to parse through my memory to figure out what the solution was.

Errortracker is a sleek and streamlined solution. A simple auth system allows a user to create their own database of errors, and they have free reign to organize it as they want. Error reports can be placed directly through the app interface and organized using a category system. Generally, we recommend that these categories be grouped by language, but there's flexibility for users to create a categorization system that fits their needs.

The infrastructure here is relatively streamlined - confined to a simple two tables (one for the user and one for error reports).

## User Stories
The goal here is for something more one-and-done, so while there's potential for post-MVP expansion, it's going to be less detailed than it has been for other projects. I'll break them down according to their (relatively simple) views.

### Auth View
If the user isn't logged in, they'll be prompted to sign in or register. This will be handled directly through the auth page, and users will only be siphoned past this entry screen when they're logged in.

### Error Reports Home Page
If the user is logged in, they'll be able to READ a list of error reports they've documented. These reports let them see the category, name, description, and log of a report - and a form allows them to enter or UPDATE a solution for each within those elements. A button for each report also allows users to DELETE an existing report.

### Nav
A persistent nav bar supports navigating home as well as logging out. It also includes a prominent button for creating a new report.

### Create Report
A basic form that allows you to CREATE a new report and have it addded to your home page. All report variables are required except for the solution parameter.

## Post-MVP
There's the potential to expand by having a shared database of error reports that's either global or project-based, but there are plenty of tools for that already on the market. It's something that may be worth experimenting with later, but the concept itself is pretty well encapsulated.

## Schema
Here's the [schema diagram](https://app.dbdesigner.net/designer/schema/359283)! It's pretty lean and to the point, but it gets the job done. If this app does expand into post-MVP territory, we still shouldn't need much in the way of database expansion. Instead, it will just be about supporting more views, accommodating multiple users, and providing more granular search and filter functions.

## Technologies Used
The design here is straight to the point, but there's a decent amount of technologies at work. For the most part, they're there to keep things as lean and fast as possible.

**Node.js** for handling requests and logic
**Express** for running the server
**npm** for bundling packages

## DEPENDENCIES
**Pug** for quickly sketching up front end pages
**Nodemon** to reduce time sink when testing out code
**BrowserSync** for the sake of testing workflow as well
**Auth0** for handling user authentication
**Passport.js** for auth middleware

## TUTORIALS
https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
https://auth0.com/blog/create-a-simple-and-secure-node-express-app/

auth0 wouldn't be the first source I considered for a general Express resource, but what they offer is comprehensive, aligned pretty well with the parameters of this project, and extends through authentication.
