# Chunk

Implementa una función que dado un arreglo y un número `n`, divida el arreglo
recibido en _subarreglos_ de longitud máxima `n`.

El valor de retorno debe ser un arreglo donde cada elemento sea un subarreglo.
Tendremos así un arreglo de arreglos.

## Ejemplos

```js
chunk([1, 2, 3, 4], 2) // --> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) // --> [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) // --> [[1, 2, 3, 4, 5]]
```
