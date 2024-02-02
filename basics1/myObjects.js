const user = {
    username: "kapil",
    "first Name": "devansh",
    name: "kp",
    email: "kapilmehta.88@test.com",
    age: 30,
    isAdmin: false,
    isLoggedIn: true,
    tea: ["lemon", "peach", "ginger"],
    address: {
        city: "bhopal",
        state: "Madhya Pradesh"
    }
}

const anotherUser = user

//2 ways to access

console.log(user.age);
console.log(user['age']);
console.log(user.tea[1]);
console.log(user.address.state);
console.log(user["address"]["state"]);

user.email = "devansh@gmail.com"
console.log(user.email);

console.log(user);
console.log(anotherUser);

delete user.isAdmin
console.log(user);

console.log(user["first Name"]); // To access property having space.

const userListFromDatabase = [{}, {}, {}] // Lot of times values recieved from database end - Array of objects.


console.log("+++++++++++++++++++++++++++++++++++++");
// Just like we have methods in array, we have methods in Objects. // Prototypes //

// console.log(user.keys()); // TypeError: user.keys is not a function --> NO such thing

console.log(Object.keys(user)); // It will return Array of strings containing all the keys in object.

console.log(Object.values(user));

console.log(Object.entries(user));


console.log(user.keyboard); // undefined.  // undefined handling is not good.

// There are ways for asking the question.
console.log(user.hasOwnProperty("keyboard")); 
console.log(user.hasOwnProperty("tea"));
