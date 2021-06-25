
describe(" Login ", function(){

    it(" should visit the login page ", function(){

        Login.open("https://the-internet.herokuapp.com/login");

        // check if we are in the right domain/url
        expect(browser.getUrl()).to.be.equals("https://the-internet.herokuapp.com/login");

    });

    it(" should fill in username and password ", function(){

        // enter usernamee and passwword
        Login.setUserName("tomsmith");
        Login.setPassWord("SuperSecretPassword!");

        // check if all login details exist
        expect(Login.username.getValue()).to.be.equals('tomsmith');
        expect(Login.password.getValue()).to.be.equals("SuperSecretPassword!");

    });

    it(" should login successfully ", function(){
        Login.clickOnLogin();
    });

    it(' should be in secure Area, with Flash message and logout button exist', function(){

        Login.flashText.waitForDisplayed();
        Login.secureAreaText.waitForDisplayed();
        Login.logOut.waitForExist();

        // check if the success message have been displayed
        expect(Login.flashText.isDisplayed()).to.be.true
        expect(Login.secureAreaText.isDisplayed()).to.be.true

        // check if is logout button exist
        expect(Login.logOut.isExisting()).to.be.true

        browser.pause(3000);

    });

});