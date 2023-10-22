//creating a function to carry on with the program
function generateStudentGrades(mark){

if(mark > 79){
    grade = 'A';
}
    //calculating students' grade that is equivalent to the grade they got.
else if(mark >= 60 && mark <= 79){
    grade = 'B';
}else if(mark >= 50 && mark <= 59){
    grade = 'C';
}
// putting conditional  statements if at all they didn't get a specific mark that registers a grade then they get a different grade
else if(mark >= 40 && mark <= 49){
    grade = 'D';
}else{
    grade = 'E';
}
console.log(`The Student's grade is: ${grade}`)



}
//invoking the function so that the function can work

generateStudentGrades(7)
