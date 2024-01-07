const user ={
    username: "hitsh",
    price:"8999",
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
    
        // console.log(this);
    }
    
}


user.welcomeMessage()         //hitsh,welcome to website

user.username =" avani anand"
user.welcomeMessage()           //avani anand,welcome to website


// console.log(this);


function chai() {
    console.log(this);
}



chai()










