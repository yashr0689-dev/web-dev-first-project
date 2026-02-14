// singleton
// Object.create => constractor method 

//object literals

const mySym = Symbol("keys1")

const JsUser = {
    name : "Yash Raj", // keys : values
    [mySym] : "myKey1", // [sym ] : "mykey" is syntex for symbol
    "FullName" : "Yash Raj Vishwakarma",
    age: 18, 
    email : "yash@gmail.com",
    location : "Jaipur",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"],

}
// object access

console.log(JsUser.email); // method one
console.log(JsUser["email"]); // method 2
console.log(JsUser["FullName"]); // method one can not be applied here only can access by second method
console.log(JsUser[mySym]); //syntex for access for symbol

JsUser.email = "yashRaj@gamil.com"
// to freez or lock value
// Object.freeze(JsUser)
JsUser.email = "yash@microsoft.com" // it will not overwrite becoz of freez
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser welcome");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello JsUser welcome, ${this.name}` ); // for referance of name or any key
    
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

 


