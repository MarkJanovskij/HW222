function doSth(oneArgument, twoArgument){
    let x = oneArgument +twoArgument;
    return x;
}

let result = doSth(3, 7)
console.log(result)




function doSth2(oneArgument, twoArgument){
    let x = oneArgument +twoArgument();
    return x;
}



let result2 = doSth2(3, function() {
return 6+10;


})
console.log(result2)


