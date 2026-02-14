const tinderUser = new Object() // => it is a singleton object
// const tinderuser = {} => it is a non singleton object

tinderUser.id= "123@abh"
tinderUser.name = "yashika"
tinderUser.email = "yashikachoahan@gmail.com"

// console.log(tinderUser);

const amazonuser = {
    email : "amaona@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Yash",
            lastName : "Raj"
        }
    }
 }
// console.log(amazonuser.fullname);
// console.log(amazonuser.fullname.userFullName);
// console.log(amazonuser.fullname.userFullName.firstName);

const obj1 = {1 : "fisrt", 2 : "sec"}
const obj2 = {3 : "third" , 4 : "forth"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2)
// const obj5 = Object.assign({},obj1, obj2) // {} => act as target and other as source to it
const obj3  = {...obj1, ...obj2} // mostly we use spread opretor

// console.log(obj3);

const users =[
    {
        id: 1,
        email : "yash@gamil.com"
    },
    {
        id: 1,
        email : "yas2h@gamil.com"
    },
    {
        id: 1,
        email : "yash@gamil.com"
    }
]
// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // => of array data type most used
// console.log(Object.values(tinderUser)); // => of array data type
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogIn")); // to check if property available or not
// console.log(tinderUser.hasOwnProperty("id"));

// objects destructuring 
 
const course = {
    courseName : "Yash bhai ki padhai",
    price : "100002",
    courseInstructor : "Yash Raj"
}

// to make clean code  
// const {courseInstructor} = course // destructuring  

const {courseInstructor: instrc} = course // instrc is nickname which u can give 

// console.log(courseInstructor);
console.log(instrc);

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")


////////api///////////
//JSON syntex 
// {
//     "name" : "Yash Raj",
//     "course" : "Yash ki Padhai"
//     "price" : "free"

// } // apis can be of array type
// [
//     {},
//     {},
//     {}
// ]





