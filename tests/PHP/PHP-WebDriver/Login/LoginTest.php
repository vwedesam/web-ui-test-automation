<?php

namespace Tests\Login;

use Tests\PhpUnitSetup;
use PHPUnit\Framework\TestCase;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverExpectedCondition;


class FormAuthentication extends TestCase {

    use PhpUnitSetup;

    /**
     * @test
     */
    public function testCanLogin(){

        $this->webDriver->get('https://the-internet.herokuapp.com/login');

        $username = $this->webDriver->findElement(WebDriverBy::cssSelector('#username'));
        $password = $this->webDriver->findElement(WebDriverBy::cssSelector('#password'));
        $login_button = $this->webDriver->findElement(WebDriverBy::cssSelector('.radius'));

        // wait for element to be displayed beofore adding text
        if($username->isDisplayed() && $password->isDisplayed()){
            $username->sendKeys("tomsmith");
            $password->sendkeys('SuperSecretPassword!');
        }

        // get input field value
        $username_value = $username->getAttribute('value');
        $password_value = $password->getAttribute('value');

        // confirm input field values
        $this->assertEquals($username_value, 'tomsmith');
        $this->assertEquals($password_value, 'SuperSecretPassword!');

        // login user
        $login_button->click();


        $welcome_text = $this->webDriver->findElement(WebDriverBy::cssSelector('.subheader'));

        // wait for flash text
        $this->webDriver->wait()->until(
            WebDriverExpectedCondition::elementTextContains(WebDriverBy::id('flash'), 'You logged')
        );

        $this->assertEquals($welcome_text->getText(), 'Welcome to the Secure Area. When you are done click logout below.');

        // wait 3 sec before exit
        $this->webDriver->wait(3000);

    }

    


}


?>