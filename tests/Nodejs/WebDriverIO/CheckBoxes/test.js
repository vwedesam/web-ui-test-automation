const CheckBoxes = require("./pageObject");

describe(" CheckBoxes ", function () {

    it("should have contain 'Welcome to the-internet' ", function () {

        CheckBoxes.open("https://the-internet.herokuapp.com");

        // wait for welcome text
        CheckBoxes.getWelcomeText.waitForDisplayed()

        // expect welcome text to have been displayed
        expect(CheckBoxes.getWelcomeText.isDisplayed()).to.be.true;

    });

    it(" should click on checkbox link ", function () {

        // visit checkboxPage
        CheckBoxes.visitCheckBoxPage();
        // wait for welcome message
        CheckBoxes.checkBoxWelcomeText.waitForDisplayed()

        // check if welcome text to have been displayed
        expect(CheckBoxes.checkBoxWelcomeText.isDisplayed()).to.be.true;

        browser.pause(1000);

    });

    it(" should select first checkbox ", function () {

        CheckBoxes.firstCheckbox.waitForDisplayed();
        // select checkbox
        CheckBoxes.firstCheckbox.click();
        // check if welcome text to have been displayed
        expect(CheckBoxes.firstCheckbox.isSelected()).to.be.true;

        browser.pause(2000);
    });

    it(" should unselect second checkbox ", function () {

        CheckBoxes.secondCheckbox.waitForDisplayed();
        // unselect checkbox
        CheckBoxes.secondCheckbox.click();
        // check if was selected
        expect(CheckBoxes.secondCheckbox.isSelected()).to.be.false;

        browser.pause(2000)

    });

})