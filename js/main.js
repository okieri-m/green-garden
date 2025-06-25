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

    // Tab Functionality
    const tabButtons = document.querySelectorAll('.tabs__button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabName) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => {
            button.classList.remove('tabs__button--active');
        });
        tabContents.forEach(content => {
            content.classList.remove('tab-content--active');
        });

        // Add active class to clicked button and corresponding content
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(`${tabName}-tab`);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('tabs__button--active');
            activeContent.classList.add('tab-content--active');
        }
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});
