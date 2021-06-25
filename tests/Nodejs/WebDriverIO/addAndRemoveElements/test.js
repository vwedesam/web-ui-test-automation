
describe(" Add/Remove Element ", function () {

    it(" should add and remove 4 Elements ", function () {

        browser.url('https://the-internet.herokuapp.com/add_remove_elements/');

        const addElementButton = $('.example > button:nth-child(1)');

        const elementButtons = (index) => $(`button.added-manually:nth-child(${index})`);

        // add 4 new element
        for (let i = 1; i <= 4; i++) {
            addElementButton.click();
            browser.pause(1000)
        }

        elementButtons(4).waitForDisplayed();
        // expect the 4th element to exist
        expect(elementButtons(4).isDisplayed()).to.be.true;
        
        // remove all 4 elements
        for (let i = 4; i >= 1; i--) {
            elementButtons(i).click();
            browser.pause(500)
        }

        // expect the 1st elements not to exist
        expect(elementButtons(1).isDisplayed()).to.be.false;

        browser.pause(1000)

    });

});