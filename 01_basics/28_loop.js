const arr=[200,300,400]

for(const num of arr){
    console.log(num);
}

// output
//  200
// 300
// 400

const greeting ="hello world"
for(const greet of greeting){
    console.log(`each char is ${greet}`);
}

// output 
// each char is h
// each char is e
// each char is l
// each char is l
// each char is o
// each char is  
// each char is w
// each char is o
// each char is r
// each char is l
// each char is d


// map is known for unique value so we cannot add   same value in this

const map = new Map()
map.set('IN',"india")
map.set('IN',"india")  //here this is same value as wriiten before so this can not be added 
map.set('USA',"indiunited state of america ")
map.set('FR',"france")


console.log(map);
// output
// Map(3) {
//     'IN' => 'india',
//     'USA' => 'indiunited state of america ',
//     'FR' => 'france'
//   }

for (const [key,value] of map){
    console.log(key, ':',value);
}

// output
// IN : india
// USA : indiunited state of america
// FR : france









