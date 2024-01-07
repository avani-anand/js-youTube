//const tinderUser=new object()               this is singleton object

const tinderUser={}                    //  this is non singleton object 

 tinderUser.id="1234abc"
tinderUser.name="hitesh"
tinderUser.isLoggedIn=false


// console.log(tinderUser);
 

const regularUser={
    email:"avni@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudary"
        }
    }
}


// console.log(regularUser.fullname);         
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


//merging two object 

const obj1 ={1:"a",2:"b"}
// const obj2 ={1:"c",2:"d"}         agar obj2 ka key same hi rkhenge chahe value diffrent ho par merge krega to sirf obj2 hi show hoga isliye key ko hmesa diffrent rkhna h
const obj2 ={3:"c",4:"d"}

// const obj3=Object.assign({}, obj1,obj2)              

const obj3={...obj1,...obj2}              //ye vala method jada use krenge object ko merge krne k liye
console.log(obj3);



// to get only key or value of any object

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));





//----------------------


const course={
    coursname:"js in hindi",
    price:"999",
    courseInstructor:"hitesh kumar"
}

// ab iss course object se courseInstructor mujhe bar bar chahiye to bar bar aise access krne se acha console.log(course.courseInstructor);


const {courseInstructor}=course       //aise bna lenge phir jb v jha v chahiye hoga bs console.log(courseInstructor);         ye print kr denge


console.log(courseInstructor);        



