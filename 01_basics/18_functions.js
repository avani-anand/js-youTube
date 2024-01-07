function calculateCartPrice(...num1){      //ye 3 dot lgane se ye hoha ki user jitne v value vejega sb le lega koe limit ni h yha value ka
    return num1
}


console.log(calculateCartPrice(200,400,500,3340,2388923));               //[ 200, 400, 500, 3340, 2388923 ]


function calculateCartPrice2(val1,val2,...num2){    //isse ye hoga ki user jitna v value send kregea usme se agge ka 2 value orint ni higa
    return num2 
}

console.log(calculateCartPrice2(200,400,500,3340,2388923));          ///[ 500, 3340, 2388923 ]


const user ={
    username:"hitesh",
    prices:100
}

//here we are passing object as parameters

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}


handleObject(user)







