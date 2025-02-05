"use strict";

const request = new XMLHttpRequest();

request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");

request.send();

request.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.responseText);

  console.log(abilities);

  if (abilities.length > 0) {
    const abilityUrl = abilities[0].ability.url;
    const secondRequest = new XMLHttpRequest();

    secondRequest.open("GET", abilityUrl);

    secondRequest.send();
    secondRequest.addEventListener("load", function () {
      const { effect_entries } = JSON.parse(this.responseText);
      const result = effect_entries.filter(
        (item) => item.language.name === "en"
      );
      console.log(result);
    });
  }
});
