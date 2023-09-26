function getServiciosCont(params) {
    const templateServiciosId = document.querySelector("#template-welcome");
    const containerServicios = document.querySelector(".welcome__container");
    templateServiciosId.content.querySelector(".welcome__title-top").textContent = params.title;
    templateServiciosId.content.querySelector(".welcome__title-bottom").textContent = params.text;
    templateServiciosId.content.querySelector(".welcome__img").src = params.img;
    templateServiciosId.content.querySelector(".welcome__img-sombra").src = params.sombra;
    const cloneServicios = document.importNode(templateServiciosId.content, true);
    containerServicios.appendChild(cloneServicios);
}
function getParamsServicios() {
    return fetch('https://cdn.contentful.com/spaces/7zcejl3en0an/environments/master/entries?access_token=5NYdT1P33L6TDQQUnP8VWEPxKGiVrg0BvgISZxCGYvU&content_type=portfolio')
  .then(response => response.json())
        .then((data) => {
            //const collection = data.items.map(function (item) {
                return {
                    title: data.items[0].fields.tituloBlanco,
                    text: data.items[0].fields.tituloCeleste,
                    img: data.includes.Asset[0].fields.file.url,
                    sombra: data.includes.Asset[1].fields.file.url
                }
           // });
            //return collection;
        }
    );
}
function getServicesCont(params) {
    const templateServicesId = document.querySelector("#template-services");
    const containerServices = document.querySelector(".services__card-cont");
        templateServicesId.content.querySelector(".services__card-img").src = params.img;
        templateServicesId.content.querySelector(".services__card-title").textContent = params.title;
        templateServicesId.content.querySelector(".services__card-text").textContent = params.text;
        const cloneServices = document.importNode(templateServicesId.content, true);
        containerServices.appendChild(cloneServices);
   
}
function getParamsServices() {
    return fetch('https://cdn.contentful.com/spaces/7zcejl3en0an/environments/master/entries?access_token=5NYdT1P33L6TDQQUnP8VWEPxKGiVrg0BvgISZxCGYvU&content_type=cardPortfolio')
    .then(response => response.json())
        .then((data) => {
           console.log(data);
            const collection = data.items.map(function (item) {
                const assetId = item.fields.imagen.sys.id;
                const asset = data.includes.Asset.find((a) => a.sys.id == assetId);
                const img = asset.fields.file.url;
                return {
                    img: img,
                    title: item.fields.titulo,
                    text: item.fields.descripcion,
                }
            });
            return collection;
        }
    );
}
function main() {
    const headerCont = document.querySelector(".header");
    header(headerCont);
    headerAction(); 
    
    getParamsServicios().then((e) => {
        getServiciosCont(e);
    });
    getParamsServices().then(function (cards) {
         for (const c of cards) {
                 getServicesCont(c);
             }
            })
    const footerCont = document.querySelector(".footer");
    footer(footerCont);
        }
main();