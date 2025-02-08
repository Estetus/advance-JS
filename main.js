"use strict";

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Геолокация не дружит с вашим браузером"));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
}

getCurrentLocation()
  .then((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Широта : ${latitude}, Долгота: ${longitude}`);

    document.body.innerHTML = `
      <h1>Ваши координаты:</h1>
      <p>Широта: ${latitude}</p>
      <p>Долгота: ${longitude}</p>
    `;
  })
  .catch((error) => {
    console.error("Ошибка при получении геопозиции", error.message);
    document.body.innerHTML = `<h1>Ошибка: ${error.message}</h1>`;
  })
  .finally(() => {
    console.log("Запрос геолокации завершен.");
  });
