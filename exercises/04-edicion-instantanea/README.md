# Edición de texto instantánea

Crea una interfaz web con una línea de texto que, al hacerle clic, permita al
usuario editarla ahí mismo (de texto pasa a ser un `<input>`).

Cuando el usuario presiona enter o hace clic fuera del campo de edición, el
input debe volver a convertirse en una línea de texto (y muestra el texto recién
ingresado). Por ejemplo: si el texto original decía `Nombre`, al darle clic, el
usuario puede editarlo e ingresar `María`. Luego, al hacer clic fuera del
campo, queda el texto final `María`.

Pista: Puedes usar un _callback_  para escuchar el evento `keyup` que se
invocará cada vez que se presione una tecla.
