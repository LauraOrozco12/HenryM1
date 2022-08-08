
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10 (1)
  console.log(a); // 8 (2)
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8 (3)
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9 (4)
}
c(8,9,10);
console.log(b); // 10 (5)
console.log(x); // 1 (6)


```

```javascript
console.log(bar); // unfdefined (1)
console.log(baz); // ERROR se rompe
foo();
function foo() { console.log('Hola!'); } // no llega
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco 
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco (por qué let pm no se sobreescribe con el if?)
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinito
{}[0] // Undefined, no existe esto en JS 
parseInt("09") // 9
5 && 2 // True o 2, Si el primero es verdadero y el segundo también, devuelve el último valor verdadero
2 && 5 // True o 5
5 || 0 // True o 5 
0 || 5 // False o 5
[3]+[3]-[10] // 23, concatena los primeros dos (33) y luego resta el 10
3>2>1 // False
[] == ![] // True, mira solo el valor y ambos son false, por loc ual al igualarlos da true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined, la variable obtiene un valor al ejecutarse el código y como el console log está primero la variable no tiene valor
   console.log(foo()); // 2, al ejecutar la función se va al lugar en donde está guardado el valor de la función

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    } 
   return snack;
}
getFood(false); // Meow Mix (al ponerlo en la consola me sale undefined, no entendí por qué)
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // Juan Perez da en el browser porque se guarda en el objeto global This=window, pero en node el this global es un objeto vacio y la variable fullname no se guarda
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1 (1)
   setTimeout(function() { console.log(2); }, 1000); // 2 (4)
   setTimeout(function() { console.log(3); }, 0); // 3 (3) (por qué sale primero está si en el queue sale lo que entra primero?)
   console.log(4); // 4 (2)
}

printing();
```
