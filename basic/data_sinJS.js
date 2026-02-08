// Dates
const mysecdate = new Date()
const mydate = Date()
console.log(mydate);
console.log(mysecdate);
console.log(mysecdate.toString());
console.log(mysecdate.toLocaleString());
console.log(mysecdate.toDateString());


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate3 = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2);

let myTimeStamp = Date.now()

console.log(myTimeStamp);// time in millisec from 1st jan 1970s to now use in quizes and compitition to compare 
console.log(myCreatedDate2.getTime()); // it is in millisecond
console.log(Math.floor(Date.now()/1000)); // to convert in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate);
