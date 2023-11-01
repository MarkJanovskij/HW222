let testUser = new Object();

testUser.name = "Mark";
testUser.age = 33;
testUser.city = "Salzburg";

console.log(testUser);

let someString = "new string";
let someOther = new String();

let testUserLiteral = {
    name: "Mark",
    age:  33,
    city: "Salzburg"
}
console.log(testUserLiteral);

let testUserAray = new Array ("mark", 33, "Salzburg");
console.log(testUserAray);

let testUserFunction = new Function(
    "userName",
    "age",
    "city",
    "return userName + age + city"
);
console.log(testUserFunction("Mark", 33,"Salzburg"));

let testUserSimple = {
    name: "Mark",
    age:  33,
    "city-default": "Salzburg"
}
console.log(testUserSimple);
let newProp = "car"
testUserSimple[newProp] = "BMW i8";
console.log(testUserSimple);

if(testUserSimple.age > 30 && testUserSimple.car == `BMW i8`) {
    console.log("we can make you an offer")
} else {
    console.log("You are too young")
}

let anotherTestUser = testUserSimple;
console.log(anotherTestUser);

anotherTestUser.name = "Viktor"
console.log(anotherTestUser);

let calculation = {
    april: 5000,
    may: 6000,
    june: 7000,
    calculateAverage: function() {
        let average = (calculation.april + calculation.may + calculation.june)/3;
        console.log(`average for ${calculation.april}, ${calculation.may}, ${calculation.june} is ${average}`)
    }
}

calculation.calculateAverage();
//JSON -JS object notation