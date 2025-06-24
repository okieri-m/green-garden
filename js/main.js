document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;

    function openMobileMenu() {
        mobileMenu.classList.add('mobile-menu--active');
        mobileMenuOverlay.classList.remove('hidden');
        body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('mobile-menu--active');
        mobileMenuOverlay.classList.add('hidden');
        body.style.overflow = '';
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu on window resize if it's open
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('mobile-menu--active')) {
            closeMobileMenu();
        }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
