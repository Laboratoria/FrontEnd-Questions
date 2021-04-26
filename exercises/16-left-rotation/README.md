# Left Rotation

[_Enunciado original en Hacker Rank_](https://www.hackerrank.com/challenges/array-left-rotation/problem)

***

Una operación de _rotación hacia la izquierda_ (_left rotation_) sobre un
arreglo de longitud `n` mueve cada elemento del arreglo `1` unidad hacia la
izquierda. Dado un número entero `d`, rota el arreglo `arr` a la izquierda ese
número de veces (`d`) y retorna el resultado.

## Ejemplo

```
d = 2
arr = [1, 2, 3, 4, 5]
```

Después de `2` rotaciones, `arr' = [3, 4, 5, 1, 2]`.

## Descripción de la función a implementar

Completa la función `rotateLeft`, la cuál recibe los siguientes argumentos:

- `d`: Un número entero que indica cuántas rotacines hacer.
- `arr`: Un arreglo sobre el que hacer las operaciones de rotación.

Valor de retorno: El arreglo rotado.

## Limitaciones

* `1 <= n <= Math.pow(10, 5)`
* `1 <= d <= n`
* `1 <= a[i] <= Math.pow(10, 6)`

