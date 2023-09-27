function footer(el) {
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `<div class="footer__container">
    <div class="footer__logo-caja">
        <img src="https://cdn-icons-png.flaticon.com/512/3067/3067287.png" alt="" class="footer__logo">
    </div>
    <div class="footer__nav-caja">
        <div class="footer__nav-cont">
            <img src="./imagenes/Vector (2).svg" class="footer__nav-img">
            <a href="./index.html" class="footer__nav-sites">Home</a>
        </div>
        <div class="footer__nav-cont">
            <img src="./imagenes/user.svg" class="footer__nav-img">
            <a href="./servicios.html" class="footer__nav-sites">Servicios</a>
        </div>
        <div class="footer__nav-cont">
            <img src="./imagenes/phone.svg" class="footer__nav-img">
            <a href="./contacto.html" class="footer__nav-sites">Contacto</a>
        </div>
    </div>

    <div class="footer__nav-caja-pages">
            <a href="https://www.linkedin.com/in/alejo-elias-petricio-074b17239/" class="footer__pages">
                <img src="./imagenes/Frame 24.svg" alt="" class="footer__pages-img">
            </a>
            <a href="https://github.com/alejo-petricio" class="footer__pages">
                <img src="./imagenes/Frame 26.svg" alt="" class="footer__pages-img">
            </a>
            <a href="https://twitter.com/AlejoPetricio" class="footer__pages">
                <img src="./imagenes/Frame 27.svg" alt="" class="footer__pages-img">
            </a>
    </div>
    <div class="footer__end">
        <a href="https://apx.school" class="footer__end-link">©2023 -https://apx.school</a>
    </div>
    </div>`
    el.appendChild(footerEl);
}