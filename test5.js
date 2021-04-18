//require('chromedriver');
require('geckodriver');
const { Builder, By, Key, until, WebDriver, WebElement, Actions } = require('selenium-webdriver');
let fs = require('fs');
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('https://essentialsln.com/');
        /** click and have requiared fields */
        await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[1]/div/div/div/div/div/div[2]/div/div/div/div/div/div/div/a')).click();
        await driver.findElement(By.xpath('//html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/p/input')).click();
        let result = await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/div[1]/label/span/span')), 10000)
        await driver.sleep(3000);

        if (result) {
            /* send message*/
            await driver.findElement(By.name('First')).sendKeys('Mikayel');
            await driver.findElement(By.name('text-576')).sendKeys('Nahapetyan');
            await driver.findElement(By.name('your-email')).sendKeys('mikayel@gmail.com');
            await driver.findElement(By.name('your-message')).sendKeys('Hello my frineds');
            await driver.findElement(By.xpath('//html/body/div[1]/div[2]/div/div/div/main/article/div/div[13]/div/div/div/div/div/div/div[2]/div/div/div/div/div/form/div[2]/p/input')).click();

            /** click and show menu1 */
            await driver.sleep(5000);
            await (await driver.findElement(By.xpath('/html/body/div[1]/header/div[1]/div/div/div[1]/div[2]/div'))).click();
            const menuTexts1 = await driver.findElements(
                By.xpath('/html/body/div[1]/header/div[1]/div/div/div[1]/div[2]/div/div/ul/li/a'),
            );
            const menu1 = [];
            for await (const el of menuTexts1) {
                const text = await el.getText();
                menu1.push(text);
            }
            console.log("names-1", menu1)
            /** take screensho-1 */
            let takeScreen_1 = await driver.takeScreenshot();
            await fs.writeFileSync('./image-1.png', takeScreen_1, 'base64');
            /* resize window*/
            await driver.manage().window().setRect({ width: 768, height: 500 });

            /** click and show menu2 */
            await driver.sleep(3000);
            await (await driver.findElement(By.xpath('/html/body/div[1]/header/div[3]/div/div/a/i'))).click();
            /**take screenshot-2 */
            let takeScreen_2 = await driver.takeScreenshot();
            await fs.writeFileSync('./image-2.png', takeScreen_2, 'base64');
            const menuTexts2 = await driver.findElements(
                By.xpath('/html/body/div[7]/div/ul/li/a'),
            );
            const menu2 = [];
            for await (const el of menuTexts2) {
                const text = await el.getText();
                menu2.push(text);
            }
            console.log("names-2-", menu2)
            /** compare menus */
            function array_compare(menuTexts1, menuTexts2) {
                for (i = 0; i < menuTexts1.length; i++)
                    if (menuTexts1[i] != menuTexts2[i])
                        return false;
                return true;
            }
            console.log(array_compare(menuTexts1, menuTexts2))

        } else {
            console.log("We have some problem")
        }

    }
    finally {
        console.log("hell")
        driver.quit();
    }

})();