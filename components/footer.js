function footerComp(parentEl) {
  const footerContainerEl = document.createElement("div");
  footerContainerEl.innerHTML = `
         <div class="footer">
      <div class="footer_logo_container">
        <img src="./icons/maxiCV_icon.png" alt="logo" class="footer_logo" />
      </div>
      <div class="footer_links_container">
        <a href="/index.html"><img src="./icons/home.png" alt="" />Home</a>
        <a href="/services.html"><img src="./icons/services.png" alt="" />Servicios</a>
        <a href="/contact.html"><img src="./icons/contact.png" alt="" />Contacto</a>
      </div>
      <div class="social_links_container">
      <a href="https://www.linkedin.com/in/maximo-rossini-fullstack/"><img src="./icons/linkedin.png" alt="" /></a>
        <a href="https://github.com/Maximo-Rossini-dev"><img src="./icons/github.png" alt="" /></a>
        <a href="https://www.instagram.com/maximorossini/">   <img src="./icons//instagram.png" alt="" /></a>
      </div>
      <p>@2025 - https://maxi.com</p>
    </div>
    `;
  parentEl.appendChild(footerContainerEl);
}
