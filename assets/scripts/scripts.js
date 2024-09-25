document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuList = document.getElementById('menu-list');
    const closeMenuButton = document.getElementById('close-menu');

    // Abrir/fechar menu ao clicar no ícone do menu móvel
    mobileMenu.addEventListener('click', () => {
        const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
        mobileMenu.setAttribute('aria-expanded', !isExpanded);
        menuList.classList.toggle('show');
        menuList.setAttribute('aria-hidden', isExpanded);
    });

    // Fechar menu ao clicar no botão de fechar
    closeMenuButton.addEventListener('click', () => {
        menuList.classList.remove('show');
        mobileMenu.setAttribute('aria-expanded', 'false');
        menuList.setAttribute('aria-hidden', 'true');
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !menuList.contains(event.target)) {
            menuList.classList.remove('show');
            mobileMenu.setAttribute('aria-expanded', 'false');
            menuList.setAttribute('aria-hidden', 'true');
        }
    });
});
