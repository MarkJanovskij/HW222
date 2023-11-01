//AAA
//Assign = gotovim sistemu dlja testov
//ACT = dejstvujem
//ASSERT = sravnivaem fakty

let x = 5
let y = 9

console.log(x == y)




let buttonStatus ="enabled"

//if(buttonStatus == "enabled") {
//     console.log("Execute clickBtn()");
// } else {
//     console.log("Execute fillForm();");


    // if(buttonStatus == "enabled") {
    // console.log("Execute clickBtn()");
    // } 
    


    if (buttonStatus == "enabled") {
    console.log("Execute clickBtn()");
} else if (buttonStatus == "disabled") {
    console.log("Execute fillForm();");
} else {
    console.log("Button has another status");

}

console.log("Continue...")