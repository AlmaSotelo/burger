
# Boot Camp wk-14 Node/Express/MySQL/Handlebars
This application uses a MVC (Model-view-controller) framework
### STRUCTURE:
* The config folder is for store the connection to mySQL and the ORM file. So this is in charge of all the connections to mySQL to be used.
* The controllers folder contains the file that holds all of the routes that are used in this application (all Express routes, all router.get, all router.post and all router.put).
* The db folder contains the schema and seed for the database used.
* The models folder is what uses the ORM in the configurations folder in order to collect tha data from the database and send it to the controllers folder.
* The public folder contains all of the public assets that are used; images and CSS.
* The views folder contains all of the .handlebars files. Those are what it is sended to the front-end.
* The server file is in charge of creating the Express connection and of running the Node server.

### NPM Packages:
* Becouse Express and Express-handlebars are used:
 - Express, Express-handlebars, body-parser, and method override.
* Because mySQL is used for the back-end database:
 - MySQL.

### Construccion:
Phase A. 1.Create all folder for the structure,
         2.Create and set up a package.json file: 
            - npm init and,
            - Install all nmp packages.
Phase B. 1.Code the basics in server.js.
         2.Create burgers_controller.js inside the controllers folder and write code to import express and express.Router to it. Also set the base router ("/"), and code to exporte it.
         3.Create main.handlebars file inside layout folder. This contains the basic HTML code.
         4.Create index.handlebars file inside views folder. This contains the majority of the Handlebars code. Time to test the server.
         5.Set up the database in mySQL






