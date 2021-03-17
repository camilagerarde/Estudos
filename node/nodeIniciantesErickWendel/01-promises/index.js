/* objetivos
0 obter um usuário
1 preciso obter o número de telefone de 1 usuário pelo seu ID
2 preciso obter o endereço do usuário pelo ID
*/

// callback é sempre 0 último parâmetro
// NULL || '' || 0 === FALSE

/*const getUser = (callback) => {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "Gilmar",
      birth: new Date(),
    });
  }, 1000);
};

const getPhone = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      phone: "1234-5678",
      ddd: 11,
    });
  }, 2000);
};

const getAdress = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      street: "dos bobos",
      number: 0,
    });
  }, 2000);
};

getUser(function userResolve(error, user) {
  if (error) {
    console.error("Deu ruim no usuário", error);
    return;
  }
  getPhone(user.id, function phoneResolve(error1, phone) {
    if (error1) {
      console.error("Deu ruim no telefone", error);
      return;
    }
    getAdress(user.id, function adressResolve(error2, adress) {
      if (error2) {
        console.error("Deu ruim no endereço", error);
        return;
      }
      console.log(`
      Nome: ${user.name}
      Endereço: ${adress.street}, ${adress.number}
      Telefone: (${phone.ddd})${phone.phone}
      `);
    });
  });
});

setTimeout(() => {
  console.log("Se passaram 5,5 segundos");
}, 5500); */

//REFATORAÇÃO 1 ========================================================================================

//PROMISE - deu sucesso = resolve / deu ruim = reject
const getUser = () => {
  return new Promise(function promiseResolve(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error("Deu ruinzão!!"));
      return resolve({
        id: 1,
        name: "Gilmar",
        birth: new Date(),
      });
    }, 1000);
  });
};

const getPhone = (idUser) => {
  return new Promise(function promiseResolve(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: "1234-5678",
        ddd: 11,
      });
    }, 2000);
  });
};

const getAdress = (idUser, callback) => {
  setTimeout(() => {
    return callback(null, {
      street: "dos bobos",
      number: 0,
    });
  }, 2000);
};
// Importamos um módulo interno do node.js
const util = require("util");
const getAdressAsync = util.promisify(getAdress);

// p manipular com sucesso usamos .then | p erros .catch
const userPromise = getUser();
userPromise
  .then(function (user) {
    return getPhone(user.id).then(function phoneResolve(result) {
      return {
        user: {
          name: user.name,
          id: user.id,
        },
        phone: result,
      };
    });
  })
  .then(function (lastResult) {
    const adress = getAdressAsync(lastResult.user.id);
    return adress.then(function adressResolve(result) {
      return {
        user: lastResult.user,
        phone: lastResult.phone,
        adress: result,
      };
    });
  })
  .then(function (result) {
    console.log(`
    Nome: ${result.user.name}
    Endereço: ${result.adress.street}, ${result.adress.number}
    Telefone: (${result.phone.ddd}) ${result.phone.phone}
    `);
    // console.table({ result });
  })
  .catch(function (error) {
    console.error("Deu ruim!", error);
  });

//REFATORAÇÃO 2 ========================================================================================

// const getUser = () => {
//   return new Promise(function promiseResolve(resolve, reject) {
//     setTimeout(function () {
//       // return reject(new Error("Deu ruinzão!!"));
//       return resolve({
//         id: 1,
//         name: "Gilmar",
//         birth: new Date(),
//       });
//     }, 1000);
//   });
// };

// const getPhone = (idUser) => {
//   return new Promise(function promiseResolve(resolve, reject) {
//     setTimeout(() => {
//       return resolve({
//         phone: "1234-5678",
//         ddd: 11,
//       });
//     }, 2000);
//   });
// };

// const getAdress = (idUser, callback) => {
//   setTimeout(() => {
//     return callback(null, {
//       street: "dos bobos",
//       number: 0,
//     });
//   }, 2000);
// };

// // Importamos um módulo interno do node.js, cria a promise com o callback (mas deve estar digitado corretamente)
// const util = require("util");
// const { timeEnd } = require("console");
// const getAdressAsync = util.promisify(getAdress);

// // add a palavra async -> automaticamente ela retornará uma promise
// main();
// async function main() {
//   try {
//     //medir o tempo de execução
//     console.time("medida-promise");
//     const user = await getUser();

//     // para diminuir o tempo trocamos o await em cada função, para um nas duas.
//     // const phone = await getPhone(user.id);
//     // const adress = await getAdressAsync(user.id);
//     const result = await Promise.all([
//       getPhone(user.id),
//       getAdressAsync(user.id),
//     ]);
//     const phone = result[0];
//     const adress = result[1];

//     console.log(`
//     Nome: ${user.name}
//     Endereço: ${adress.street}, ${adress.number}
//     Telefone: (${phone.ddd}) ${phone.phone}
//     `);

//     console.timeEnd("medida-promise");
//   } catch (error) {
//     console.error("deu ruim!!", error);
//   }
// }
