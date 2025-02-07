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
