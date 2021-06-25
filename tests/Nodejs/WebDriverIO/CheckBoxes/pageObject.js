const Page = require("../page");

class CheckBoxes extends Page {

    get getWelcomeText() { return $('.heading')}

    get checkBoxLink() { return $('#content > ul:nth-child(4) > li:nth-child(6) > a:nth-child(1)') }

    get checkBoxWelcomeText(){
        return $('.example > h3:nth-child(1)');
    }

    get firstCheckbox() { return $('#checkboxes > input:nth-child(1)') }

    get secondCheckbox() { return $('#checkboxes > input:nth-child(3)') }


    visitCheckBoxPage(){
        this.checkBoxLink.waitForExist();
        this.checkBoxLink.click();
    }

    open(path){
        super.open(path);
    }
    

}

module.exports = new CheckBoxes();
