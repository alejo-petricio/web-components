function header(el) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `<div class="header__cont">
    <img src="./imagenes/Alejo_Petricio-removebg-preview.png" alt="" class="header__logo">
    <a href="" class="header__burger-click">
        <img src="/imagenes/menu-svgrepo-com 1.png" alt="" class="header__burger">
    </a>
    <div class="header__nav">
        <a href="./portfolio.html" class="header__nav-a">Portfolio</a>
        <a href="./servicios.html" class="header__nav-a">Servicios</a>
        <a href="./contacto.html" class="header__nav-a">Contacto</a>
    </div>
</div>

</div>
<div class="header__burger-nav">
<a href="">
    <img src="./imagenes/Vector (1).svg" alt="" class="header__burger-nav-img">
</a>
<div class="header__burger-nav-container">
    <a href="./portfolio.html" class="header__burger-nav-link">Portfolio</a>
    <a href="./servicios.html" class="header__burger-nav-link">Servicios</a>
    <a href="./contacto.html" class="header__burger-nav-link">Contacto</a>
</div>`
    el.appendChild(headerEl);
}
function headerAction() {
    const burgerEl = document.querySelector(".header__burger-click");
    const ventanaEl = document.querySelector(".header__burger-nav");
    burgerEl.addEventListener("click", (e) => {
        e.preventDefault();
        ventanaEl.style.display = "inherit";
    });
}