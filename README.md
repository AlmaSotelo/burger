
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
* Because Express and Express-handlebars are used: Express, Express-handlebars, body-parser, and method override.
* Because mySQL is used for the back-end database: MySQL.

### CONSTRUCCION:
* Phase A. package.json set up
-  1.Created all folder for the structure,
-  2.Created and set up a package.json file: 
   * npm init and,
   * Installed all nmp packages.
* Phase B. Linking backend to frontend (server to routes, then to handlebars, then to index).
-  1.Coded the basics in server.js. This file also refers to burgers_controllers.js
-  2.Created burgers_controller.js inside the controllers folder and for now wrote code to import express and express.Router to it. Also set the base router ("/"), and code to export it. This is rending a HTML file, which lives in the views folder.
-  3.Created main.handlebars file inside layout folder. This contains the basic HTML code.
-  4.Created index.handlebars file inside views folder. This contains the majority of the Handlebars code. 
-  Time to test server connection to the browser.
* Phase C. Connection to the database.
   -  1.Set up the database in mySQL.
   -  2.Created the configutation files:
      * connection.js contains all of mySQL connection data and coded to be exported,
      * orm.js imports the connection.js and contains an object with all kinds of methods in it. These methods are for all the different things to do with the data in the database (sellectAll, insertOne, and updateOne).
   -  3.Coding the app.   
      - First, coded just the orm.sellectAll to collect data from the database, this uses a callback to pass the result into the model file (burger.js). 
      burger.js created. This requires orm.js and contains all the methods that are used in order to modify the orm.js for use with the burger database. A callback is used to sent results to the burgers_controllers.js. Now is time to go back to burgers_controllers.js  and code to require this burger.js. Also burger.sellectAll is called and passed to it burger_data into a function. This is because eventualy data is added in burger_data as we are going to be sending into the index.handlebars file.
      -  Time to test database connection to the server. Succsesfuly the server is collecting data from mySQL  database (from orm.js, from burger.js, and using the burgers_controllers.js in order to do so). Now, this data is passed into index.handelbars file.
      - Second, index.handlebars is created where is passed burger_data into it. This data is looped through all the rows and posts burger names. Then, burger_data is added into burgers-controllers.js. 
      -  Time to check html.handlebars's coding.
      -  Tird, coded for orm.insertOne to create new data in the database, and also for orm.updateOne to modify data.






