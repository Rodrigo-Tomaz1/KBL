const menuMobile = document.querySelector('.header-content-mobile');

function expandir() {
    const menuMobile = document.querySelector('.header-content-mobile');
   if (menuMobile.classList.contains('ativo')) {
        menuMobile.classList.remove('ativo');
        document.querySelector('.icon').src = 'CSS/header/header-mobile-icons/abrir.svg'
    } else {
        menuMobile.classList.add('ativo')
        document.querySelector('.icon').src = 'CSS/header/header-mobile-icons/fechar.svg'
   }
}

// const efeitoMenuDesktop = document.querySelector('.header')

// window.addEventListener('scroll', function() {
//     efeitoMenuDesktop.classList.toggle('rolagem', this.window.scrollY > 0);
// })
