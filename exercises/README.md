# Ejercicios

- [**Stringitis**](./01-stringitis)

  Dificultad: `fácil` / Etiquetas: `String`

  Implementa una función que tenga un comportamiento equivalente a
  `String.prototype.contains`, pero sin usar métodos de `String`.
  Alternativamente puedes proponer una solución que haga uso de `.slice`,
  `.substring` o `.substr`.

  Este ejercicio se usa muchas veces como ejercicio de _ejemplo_ o de
  _calentamiento_.

- [**Dos columnas**](./02-dos-columnas)

  Dificultad: `fácil` / Etiquetas: `HTML`, `CSS`, `media-queries`

  Construye una interfaz web (`HTML` + `CSS`) con un _layout_ de dos columnas
  con tamaños relativos y responsive (en pantallas pequeñas debe pasar a una
  columna).

- [**Botones alerta**](./03-botones-alerta)

  Dificultad: `fácil` / Etiquetas: `DOM`, `Event`, `Array`

  Construye una UI (`HTML`, `CSS` y `JavaScript`) con botones y maneja eventos
  click de esos botones. También tienes que _relacionar_ los botones con los
  índices de un arreglo.

- [**Edición instantánea**](./04-edicion-instantanea)

  Dificultad: `media` / Etiquetas: `DOM`, `Event`

  Crea una interfaz web con una línea de texto que, al hacerle clic, permita al
  usuario editarla ahí mismo (de texto pasa a ser un `<input>`).

- [**Mayores y menores**](./05-mayores-menores)

  Dificultad: `media` / Etiquetas: `Array`, `Logic`

  Implementa una función que dado un arreglo de números devuelva otro arreglo
  con 3 elementos: el número mayor, el menor y el segundo mayor del arreglo.

- [**Nombres**](./06-nombres)

  Dificultad: `fácil` / Etiquetas: `Array`, `String`

  Implementa una función que recibe un arreglo de strings con nombres de
  personas, y retorna un nuevo arreglo de strings con los nombres formateados de
  una manera en particular.

- [**Palíndromo**](./07-palindrome)

  Dificultad: `fácil` / Etiquetas: `String`, `Logic`

  Crea una función que identifique si un string es un palíndromo (esto es, se
  lee igual al derecho o al revés), retornando `true` si lo es o `false` si no.

- [**Count vowels**](./08-count-vowels)

  Dificultad: `fácil` / Etiquetas: `String`, `Object`

  Implementa una función que reciba un `String` como único argumento y retorne
  un objeto con 5 propiedades; una para cada vocal, donde la llave (_key_) es la
  vocal en sí, y el valor (_value_) es un número (`Number`) que representa en
  número de veces que aparece dicha vocal en el `String` que recibe como
  argumento.

- [**Mask Credit Card**](./09-mask-credit-card)

  Dificultad: `fácil` / Etiquetas: `String`

  Implementa una función que reciba un `string` como único argumento y retorne
  un `string` donde todos menos los últimos cuatro caracteres sean reemplazados
  por un numeral/gato (`#`).

- [**Anagramas**](./10-anagrams)

  Dificultad: `fácil` / Etiquetas: `String`, `Logic`

  Implementa una función que compruebe si dos strings son anagramas entre ellas,
  es decir, si las dos tienen las mismas letras, con el mismo número de
  apariciones, pero en un orden diferente.

- [**Capitalize**](./11-capitalize)

  Dificultad: `fácil` / Etiquetas: `String`

  Implementa una función que acepte un `String`, ponga la primera letra de cada
  palabra en mayúscula y que retorne un nuevo `String` con el resultado.

- [**Chunk**](./12-chunk)

  Dificultad: `media` / Etiquetas: `Array`, `Logic`

  Implementa una función que dado un arreglo y un número `n`, divida el arreglo
  recibido en subarreglos de longitud máxima `n`.

- [**FizzBuzz**](./13-fizzbuzz)

  Dificultad: `fácil` / Etiquetas: `Logic`

  Implementa una función que imprima los números de `1` a `n`, pero para los
  múltiplos de `3` imprime `fizz` en vez del número, y para los múltiplos de `5`
  imprime `buzz`. Para números que sean múltiplos de ambos (`3` y `5`) debe
  imprimir `fizzbuzz`.

  Este ejercicio es un clásico, y se presta a explorar cómo evitar repetir
  condiciones (ver ejemplo
  [_naive_](./13-fizzbuzz/solutions/fizzbuzz-naive.js) vs
  [_mejor_](./13-fizzbuzz/solutions/fizzbuzz-better.js)).

- [**Hourglass sum**](./14-hour-glass)

  Dificultad: `media` / Etiquetas: `Array`, `Logic`

  Dado un arreglo de números de dos dimensiones (matriz), tenemos que
  identificar elementos siguiendo un patrón (_reloj de arena_), calcular la suma
  de cada subconjunto y retornar la de mayor valor.

- [**Dynamic array**](./15-dynamic-array)

  Dificultad: `media` / Etiquetas: `Array`, `Math (^, %)`

  Implementa una función que siga una serie de pasos, teniendo que crear una
  serie de listas/arreglos y llevar a cabo operaciones/consultas que recibimos
  como input.

  Este ejercicio puede asustar un poco porque habla de operaciones sobre bits
  como XOR y matemáticas como `%`, pero en realidad se trata principalmente de
  seguir pasos bien detallados en el enunciado. Requiere minuciosidad en la
  lectura del enunciado y seguir lo descrito ahí, no necesariamente _inventar_
  algo o _resolver_ un problema de lógica.

- [**Left rotation**](./16-left-rotation)

  Dificultad: `fácil` / Etiquetas: `Array`, `Logic`

  Una operación de rotación hacia la izquierda (left rotation) sobre un arreglo
  de longitud `n` mueve cada elemento del arreglo `1` unidad hacia la izquierda.
  Dado un número entero `d`, rota el arreglo `arr` a la izquierda ese número de
  veces (`d`) y retorna el resultado.

  Este ejercicio se presta a sugerir explorar diferentes implementaciones, por
  ejemplo usando bucles, recursión, métodos de arreglos como `slice`, etc).

- [**API sin probar**](./17-untested-api)

  Dificultad: `media` / Etiquetas: `Node.js`, `Express`, `Jest`, `testing`.

  La API que se te presenta contiene una sola ruta POST la cual espera recibir
  un objeto JSON en el cuerpo (body) de la solicitud, y a su vez este objeto
  debe contener la propiedad "length", la cual debe ser un número positivo
  entero. Como respuesta la API provee un conjunto de palabras Lorem-Ipsum igual
  a la cantidad indicada en la solicitud.

  Este ejercicio está pensado para aquellas estudiantes que hayan hecho algún
  proyecto de backend con Node.js/Express.

- [**strsum CLI**](./18-strsum-cli)

  Dificultad: `media` / Etiquetas: `Node.js`, `CLI`, `String`, `Logic`.

  Implementa una herramienta de línea de comando (CLI) que dado un _string_,
  calcule la suma de los códigos UTF-16 de cada uno de sus caracteres.

  La herramienta debe poder recibir su input de 3 formas distintas: argv,
  prompt y stdin via pipes.

  Este ejercicio está pensado en estudiantes que hayan hecho proyectos de CLI
  como [Markdown Links](https://github.com/Laboratoria/bootcamp/tree/main/projects/04-md-links)
  o [Roman Numnerals](https://github.com/Laboratoria/bootcamp/tree/main/projects/05-roman-numerals)
  usando Node.js.
