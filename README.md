 # A guide for setting up a JS repo to use eslint along side your jasmine test suite


[ESLint](https://eslint.org/) is a linter for Javascript and requires [node.js](http://nodejs.org/) and runs on Windows, Linux and Mac.  

To write test driven Javascript we need a testing suite and preferably some kind on linter to keep us on track. 

Firstly install jasmine of your choice, there are a few ways to do it.

## Install via npm
- You can use `npm install --save-dev jasmine`
- Then `npx jasmine init`
- Add jasmine to your test script in your package.json `"scripts": { "test": "jasmine" }`
- Then you can run your test script with `npm test`

## Jasmine via CDN script tags in your SpecRunner.html

Use a CDN `SpecRunner.html` there is an example in this repo, this is probably the most lightweight way to run jasmine.

## Stand alone Jasmine download and unzip

- Available on [github: jasmine/jasmine](https://github.com/jasmine/jasmine/releases) download the release of your choice and drop in to your repo.