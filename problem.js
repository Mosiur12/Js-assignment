// PROBLEM-1

// function anaToVori (ana){
    
//      if (typeof ana === 'number'){

//       //  ----Calculation for ana to vori---

//       var vori = ana/16;
       
//     }
    
//     else{
//       return "please put a intizer number";
//     }
    
//     return vori; 
// }
// var voriToAna = anaToVori (64);
// console.log(voriToAna);



// ----------------PROBLEM-2---------:
// sigaracost = 7 tk/singara
// somuchacost = 10 tk/somucha
// zilapicost = 15 tk/zilapi 

var totalCost=0;

function pandaCost (singaraQuantity , somuchaQuantity , zilapiQuantity){

if (typeof singaraQuantity  === 'number' && typeof somuchaQuantity  === 'number'&& typeof zilapiQuantity  === 'number' ){


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
  return "please input";
}

return totalCost;

}

const foodCost = pandaCost ( 6,2,3);
console.log(foodCost);



