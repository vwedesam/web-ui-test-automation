const Page = require("../page");

class Hovers extends Page {

    get user1() { return $('div.figure:nth-child(3) > img:nth-child(1)') }
    get user1Profile() { return $('div.figure:nth-child(3) > div:nth-child(2)') }

    get user2() { return $('div.figure:nth-child(4) > img:nth-child(1)') }
    get user2Profile() { return $('div.figure:nth-child(4) > div:nth-child(2)') }

    get user3() { return $('div.figure:nth-child(5) > img:nth-child(1)') }
    get user3Profile() { return $('div.figure:nth-child(5) > div:nth-child(2)') }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    getText(element){
        return element.getText();
    }

    open(path){
        super.open(path);
    }


}

module.exports = new Hovers();