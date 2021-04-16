// //for those countries whose number of zones is different from zero
// //open the page of this country and check there that the zones are in alphabetical order
// require('chromedriver');
// const { Builder, By, Key, until } = require('selenium-webdriver');
// var webdriver = require('selenium-webdriver');
// const { Options } = require('selenium-webdriver/chrome');
// var driver = new webdriver.Builder().forBrowser('chrome')
//     .build();
// driver.get('http://demo.litecart.net/admin/login.php');
// driver.findElement(By.className('btn btn-default')).click();
// driver.sleep(10000).then(function () {
//     var countreis = driver.findElement(By.css('[title=Countries]'))
//     countreis.click()
//     console.log("hello-4")
// })

// driver.sleep(15000).then(function () {

//     // driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[13]/td[6]')).getText().then(function (txt) {
//     //     console.log(txt)
//     // });


//     driver.findElements(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr/td[6]')).then(function (txt) {
//         const zones = txt.map(el => el.getText().then(function (ttext) { return (ttext) }))
//         Promise.all(zones).then(values => {
//             for (i = 0; i < values.length; i++) {
//                 if (values[i] > 0) {
//                     console.log("ine-", [i])
//                     // driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[13]/td[5]/a')).click()
//                 }
//             }
//             // const countriesName = values;
//             // function array_compare(countriesName) {
//             //     const newArr = []
//             //     for (i = 0; i < countriesName.length; i++)
//             //         if (countriesName[i] > 0) {
//             //             driver.findElement(By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr[13]/td[5]/a')).click()

//             //             // newArr.push(countriesName[i])
//             //             // console.log("dddd")
//             //         }
//             //     return newArr
//             // }
//             // console.log(array_compare(countriesName))
//         });
//     })

//     // driver.findElements(By.className("text-center")).then(function (elements) {
//     //     console.log(elements)
//     //     elements.map(function (el) {
//     //         el.getText().then(function (txt) {
//     //             console.log("ggg" + txt)
//     //         })
//     //     })
//     // })
// })

require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://demo.litecart.net/admin/login.php');
driver.findElement(By.className('btn btn-default')).click();
driver.sleep(10000).then(() => {
    const countreis = driver.findElement(By.css('[title=Countries]'));
    countreis.click();
    console.log('hello-4');
});
(async () => {
    await driver.sleep(15000);
    const zonesTexts = await driver.findElements(
        By.xpath('//*[@id="content"]/div/div[3]/form/table/tbody/tr/td[6]'),
    );
    const countriesTexts = await driver.findElements(
        By.xpath('/html/body/div/main/div/div/div[3]/form/table/tbody/tr/td[5]'),
    );
    const countries = [];
    for await (const el of countriesTexts) {
        const text = await el.getText();
        countries.push(text);
    }
    const zones = [];
    for await (const el of zonesTexts) {
        const text = await el.getText();
        zones.push(text);
    }
    /**
     *
     */
    const countriesValues = await Promise.all(countries).then(values => values);
    /**
     * [[zone, index], [zone1, index1], [zone2, index2] ...]
     */
    const zonesValues = await Promise.all(zones).then(values => {
        const filteredValues = values
            .map((el, index) => [el, index])
            .filter((value) => value[0] > 0);
        return filteredValues;
    });
    let nameCountry = [];
    zonesValues.forEach(([zone, index]) => {
        nameCountry.push(countriesValues[index])
    });
    async function State(nameCountry) {
        for (i = 0; i < nameCountry.length; i++) {

            await driver.findElement(By.linkText(nameCountry[i])).click()
                .then(() => {
                    console.log("name-", nameCountry[i])
                    driver.findElements(By.xpath('//*[@id="content"]/div[2]/div[2]/form/table/tbody/tr/td[3]/input')).then(function (txt) {
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
                .then(() => {
                    driver.navigate().back()
                })
                .catch((err) => {
                    console.log("rejected !!!")
                    console.log(err.message)
                });

        }

    }
    State(nameCountry)

})();







