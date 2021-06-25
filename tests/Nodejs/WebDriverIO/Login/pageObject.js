const Page = require("../page");


class Login extends Page {

    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('.radius') }

    get secureAreaText() { return $('.example > h2:nth-child(1)') }

    get flashText() { return $('#flash') }

    get logOut() { return $('.button') }
    
    setUserName(username){
        this.username.waitForDisplayed();
        this.username.setValue(username);
    }

    setPassWord(password){
        this.password.waitForDisplayed();
        this.password.setValue(password);
    }

    clickOnLogin(){
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

    open(path){
        super.open(path);
    }

}


module.exports = new Login();
