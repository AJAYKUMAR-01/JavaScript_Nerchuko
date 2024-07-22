var x = 7;

function getName() {
    console.log("Ajay Kumar");
}

getName();
console.log(x);

/*
output:
Ajay Kumar
7
 */



getFood();
console.log(y);

var y = 10;
function getFood(){
    console.log("Biryani")
}

/*
output:
Biryani
undefined
 */


console.log(getFood);

function getFood(){
    console.log("Biryani")
}

console.log(getFood);

/*
output:
-----------

f getFood() {
    console.log("Biryani");
}

f getFood() {
    console.log("Biryani");
}

 */

