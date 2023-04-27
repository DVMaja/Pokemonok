import Pokemon from "./Pokemon.js";
const POKEMONOK = [];

$(function () {
  let pokVegpont = "https://pokeapi.co/api/v2/pokemon/160";

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

function pokemonMegjelenit(adat) {
  console.log(adat);
  console.log(adat.name);

   

  const ELEM = $(".tarolo");
  const pokemon1 = new Pokemon(adat.name, adat.sprites.front_default, ELEM);

}

