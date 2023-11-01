//callback =matreshka
// how much money we save

function calculateExpenses(food, restaurant, utilities, school) {
    return food + restaurant + utilities + school;
}

function calculateSavings(expenses = calculateExpenses(200,450,300,100), salary = 5000){
    return salary-expenses
}

console.log(calculateSavings(1500, 7000))

const sampleData = require(`./generated.json`)
//console.log(sampleData)
//func1()
//func2()
//func3()
function first(array, callback) {
    let emailsArray = [];
    array.forEach(userData => {
        //console.log(userData.email)
        emailsArray.push(userData.email)

    });

    setTimeout(() =>{
       console.log(emailsArray)
       callback(); 
    }, 2000);

    console.log(emailsArray)
}
function second() {
    console.log("Second action")
}

first(sampleData, second)
//second()