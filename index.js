let a = 2; 
let b = 2; 
let c = 2; 
  
if (a === b && b === c) { 
    console.log("Les trois variables sont identiques");  
} else { 
    if (b === c || a === c || a === b) { 
        console.log("Deux des variables sont identiques"); 
    } else { 
        console.log("Toutes les variables sont différentes"); 
    } 
}