// EJERCICIO 1
//Escribe una función que reciba un parámetro y lo imprima en consola.

function parameter(parametro){
     console.log(parametro);
}
//parameter("Buenas")

//EJERCICIO 2
//Escribe una función que reciba dos parámetros, los sume e imprima en consola el resultado de la operación.

let numero=0;
let numero1=0;
let resultado = 0;
const pi = 3.141592;

function add(numero,numero1){
    if (typeof(numero)!="number" || typeof(numero1)!="number"){
            console.log("ingresa solo numeros");
    }
    else{
            resultado = numero + numero1;
            console.log(resultado);
    }
       
}
//EJERCICIO 3
//-Escribe una función que reciba dos parámetros, los reste e imprima en consola el resultado de la operación.

function subtract(numero,numero1){
    if (typeof(numero)!="number" || typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero - numero1;
        console.log(resultado);
    }
   
}

//EJERCICIO 4
//Escribe una función que reciba dos parámetros, los multiplique 
//e imprima en consola el resultado de la operación.

function equal(numero,numero1){
    if (typeof(numero)!="number" || typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero * numero1;
        console.log(resultado);
    }
   
}
//EJERCICIO 5
//Escribe una función que reciba dos parámetros, los divida e imprima en consola el resultado de la operación. 

function division(numero,numero1){
    if (typeof(numero)!="number" || typeof(numero1)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        resultado = numero / numero1;
        console.log(resultado);
    }
   
}
//EJERCICIO 6
//Escribe una función que reciba el radio de un círculo como parámetro, calcule el área del círculo
//e imprima en consola.


function area(numero){
    if (typeof(numero)!="number"){
        console.log("ingresa solo numeros");
}
else{
    numero  **= 2;
    resultado = Number (numero) * Number (pi);
    console.log(resultado);  
}
      
}

//EJERCICO 7
//Escribe una función que reciba como parámetro un valor en metros e imprima en consola su equivalente
// en kilómetros, con máximo dos decimales.

function metrosAKilometros(numero){
    if (typeof(numero)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
    resultado = Number (numero1) / 1000;
    console.log(resultado.toFixed(2));
    }
        
}

//EJERCICIO 8
//Escribe una función que reciba como parámetro un valor en grados Celsius e imprima en consola su equivalente
// en grados Farenheit, con máximo dos decimales.

function celsiusAFahrenheit(numero){
    if (typeof(numero)!="number"){
        console.log("ingresa solo numeros");
    }
    else{
        numero1 = Number (numero) * 9/5;
    resultado = Number (numero1) + 32;
    console.log(resultado.toFixed(2));
    }
   
}

//EJERCICIO 9
//Escribe una función que reciba las  siguientes listas de números como parámetro y encuentre el valor más alto
// y más bajo en la lista. Lista1 = [10,4,2,20,5] Lista2=[0,0,0,1,0] Lista3=[-13,10,9,8,0,2000,-1]

function listas(lista){
    var nuneroMayor = lista[0];
    var numeroMenor = lista[0];
    for(let i=0; i<lista.length; i++){
        
     if (lista[i]>nuneroMayor) {
         nuneroMayor=lista[i]
        
     }
     else if(lista[i]<numeroMenor){
         numeroMenor=lista[i]

     }
     
}
console.log("EL NUMERO MAYOR ES: " + nuneroMayor);
console.log("EL NUMERO MENOR ES: " + numeroMenor);

    
}
// EJERCICIO 10
//Escribe una función que reciba dos parámetros con los que se calculará el valor exponencial de una base.
// El primer parámetro será la base y el segundo será el exponente. Imprimir el resultado del valor 
//exponencial de la base en consola.

function exponencial(base,exponente){
    resultado=0;
    if (typeof (base) != "number" || typeof (exponente) != "number"){
        console.log("solo recibo numeros")
    }
    else{
        resultado=base**exponente;
        console.log("base: "+base)
        console.log("exponente: "+exponente)
        console.log("resultado: "+resultado)
    }

   

}

//EJERCICIO 11
//Escribe una función que reciba un número como parámetro.
// Este número será la cantidad de veces que se debe solicitar, con la función prompt, 
//que el usuario ingrese el nombre de un país diferente. 
//Después de que el usuario ingrese el nombre de los países, el sistema debe mostrar 
//un mensaje en pantalla indicando el nombre del país y cuántas letras tiene el nombre del país.

function contry(cantidad){
    if (typeof (cantidad) != "number" && cantidad != null){
        console.log("solo recibo numeros")
    }
    else{
        for(let i=0; i<cantidad ;i++ ){
            var name= prompt ("ingrese nombre del pais");
            var lengthcharacteres = name.length;
            alert("EL PAIS TIENE " + lengthcharacteres + " letras");
        }
        
    }
}

