
# Test Automation WebdriverIO

> This Repo contains test cases for the-internet.herokuapp.com ui examples

## Test Script Requirement
> for you to be able to run this test scripts you need to install the following software on your machine

* Java
* Nodejs > 10.X
* Selenium Grid

## Setup
> for existing or new projects

```js
   /~$ npm install @wdio/cli @wdio/sync chai chai-webdriverio chromedriver
```

## Config
> This will prompt a set questions that guides you through the setup
```js
    /~$ npx wdio config
```

## Run Test 
```js
    /~$ npx wdio run wdio.conf.js
```

## Test Scripts
> each test contains pageObject and Test suite

* [CheckBoxes](/tests/Nodejs/WebDriverIO/CheckBoxes/)

* [Form Authentication](/tests/Nodejs/WebDriverIO/Login/)

* [KeyPresses](/tests/Nodejs/WebDriverIO/KeyPresses/)

* [Hovers](/tests/Nodejs/WebDriverIO/Hovers/)


