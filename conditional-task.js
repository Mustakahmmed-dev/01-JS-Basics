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