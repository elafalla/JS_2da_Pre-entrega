let arregloInfo = [];
let contador = 0;
let incorrect = 0;
//Proceso e inicio de contadores
//Funcion para asignar valor a las respuestas
function inicio() {
  for (let i = 0; i < 1; i = i + 1) {
    let nombre = prompt("Ingrese su nombre completo");
    let edad = prompt("Ingrese su edad");
    
    for (let i = 1; i <= 5; i = i + 1) {
      respuesta = prompt("La respuesta a la pregunta " + i + " es:").toUpperCase();
      if (respuesta == "A") {
        //Deja el contador como estaba
      } else if (respuesta == "B") {
        contador = contador + 10;
      } else if (respuesta == "C") {
        contador = contador + 20;
      } else {
        alert("Respuesta incorrecta!!!");
        incorrect = incorrect + 1;
      }
    }
    arregloInfo.push(new Usuario(nombre,edad,contador,incorrect));
  }
  console.log(arregloInfo);
}

//Clase Usuario tienen valores de nombre, edad, resultado y cantidad de incorrectas.
//La clase indica el nivel de estrés de acuerdo al resultado obtenido.

class Usuario {
  constructor(nombre, edad, resultado, incorrectas) {
    this.nombre = nombre;
    this.edad = edad;
    this.resultado = resultado;
    this.incorrectas = incorrectas;
  }

  /*Resultado según valor del contador.
 Valor entre 0 y 20 da rutina normal. ESTRES BAJO,
 Valor entre 21 y 60 da rutina a ajustar. ESTRES MEDIO,
 Valor superior a 60 da rutina a ajustar. ESTRES ALTO*/

  role() {
    if (this.resultado <= 20) {
      return "NIVEL BAJO. Su rutina diaria parece ser normal. Pero siempre se puede estar mejor!!";
    } else if (this.resultado > 20 && this.resultado <= 60) {
      return "NIVEL MEDIO. Su rutina diaria parece no ser la adecuada y su nivel de estres indica que requiere de un ajuste";
    } else {
      return "NIVEL ALTO. Su nivel de estrés parece ser considerable. Se recomienda consultar un especialista para ajustar su rutina";
    }
  }
}

function incorrectas() {
  if (incorrect > 0) {
    alert("Hay respuestas incorrectas, por favor reinicie el cuestionario.");
  }
}

function sintesis() {
  for (let user of arregloInfo) {
    console.log(user.nombre + " su estrés está en " + user.role());
  }
}

//Bienvenida al sistema
console.log("Bienvenid@ al sistema de nivel de estrés");

inicio();
console.log("Contador: ", contador);

incorrectas();
console.log("Respuestas incorrectas: ", incorrect);





