function adatBeolvas(vegpont, callbackFv) {
  fetch(vegpont, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      callbackFv(data);
    });
}

export default adatBeolvas;
