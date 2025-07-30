async function sendFormData(data) {
  /*   return fetch("https://apx.school/api/utils/email-to-student", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: data.email, message: data.msg }),
  }).then((res) => {
    if (res) {
      return true;
    }
  }); */
  return true;
}

function contactFormComp(parentEl) {
  const formEl = document.createElement("div");
  formEl.innerHTML = `
           <form class="form">
          <div class="upper_fields">
            <label class="form_label">
              <p>Nombre</p>
              <input type="text" name="username" placeholder="Tu nombre" />
            </label>
            <label class="form_label">
              <p>Email</p>
              <input type="email" name="email" placeholder="Tu email" />
            </label>
          </div>
          <label class="form_label">
            <p>Mensaje</p>
            <textarea name="msg" id=""></textarea>
          </label>
          <div class="btn_container">
            <button>Enviar <img src="../icons/send.png" /></button>
          </div>
          <p class="form_sent">Enviado!</p>
        </form>
    `;
  const formSentEl = formEl.querySelector(".form_sent");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    sendFormData(entries).then((res) => {
      if (res) {
        formSentEl.style.display = "initial";
        formSentEl.style.color = "#fafafa";
      }
    });

    // Áca podría agregar algun PopUp o alguna interacción
  });

  parentEl.appendChild(formEl);
}
