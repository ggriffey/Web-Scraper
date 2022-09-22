const { Keys, By, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const user_test = "test_username";
const pass_test = "test_password";

const service = new chrome.ServiceBuilder("/Users/ggriffey/chromedriver");

// start the session:
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeService(service)
  .build();

const util = require("util");
// console.log(util.inspect(driver));

// navigate to URL:
driver.get("https://www.facebook.com/");

// request information from site:
// ex.
driver.getTitle();

/* set waiting strategy (as to not access information 
    that is not yet available) */
// driver.manage().setTimeouts({ implicit: 5000 });

// select element(s)
let username = driver.findElement(By.id("email"));
let password = driver.findElement(By.id("pass"));

driver.wait(username.sendKeys(user_test), 10000);
driver.wait(password.sendKeys(pass_test), 10000);

// let submit = driver.findElement(By.id("u_0_5_bb"));
// driver.wait(submit.click(), 5000);
