class Pokemon {
  constructor(neve, kepe, SzuloElem) {
    this.neve = neve;
    this.kepe = kepe;

    SzuloElem.append(`<div class="pokemon">
        <h3>${this.neve}</h3>
        <p><img src="${this.kepe}" alt="${this.neve}"></p>
        </div>`);
  }
}

export default Pokemon;
