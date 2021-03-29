
require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome')
    .build();
driver.get('http://demo.litecart.net/admin/login.php');
driver.findElement(By.className('btn btn-default')).click();
driver.sleep(5000).then(function () {
    var countreis = driver.findElement(By.css('[title=Countries]'))
    countreis.click()
    console.log("barev-4")
    // console.log(teest.getAttribute("textContent"))
})
// driver.sleep(10000).then(function () {
//     driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[1]/td[5]/a')).click();

//     //    driver.findElement(By.linkText("Afghanistan")).click();

// })

driver.sleep(10000).then(function () {

    driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[1]/td[5]/a')).getText().then(function (txt) {
        console.log("the" + txt)
    });
})




