// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let i = array[array.length - 1];
  return i;
  
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0; i<array.length; i++){
    array[i] = array[i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //  let frase = [];
  // if (palabras.length > 1) {
  //   for (let i = 0 ; i < palabras.length ; i++){
  //       frase.push(palabras[i]);
  //       frase.push(" ");
  //   } return frase;
  // } else { 
  //   return palabras;
  // }
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   let recorrido = numeros.values();
   let suma = 0;
   for (let digito of recorrido) {
      suma = suma + digito;
   }
   return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let recorrido = resultadosTest.values();
   let suma = 0;
   for (let digito of recorrido) {
      suma = suma + digito;
   }
   let promedio = suma / resultadosTest.length;
    return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j + 1] < numeros[j]) {
          [numeros[j + 1], numeros[j]] = [numeros[j], numeros[j + 1]];
        }
      }
  }
  return numeros.pop();
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = 1
  if (arguments.length > 0) {
    for (let i = 0 ; i < arguments.length ; i++) {
      producto = arguments[i] * producto;
    }
    return producto;
  } else {
    return 0;
  }
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let count = 0;
  let ciclo = arreglo.values();
  for (let valor of ciclo) {
    if (valor > 18) {
      count = count + 1;
    }
  }
  return count;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let texto = n.toString();
  return texto.startsWith("9");
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  // let esIgual = (comparacion) => comparacion = arreglo[0] ;
     for (let i = 1 ; i < arreglo.length; i++) { 
    if (arreglo[0] === arreglo[i]) {
        return ( true);
      } else return( false);
   }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  let iterator = array.values();
  let resultado = [];
  for (let mes of iterator) {
    if (mesesBuscados.includes(mes)) {
      resultado.push(mes);
    }

  }  
  if (resultado.length === 3){
    return resultado;
  } else {  
    return "No se encontraron los meses pedidos";
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayoresA100 = [];
  let iterator = array.values();
  for (let num of iterator) {
    if (num > 100) {
      mayoresA100.push(num);
    }
  }
  return mayoresA100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let aumentado = [];
  let iteracion = undefined;
  let i = 1
  while ( i <= 10) {
      if (i === iteracion) {
        return "Se interrumpió la ejecución";
        break;
        
      }
    iteracion = (numero + (2*i));
    aumentado.push(iteracion);
    i++
  }
  return aumentado;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let aumentado = [];
  let iteracion = undefined;
  let i = 0
  while ( i < 10) {
    i++  
    if (i === 5) {
        continue;
      
      }
    iteracion = (numero + (2*i));
    aumentado.push(iteracion);
    
  }
  return aumentado;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
