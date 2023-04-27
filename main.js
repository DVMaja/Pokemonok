import Pokemon from "./Pokemon.js";
import adatBeolvas from "./hivasok.js";

$(function () {
  let pokVegpont = "https://pokeapi.co/api/v2/pokemon/145";

  adatBeolvas(pokVegpont, pokemonMegjelenit);
});

function pokemonMegjelenit(adat) {
  console.log(adat);
  console.log(adat.name);

  const ELEM = $(".tarolo");

  let obj = {
    eleresiUt: adat.sprites.front_default,
    pokemonNev: adat.name,
  };
  //itt történik a pldányosítéás
  const pokemon1 = new Pokemon(obj, ELEM);
}
