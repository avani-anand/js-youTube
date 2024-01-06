// stack (primitive values save hote stack jo h vo block by block save hota means agar niche  likha hua ka value change krenge to sbka value change ni hoga bs ussi ka hoa)            heap (non-primitive value save hote heap jo memory m refrence meemory allocation se save krta means agar value change krenge to har jgah change ho jaega)



// -----------------heap 


let myYoutubename ="hitesh@gmail.com"

let anothername =myYoutubename
anothername="chai aur code"  //yha anothername ka value chnage v kr dengesirf usi ka value change hoga myyoutubename ka ni              

console.log(myYoutubename);        //hitesh@gmail.com
console.log(anothername);       //chai aur code


// -------------------stack 


let  userOne={
    email:"mohankumar",
    upi:"shohan@ybl"
} 

let  userTwo={
    email:"mohankumar",
    upi:"shohan@ybl"
}

userOne=userTwo;    //yha jaise hi userone m usertwo ka value dalnege to stack m memory k refrence se save hota isliye jakr memmory m change kr dega value jha save h phir dono ka output same aega

console.log(userOne); //{ email: 'mohankumar', upi: 'shohan@ybl' }
console.log(userTwo);  //{ email: 'mohankumar', upi: 'shohan@ybl' }













