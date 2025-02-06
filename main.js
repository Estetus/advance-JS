"use strict";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  })
  .then(({ abilities }) => {
    return fetch(abilities[0].ability.url);
  })
  .then((response) => response.json())
  .then(({ effect_entries }) => {
    const result = effect_entries.filter((item) => item.language.name === "en");
    console.log(result);
  })
  .catch((error) => console.error("Error:", error.message));
