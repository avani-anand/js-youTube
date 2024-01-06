// how to merge arrays -------------------------------


const marvel_heros=["thor","ironman","spiderman"]
const  dc_heroes =["spiderman","flash","batman"]


// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);   // [ 'thor', 'ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ] ]
// console.log(marvel_heros [3][1]);  //flash                 --yha array k andar ban gya h jo usme se 3 index p jo array bna hua h usme ka 1 index print hoga




const all_heroes=marvel_heros.concat(dc_heroes)
console.log(all_heroes);       //[ 'thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman' ]

const all_new_heroes= [...marvel_heros, ...dc_heroes]    //----------------concat and ye trika bilkul same h
console.log(all_new_heroes);         //      [ 'thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman' ]


const another_array=[1,2,3,[4,5,6],7,[6,6,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);    // [1, 2, 3, 4, 5,6, 7, 6, 6, 4,5]


console.log(Array.from("hitesh"));      //[ 'h', 'i', 't', 'e', 's', 'h' ]


let score1=100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3));    //[ 100, 200, 300 ]


