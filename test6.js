require('chromedriver');

const { Builder, webdriver, By } = require('selenium-webdriver');
(async function example() {
    let driver = new Builder()
        .forBrowser('chrome')
        .build();
    await driver.get("https://frontdev.caiman.am/");
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div[1]/div/span[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[3]/div/div[1]/button/span')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/button[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('name')).sendKeys('OPTIOKON');
    await driver.findElement(By.id('shortName')).sendKeys('OPK-347');
    await driver.findElement(By.id('countryId')).click();
    await driver.findElement(By.xpath('/html/body/div[4]/div/div/div/div[2]/div[1]/div/div/div[3]')).click();
    await driver.findElement(By.id('address')).sendKeys('Yerevan Davtashen');
    await driver.findElement(By.id('phone')).sendKeys('0037494656575');
    await driver.findElement(By.id('email')).sendKeys('mikayel@gmail.com');
    await driver.findElement(By.id('description')).sendKeys('anmorganmorganmorgamorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorgannmorganmorganmorganmorganmmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorgannmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorgamorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmrganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorganmorgan');
    await driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div/form/div[2]/button[2]')).click();
    await driver.sleep(3000);
    let netxt = await driver.findElement(By.xpath('/html/body/div[3]/div/div[2]'));
    // Capture offset positions of element
    let offset = await netxt.getRect();
    let x = await offset.x;
    let y = await offset.y;
    const actions = driver.actions({ async: true });
    // Performs mouse move action onto the element
    await actions.move({ x: parseInt(10), y: parseInt(10) }).click().perform();
    await driver.sleep(4000);
    await driver.findElement(By.xpath('/html/body/div[6]/div/div[2]/div/div[2]/div/div/div[2]/button[2]/span')).click();
    await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div[2]/span[3]/div')).click();

    var errorRes = await driver.manage().logs().get("browser");
    console.log(errorRes);

})();