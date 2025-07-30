function main() {
  const headerContainerEl = document.querySelector(".header_container");
  const footerContainerEl = document.querySelector(".footer_container");
  const cardsContainerEl = document.querySelector(
    ".home_services_cards_container"
  );

  const formElContainer = document.querySelector(".contact_form_container");

  getCardItems().then((data) => {
    data.forEach((item) => {
      cardComponent(cardsContainerEl, item.image, item.title, item.description);
    });
  });

  headerComp(headerContainerEl);
  contactFormComp(formElContainer);
  footerComp(footerContainerEl);
}
main();
