let studentMarks =(input0-100)
//Here I was trying to create a program for grades
if (input>79){
 return 'A' ;
}
//if the student managed to get a input above 79 the student got a grade A.
else if (input<=79 7&& input>=60){
return 'B-';
}
else if (input<=59 && input>=49){
    return 'C-' ;
}
 //other wise if a student got an input between 49-59 they get the grade (c-)
else if (input<=49 && input>=40){
    return 'D-' ;
}
 
else if (input<40){
    return 'E-' ;
}
console.log(studentMarks)
