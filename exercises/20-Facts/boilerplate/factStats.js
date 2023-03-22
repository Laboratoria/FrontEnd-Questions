/*
## Step 1
Implementa una función que consuma N veces la funcion `getFact` y de los facts que recibiste obten el fact mas recientemente insertado y el fact mas largo

la funcion `factStats` debe retornar un objeto como este 
`{ 
  newestFact: {
    createdAt: dateObj,
    fact: "string"
  }, 
  largestFact: {
    createdAt: dateObj,
    fact: "string"
  }
  summary: {
    total:num,
    facts:[todos los facts]
  }
}`

si la funcion getFact falla tu funcion debe tirar una expecion con el mensaje "Algo salio y no pude trater los facts" 

## Step 2
en el archivo `boilerplate/factStats.spec.js` completa el código faltante para que los `expects` se cumplan
*/
const {getFact} = require("./getFact");

function factStats (n){
  // ...
}


module.exports = {
  factStats
};
