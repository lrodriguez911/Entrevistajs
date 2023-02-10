/**
  Ejercicio #1

  Dada la URL: https://pokeapi.co/api/v2/pokemon/ditto
  Crea una llamada utilizando fetch para poder utilizarla en cualquier
  framework/libreria de Js. La funcion debe ser aprueba de errores, es decir
  si es correcta deberia de regresar los resultados, de lo contrario, deberia de 
  regresar un error.

  Mandar logs de cada uno de los pasos de la llamada
 */
const getRequest = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json = await response.json()

    return json;
    } catch {(error) => {
        console.error(error);
    }}
    
    let responke = getRequest().then((data) => data).catch((error) => {
        console.error(error);
    })
}









 // =========================================================

 
/* Ejercicio #2
 Dada una funcion que suma numeros desde 0 al limite. Implementa una solucion
 para optimizar las llamadas en caso de que sean repetitivas */

const sumNumbers = (limit) => {
  let sum = 0;
  
  for (let i = 0; i < limit; i++) {
    sum += i;
  } 
  
  return sum; 
};

console.log(sumNumbers(1000));
// console.log(sumNumbers(100000000));