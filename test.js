require('geckodriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox')
    .build();
//driver.get('https://frontdev.caiman.am');
// driver.findElement(By.xpath("//*[@class='services']/span[1]")).click();
// driver.findElement(By.xpath("//*[@class='services']/span[2]")).click();




driver.get('https://frontdev.caiman.am/library/closure');
// driver.then(function () {
//     driver.findElement(By.xpath("//*[@class='services']/span[2]")).click();
//     console.log("barev-1")
// });

// driver.sleep(5000).then(function () {
//     driver.findElement(By.xpath("//*[@class='tabs-nav-list']/div[0]")).click();
//     console.log("barev-2")
// });



// driver.sleep(5000).then(function () {
//     driver.findElement(By.xpath("//*[@class='services']/span[2]")).click();
//     console.log("barev-2")

// })
// driver.sleep(10000).then(function () {
//     driver.findElement(By.className("ant-btn ant-btn-primary sc-bdfBwQ imaoqE caiman-btn caiman-btn-primary")).click();
//     console.log("barev-3")

// })

driver.findElement(By.className("ant-btn ant-btn-primary sc-bdfBwQ imaoqE caiman-btn caiman-btn-primary"))
//hello