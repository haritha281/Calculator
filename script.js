function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    return document.getElementById("output-value").innerText=num;
}
var op=document.getElementsByClassName("operator");
for(var i=0;i<op.length;i++){
    op[i].addEventListener('click',function(){
       if(this.id=="clear"){
        printHistory("");
        printOutput("");
       }
       else if(this.id=="backspace"){
           var output=getOutput().toString();
           if(output){
               output=output.substring(0,output.length-1);
               printOutput(output);
           }
       }
       else{
           var output=getOutput();
           var history=getHistory();
            if(output!=""){
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");        
                }
               
            }
       }
    });
}
var num=document.getElementsByClassName("number");
for(var i=0;i<num.length;i++){
    num[i].addEventListener('click',function(){
        var output=getOutput();
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}