let age=19;
var greet;

if(age>18){
     var greet=function(){
        console.log("Eligible!");
    };
      
}

else{
    greet =function(){
        console.log("Not Eligible!");

    };
}
greet();