/*callback*/

function respuesta(res) {
  console.log(res);
}

function sumar(n1, n2, funcionCallback) {
  let resultado = n1 + n2;
  funcionCallback(resultado);
}

sumar(1, 2, respuesta);

let promesa = new Promise((res, rej) => {
  let estado = true;
  if (estado) {
    res("Resolvio correcto");
  } else {
    rej("Resolvio con error");
  }
});

/* Opcion 1
promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/
/*Opcion 2
promesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/
/*
let promesa2 = new Promise((res) => {
  console.log("Inicio Promesa");
  setTimeout(() => {
    res("Resolvio correcto");
  }, 3000);
  console.log("Fin Promesa");
});

promesa2.then((valor) => console.log(valor));
*/
//es6 async / await

//async =  definimos que una funcion regresa una promesa
async function funcionconPromesa() {
  return "Funcion con async";
}

//funcionconPromesa().then((valor) => console.log(valor));

// await esperar resultado de una empresa.

async function funcionConAsyncAwait() {
  let mipromesa = new Promise((res) => {
    res("Promesa con async/Await");
  });
  console.log(await mipromesa);
}

//funcionConAsyncAwait();

async function callAPI() {
  console.log("Inicio CallAPI");
  let miPromesa = new Promise((res) => {
    setTimeout(() => {
      res("Resultado de la API");
    }, 3000);
  });
  console.log(await miPromesa);
  console.log("Fin CallAPI");
}

callAPI();
