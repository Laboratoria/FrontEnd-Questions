# Anagramas

> Un anagrama (del griego ἀνά -ana-, prefijo que significa "de vuelta", y γράμμα
> -gramma-, "letra") es una palabra o frase que resulta de la transposición de
> letras de otra palabra o frase. Dicho de otra forma, una palabra es anagrama
> de otra si las dos tienen las mismas letras, con el mismo número de
> apariciones, pero en un orden diferente.

Fuente: [Anagrama - Wikipedia](https://es.wikipedia.org/wiki/Anagrama)

Implementa una función que compruebe si dos strings son anagramas entre ellas.
La función recibirá dos argumentos, ambos strings, y debe retornar un valor
booleano, `true` en caso de que sean anagramas y `false` en caso contrario.

La función debe arrojar un error (de tipo `TypeError`) en caso de que alguno de
los dos argumentos esperados no sea de tipo `string`.

Consideraciones:

* La función debe ignorar espacios, puntuación y otros caracteres no
  alfabéticos.
* La función debe ser _case insensitive_. Esto significa que debe considerar
  mayúsculas y minúsculas como iguales (por ejemplo, `a` se considera igual que
  `A`).

## Ejemplos

```js
expect(anagrams('rail safety', 'fairy tales')).toBe(true);
expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBe(true);
expect(anagrams('Hi there', 'Bye there')).toBe(false);
```

[Pruebas unitarias](./test/anagrams.spec.js)
