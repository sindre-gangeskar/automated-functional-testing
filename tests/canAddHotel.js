const { By, Key, Builder } = require('selenium-webdriver');
require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
chromeOptions.setChromeBinaryPath(bravePath);

async function test() {
    var driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    await driver.get('http://localhost:3000/login');
    await driver.findElement(By.name('username')).sendKeys('ProjectAdmin');
    await driver.findElement(By.name('password')).sendKeys('admin');
    await driver.findElement(By.tagName('button')).click();
    await driver.get('http://localhost:3000/hotels');
    
    const rows = await driver.findElements(By.className('row'));
    console.log(rows.length);

    await driver.findElement(By.name('addHotel')).click();
    const hotelNameAlert = driver.switchTo().alert();
    await hotelNameAlert.sendKeys('Selenium Hotel');
    await hotelNameAlert.accept();

    const hotelLocationAlert = driver.switchTo().alert();
    await hotelLocationAlert.sendKeys('Selenium');
    await hotelLocationAlert.accept();

    await driver.quit();
}

test();