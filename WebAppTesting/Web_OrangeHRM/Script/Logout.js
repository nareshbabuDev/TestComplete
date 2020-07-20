function logout()
{
  //Browsers.Item(btChrome).Navigate("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
  let browser = Aliases.browser;
  let page = browser.pageDashboard;
  page.linkWelcome.Click();
  page.link.Click();
  browser.pageLogin.Wait();
}