function contactPage() {
  const headerContainerEl = document.querySelector(".contact_header_container");
  const contactFormContainerEl = document.querySelector(
    ".contact_form_container"
  );
  const footerContainerEl = document.querySelector(".footer_container");
  headerComp(headerContainerEl);
  contactFormComp(contactFormContainerEl);
  footerComp(footerContainerEl);
}
contactPage();
