const Hovers = require("../pageObjects");

describe(" Hovers ", function(){

    it(" should hover over users profile ", function(){

        Hovers.open('https://the-internet.herokuapp.com/hovers');

        // hover over user1
        Hovers.moveToElement(Hovers.user1);
        expect(Hovers.getText(Hovers.user1Profile)).to.be.equals(`name: user1\nView profile`);
        browser.pause(2000)
        // hover over user2
        Hovers.moveToElement(Hovers.user2);
        expect(Hovers.getText(Hovers.user2Profile)).to.be.equals(`name: user2\nView profile`);
        browser.pause(2000)
        // hover over user3
        Hovers.moveToElement(Hovers.user3);
        expect(Hovers.getText(Hovers.user3Profile)).to.be.equals(`name: user3\nView profile`);
        browser.pause(2000)

    });

});