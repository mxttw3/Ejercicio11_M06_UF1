document.getElementById('helloWorld').innerHTML = 'Hello World!';
/* 
Ejercicio 6:

El factorial de un número entero “n” es una operación matemática que consiste en multiplicar todos los factores “n * (n-1) * (n-2) * … * 1”. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 * 4 * 3 * 2 * 1 = 120.

Crea una aplicación web que:
1. Pida al usuario que escriba un número natural (entero y positivo).
2. Compruebe si es realmente un número. Si no lo es, mostrar un mensaje de error al usuario
por consola.
3. Compruebe si es realmente positivo. Si no lo es, transformarlo a positivo.
4. Compruebe si es realmente entero (si no tiene decimales). Si los tiene, redondeará el
número.
5. Utilizando la sentencia “for”, que calcule el factorial de ese número entero.
6. Por último, que muestre el número por consola.
*/

var number = prompt('Introduce un número natural');

if (isNaN(number)) {
    console.log('El valor introducido no es un número');
}
else {
    if (number % 1 !== 0) {
        number = Math.round(number);
    }
    if (number < 0) {
        number = number * -1;
    }
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    console.log(factorial);
}
https://open.spotify.com/artist/
{
    "access_token": "BQCUpokbA5FnS2S7b8bzR7o0MYIrNwsnLRbV6Ak8iIGqxrjx0dT6VLhmVQ794nIG1tPaq0H6qWX0r8uxXMerhC0r0jMi5bd4cNzrTH-DlVavboMbmMo",
    "token_type": "Bearer",
    "expires_in": 3600
  }