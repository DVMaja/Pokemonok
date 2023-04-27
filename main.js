import Pokemon from "./Pokemon.js";
const POKEMONOK = [];

$(function () {
  let pokVegpont = "https://pokeapi.co/api/v2/pokemon/1000";

  adatbeolvas(pokVegpont, POKEMONOK, pokemonMegjelenit);
});

function adatbeolvas(vegpont, lista, callbackFv){

    fetch(vegpont, {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        lista = data;
        callbackFv(lista);
    })
}

function pokemonMegjelenit(pokemon) {
  console.log(pokemon);

  /* const pokeObj = {
    eleresiUt: adat.sprites.front_default,
    pokemonNEv: adat.name,
  }; */
}
