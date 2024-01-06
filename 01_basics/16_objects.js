
const mySym = Symbol("key1")   // ye symbol ko object m dusre type se store krte h aur print v krvana ho to thoda dusra style hota

const Jsuser ={
    name:"hitesh",
    email:"hitesh@gmail.com",
    [mySym]:"mykey1",              //aise hi symbols ko object  m save krte h
    "full name":"hitesh cahudary",
    age:18,
    location:"aurangabad",
    lastLoginDay: ["monday","tuesday"]
}


//HOW TO ACCESS OBJECT VALUES-----------------------------------


// console.log(Jsuser.email);      //aise access to ho jaega par glt trika h 
// console.log(Jsuser["email"]);  //ye shi trika h
// console.log(Jsuser["full name"]);    // kyuki agar key ka name alag alag hoga to aise hi access krne p hoga vaise ni hoga
//                               // console.log(Jsuser.full name);   we can not access this like that 
// console.log(Jsuser[mySym]); //mykey1



// to change values of key ------------

// Jsuser.email="avnai@gmail.com"
// console.log(Jsuser.email);   



// to freeze the object so no one can change the values of key

// Object.freeze(Jsuser)       // freez kr denge to koe v value object ka chnage ni kr skte
// console.log(Jsuser);




// to add function in object


Jsuser.greeting =function(){
    console.log("hello js user this is greeting from function");
}

// console.log(Jsuser.greeting);      //[Function (anonymous)]        ye function return kr rha h 
console.log(Jsuser.greeting());     //hello js user this is greeting from function



// how to access object key values using function

Jsuser.greetingTwo =function(){
    console.log(`hello js user functionTwo greeting from ${this.name}`);
}

console.log(Jsuser.greetingTwo());       //hello js user functionTwo greeting from hitesh



