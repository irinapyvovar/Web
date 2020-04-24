const { Builder, By, Key, until } = require('selenium-webdriver');

(async function pars() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get('https://www.google.com/search?q=african+hedgehog&oq=african+hedgehog&aqs=chrome.0.69i59j46j0l6.9020j0j7&sourceid=chrome&ie=UTF-8');
        await driver.wait(until.elementLocated(By.id('center_col')));

        for (let i = 1; i < 9; i++) {
            let j = i + 2;
            var name = await (await driver.findElement(By.xpath('//*[@id="rso"]/div[' + j + ']/div/div[1]/a/h3'))).getText();
            var link = await (await driver.findElement(By.xpath('//*[@id="rso"]/div[' + j + ']/div/div[1]/a'))).getAttribute('href');
            console.log(`${i}) ${name} - ${link}`)
        }
        driver.quit();
    } catch (err) {
        Console.log(err)
    }
})();