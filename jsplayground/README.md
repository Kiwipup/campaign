#instructions

This experiment is to demonstrate the things we will do most frequently with JS in real projects.

Open index.html in chrome, and open the Chrome inspector and watch the console messages as they are triggered.

## Installing babel:

1. Run these two commands in terminal: npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

2. Create a file called babel.config.js at the root of project directory and enter this const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    }
  }]
];

module.exports = { presets };

as the content of that file.

3. Create a lib directory in the root of the project directory.

4. Run this command to have babel compile your code: ./node_modules/.bin/babel {{file babel will watch(main.js)}} --out-dir lib(output)

5. The main.js under lib is where the output code will be.

6. Make sure the html file that is using your javascript is linked to your output js file. In this case: ./lib/main.js.
