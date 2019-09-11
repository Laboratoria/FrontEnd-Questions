# Count Vowels

Implementa una función (`countVowels`) que reciba un `String` como único
argumento y retorne un objeto con 5 propiedades, una propiedad para cada vocal,
donde la llave (_key_) es la vocal en sí, y el valor (_value_) es un número
(`Number`) que representa en número de veces que aparece dicha vocal en el
`String` que recibe como argumento.

Como ejemplo, los siguientes tests muestran el resultado esperado para dos
invocaciones en particular.

```js
describe('countVowels', () => {
  it('debería contar 3 "a"s', () => {
    expect(countVowels('aaa')).toEqual({
      a: 3,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    });
  });

  it('debería contar la vocales', () => {
    expect(countVowels('aaabrteenkkau')).toEqual({
      a: 4,
      e: 2,
      i: 0,
      o: 0,
      u: 1,
    });
  });
});
```

Tu implementación puede asumir que la función siempre será invocada con un
string como primer argumento.
