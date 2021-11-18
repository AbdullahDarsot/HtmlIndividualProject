/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/
const assert = require('assert');
const driver = require('./../../driver');
const uri = 'file:///C:/Users/abdullah.darsot/Documents/HtmlIndividualProject/index.html';

const {
    After,
    Before,
    Given,
    Then,
    When
} = require('@cucumber/cucumber');
const { getSystemErrorMap } = require('util');

Before({timeout: 8000}, async function() {
    this.driver = driver;
    this.headless = await driver.headless(uri);
});

After({timeout: 8000}, async function() {
    await this.headless.quit();
});

Given('the loaded web-site', async function() {
    // Nothing to do, as set-up loads the site
});

// Given('the loaded newsletter', async function() {
//     await headless.get('file:///C:/Users/abdullah.darsot/Documents/HtmlIndividualProject/newsletter.html');
// });

When('toggled using the button', async function() {
    await this.driver.toggle(this.headless);
})

// When('form is submitted', async function() {
//     await this.driver.myFunction(this.headless);
// })

// Then('the alert should be {string}', async function(alert) {
//     assert(alert == await this.headless.alert());
// });

When('changePage on hyperlink clicked', async function(){
    await this.driver.changePage(this.headless);
})

Then('the browser title should be {string}', async function(title) {
    assert(title == await this.headless.getTitle());
})



Then('the heading should be {word}', async function(color) {
    const colours = {
        'blue': 'rgba(0, 0, 255, 1)'
    };

    const actual = await this.driver.header(this.headless);
    const expected = colours[color];
    
    assert(expected != null);
    assert(actual == expected);
});

Then('the heading background should be {word}', async function(color) {
    const colours = {
        'blue': 'rgba(0, 0, 255, 1)'
    };

    const actual = await this.driver.header(this.headless);
    const expected = colours[color];
// console.log("Actual value is " + actual + "!"); (USED for)
    assert(expected != null);
    assert(actual == expected);
});