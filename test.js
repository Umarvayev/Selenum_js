const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() 
{
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com/");

    await driver.findElement(By.linkText('See a sample confirm')).click();

    console.log(await driver.getTitle('salom'));

    if(await driver.getTitle() === "Sign in to GitHub . GitHub"){
        console.log("Test #1 success");
    }else{
        console.log("Test #1 faild");
        return;
    }


    await driver.findElement(By.name("login")).sendKeys("umarvayevxusan@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("**********", Key.RETURN);

    if (await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
            console.log("Test #2 success")
    }


    driver.quit();
}

test_case();

