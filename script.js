const menuMobile = document.querySelector('.menu-mobile');
const btnSidebar = document.querySelector('.btn-sidebar')

function expadirMenu() {
    menuMobile.classList.toggle('ativo');
}

btnSidebar.addEventListener('click', expadirMenu)