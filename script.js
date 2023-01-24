function final(){

var grossIncome = parseInt(document.getElementById("gross").value);
var C80 = parseInt(document.getElementById("Ded").value);


if(C80 <= 150000){
    netDeduction = C80;
}else{
    netDeduction = 150000;
}

totalDeduction = netDeduction + 50000;

taxableIncome = grossIncome - totalDeduction;

if(taxableIncome > 500000 && taxableIncome <= 1000000){

    income = taxableIncome - 250000;
    income1 = income - 250000;
    for20 = parseInt((income1 * 0.2)) + 12500;
    fourPer = (for20)*0.04;
    document.getElementById("R").innerHTML = for20 + fourPer;

    } 
    
    else if(taxableIncome > 1000000){

        income1 = taxableIncome - 1000000;
         tax = (income1 * 0.3) + 112500;
         fourPer = tax * 0.04;
        document.getElementById("R").innerHTML = tax + fourPer;

    }
    else{

        document.getElementById("R").innerHTML = "Tax Free :)";

    }
}



