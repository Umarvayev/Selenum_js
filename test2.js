const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() 
{
    let driver = await new Builder().forBrowser("chrome").build();
 
    await driver.get("https://github.com/LambdaTest/javascript")
  
    await driver.findElement(By.id("query-builder-test"));

    await driver.quit();
}
example();


