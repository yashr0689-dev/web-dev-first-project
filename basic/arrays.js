// arrays

let myArr = [1, 2, 3, 45, 6, 6, 7, 8]
console.log(myArr);
myArr.push(9) // add and dlt at back(push and pop)
myArr.push(20)
myArr.pop()
console.log(myArr);
myArr.unshift(99) // add and dlt at front (unshift and shift)
myArr.unshift(912)
myArr.shift()
console.log(myArr);

console.log(myArr.indexOf(6));
console.log(myArr.includes(10));

const mySecArr = myArr.join() /// type change to string
console.log(myArr);
console.log(mySecArr);//string

//slice and splice
console.log("A) main array :: ", myArr);
let mysec = myArr.slice(1, 5)
console.log("b) main array :: ", myArr);

console.log("b) sliced array :: ", mysec);

let mythr = myArr.splice(1, 5) /// cut main array like -> main array ::  [ 99, 6, 7, 8, 9 ] spliced array ::  [ 1, 2, 3, 45, 6 ]
console.log("c) main array :: ", myArr);

console.log("c) spliced array :: ", mythr);

let heros = ['arman', 'brman', 'hulk ', 'captain']
let zeros = ['anpman', 'joker', 'superman', 'anumpama']
console.log(heros);
// heros.push(zeros) //// it created array inside array
// console.log(heros);
// console.log(heros[4][0]);
console.log(heros.concat(zeros)); /// it properly add one array to another

let all_new_heros = [...heros, ...zeros, ...myArr, ...mySecArr, ...mythr] /// spread operator
console.log(all_new_heros); /// it properly add one array to another

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 14, 5111]] ///make all element in single array but with depth of nested array
const real_another_array = another_array.flat(Infinity) /// number till depth  or infinity depth
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) /// ask if it is an array 
console.log(Array.from("Hitesh")) /// convert any type to array

console.log(Array.from({ name: "hitesh" })) /// interesting shold be told wether keys or value will be array or will give empty 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))