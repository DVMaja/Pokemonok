class Pokemon {
  /**adat típusa egy objektum legyen */
  constructor(adat, SzuloElem) {
    this.neve = adat.pokemonNev;
    this.kepe = adat.eleresiUt;

    SzuloElem.append(`<div class="pokemon" style="position: absolute">        
        <p><img src="${this.kepe}" alt="${this.neve}"></p>
        </div>`);

    this.pokeELEM = $(".pokemon:last-child");
    console.log(this.pokeELEM);
    $(window).on("keydown", (event) => {
      console.log(event.key);
      let bill = event.key;
      let poz = this.pokeELEM.position();
      console.log(poz);

      //ha az a betűt nyomjuk meg akkor a poziciónál a bal értéket csökkenteni 10-zel
      //ha az d betűt nyomjuk meg akkor a poziciónál a jobbé rtéket növelni 10-zel
      //ha az w betűt nyomjuk meg akkor a poziciónál a top értéket csökkenteni 10-zel
      //ha az s betűt nyomjuk meg akkor a poziciónál a down értéket növelni 10-zel
      //switch case
        let xPoz, yPoz;

      switch(bill) {
        case "a":
          console.log("bal")
          xPoz = poz.left - 10;
          this.pokeELEM.css("left", xPoz)
          break;
        case "d":
            xPoz = poz.left + 10;
            this.pokeELEM.css("left", xPoz )
            console.log("jobb")
          break;
          case "s":
            yPoz = poz.top + 10;
            this.pokeELEM.css("top", yPoz)
            console.log("le")
          break;
        case "w":
            yPoz = poz.top - 10;
            this.pokeELEM.css("top", yPoz)
            console.log("fel")
          break;
        default:
          // code block
      }
    });
  }
}

export default Pokemon;
