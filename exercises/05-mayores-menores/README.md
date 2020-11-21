# Mayores y menores

Implementa una función que reciba un arreglo de números y devuelva un nuevo
arreglo con 3 elementos, en este orden:

- el número mayor del arreglo.
- el número menor del arreglo.
- el segundo número mayor del arreglo.

```js
const analyseArray = (arr) => {
  // ...
};

const numbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10];
const [max, min, max2] = analyseArray(numbers);
console.log(max); // 100
console.log(min); // -80
console.log(max2); // 32
```