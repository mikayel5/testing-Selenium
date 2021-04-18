require('chromedriver');

const { Builder, By } = require('selenium-webdriver');

(async function contextClick() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://essentialsln.com/');
        // Store 'Gmail' anchor web element
        let gmailLink = driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div/div/main/article/div/div[5]/div/div/div/div/div/div[1]/div[2]/div/div/div[1]/div/h4'));
        // Capture offset positions of element
        let offset = await gmailLink.getRect();
        let x = await offset.x;
        let y = await offset.y;
        const actions = driver.actions({ async: true });
        // Performs mouse move action onto the element
        await actions.move({ x: parseInt(x), y: parseInt(y) }).pause(3000).click().perform();
    }
    finally {
        //await driver.quit();
    }
})();