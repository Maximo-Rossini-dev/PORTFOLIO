// Desde áca tengo que consumir los registros de Contentful para pasarselos como parámetros a las cards y
// crear el/los elementos y completar sus campos.
// Agregar componente de footer

function servicesPage() {
  const cardsContainerEl = document.querySelector(".cards_container");
  const headerContainerEl = document.querySelector(
    ".services_header_container"
  );
  headerComp(headerContainerEl);
  const card1 = cardsContainerEl.querySelector(".card_1");
  const card2 = cardsContainerEl.querySelector(".card_2");
  const card3 = cardsContainerEl.querySelector(".card_3");
  getCardItems().then((res) => {
    console.log("res:", res);
    res.forEach((card) => {
      cardComponent(cardsContainerEl, card.image, card.title, card.description);
    });
  });

  const footerContainerEl = document.querySelector(".footer_container");
  footerComp(footerContainerEl);
}
servicesPage();
