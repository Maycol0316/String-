var PrimeraVariable = "Cadena de Ejemplo";
var SegundaVariable = "Seguna Cadena de Ejemplo";
var TercerVariable = "Tercer Cadena de Ejemplo";
var CuartaVariable = PrimeraVariable + " " + TercerVariable;
Array1 = [1,2,3,5,8,13];
Array2 = [21,34,55,89,144]; 
Array4 = ["Maycol", "Juan", "Alexandra", "Angelica", "Mafe"];


/* STRING */

/* CharArt*/

console.log("'El Caracter en la posición 0 es " + PrimeraVariable.charAt(0) + "'")
console.log("'El Caracter en la posición 1 es " + PrimeraVariable.charAt(1) + "'")
console.log("'El Caracter en la posición 2 es " + PrimeraVariable.charAt(2) + "'")
console.log("'El Caracter en la posición 3 es " + PrimeraVariable.charAt(3) + "'")
console.log("'El Caracter en la posición 4 es " + PrimeraVariable.charAt(4) + "'")

/*includes*/

console.log(SegundaVariable.includes('Cadena'));       
console.log(SegundaVariable.includes('Primera'));    
console.log(SegundaVariable.includes('de')); 
console.log(SegundaVariable.includes('Tercer'));    
console.log(SegundaVariable.includes('Ejemplo'));

/*split*/

TercerVariable.split(" ");
SegundaVariable.split(" ");
PrimeraVariable.split(" ");

/*replace*/

console.log(PrimeraVariable.replace('Ejemplo', 'Modificada'));


/*substring*/

console.log(TercerVariable.substring(0,6));


/*toLocaleUpperCase*/

console.log(PrimeraVariable.toLocaleUpperCase());


/*startsWith*/

console.log(SegundaVariable.startsWith('Se'));           
console.log(SegundaVariable.startsWith('Ejemplo'));


/*slice*/

console.log(CuartaVariable.slice(17));



/* ARRAY */

/* join */

console.log(Array1.join());
console.log(Array1.join("-"));
console.log(Array1.join("/"));

/* splice */

Array1.splice(1, 0, "agregada");
console.log(Array1);
Array2.splice(0, 1, 7);
console.log(Array2);

/* concat */

Array3 = Array1.concat(Array2);

/* value */

var prueba = Array1.values();
console.log(prueba.next().value);  
console.log(prueba.next().value);  
console.log(prueba.next().value);  
console.log(prueba.next().value);  
console.log(prueba.next().value);


/* sort */
console.log(Array4.sort());


