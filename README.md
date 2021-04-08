 # A guide for setting up a JS repo to use ESLint along side your jasmine test suite

[ESLint](https://eslint.org/) is a linter for Javascript and requires [node.js](http://nodejs.org/) and runs on Windows, Linux and Mac.  

To write test driven Javascript we need a testing suite and preferably some kind on linter to keep us on track. 

## Firstly we need to create package.json

- Assuming you've already got [node.js](http://nodejs.org/) installed
- Run `npm init`
- If you screw it up (but also how??) you can delete the package.json at this point or just edit it manually 

## Then install jasmine of your choice, there are a few ways to do it.

### Install via npm
- You can use `npm install --save-dev jasmine`
- Then `npx jasmine init`
- Add jasmine to your test script in your package.json `"scripts": { "test": "jasmine" }`
- Then you can run your test script with `npm test`
- We won't want to push our dependancies to github, so `touch .gitignore` and add `node_modules`

### Jasmine via CDN script tags in your SpecRunner.html

Use a CDN `SpecRunner.html` there is an example in [this repo](https://github.com/StuBehan/npm-eslint-jasmine-guide/blob/main/CdnSpecRunner.html), this is probably the easiest way to add jasmine.
- You'll need to `mkdir spec` and `mkdir src` and populate it with your files manually.

### Stand alone Jasmine download and unzip

- Available on [github: jasmine/jasmine](https://github.com/jasmine/jasmine/releases) download the release of your choice and drop in to your repo.

## Install ESLint

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