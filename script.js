const menuMobile = document.querySelector('.menu-mobile');

    function expandir() {
        if (menuMobile.classList.contains('ativo')) {
            menuMobile.classList.remove('ativo');
            document.querySelector('.icon').src = "CSS/header/header-mobile/btn-menu/expandir.svg"
        } else {
            menuMobile.classList.add('ativo')
            document.querySelector('.icon').src = "CSS/header/header-mobile/btn-menu/retrair.svg"
        }
    }

const efeitoMenuDesktop = document.querySelector('.header')

window.addEventListener('scroll', function() {
    efeitoMenuDesktop.classList.toggle('rolagem', this.window.scrollY > 0);
})

