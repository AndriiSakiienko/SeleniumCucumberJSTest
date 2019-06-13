const assert = require('assert');
const qassert = require('cucumber-assert');
const { Before, Given, When, Then } = require('cucumber');
const http = require("https");
const chai = require("chai");
const expect = chai.expect;

var options = {
    "method": "get",
    "hostname": "skype.com",
    "port": null,
    "path": "/uk",
    "headers": {
        "cache-control": "no-cache"
    }
};

function getHeaders() {
    return new Promise((resolve, reject) => {
        let req = http.request(options, (res) => {
            resolve(res.statusCode)
        })
        req.on('error', (e) => {
            reject(e)
        })
        req.end()
    })
}


Before(function (){
    console.log("\n\n\nCalculate 5 + 10 = " + (5+10));
});



Given('request to url', function () {
    let tmp = getHeaders().then((statusCode) => {
        //assert.equal(10, 5);
        
        //console.log(statusCode);
        return statusCode;
    });
    expect(tmp).to.equal(301);
    
   /* qassert.equal(statusCode, 301).then((statusCode) => {
        getHeaders().then((statusCode) => {

        });
    })
    /*qassert.notEqual(statusCode, 301).then((statusCode) => {
        return new Promise((resolve, reject) => {
            http.request(options, (res) => {
                resolve(res.statusCode)
            })
            req.on('error', (e) => {
                reject(e)
            })
            req.end()
        })
        /*let req = http.request(options, (res) => {
            resolve(res.statusCode)
        })
        req.on('error', (e) => {
            reject(e)
        })
        req.end()
    })
/**/
});


When('enter some date', function(){

});


Then('get some response', function(){

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

Given('a variable set to {int}', function(number) {
    this.variable = parseInt(number);
});

When('I increment the variable by {int}', function(number) {
    this.variable += parseInt(number);
});

Then('the variable should contain {int}', function(number) {
    expect(this.variable).to.eql(number)
});
