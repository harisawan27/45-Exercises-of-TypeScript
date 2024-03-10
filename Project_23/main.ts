let age = 25;
let hasDriverLicense = true;
let hasCar = false;
let isStudent = false;
let hasWorkExperience = false;

// Test 1: Checking if the person is eligible to vote
console.log("Is the person eligible to vote? I predict True.");
console.log(age >= 18); 

// Test 2: Checking if the person can drive
console.log("Can the person drive? I predict True.");
console.log(hasDriverLicense && age >= 18); 

// Test 3: Checking if the person can afford a car
console.log("Can the person afford a car? I predict False.");
console.log(hasCar || hasWorkExperience); 

// Test 4: Checking if the person is a student
console.log("Is the person a student? I predict False.");
console.log(isStudent); 

// Test 5: Checking if the person is eligible for a senior citizen discount
console.log("Is the person eligible for a senior citizen discount? I predict False.");
console.log(age >= 60); 

// Test 6: Checking if the person can rent a car
console.log("Can the person rent a car? I predict True.");
console.log(age >= 21 && hasDriverLicense); 

// Test 7: Checking if the person is qualified for a job
console.log("Is the person qualified for a job? I predict True.");
console.log(hasWorkExperience); 

// Test 8: Checking if the person can apply for a credit card
console.log("Can the person apply for a credit card? I predict True.");
console.log(age >= 18); 

// Test 9: Checking if the person is eligible for a student discount
console.log("Is the person eligible for a student discount? I predict False.");
console.log(isStudent && age < 30); 

// Test 10: Checking if the person can buy alcohol
console.log("Can the person buy alcohol? I predict False.");
console.log(age >= 21); 
