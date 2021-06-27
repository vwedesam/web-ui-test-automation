
# Test Automation php-webdriver/PhpUnit

> This Repo contains test cases for the-internet.herokuapp.com 

## Installation/Setup
> php-webdriver with phpunit

### step 1

```php
    /-$ composer require php-webdriver/webdriver phpunit/phpunit
```

### step 2

> download Chromedriver, GeckoDriver or selenium-standalone driver

### step 3
#### start the driver
```sh
   chromedriver --port=4444
   or
   chromedriver

   geckodriver
```
### step 4 

#### write your test

> for more [visit](https://github.com/php-webdriver/php-webdriver) official docs

> [php-webdriver exmples](https://github.com/php-webdriver/php-webdriver/wiki/Example-command-reference)

### step 5
### Run Test 
```js
    /~$ .\vendor\bin\phpunit
```

## Test Cases
> **PhpUnitSetup** class contains setup for **phpunit** and **php-webdriver** with **chromedriver** 

* [Form Authentication](/tests/PHP/PHP-WebDriver/Login/)



