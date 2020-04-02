# Mask Credit Card

Implementa una función `maskify` que reciba un `string` como único
argumento y retorne un `string` donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral/gato.

Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el `string` sea de menor longitud.


#### Ejemplo de uso
```
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
```

#### Tests

```
describe("maskify", () => {
    it("Should work with multiple numbers", () => {
      expect(maskify('4556364607935616')).toBe('############5616');
    });
    it("Should work with a single number", () => {
      expect(maskify('1')).toBe('1');
    });
    it("Should work with letters", () => {
      expect(maskify('helloworld')).toBe('######orld');
    });
  });
```

#### Propuesta Solución

```
function maskify(cc) {
  const lastFour = cc.substr(-4)
  const firstNumbers = cc.slice(0, -4).split('');
  const maskifyNumbers = firstNumbers.map(character => {
     return '#'
    }
  )
  return maskifyNumbers.join('') + lastFour
}
```
