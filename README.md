# Node Express Handlebars
BootCampSpot Web Development - Week 11 Homework

![Preview](https://github.com/BCS-WebDev/Week11-Homework/blob/master/burger/BurgerHelper.gif)

## Notes on Sequelize & Modularization
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This project is our first full stack project where we create
each part of a web application starting from the front facing webpage to the data management
backend. We have used express before to route users to thier respective actions which required 
the use of a database via mysql. We have not yet however done this with modulariztion in mind.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Modularization is the process of separating and grouping 
actions into modules. This help with code management and scalability for apps. In this project,
we will separate our routes with express, database queries with sequelize, and html with express
handlebars which allows for html templating.

## Motive & Action
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The project is a simple burger list where a user can add a
burger to eat and then devour the burger to move said devoured burger to a separate list. It is a
simple application but we do this to practice modularization. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our connection to our MySql database will be established in
connection.js, which will be required in burger.js where a model for the app will be created. The
burger model will then be exported to a controller for routing, which will be accessed by the user
via the webpage.

## Installation
Install `node.js` and run `npm install` to install the necessary node packages.

* Installs:
    - mysql node package
    - mysql2 node package
    - sequelize node package
    - express node package
    - express handlebars node package
    - path node package

## Usage
* For local development:
    - Log into MySQL Workbench and run the schema in `schema.sql` located in burger/seeders.
    - Open `config.json` located in burger/config and enter your MySQL connection info & credentials for local development.
    - Run `node server.js` to start the server.
    - Open a web browser and navigate to localhost:8080.
* For use:
    - https://ancient-mesa-54039.herokuapp.com/

## Questions
Contact: kevin1choi@gmail.com
