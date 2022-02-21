/*callback*/
function respuesta(res){
  console.log(res);
}

function sumar(n1,n2, funcionCallback){
  let resultado = n1 + n2;
  funcionCallback(resultado);
}
sumar(1,2, respuesta);


/*
/*Promises 
let promesa = new Promise( (resolve, reject)=>{
  let estado = true;
  if(estado){
    resolve("se resolvio correctamente")
  }else{
    reject("ocurrio un error")
  }
 });

 //Opcion 1 para resolver la promesa
 promesa.then(
   (valor)=>console.log(valor),
   (error)=>console.log(error)
 );


  //Opcion 2 para resolver la promesa
  promesa
  .then((valor)=>console.log(valor))
  .catch( (error)=>console.log(error))
  */

  let promesa2 = new Promise((resolve)=>{
    console.log("inicio de la promesa");
    setTimeout(() => {
      resolve("se resolvio correctamente");
    }, 3000);
    console.log("final de la promesa");
  })

  promesa2
  .then((valor)=>console.log(valor))
  
 
  //ES6 async/await
   

  //async : se define que una funcion regresa una promesa
  async function funcionConPromesa(){
    return "Funcion con async";
  }
  funcionConPromesa().then((valor)=>console.log(valor));

  //await : permite esperar el resultado de una promesa
  async function funcionConAsyncAwait(){
    let miPromesa = new Promise((resolve)=>{
      resolve("Promesa con async/await");
    });
    // Esperamos que se resuelva lo anterior antes de ejecutar el console.log (gracias al await)
    console.log(await miPromesa);
  }
  funcionConAsyncAwait();


  async function callAPI(){
    console.log("incio callAPI");
    let miPromesa = new Promise((resolve)=>{
      setTimeout(() => {
        resolve("Resultado de la API");
      }, 3000);
    });
    console.log(await miPromesa);
    console.log("fin callAPI");
  }
  callAPI();