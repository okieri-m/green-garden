"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const body = document.body;

    function operateMobileMenu() {
        if (!mobileMenu.classList.contains('mobile-menu--active')) {
            mobileMenu.classList.add('mobile-menu--active');
            mobileMenuButton.classList.add('mobile-menu--active');
            mobileMenuOverlay.classList.remove('hidden');
            body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('mobile-menu--active');
            mobileMenuButton.classList.remove('mobile-menu--active');
            mobileMenuOverlay.classList.add('hidden');
            body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('mobile-menu--active');
        mobileMenuOverlay.classList.add('hidden');
        body.style.overflow = '';
    }

    mobileMenuButton.addEventListener('click', operateMobileMenu);
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

    const fvAnimation = document.querySelector(".js-fade-in");
    const scrollTargets = document.querySelectorAll(".js-scroll-in--left");
    const scrollInRightTargets = document.querySelectorAll(".js-scroll-in--right");


    const options = {
        root: null,
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(fadeInAnimation, options);

    function fadeInAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
            }
        });
    }

    scrollTargets.forEach((scrollTarget) => {
        observer.observe(scrollTarget);
    });
    scrollInRightTargets.forEach((scrollTarget) => {
        observer.observe(scrollTarget);
    });
    
    observer.observe(fvAnimation);
});
