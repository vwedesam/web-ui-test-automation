<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testCanVisitLoginPageAndLoginToSecureArea()
    {
        $this->browse(function (Browser $browser) {
            // visit login page
            $browser->visit('/login');

            $browser->value('#username', 'tomsmith');
            $browser->typeSlowly('#password', 'SuperSecretPassword!');

            // test for correct login details
            $this->assertEquals($browser->value('#username'), 'tomsmith');
            $this->assertEquals($browser->value('#password'), 'SuperSecretPassword!');

            // click login button
            $browser->click('.radius');
    
            // get success text
            $flash_text = '#flash';
            // test if text was displayed
            $browser->assertSeeIn($flash_text, 'You logged into a secure area!');

            // page title text
            $welcome_text = '.subheader';
            // test if welcome text exist
            $browser->assertSeeIn($welcome_text, 'Welcome to the Secure Area. When you are done click logout below.');

            $browser->pause(2000);

        });
    }

}