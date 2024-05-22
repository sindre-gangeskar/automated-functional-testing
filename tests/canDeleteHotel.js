const { By, Builder, Key } = require('selenium-webdriver');
require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
options.setChromeBinaryPath(bravePath);

async function test() {
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.name('username')).sendKeys('ProjectAdmin');
    await driver.findElement(By.name('password')).sendKeys('admin');
    await driver.findElement(By.tagName('button')).click();
    
    await driver.get('http://localhost:3000/hotels');
    const rows = await driver.findElements(By.className('row'));
    await rows[ rows.length - 1 ].findElement(By.tagName('button')).click();

    await driver.quit();
}

test();
