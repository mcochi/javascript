/*
function sumar(a,b,c=3){
    return a+b+c;
}
var result = sumar(4,5,6);
var result1 = sumar(3,7);
console.log(result);
console.log(result1);
*/

/***********
 * Funciones recursivas
 */
/*
var factorial = function (n){
    if ((n == 0) || (n ==1)) {
        return 1;
    } else {
        return(n*factorial(n-1));

    }
}

console.log(factorial(5));
*/

var nombres = ['Groover','Carlos','Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

console.log(nombres.length);

for (var i = 0; i<=nombres.length - 1; i++){
    console.log(nombres[i]);
}

vegetales.forEach(function(elemento, indice) {
    console.log(elemento,indice);
})

console.log(nombres);
nombres.push('Pedro');
console.log(nombres);