function portfolioPage() {
  const headerContainerEl = document.querySelector(
    ".portfolio_header__container"
  );
  const cardsContainerEl = document.querySelector(".proyects_cards_container");
  const card1ContainerEl = document.querySelector(".proyect_card_1");
  const card1ContainerEl2 = document.querySelector(".proyect_card_2");
  const card1ContainerEl3 = document.querySelector(".proyect_card_3");
  const footerContainerEl = document.querySelector(".footer_container");
  getCardItems().then((data) => {
    data.forEach((item) => {
      return cardComponent(
        cardsContainerEl,
        item.image,
        item.title,
        item.description
      );
    });
  });
 
  headerComp(headerContainerEl);
  footerComp(footerContainerEl);
}
portfolioPage();
