Dont
Repeate
Yourself

let age = 33;

function logUserName (surname, firstname) {
    let userName = surname + firstname;
    console.log(userName + "age is" + age);
}


let anotherName = "Mark"
let anotherSurname = "Janovskij"
logUserName(anotherName, anotherSurname);
logUserName("Mark", "Janovskij")

function isLengthMoreThan6(text) {
    if (text > 6) {
        console.log("true")
    } else {
        console.log("false")
    }
}

isLengthMoreThan6("Titanic")

function calculateLength(text) {

return text.length;
}

//console.log(calculateLength("Titanic"))

let result = calculateLength("Titanic")

function logTextParameter(textData)
{
    let textInfo = calculateLength(textData);
    return textInfo;
}
console.log(logTextParameter("jbnsdijgf"))








let respPositive200 = {
    code: 200,
    body: {
        text: "Some positive message"
    }

}

let respRedirect300 = {
    code: 300,
    body: {
        text:"Some redirect message"
    }
}

let isResponseOk = function (code,expectedCode) {
    if (code === expectedCode) {
        return true
    } else {
        return false
    }
}// kak eto rabotaet????

function getInfoFromResponse (response, codeValidation, expectedCode){
    let text = response.body.text;
    if (!codeValidation(response.code, expectedCode)) {
        console.log(`Not a ${expectedCode}`)
    }
// vashe ne ponimaju
    let info = {};
    info.text = text;
    info.code = response.code;
    return info;
}

console.log(getInfoFromResponse(respRedirect300,isResponseOk, 200))