create a folder in terminal:

mkdir (name of folder)
cd into it
git init
git status
atom . (open in atom)
--------
add a .babelrc file. paste:

{
  "presets": ["env"]
}
------
create a eslint file and paste:

{
  "extends": [
    "technigo"
  ]
}
------
create .gitignore file and paste:

node_modules
.DS_Store
-------
in terminal:
npm init
------
install needed dependencies in terminal:

npm install body-parser express mongoose nodemon

and:

npm install --save-dev babel-cli babel-preset-env eslint-config-technigo

add this in scripts and remove "test":

"scripts": {
  "start": "nodemon server.js --exec babel-node"
},
------

add server.js file
------
