function printName(){
    let helloName = "Hello John";
    function inner(){
        return helloName;
    }
    console.log(inner()) 
}
printName()
