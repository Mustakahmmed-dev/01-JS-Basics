// Five items and console log the 3rd index element
let fruits = ["apple", "mango", "banana", "orange", "grape"];
console.log("The fruit of third element " + fruits[2])

// Add and remove elements
let touristDestination = ["Buthidaung", "Rathidaung", "Kyataw"];
touristDestination.push("Ramre");
touristDestination.push("Minbya", "Mrauk U");

touristDestination.pop();

console.log("Tourist destinations " + touristDestination);

// Books list
let myBooks = ["HTML", "CSS", "JS", "SQL", "Python", "Ruby"];
let availableBook = myBooks.includes("Python");

if(availableBook == true){
    console.log("Yes, I have the book")
}
else{
    console.log("No, I don't have the book")
}

// Checking if it's an array
var nameList = ["Jafor", "Jabbar", "Arakani", "Shofi", "Rofiq", "Mishu"];
var bookName = "JavaScript";
var car = {
    name: "ARMM",
    model: "ARMM130",
    mfg: 2000
}
// Check if it's an array
console.log(
    "Array : " + Array.isArray(nameList) +
    "Array : " + Array.isArray(bookName) +
    "Array : " + Array.isArray(car)

);
