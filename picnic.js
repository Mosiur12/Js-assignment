// PROBLEM-3:

// first 100 of students chada = 5000 tk;
// second 100 of students chada = 4000 tk;
// third 100 of students chada = 3000 tk;

function picnicBudget(numberOfStudent){
let budgetOfPicnic;
if (numberOfStudent<=0){
    return "please input a valid number";
}
else if(numberOfStudent > 200){
    let forFirst100Student = 100 * 5000;
    let second100Student = 100 * 4000;
    let third100Student = (numberOfStudent-200)*3000;

    // Calculation The Budget

    budgetOfPicnic = forFirst100Student + second100Student + third100Student;

}

else if (numberOfStudent > 100){
    let forFirst100Student = 100 * 5000;
    let second100Student = (numberOfStudent - 100)* 4000;

    // Calculation The Budget
    budgetOfPicnic = forFirst100Student + second100Student;
}
else if (numberOfStudent <= 100){
    budgetOfPicnic = numberOfStudent * 5000;
}
return budgetOfPicnic;

}
console.log( picnicBudget(250));