// AUTO CLEAN 40 - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // FAQ Accordion
    // ===================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fermer tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle l'item actuel
            item.classList.toggle('active');
        });
    });
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.querySelector('.nav__toggle');
    const nav = document.querySelector('.nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }
    
    // ===================================
    // Smooth Scroll
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // Sticky Header
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Form Validation
    // ===================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validation basique
            const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Simuler l'envoi du formulaire
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    });
    
    // ===================================
    // Devis Builder
    // ===================================
    const devisOptions = document.querySelectorAll('.devis-option');
    const summaryItems = document.querySelector('.devis-summary__items');
    const totalPrice = document.querySelector('.devis-summary__total-price');
    let selectedServices = [];
    
    if (devisOptions.length > 0) {
        devisOptions.forEach(option => {
            option.addEventListener('click', () => {
                option.classList.toggle('selected');
                updateDevisSummary();
            });
        });
    }
    
    function updateDevisSummary() {
        selectedServices = [];
        let total = 0;
        
        devisOptions.forEach(option => {
            if (option.classList.contains('selected')) {
                const name = option.querySelector('.devis-option__name').textContent;
                const priceText = option.querySelector('.devis-option__price').textContent;
                const price = parseFloat(priceText.replace(/[^0-9]/g, '')) || 0;
                
                selectedServices.push({ name, price });
                total += price;
            }
        });
        
        // Mettre à jour l'affichage
        if (summaryItems) {
            summaryItems.innerHTML = '';
            
            if (selectedServices.length === 0) {
                summaryItems.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.5); padding: 2rem 0;">Aucun service sélectionné</p>';
            } else {
                selectedServices.forEach(service => {
                    const item = document.createElement('div');
                    item.className = 'devis-summary__item';
                    item.innerHTML = `
                        <span class="devis-summary__item-name">${service.name}</span>
                        <span class="devis-summary__item-price">${service.price}€</span>
                    `;
                    summaryItems.appendChild(item);
                });
            }
        }
        
        if (totalPrice) {
            totalPrice.textContent = total + '€';
        }
    }
    
    // ===================================
    // Envoyer le devis par email
    // ===================================
    const sendDevisBtn = document.getElementById('send-devis');
    
    if (sendDevisBtn) {
        sendDevisBtn.addEventListener('click', () => {
            if (selectedServices.length === 0) {
                alert('Veuillez sélectionner au moins un service.');
                return;
            }
            
            const servicesText = selectedServices.map(s => `${s.name} - ${s.price}€`).join('\\n');
            const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
            
            const subject = 'Demande de devis AUTO CLEAN 40';
            const body = `Bonjour,\\n\\nJe souhaite obtenir un devis pour les prestations suivantes :\\n\\n${servicesText}\\n\\nTotal estimé : ${total}€\\n\\nMerci de me recontacter.\\n\\nCordialement`;
            
            window.location.href = `mailto:autoclean40600@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
    
    // ===================================
    // Appeler pour le devis
    // ===================================
    const callDevisBtn = document.getElementById('call-devis');
    
    if (callDevisBtn) {
        callDevisBtn.addEventListener('click', () => {
            if (selectedServices.length === 0) {
                alert('Veuillez sélectionner au moins un service avant d\'appeler.');
                return;
            }
            
            window.location.href = 'tel:+33766367051';
        });
    }
    
    // ===================================
    // Animations on scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les cartes et sections
    document.querySelectorAll('.service-card, .pricing-card, .review-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(el);
    });
    
    // ===================================
    // Marquee duplication for seamless loop
    // ===================================
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        const marqueeHTML = marqueeContent.innerHTML;
        marqueeContent.innerHTML = marqueeHTML + marqueeHTML;
    }
});
