# ClosureTree

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## To start the project
1. Run `npm i`
2. Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About the proyect

This app is intended to be used with the ClosureTableTree-Backend repo, it is a very simple, minimal app that adds and removes items from the backend's db, and represents the tree stored in the closuretable of the db.

### Before you start
Before you send any data to the backend, make sure you have created a ROOT NODE on your database, from which you will be adding/removing nodes.  
NOTE: Don't remove the root node, since this is not fully implemented yet on the Backend, and it can cause foreign key constraint issues.