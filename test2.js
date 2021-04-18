//Check that countries are in alphabetical order
require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome')
    .build();
driver.get('http://demo.litecart.net/admin/login.php');
driver.findElement(By.className('btn btn-default')).click();
driver.sleep(10000).then(function () {
    var countreis = driver.findElement(By.css('[title=Countries]'))
    countreis.click()
    console.log("clicked-1")
    // console.log(teest.getAttribute("textContent"))
})
// driver.sleep(10000).then(function () {
//     driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[1]/td[5]/a')).click();

//     //    driver.findElement(By.linkText("Afghanistan")).click();

// })


//get text and console log
driver.sleep(20000).then(function () {

    // driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[1]/td[5]/a')).getText().then(function (txt) {
    //     console.log(txt)
    // });
    driver.findElements(By.xpath('/html/body/div/main/div/div/div[3]/form/table/tbody/tr/td[5]')).then(function (txt) {
        const countries = txt.map(el => el.getText().then(function (ttext) { return (ttext) }))
        let isCompare = Promise.all(countries).then(values => {
            const countriesName = values;
            const countriesNameSort = values.sort();
            function array_compare(countriesName, countriesNameSort) {
                for (i = 0; i < countriesName.length; i++)
                    if (countriesName[i] != countriesNameSort[i])
                        return false;
                return true;
            }
            console.log(array_compare(countriesName, countriesNameSort))

        });
    })
})



