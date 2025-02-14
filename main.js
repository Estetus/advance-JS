"use strict";

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Промис 1");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Промис 2");
  }, 3000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Промис 3");
  }, 6000);
});

function race(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new Error("Ожидается массив"));
    }
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
