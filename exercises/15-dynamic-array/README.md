# Dynamic Array

[_Enunciado original en Hacker Rank_](https://www.hackerrank.com/challenges/dynamic-array/problem)

***

* Crea un arreglo de `2` dimensiones `arr` con `n` arreglos vaciós.
* Crea una variable `lastAnswer` para guardar un número entero e incialízala a
  `0`.
* Hay `2` tipo de _consultas_ (_queries_):
  1. Query: `1 x y`
     1. Encuentra la lista con el índice `idx = ((x ^ lastAnswer) % n)` en `arr`.
     2. Agrega el valor de `y` al arreglo `arr[idx]`.
  2. Query: `2 x y`
     1. Encuentra la lista con el índice `idx = ((x ^ lastAnswer) % n)` en `arr`.
     2. Dentro de la lista encontrada en el paso anterior, encuentra el valor
        del elemento en el índice `y % size(arr[idx])`, donde `size` es el
        número de elementos en `arr[idx]`. Asigna el valor a `lastAnswer`.
     3. Agrega el valor de `lastAnswer` a los resultados finales.

Nota: El operador `^` corresponde a la operación binaria `XOR`. Más info sobre
`XOR` en [Wikipedia](https://en.wikipedia.org/wiki/Exclusive_or). Por otro lado,
`%` es el operador_ de módulo. En el caso de JavaScript, en realidad se trata
del operador _resto_ (_remainder_), que para este caso es funciona de la misma
manera a solo trabajar con enteros positivos (más info sobre esto último
[acá](https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder/13683709)).

## Descripción de la función a implementar

Completa la función `dynamicArray`, la cual recibe los siguientes argumentos:

- `n`: Número entero que indica el número de listas/arreglos vacíos con los que
  inicializar `arr`.
- `queries`: Arreglo de _consultas_. Cada consulta/query es a su vez un arreglo
  de `3` números enteros, representando el tipo de query y los valores de `x` e
  `y`.

Valor de retorno: un arreglo con los resultados de cada consulta de tipo `2` en
el orden en el que se presentaron.

## Limitaciones

* `1 <= n,q <= Math.pow(10, 5)`
* `0 <= x <= Math.pow(10, 9)`
* `0 <= y <= Math.pow(10, 9)`
* Tenemos la garantía de que las consultas de tipo `2` nunca tratarán de acceder
  un arreglo o índice vacíó o no definido.
