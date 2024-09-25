document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuList = document.getElementById('menu-list');
    const closeMenuButton = document.getElementById('close-menu');

    mobileMenu.addEventListener('click', () => {
        const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
        mobileMenu.setAttribute('aria-expanded', !isExpanded);
        menuList.classList.toggle('show');
        menuList.setAttribute('aria-hidden', isExpanded);
    });

    closeMenuButton.addEventListener('click', () => {
        menuList.classList.remove('show');
        mobileMenu.setAttribute('aria-expanded', 'false');
        menuList.setAttribute('aria-hidden', 'true');
    });

    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !menuList.contains(event.target)) {
            menuList.classList.remove('show');
            mobileMenu.setAttribute('aria-expanded', 'false');
            menuList.setAttribute('aria-hidden', 'true');
        }
    });
});
