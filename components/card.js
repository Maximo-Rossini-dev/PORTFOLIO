function cardComponent(parentEl, img, title, text) {
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card">
            <div class="card_upper_content"> 
                <div class="card_img__container">
                    <img src=${img} />
                </div>
                <h3 class="card_title">${title}</h3>
            </div>
            <p class="card_text">${text}</p>
        </div>
    `;
  parentEl.appendChild(div);
}
