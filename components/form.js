function form(el) {
    const formEl = document.createElement("div");
    formEl.innerHTML = `<section class="contacto__container">
    <div class="contacto__title-cont">
        <h2 class="contacto__title">Escribime</h2> 
    </div>
    <form class="contacto__form">
        <div class="contacto__input-duos">
            <div class="contacto__fieldset">
                <label for="nombre" class="contacto__label">Nombre</label>
                <input id="nombre" type="text" class="contacto__input" placeholder="tu nombre">   
            </div>
        <div class="contacto__fieldset">
               <label class="contacto__label">Email</label>
               <input id="email" type="text" class="contacto__input" placeholder="tu@mail.com">   
           </div>
        </div>
       <div class="contacto__fieldset">
           <label class="contacto__label">Mensaje</label>
           <textarea name="" id="texto" cols="30" rows="10" class="contacto__textarea"></textarea>  
       </div>
     <button class="contacto__button">Enviar</button>
    </form>
</section>`
    el.appendChild(formEl);
}
function contactPost() {
    const botonForm = document.querySelector(".contacto__button");
  
    botonForm.addEventListener("click", function (e) {
      e.preventDefault();
  
      const name = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const mesage = document.querySelector("#texto").value;

      const data = {
        to: email,
        message: `${name} ha enviado el siguiente mensaje: ${mesage}`,
      };
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          alert("El mensaje ha sido enviado exitosamente.");
        })
        .catch((error) => {
          console.error(error);
          alert("Ha ocurrido un error al enviar el mensaje.");
        });
    });
}