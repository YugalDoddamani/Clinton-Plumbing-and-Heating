document.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ACCORDION FAQ LOGIC
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle selected item
            if (!isOpen) {
                item.classList.add('open');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // PARALLAX EFFECT FOR HERO
    const heroParallax = document.getElementById('heroParallax');
    
    if (heroParallax) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection.offsetHeight;
            
            // Only apply parallax while hero is in view
            if (scrollY < heroHeight) {
                const translateY = scrollY * 0.4; // Adjust speed here (0.4 = subtle)
                heroParallax.style.transform = `translateY(${translateY}px)`;
            }
        }, { passive: true });
    }
});