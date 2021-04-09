 # A guide for setting up a JS repo to use ESLint along side your jasmine test suite[![Build Status](https://travis-ci.com/StuBehan/npm-eslint-jasmine-guide.svg?branch=main)](https://travis-ci.com/StuBehan/npm-eslint-jasmine-guide)

[ESLint](https://eslint.org/) is a linter for Javascript and requires [node.js](http://nodejs.org/) and runs on Windows, Linux and Mac.  

To write test driven Javascript we need a testing suite and preferably some kind on linter to keep us on track. 

## Firstly we need to create package.json:

- Assuming you've already got [node.js](http://nodejs.org/) installed
- Run `npm init`
- If you screw it up you can delete the package.json at this point and run `npm init` again or just edit it manually, its worth a look inside anyway

## Then install jasmine of your choice, there are a few ways to do it:

### Install via npm
- You can use `npm install --save-dev jasmine` (--save-dev tag adds it to your develepment dependancies)
- Then `npx jasmine init`
- Add jasmine to your test script in your package.json `"scripts": { "test": "jasmine" }`
- Then you can run your test script with `npm test`
- We won't want to push our dependancies to github, so `touch .gitignore` and add `node_modules`

### Jasmine via CDN script tags in your SpecRunner.html

Use a CDN `SpecRunner.html` there is an example in [this repo](https://github.com/StuBehan/npm-eslint-jasmine-guide/blob/main/SpecRunner.html), this is probably the easiest way to add jasmine.
- You'll need to `mkdir spec` and `mkdir src` and populate it with your files manually.

### Stand alone Jasmine download and unzip

- Available on [github: jasmine/jasmine](https://github.com/jasmine/jasmine/releases) download the release of your choice and drop in to your repo.

## Install ESLint:

- `npm install eslint --save-dev` to install 
- `npx eslint --init` to initialize eslint and follow the instructions
- I went with: 
  - `To check syntax and find problems`
  - `import/export` (because I have babel installed in VScode, if you don't know just use require/exports)
  - `none of these` for framework
  - `no` for typescript
  - `browser`
  - `JSON` for the config file

Now everything might look quite angry at this point, there are a few things we need to specify.

- Firstly `npm install --save-dev eslint-plugin-jasmine`
- Then in your `.eslintrc.json` at the bottom of the tree add:
```
},                  // this is the previous blocks curly brace, add a comma
    "plugins": [
      "jasmine"
    ]
}
```
- Stay in the `.eslintrc.json` and add `"jasmine": true` to the `"env":` block (your editor might help autofill with these)
- There are other options check them out if you want on the [eslint/jasmine plugin page](https://www.npmjs.com/package/eslint-plugin-jasmine) on npm
- Depending on your editor you may get wiggly red lines to show errors or you may need to run `npx eslint ./src` to test your files.

And there you go a testing suite and a linter for JS.

## Extra: Travis CI integration

- Make a traivs.yml `echo language: node_js >> .travis.yml`
- We're going to use a testing framework called Karma to carry out our Jasmine tests remotely on travis `npm install karma --save-dev`
- Install the Karma-jasmine plugin `npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev`
- Install the cli commands `npm install -g karma-cli` (the -g tag means globally)
- Run Karma for the first time with `karma init` and follow the instructions, this will make a `karma.conf.js` in your root.
  - `Jasmine`
  - `no`
  - `chrome` (add firefox too if you like or -bleh- opera)
  - `src/*.js` and `spec/*Spec.js`
  - just press return
  - `yes` (not seen this work though)
- Change the `"test"` script in `./package.json` to `"karma start karma.conf.js --single-run"`
- Now you can run your tests in the CLI using `npm test` (test this because if it doesnt work neither will travis)
- But before travis will work we need to tell it what we are going to need on our virtual machine:
```
language: node_js 
node_js:
  - 14

dist: xenial
services:
  - xvfb

addons:
  chrome: stable
```

- Commit and push (hopefully you've commited a few times during all this) and add your sticker to  your README.md for unlimited kudos! you know, if your repo is passing...