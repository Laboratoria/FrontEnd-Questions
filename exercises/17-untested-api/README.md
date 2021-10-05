# API sin probar

## Descripción de la API

La API que se te presenta contiene una sola ruta POST la cual
espera recibir un objeto JSON en el cuerpo (body) de la solicitud, y a su vez
este objeto debe contener la propiedad "length", la cual debe
ser un número positivo entero. Como respuesta la API provee un
conjunto de palabras Lorem-Ipsum igual a la cantidad indicada en
la solicitud.

Esta API carece de pruebas unitarias por lo que se te pide que
crees un conjunto de pruebas utilizando Jest que abarquen al menos
el 85% de las líneas de código del archivo "controller.js".

