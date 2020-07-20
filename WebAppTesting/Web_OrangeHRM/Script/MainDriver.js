//USEUNIT Test

function driver(){
    //assign project variable into a temp variable
    var masterSheet = Project.Variables.MasterSheet;
    //reset the iterator to make sure we are starting fro the first row of the sheet
    masterSheet.Reset();
    
    Log.AppendFolder("Excel Driver Run");
    
    //make sure sheet contains data
    if(!masterSheet.IsEOF()){
        //loop thru each row
        while(!masterSheet.IsEOF())    {
            var runFlag = masterSheet.Value("RunFlag");
            var functionsToRun = masterSheet.Value("Function");
            var testcaseID = masterSheet.Value("TestCaseID");
            //run only if run flag set to yes
            if(aqString.Compare(runFlag,"YES",false) == 0){
                //create log section
                Log.AppendFolder("Test case : " + testcaseID);
                
                //function to the test case
                try{
                    Runner.CallMethod(functionsToRun);
                    //eval(functionsToRun)//if you want to run mulitple functions then just do for loop here to do the same;
                }catch(ex){
                    Log.Error("Unable to run " + testcaseID + " error is : " + ex.stack);
                }
            }
            Log.PopLogFolder();
            
            masterSheet.Next();
        }
    }else{
        Log.Warning("There is no data found to execute");
    }
    
    Log.PopLogFolder();
}






















