

function suma() {

    var a;
    var b;
    var suma;

    a = parseInt(prompt("Porfavor ingrsar el primer valor"));
    b = parseInt(prompt("Porfavor ingrsar el primer valor"));

    suma = a + b ;

alert("el resultado es : " + suma);

}

function opBasicas() {
    var a;
    var b;
    var suma;
    var resta;
    var multi;
    var div;

    a = parseInt(prompt("Porfavor ingrsar el primer valor"));
    b = parseInt(prompt("Porfavor ingrsar el primer valor"));

    suma = a + b ;
    resta = a - b ;
    multi = a * b ;
    div = a / b ;

    alert("el resultado de la suma es : " + suma );
    alert("el resultado de la resta es : " + resta );
    alert("el resultado de la multiplicacion  es : " + multi );
    alert("el resultado de la divicion es : " + div );


}

function nmayor() {
    var a;
    var b;

    a = parseInt(prompt("Porfavor ingrsar el primer valor a comparar"));
    b = parseInt(prompt("Porfavor ingrsar el primer valor a comparar"));

    if (a == b) {
        alert(" los valores ingresados son iguales")
    } 
    else if(a>b){
        alert("el numero mayor es : " +a)
    }
    else{
        alert(" el numero mayor es: " +b )
    }
}

function nmenor3nm(){
    var a;
    var b;
    var c;

    a = parseInt(prompt("Porfavor ingrsar el primer valor "));
    b = parseInt(prompt("Porfavor ingrsar el segundo valor "));
    c = parseInt(prompt("Porfavor ingrsar el tercer valor"));

   if (a<b & a<c) {
    alert('el numero menor es : ' +a)
   }
   else if(b<a & b<c){
    alert('el numero menor es : ' +b)
   }
   else {
    alert('el numero menor es : ' +c)
   }

}

function npar(){
    var numero;

    numero = parseInt(prompt("Porfavor ingrese un numero "));

    if(numero % 2 == 0){
        alert('el numero : ' + numero + ' es par')
    } else{
        alert('el numero : ' + numero + ' es in par')
    }

}

function ncuadrado() {

    var a;
    var resultado;

    a = parseInt(prompt("Digite un valor"));
    

    resultado = a * a;

alert("el resultado es : " + resultado);

}

function aTrian(){

    var base;
    var altura;
    var area;

    base = parseInt(prompt("por favor ingrese la base de el triangulo "));
    altura = parseInt(prompt("Por favor ingrese la altura de el triangulo "));

    area = (base * altura ) /2;

alert("el area de el triangulo es : " + area );
}

function nmetros(){

    var numero;
    var centimetros;

    numero = parseInt(prompt("por favor ingrese el valor en metros "));

    centimetros = numero * 100;

    alert('el valor en centimetros es : ' + centimetros);

}

/* Determinar el año en que nacio el usuario ingresando su edad */
function Años (){
    var edad = 0;
    var año = 2022;
    var total = 0;
    edad = parseInt(prompt("Ingrese la edad"));
    total = año - edad;
    alert(" El año en que nació es: "+total);
}


/* Un individuo desea invertir su capital en un banco y requiere
 saber cuanto dinero ganará después de N numero de años, teniendo en 
 cuenta que el banco paga un interés de 2% mensual. */
function Bank (){
    var n = 0;
    var t=0;
    var c= 0;
    var g = 0;
    var i = 0;
    n = parseInt (prompt("ingrese la cantidad de años"));
    c = parseInt(prompt("ingrese el capital invertido"));
    i = 2/100;
    g = (i*12) * n;
    t = g*c;
    alert("La ganancia del banco es: " + g);
    alert("La ganancia total es: "+ t);
}


/* El colegio ABC requiere un sistema que le permita calcular el promedio de un
alumno que tiene 5 calificaciones en la materia de inglés. las calificaciones
son en escala de 1 a 5, donde reprueba entre 1 y 2.9 y aprueba si es superior a 3 */
function coABC(){
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var total= 0;
c1 = parseInt(prompt("ingrese la primera calificación"));
c2 = parseInt(prompt("ingrese la segunda calificación"));
c3 = parseInt(prompt("ingrese la tercera calificación"));
c4 = parseInt(prompt("ingrese la cuarta calificación"));
c5 = parseInt(prompt("ingrese la quinta calificación"));
total = (c1 + c2 + c3 + c4 + c5)/5;
alert ("El promedio del estudiante es: " +total);
if(total>=3)
        alert('El estudiante es aprobado');
    else
        alert('El estudiante es reprobado');

}

/* una fruteria vende manzanas a $4.500 el kilo , 
pemita saber al vendedor cuanto debe pagar un cliente teniendo encuenta que la fruteria tiene estos descuentos
0-2 kilos 0% de descuento, 3-5 kilos 15% de descuento, 6-10 kilos 15% de descuento
10- mas kilos 20% de descuento */
function fruTeria (){
    var kilo = 4500;
    var nkilo = 0;
    var total = 0;
    var des1 = 0;
    var des2 = 0;
    var des3 = 0;
    nkilo = parseInt(prompt("ingrese el numero de kilos"));
    total = kilo * nkilo;
    des1 = (10 * total) / 100;
    des2 = (15 * total) / 100;
    des3 = (20 * total) / 100;
    if (nkilo<=2)
    alert('Su descuento es de 0% el valor  pagar es: ' + total);
    else if (nkilo<=5)
     alert('Su descuento es de 10% el valor  pagar es: ' + des1);
    else if (nkilo<=9 )
      alert('Su descuento es de 15% el valor a pagar es: '+ des2);
    else if (nkilo >= 10)
      alert ('Su descuento es de 20% el valor a pagar es: ' + des3);
}