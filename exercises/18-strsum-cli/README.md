# strsum CLI

Implementa una herramienta de línea de comando (CLI) que dado un _string_,
calcule la suma de los códigos UTF-16 de cada uno de sus caracteres.

La herramienta debe poder recibir su input de 3 formas distintas:

1. Input como argumentos de la línea de comando.

   ```sh
   $ ./index.js Pepita Pérez
   1261
   ```

   ```sh
   $ ./index.js A
   65
   ```

2. Si no se pasan argumentos el programa debe preguntar al usuario qué string
   quiere que usemos.

   Por ejemplo:

   ```sh
   $ ./index.js
   ¿Cómo te llamas?
   ```

   Contestamos la pregunta, apretamos _Enter_ e imprime el resultado.

   ```sh
   $ ./index.js
   ¿Cómo te llamas? Pepita Pérez
   1261
   ```

3. También debemos poder pasar el _input_ a través de `stdin`.

   ```sh
   echo Pepita Pérez | ./index.js
   1261
   ```
