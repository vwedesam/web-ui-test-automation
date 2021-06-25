

describe(" KeyPresses ", function(){

    it(" should press BackSpace, Shift and Control Key ", function(){

        browser.url('https://the-internet.herokuapp.com/key_presses?');
        // get input field
        const targetInput = $('#target');
        targetInput.waitForExist();
        // focus target input
        targetInput.click();
        // output
        const outputTag = $('#result');
        // press backspace key
        browser.keys(["Backspace"]);
        // wait to output text
        outputTag.waitForDisplayed();

        browser.pause(1000);

        expect(outputTag.getText()).to.be.equals('You entered: BACK_SPACE');

        // press shift key
        browser.keys(["Shift"]);
        // wait to output text
        outputTag.waitForDisplayed();

        browser.pause(1000);

        expect(outputTag.getText()).to.be.equals('You entered: SHIFT');

        // press shift key
        browser.keys(["Control"]);
        // wait to output text
        outputTag.waitForDisplayed();

        expect(outputTag.getText()).to.be.equals('You entered: CONTROL');
        
        browser.pause(4000);

    });



});