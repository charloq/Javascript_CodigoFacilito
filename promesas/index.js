// const { resolve } = require("path/posix");
let request = require("request-promise");

// Callback con request
/* request("https://wwww.google.com", function () {
  console.log("Termine la petición");
}); */

// Callback con request promise

// request("https://wwww.yahoo.com").then(function () {
//   console.log("Termine la petición");
// });
// let promesa = request("https://wwww.google.com");
// promesa
//   .then(function () {
//     console.log("Termine la petición");
//   })
//   .catch(function (err) {
//     // Ejecuta si da error
//     console.log("ERROR");
//   })
//   .finally(function () {
//     // Ejecuta siempre al final
//     console.log("Finaliza");
//   });
// console.log("Yo sucedo después");

//--------------------------------------------------------------
// Creacion de promesas
// function leerPagina(url) {
//   return new Promise(function (resolve, reject) {
//     request(url, function (error, response) {
//       if (error) {
//         return reject(error);
//       } else {
//         resolve(response);
//       }
//     });
//   });
// }

// Uso de promesas creadas
// let promesa = leerPagina("https://wwww.yahoo.com");
// promesa.then((r) => console.log("Finalice")).catch((err) => console.log(err));

//-------------------------------------------------------------------------
// Ejecutar multiples promesas
// let p1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "Hola mundo")
// );

// let p2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 600, "Hola mundo dos")
// );

// function finalizado() {
//   console.log("Todo finalizado");
// }

// Promise.all([p1, p2])
//   .then(function (resultados) {
//     console.log(resultados);
//     finalizado();
//   })
//   .catch((err) => console.log(err));

//-------------------------------------------------------------------------
// Encadenar promesas
function primerPromesa() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 500, "Hola mundo")
  );
}

function segundaPromesa() {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 600, "Hola mundo dos")
  );
}

function finalizado() {
  console.log("Todo finalizado");
}

primerPromesa()
  .then(segundaPromesa)
  .then(function (r) {
    console.log(r);
  });
