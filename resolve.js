
// ----------------PROBLEM-2---------:
// sigaracost = 7 tk/singara
// somuchacost = 10 tk/somucha
// zilapicost = 15 tk/zilapi 

var totalCost=0;

function pandaCost (singaraQuantity , somuchaQuantity , zilapiQuantity){

if ( singaraQuantity >=0 &&  somuchaQuantity >=0 && zilapiQuantity >=0 ){


// ---Food Calculation...

  const perSingara = 7;
  const perSomucha = 10;
   const perZilapi = 15;
   
  const costOfSingara = singaraQuantity * perSingara;
  const costOfSomucha = somuchaQuantity * perSomucha;
  const costOfZilapi = zilapiQuantity * perZilapi;
  
  totalCost = costOfSingara + costOfSomucha + costOfZilapi;
  
}
else{
  return "please input the vaild amount of number";
}

return totalCost;

}

const foodCost = pandaCost (1,1,2);
console.log(foodCost);
