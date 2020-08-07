



var myFunctions = []


for (var i = 0; i < 200; i++) {
    var myFunc = function () {
        console.log(i)
    }
    myFunctions.push(myFunc)
}



myFunctions[0]() // 
myFunctions[1]() // 