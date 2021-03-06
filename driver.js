require('chromedriver'); // for availability
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

module.exports = (() => {
    return {
        // To initialize a 'headless' browser for testing
        headless: async (url) => {
            const headless = new webdriver.Builder().forBrowser('chrome').
            setChromeOptions(new chrome.Options().headless().
            setAcceptInsecureCerts(true).
            windowSize({width: 1920, height: 1200})).
            build();

            await headless.get(url);
            return headless;
        },

        // Returns header colour
        header: async (headless, expected) => {
            const css = webdriver.By.css('#header');
            const el = await headless.findElement(css);
            return await el.getCssValue('background-color');
        },

        // Clicks the toggle button
        toggle: async (headless) => {
            const css = webdriver.By.css('#toggle');
            const el = await headless.findElement(css);
            el.click();
        },

        changePage: async (headless) => {
            const css = webdriver.By.css('#newsletter');
            const el = await headless.findElement(css);
            el.click();
        }
    };
})();