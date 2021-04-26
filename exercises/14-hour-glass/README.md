# Hourglass Sum (2D Array - DS)

[_Enunciado original en Hacker Rank_](https://www.hackerrank.com/challenges/2d-array/problem)

***

Dado un arreglo bidimensional (`arr`) de `6` `x` `6`.


```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

Un _reloj de arena_ en `arr` es un subconjunto de valores con índices que siguen
el siguiente patrón representado aquí gráficamente:

```
a b c
  d
e f g
```

Hay `16` _relojes de arena_ en `arr`. La _suma_ de un _reloj de arena_ es la
suma de los valores del _reloj_. Calcula la _suma_ de cada _reloj de arena_ en
`arr` y retorna la _suma_ máxima. El arreglo `arr` siempre tendrá dimensiones de
`6` `x` `6`.

## Ejemplo

Si `arr` es:

```
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

Las `16` _sumas_ de los relojes serían:

```
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
```

La suma que produce el valor más alto es `28`, del _reloj_ que comienza en la
fila de índice `1` (la segunda), y la columna de índice `2` (la tercera).

```
0 4 3
  1
8 6 6
```

## Descripción de la función a implementar

Completa la función `hourglassSum`. La función `hourglassSum` recibe un único
argumento:

- `arr`: Arreglo bidimensional (`6x6`) de números enteros

Valor de retorno:

- `Number`: La función debe retorna un número entero con la suma máxima.

## Limitaciones

* `-9 <= arr[i][j] <= 9`
* `0 <= i,j <= 5`

## Otro ejemplo

Si `arr` es:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

La función debería retornar `19`.

### Explicación

`arr` contiene los siguientes _relojes de arena_:

![](https://s3.amazonaws.com/hr-assets/0/1534256743-35b846ad4a-hourglasssum.png)

El _reloj de arena_ con la suma de mayor valor (`19`) es:

```
2 4 4
  2
1 2 4
```
