# Edición de texto instantánea

## Descripción

Crea una interfaz web con una línea de texto que, al hacerle clic, permita al usuario editarla ahí mismo (de texto pasa a ser input con campo de edición).

Cuando el usuario presiona enter o hace clic fuera del campo de edición, el input debe volver a convertirse en una línea de texto (y muestra el texto recién ingresado). Por ejemplo: si el texto original decía "Nombre", al darle clic, el usuario puede editarlo e ingresar "Rodulfo".
Luego, al hacer clic fuera del campo, queda el texto final ("Rodulfo").

Configura un `callback onChange` que se invocará cada vez que cambie el valor del campo.

Configura un `callback onKeyUp` que se invocará cada vez que se escriba una nueva tecla.
