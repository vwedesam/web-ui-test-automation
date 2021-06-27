<?php

namespace Tests;

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\DesiredCapabilities;


/**
 * 
 * @var $webDriver -- php-webdriver instance
 * @var  $chrome
 * @method phpunit setUp
 * @method phpunit tearDown
 * 
 */
trait PhpUnitSetup {

     /**
     * @var RemoteWebDriver
     */
    protected $webDriver;
    // Chromedriver (if started using --port=4444 as above)
    public $chrome = 'http://localhost:9515';

    public function setUp(): void {
        // create browser connect/session
        $this->webDriver = RemoteWebDriver::create($this->chrome, DesiredCapabilities::chrome());
    }

    public function tearDown(): void {
        $this->webDriver->quit();
    }


}


?>