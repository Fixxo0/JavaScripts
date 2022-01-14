// creating Objects and its prop;
let animal = {
    Name:"Ravana",//"," it is use to separate or  to make another prop;
    Heads:10
}

//Dot Notation
console.log(animal.Name);

//Bracket Notation
console.log(animal["Heads"]); 

//Arrays
let Games = ["PUBG","BGMI","FF","CODM"] //To  define Array we use "[]"- Brackets;
console.log(Games)

console.log(Games[1])//using indexing in an Array;
// -------------------------------------------------------------------------------

// Function
function Hello(){
     console.log("Hey!!");
}
Hello()//Calling the function to Print ;

function Hello(Name){
    console.log("Hello"+Name); //we Get Hello Undefined because Name is not "Parsed";
}
function Hello(Name){
console.log("Hello " + "" + Name);
}
Hello("Raj")//Now the  name has been parsed ;



