let element = document.getElementById("display");
function append(num){
    element.value+=num;
}
function calculate(){
    element.value=eval(element.Value);
}
function clearAll(){
    element.value="";
}