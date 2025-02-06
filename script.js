

// Variables declaration keywords: var, let, const
// Comparison rel keywords: ==, >, <, !=, ||, &&, +=, -=, *=, */,

// User validation
var name = "Mustak";
var age = 20;
var country = "Arakan";

if (name == "Mustak" && age == 20 && country == "Arakan") {
    // console.log("Yes, this is true that it's Mustak Ahmmed from Arakan");
}
else {
    // console.log("No, maybe you are someone not relevant to the given criteria");
}

// Comparison & Conditions
let studentName = "Ahmmed";
let studentSubject = "Mathematics";
let studentMarks = 80;
let studentRole = 1;

if(studentSubject == "Mathematics" && studentMarks >= 80 && studentRole >= 3){
    // console.log("This student has a good capacity to survive this world");

}
else{
    // console.log("This student should try to learn and pay attention more in the learning and disciplines");
}

// Ticketing allowance
let customer = "Jackie";
let customerAge = 12;
let freedomF = true;

if(customerAge >= 18 || freedomF === true){
    // console.log("Yes, please" + " " + customer + " You can enter the museum");
}
else{
    // console.log("Sorry " + customer + ", You can't enter!");
}
// Ternary code
customerAge <= 15 ? console.log("Hey, you are still a kid! You can enter the museum, it's for you") : console.log("Oh sorry, you are an older man, it's not for you.");

// Customer 2 Budget comparison, condition
let customer2Budget = 320;
let isLeader = true;

if(customer2Budget >= 30){
    // console.log("Yes, you can purchase this food and eat");
}
else{
    // console.log("Sorry, you don't have sufficient amount to purchase");
}

// Discount
let price = 1000;
if(price >= 5000){
    let discount = price * 10 / 100;
    let payOut = price - discount;
    console.log("Your  total payout is :" + payOut);
}
else{
    if(price >= 2500){
        let secondDiscount = price * 5 / 100;
        let secondPayOut = secondPayOut - price;
        console.log("Your Total Amount is: " + secondPayOut)
    }
    else{
        console.log("Sorry, there's no discount for you. Your  total payout is: " + price)
    }
}
