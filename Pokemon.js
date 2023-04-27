class Pokemon {
  /**adat típusa egy objektum legyen */
  constructor(adat, SzuloElem) {
    this.neve = adat.pokemonNev;
    this.kepe = adat.eleresiUt;

    SzuloElem.append(`<div class="pokemon">
        <h3>${this.neve}</h3>
        <p><img src="${this.kepe}" alt="${this.neve}"></p>
        </div>`);
  }
}

export default Pokemon;
