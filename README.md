# campaign
Creating a site for 9/21/2018 Awesome inc Project 1.
# 1. For converting sass files to css follow the Basic Sass installation instructions below, cd into your sass directory and enter this into your terminal: $ ../node_modules/.bin/sass {{NAME}}.scss output.css --watch

## Basic Sass installation instructions:

Open termincal and run npm init command. Follow the instructions to create your package.json file.

Run the npm install command

Run npm install command --save-dev {package you would like to install}. This way you can install sass, bootstrap, etc and the dev dependencies will be added to the package.json file.

In your .scss file add @import "../node_modules/bootstrap/scss/bootstrap"; to import bootstrap into sass. You can override variables above the import link. Below the link you can override with css.

##Revision

By adding sass: "../node_modules/.bin/sass --watch main.scss output.css", to the JS library in package.json, now all we have to do to have sass watch our files is enter "npm run sass" in the command line. 
