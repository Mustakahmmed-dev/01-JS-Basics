// Free drinks
let burger = 100;

if(burger >= 500){
    console.log("Have a cool drink for free");
}
else{
    if(burger >= 250){
        console.log("Have a chocoloate for free");
    }
    else{
        console.log("There's nothing free for you");
    }
}

// BMI Formula: weight / height(2)[**], h in meter

let w = 100;
let h = 2
let BMI = w / (h*h);

if(BMI < 18.5){
    console.log("You are underweight : " + BMI)
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("You are normal: " + BMI)
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight: " + BMI)
}
else{
    console.log("You are obese " + BMI)
}

// Student Grading
let studentName = "Abdullah";
let studentScore = 81;

if(studentScore <= 100 && studentScore >= 90){
    console.log("Your score is: " + "A")
}
else if(studentScore > 80){
    console.log("Your grade is: " + " B ")
}
else if(studentScore > 70 ){
    console.log("Your grade is : " + "C")
}
else if(studentScore > 60){
    console.log("Your score is : " + "D")
}
else{
    console.log("Your grade is : " + "F")
}

// Friend scoring - satisfactioning
let friendScore = 80;
let myScore = 79;
if(friendScore > 80){
    console.log("Let's go for a lunch")
}
else if(friendScore >= 60){
    console.log("Good luck next time my friend")
}
else if(friendScore < 60){
    console.log("Let me keep your message unseen")
}
else if(friendScore < 40){
    console.log("Let me block the friend")
}
else{
    console.log("let's have a big potato")
}

// myScore
if(myScore < 80){
    console.log("Go home and sleep and act like sad")
}
else{
    console.log("Have an icecream party")
}

// Number doubling and ternary usage

let num1 = 25;
let num2 = 20;
let result;

if(num1 > num2){
    result = num1 * num1 + num2;
}
else{
    result = num1 + num2;
    
}
console.log("The result is " + result)

