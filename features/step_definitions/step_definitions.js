const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const http = require("https");
const chai = require("chai");
// const setWorldConstructor = Cucumber.setWorldConstructor;
const expect = chai.expect;

var options = {
    "method": "post",
    "hostname": "httpbin.org",
    "port": null,
    "path": "/post",
    "headers": {
        "cache-control": "no-cache"
    }
};
Given('something', function () {
    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            //console.log(body.toString());
        });    
    });
    //console.log(req);
    //console.log(req.agent.sockets);
    req.end();
    expect(10).to.eql(10);
});

function isItFriday(today) {
    if (today === "Friday") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});

// ///// World /////
// //
// // Call 'setWorldConstructor' with to your custom world (optional)
// //

// var CustomWorld = function() {
//     this.variable = 0;
//   };
  
//   CustomWorld.prototype.setTo = function(number) {
//     this.variable = parseInt(number);
//   };
  
//   CustomWorld.prototype.incrementBy = function(number) {
//     this.variable += parseInt(number);
//   };
  
//   setWorldConstructor(CustomWorld);
  
///// Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function(number) {
    this.variable = parseInt(number);
});

When('I increment the variable by {int}', function(number) {
    this.variable += parseInt(number);
});

Then('the variable should contain {int}', function(number) {
    expect(this.variable).to.eql(number)
});
