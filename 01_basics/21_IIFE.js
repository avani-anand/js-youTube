// iiffe is a imidetely invoke funtion which run just after and at the ending we should always write semiclon else our code did not understand what to do after that
// to avoid global pollution we use iffe


(function chai(){
    //this is named IIFE
    console.log(`DB CONNECTED`);
})();            //output----   DB CONNECTED


 //same function written by arrow function


(()=>{

    //this is simple IIFE
    console.log(`DB CONNECTED BY ARROW FUNCTION`);
})(); 



((name)=>{
    console.log(`DB CONNECTED To ${name}`);
})('hitesh'); 
















