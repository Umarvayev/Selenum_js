const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");
var should = require("chai").should();

async function example() 
{
    //launch and browser
    let driver = await new Builder().forBrowser("chrome").build();
 
    //navigate to our application
    await driver.get("https://www.google.com/search?q=translate&oq=translate&aqs=chrome.0.69i59j0i67i650j0i512j0i131i433i512l2j0i433i512j0i67i131i433i650j0i433i512j0i512l2.6414j0j7&sourceid=chrome&ie=UTF-8")
  
    //add a todo
    //await driver.findElement(By.id("query-builder-test").sendKeys("How to",Key.RETURN));

    //asset using node assertion
    let todoText = await driver.findElement(By.id("tw-source-text-container")).getText().then(function(value){
        return value
    });

    //asset using node assertion
    //assert.strictEqual(todoText,'How');

    //asset using chai should
    todoText.should.equal("How AND");

    //close the browser
    await driver.quit();
}
example();


