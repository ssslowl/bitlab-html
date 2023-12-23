const semesterScore = prompt("Enter your semester score for Web Technologies:");

const score = Number(semesterScore);

let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 75) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Your grade for the semester in Web Technologies is: ${grade}`);
