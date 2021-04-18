//require('chromedriver');
require('geckodriver');
const { Builder, By, Key, until, WebDriver, WebElement, Actions } = require('selenium-webdriver');
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('https://essentialsln.com/');

        await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[1]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/a')).click();
        await driver.findElement(By.xpath('//html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/p/input')).click();
        let result = await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/div[1]/label/span/span')), 10000)
        await driver.sleep(10000);

        if (result) {
            await driver.findElement(By.name('First')).sendKeys('Mikayel');
            await driver.findElement(By.name('text-576')).sendKeys('Nahapetyan');
            await driver.findElement(By.name('your-email')).sendKeys('mikayel@gmail.com');
            await driver.findElement(By.name('your-message')).sendKeys('Hello my frineds');
            await driver.findElement(By.xpath('//html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/p/input')).click();
            await driver.sleep(5000);
            const ResulTexts = await driver.findElements(
                By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[3]'),
            );
            const result = [];
            for await (const el of ResulTexts) {
                const text = await el.getText();
                result.push(text);
            }
            /**
             *
             */
            console.log("ErrorText-", result[0])
        } else {
            console.log("We have error")
        }

    }
    finally {
        console.log("hell")
        driver.quit();
    }

})();