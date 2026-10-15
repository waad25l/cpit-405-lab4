// CPIT 405 - Lab 4: JavaScript Fundamentals
// Complete the tasks in README.md in order.

console.log("JavaScript is connected!");

// Task 2: Variables
// Create const studentName, const major, let gpa, let isEnrolled
const studentName = "Sara Ahmed";
const major = "Information Technology";
let gpa = 4.4;
let isEnrolled = true;

console.log(studentName);
console.log(major);
console.log(gpa);
console.log(isEnrolled);

// Task 3: Data Types
// Use typeof with each variable
console.log(typeof studentName);
console.log(typeof major);
console.log(typeof gpa);
console.log(typeof isEnrolled);

// Task 4: Strings
// Use a template literal, .length, .toUpperCase(), includes()
console.log(`My name is ${studentName} and my major is ${major}.`);

console.log(studentName.length);
console.log(studentName.toUpperCase());
console.log(major.includes("Technology"));

// Task 5: Object
// Create student object: name, major, gpa, enrolled
const student = {
    name: "Sara Ahmed",
    major: "Information Technology",
    gpa: 4.4,
    enrolled: true
};

console.log(student.name);
console.log(student.gpa);

// Task 6: Array
// Create skills = ["HTML", "CSS", "Git"]
// Print first skill and length, then push("JavaScript")
let skills = ["HTML", "CSS", "Git"];

console.log(skills[0]);
console.log(skills.length);

skills.push("JavaScript");
console.log(skills);

// Task 7: Conditional
// GPA >= 4.5 -> Excellent
// GPA >= 3.5 -> Very Good
// otherwise -> Keep improving
if (gpa >= 4.5) {
    console.log("Excellent");
} else if (gpa >= 3.5) {
    console.log("Very Good");
} else {
    console.log("Keep improving");
}

// Task 8: Loop
// Use for...of to print every skill
for (let skill of skills) {
    console.log(skill);
}

// Task 9: Function
// Create introduceStudent(name, major)
// Return: My name is NAME and I study MAJOR.
function introduceStudent(name, major) {
    return `My name is ${name} and I study ${major}.`;
}

console.log(introduceStudent(studentName, major));
