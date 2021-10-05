# Preguntas conceptuales

## HTML / CSS

* ¿Para qué se usan los `data-attributes`?

* ¿Por qué es importante no abusar de los `divs`?

* Explica con un ejemplo qué son los `media queries`.

* ¿Cuándo recomiendas (contexto flexbox - grid layout) usar `justify-content` o
   `align-items`?

## Javascript

* Explica, con varios ejemplos, lo que se entiende por `execution context`
   (contexto de ejecución), `lexical scope` (ámbito léxico) y `closure`
   (clausura).

* Explica qué es y para qué sirve `const` con un argumento diferente a "lo uso
   cuando una variable no cambia su valor".

* Si tienes tres `console.log` consecutivos, pero el segundo está dentro de un
   `setTimeout`, terminará imprimiéndose al final de todos. Explica por qué.
```js
console.log('log 1');
setTimeout(() => console.log('log 2'), 0);
console.log('log 3');
```

* ¿Cuál es la diferencia entre _función_ como _sentencia_ o _expresión_?

* Explica con un ejemplo cómo manejas llamadas asíncronas con _callbacks_ y
   _promesas_.

* ¿Cómo le explicarías a tu mamá/papá _qué es una función_?, ¿por qué
    querríamos usar una función?, y ¿qué ejemplos usarías para ilustrar los
    conceptos?

* En tus propias palabras, cómo explicarías:

    * ¿Por qué en JavaScript tenemos 3 palabras reservadas para declarar
      variables (`var`, `let` y `const`)?
    * ¿Cuáles son las diferencias entre ellas con algunos ejemplos?

* Explica en tus palabras el concepto de _iteración_ en programación.

* ¿A qué nos referimos cuando hablamos de valores _truthy_ y _falsy_ en
    JavaScript?

* Preguntas sobre métodos de arreglos (`Array.prototype`). Aquí las
    posibilidades son múltiples, algunos ejemplos:

   * Explica con un ejemplo cómo `.map` es distinto de `.forEach`?
   * Explica con un ejemplo cómo `.map` es distinto de `.filter`?
   * Explica con un ejemplo cómo funciona el método `.reduce`?

## NodeJS

* ¿Qué es NodeJS y cómo se diferencia del JS en el explorador?

* Usando tus propias palabras, describe qué es y para que podemos usar el ENVIRONMENT

* ¿Existe alguna diferencia entre dependencies y devDependencies en el package.json?

* En el package.json, para qué sirven los scripts?

* Qué es NPM? y Cómo se usa?

* Has tenido experiencia usando los módulos FS y PATH? Para qué sirve cada uno?

* Has utilizado Socket.io? Puedes describir su funcionalidad?

## Docker

* Qué es Docker?

* Qué es una imagen/contenedor en Docker?

* Para qué sirve Docker Compose?

* Pudes describir algunas de las partes típicas de un docker-compose.yml?

## ExpressJS

* Qué es ExpressJS?

* Qué es una ruta?

* Qué es un middleware?

* Puedes mostrar un ejemplo de cómo agregar un middleware de forma global?

* Puedes mostrar un ejemplo de cómo agregar un middleware a una sola ruta?

* Qué es CORS?

* Qué conforma normalmente un controlador en ExpressJS?

* Sabes qué significan las siglas CRUD?

* Qué es una API?

## HTTP

* Cómo describirías un request/response?

* Qué son los Headers?

* Qué es el Body?

* Qué verbos HTTP conoces?

* Qué son los códigos de estatus y cuáles conoces?