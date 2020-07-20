function login()
{
  Browsers.Item(btIExplorer).Run();
  Browsers.Item(btIExplorer).Navigate("https://opensource-demo.orangehrmlive.com/");
  //Browsers.Item(btChrome).Navigate(Project.Variables.url);
  let browser = Aliases.browser;
  let form = browser.pageOrangehrm.formFrmlogin;
  let textbox = form.textboxTxtusername;
  textbox.SetText("Admin");
  form.passwordboxTxtpassword.SetText(Project.Variables.Password1);
  form.submitbuttonLogin.ClickButton();
  browser.pageDashboard.Wait();
}

