 // Cucumber and chai have been loaded in the browser
const Cucumber = require('cucumber');
var setWorldConstructor = Cucumber.setWorldConstructor;
var Given = Cucumber.Given;
var When = Cucumber.When;
var Then = Cucumber.Then;
//var expect = chai.expect; //TODO: what is that? investigate

///// World /////
//
// Call 'setWorldConstructor' with to your custom world (optional)
//

var CustomWorld = function() {
  this.variable = 0;
};

CustomWorld.prototype.setTo = function(number) {
  this.variable = parseInt(number);
};

CustomWorld.prototype.incrementBy = function(number) {
  this.variable += parseInt(number);
};

setWorldConstructor(CustomWorld);
/**/
///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//
Given('I am on the Cucumber.js GitHub repository', function () {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master')
});

Given('I closed the Join GitHub today Dialogue', function () {
    var locator = "//button[@type='submit']";
    return this.driver.findElement({xpath: locator}).then(function (element) {
        return element.click();
    });
});


When('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function (element) {
        return element.click();
    });
});

Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    //var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    //return this.driver.wait(condition, 5000);
    return this.waitForElement(xpath);
});