const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(student) {
  // Start coding here
  if (student.length ===0){
    return 0;
  }
  let totalScore = students.reduce((accumulator, student) => accumulator + student.score,0);
  let averageScore = totalScore / student.length;
  return averageScore;
}
const averageScore = getAverageStudentScore(students);
console.log(averageScore);
getAverageStudentScore(students); // Output: 87.5
