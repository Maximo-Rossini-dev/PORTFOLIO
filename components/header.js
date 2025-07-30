function headerComp(parentEl) {
  const divEl = document.createElement("div");
  divEl.innerHTML = `
         <header class="header">
             <div class="header_img__container">
              <img src="../icons/maxiCV_icon.png" alt="" class="header_img" />
             </div>
             <div class="header_hmb_container">
               <div class=" hmb_slice"></div>
               <div class="hmb_slice"></div>
               <div class="hmb_slice"></div>
             </div>
             <div class="high_res_menu">
              <a href="services.html">Servicios</a>
              <a href="portfolio.html">Portfolio</a>
              <a href="contact.html">Contacto</a>
             </div>
             </header>
             <div class="low_res_menu">
                 <a  href="services.html">Servicios</a>
                 <a href="portfolio.html">Portfolio</a>
                 <a href="contact.html">Contacto</a>
                 <a class="close">Volver</a>
             </div>
    `;
  const hmbEl = divEl.querySelector(".header_hmb_container");
  const menuEl = divEl.querySelector(".low_res_menu");
  const closeMenuEl = divEl.querySelector(".close");
  hmbEl.addEventListener("click", (e) => {
    e.stopPropagation();
    menuEl.style.display = "flex";
  });
  closeMenuEl.addEventListener("click", (e) => {
    e.stopPropagation();
    menuEl.style.display = "none";
  });
  parentEl.appendChild(divEl);
}
