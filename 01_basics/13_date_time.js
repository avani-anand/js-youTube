// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());


// console.log(typeof myDate);   //object


let myDate=new Date()

// let myCreatedDate=new Date(2023,0,24)
// console.log(myCreatedDate);         //2023-01-23T18:30:00.000Z
// console.log(myCreatedDate.toDateString());   //Tue Jan 24 2023

let myCreatedDate=new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //to convert in milisecond  divide by 1000

//---------- to get seperate day,month,year ..etc

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());









