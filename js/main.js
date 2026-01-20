// AUTO CLEAN 40 - JavaScript Main

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const nav = document.querySelector('.nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && !e.target.closest('.nav__toggle')) {
            nav?.classList.remove('active');
            navToggle?.classList.remove('active');
        }
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        
        question?.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Devis Builder
    const devisOptions = document.querySelectorAll('.devis-option');
    const summaryItems = document.querySelector('.devis-summary__items');
    const totalPrice = document.querySelector('.devis-summary__total-price');
    
    if (devisOptions.length > 0) {
        devisOptions.forEach(option => {
            option.addEventListener('click', function() {
                this.classList.toggle('selected');
                updateDevisSummary();
            });
        });
    }
    
    function updateDevisSummary() {
        const selected = document.querySelectorAll('.devis-option.selected');
        let total = 0;
        let itemsHTML = '';
        
        selected.forEach(option => {
            const name = option.querySelector('.devis-option__name').textContent;
            const priceText = option.querySelector('.devis-option__price').textContent;
            const price = parseFloat(priceText.replace(/[^0-9]/g, '')) || 0;
            
            total += price;
            
            itemsHTML += `
                <div class="devis-summary__item">
                    <div class="devis-summary__item-name">${name}</div>
                    <div class="devis-summary__item-price">${priceText}</div>
                </div>
            `;
        });
        
        if (summaryItems) {
            if (selected.length === 0) {
                summaryItems.innerHTML = '<p style="color: rgba(255,255,255,0.5); text-align: center; padding: 2rem;">Sélectionnez des services pour voir le résumé</p>';
            } else {
                summaryItems.innerHTML = itemsHTML;
            }
        }
        
        if (totalPrice) {
            totalPrice.textContent = total > 0 ? `${total}€` : '0€';
        }
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#FFFF00';
                } else {
                    input.style.borderColor = 'rgba(255, 255, 0, 0.2)';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards
    document.querySelectorAll('.service-card, .pricing-card, .review-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Initialize devis summary
    updateDevisSummary();
});
