const { By, Key, Builder } = require('selenium-webdriver');
require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
chromeOptions.setChromeBinaryPath(bravePath);

async function test() {
    const driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.name('username')).sendKeys('ProjectAdmin');
    await driver.findElement(By.name('password')).sendKeys('admin');
    await driver.findElement(By.tagName('button')).click();

    await driver.get('http://localhost:3000/hotels');
    const rows = await driver.findElements(By.className('row'));
    await rows[ 0 ].findElement(By.name('rent')).click();
    await driver.findElement(By.name('PricePerDay')).sendKeys(33);
    await driver.findElement(By.name('Capacity')).sendKeys(9999);
    await driver.findElement(By.name('submit')).click();

    await driver.quit();
}

test();