const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options()
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
chromeOptions.setChromeBinaryPath(bravePath);

async function test() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.name('username')).sendKeys('ProjectAdmin');
    await driver.findElement(By.name('password')).sendKeys('admin');
    await driver.findElement(By.tagName('button')).click();
    await driver.get('http://localhost:3000/users/2');
    const fullName = await driver.findElement(By.name('user')).getText();
    console.log(fullName);
    await driver.quit();
}

test();