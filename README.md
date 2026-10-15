# CPIT 405 – Lab 4: JavaScript Fundamentals

## Lab Goal
Practice JavaScript fundamentals using a ready-made HTML and CSS page.

**Do not modify `index.html` or `style.css`.**  
Complete the tasks in `script.js` and check the output in the browser Console.

## Files
```text
lab-4/
├── index.html
├── style.css
└── script.js
```
+
Open `index.html` with **Live Server**, then open:

```text
Right Click → Inspect → Console
```

## Task 1 – Check the JavaScript Connection
Confirm this appears in the Console:

```js
console.log("JavaScript is connected!");
```

## Task 2 – Variables
Create:

```js
const studentName = "Sara Ahmed";
const major = "Information Technology";
let gpa = 4.4;
let isEnrolled = true;
```

Print all four variables using `console.log()`.

## Task 3 – Data Types
Use `typeof` to print the type of each variable.

Example:

```js
console.log(typeof studentName);
```

## Task 4 – Strings
Create a sentence using a template literal:

```js
console.log(`My name is ${studentName} and my major is ${major}.`);
```

Then print:

```js
studentName.length
studentName.toUpperCase()
major.includes("Technology")
```

## Task 5 – Object
Create:

```js
const student = {
    name: "Sara Ahmed",
    major: "Information Technology",
    gpa: 4.4,
    enrolled: true
};
```

Print at least two properties.

## Task 6 – Array
Create:

```js
let skills = ["HTML", "CSS", "Git"];
```

Then:
1. Print the first skill.
2. Print the array length.
3. Add `"JavaScript"` using `push()`.
4. Print the final array.

## Task 7 – Conditional Statement
Use `if / else if / else`:

```text
GPA >= 4.5  → Excellent
GPA >= 3.5  → Very Good
Otherwise   → Keep improving
```

Print the result.

## Task 8 – Loop
Use a `for...of` loop:

```js
for (let skill of skills) {
    console.log(skill);
}
```

## Task 9 – Function
Create:

```js
function introduceStudent(name, major) {
    return `My name is ${name} and I study ${major}.`;
}
```

Call the function and print the returned value.

# Final Checklist
Your `script.js` must include:

- `let`
- `const`
- String
- Number
- Boolean
- `typeof`
- Template literal
- One object
- One array
- `push()`
- One `if / else if / else`
- One loop
- One function
- `console.log()` outputs

# Submission
Push your completed Lab 4 folder to GitHub.

Submit on Blackboard:
1. GitHub Repository URL
2. Lab 4 GitHub Pages URL

Example:
```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/lab-4/
```

## Important
Do not use DOM methods in this lab:

```js
document.getElementById()
document.querySelector()
addEventListener()
```

DOM and events will be covered later.
