const { Keys, By, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { username, password } = require("./credentials.json");

const user_test = username;
const pass_test = password;
const service = new chrome.ServiceBuilder("/Users/ggriffey/chromedriver");

const main = async () => {
  // start the session:
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .build();

  // navigate to URL:
  await driver.get("https://www.facebook.com/");

  // request information from site:
  // ex.
  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 500 });

  // select element(s)
  let username = await driver.findElement(By.id("email"));
  let password = await driver.findElement(By.id("pass"));

  await username.sendKeys(user_test);
  await password.sendKeys(pass_test);

  let submit = await driver.findElement(By.linkText("Log In"));

  await submit.click();
};

main();
