var reporter = require('cucumber-html-reporter');
// var theme = {
//     hierarchy: 'hierarchy',
//     bootstrap: 'bootstrap',
//     foundation: 'foundation',
//     simple: 'hierarchy'
// };
var options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    storeScreenshots: true,
    screenshotsDirectory: 'screenshots/',
    launchReport: false,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "localLaptop",
        "Browser": "Chrome 74.0.3729.169 (Official Build) (64-bit)",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);


//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files,
// please use `jsonDir` option instead of `jsonFile`. More info is 
//available in `options` section below.
