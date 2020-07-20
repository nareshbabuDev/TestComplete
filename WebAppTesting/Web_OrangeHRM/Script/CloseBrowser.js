function closebrowser(){
  var processName = "iexplore"; 
  Sys.Refresh(); 
  while (Sys.WaitBrowser(processName).Exists)
    Sys.WaitBrowser(processName).Close();
}