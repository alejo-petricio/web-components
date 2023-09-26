function getWelcomeCont(params) {
    const templateWelcomeId = document.querySelector("#template-welcome");
    const containerWelcome = document.querySelector(".welcome__container");
    templateWelcomeId.content.querySelector(".welcome__title-top").textContent = params.title;
    templateWelcomeId.content.querySelector(".welcome__title-bottom").textContent = params.text;
    templateWelcomeId.content.querySelector(".welcome__img").src = params.img;
    templateWelcomeId.content.querySelector(".welcome__img-sombra").src = params.sombra;
    const cloneWelcome = document.importNode(templateWelcomeId.content, true);
    containerWelcome.appendChild(cloneWelcome);
}
function getParamsWelcome() {
    return fetch('https://cdn.contentful.com/spaces/7zcejl3en0an/environments/master/entries?access_token=5NYdT1P33L6TDQQUnP8VWEPxKGiVrg0BvgISZxCGYvU&content_type=bienvenida')
  .then(response => response.json())
        .then((data) => {
            //const collection = data.items.map(function (item) {
                return {
                    title: data.items[0].fields.tituloTop,
                    text: data.items[0].fields.tituloBottom,
                    img: data.includes.Asset[0].fields.file.url,
                    sombra: data.includes.Asset[1].fields.file.url
                }
           // });
            //return collection;
        }
    );
}

function getPresentacionCont(params) {
    const templatePresentacionId = document.querySelector("#template-presentacion");
    const containerPresentacion = document.querySelector(".presentacion__container");
    templatePresentacionId.content.querySelector(".presentacion__title").textContent = params.title;
    templatePresentacionId.content.querySelector(".presentacion__text").textContent = params.text;
    templatePresentacionId.content.querySelector(".presentacion__img").src = params.img;
    const clonePresentacion = document.importNode(templatePresentacionId.content, true);
    containerPresentacion.appendChild(clonePresentacion);
}
function getParamsPresentacion() {
    return fetch('https://cdn.contentful.com/spaces/7zcejl3en0an/environments/master/entries?access_token=5NYdT1P33L6TDQQUnP8VWEPxKGiVrg0BvgISZxCGYvU&content_type=presentacion')
  .then(response => response.json())
        .then((data) => {
            //const collection = data.items.map(function (item) {
                return {
                    title: data.items[0].fields.titulo,
                    text: data.items[0].fields.parrafo,
                    img: data.includes.Asset[0].fields.file.url,
                }
           // });
            //return collection;
        }
    );
}


function main() {
    const headerCont = document.querySelector(".header");
    header(headerCont);
    headerAction(); 

    const formCont = document.querySelector(".contacto");
    form(formCont);
    contactPost();
    const footerCont = document.querySelector(".footer");
    footer(footerCont);
    getParamsWelcome().then((e) => {
        getWelcomeCont(e);
    });
    
    getParamsPresentacion().then((e) => {
        getPresentacionCont(e);
      });
}
main();