# Mask Credit Card

Implementa una función `maskify` que reciba un `string` como único argumento y
retorne un `string` donde todos menos los últimos cuatro caracteres sean
reemplazados por un numeral/gato (`#`).

Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

## Ejemplo de uso

```js
maskify("4556364607935616"); // => "############5616"
maskify("64607935616"); // => "#######5616"
maskify("1"); // => "1"
maskify(""); // => ""
```
