// ==================== CUSTOM CURSOR ====================
const cursor = {
    dot: document.querySelector('.cursor-dot'),
    outline: document.querySelector('.cursor-outline')
};

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.9;
    cursorY += (mouseY - cursorY) * 0.9;
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    if (cursor.dot && cursor.outline) {
        cursor.dot.style.left = cursorX + 'px';
        cursor.dot.style.top = cursorY + 'px';
        cursor.outline.style.left = outlineX + 'px';
        cursor.outline.style.top = outlineY + 'px';
    }

    requestAnimationFrame(animateCursor);
}

if (window.matchMedia('(hover: hover)').matches) {
    animateCursor();
}

// Cursor expand on hover
document.querySelectorAll('a, button, .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor.outline) {
            cursor.outline.style.width = '60px';
            cursor.outline.style.height = '60px';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor.outline) {
            cursor.outline.style.width = '40px';
            cursor.outline.style.height = '40px';
        }
    });
});

// ==================== NAVIGATION ====================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const lines = navToggle.querySelectorAll('.line');
        
        if (navMenu.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translateY(8px)';
            lines[1].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.transform = 'none';
        }
    });
}

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        const lines = navToggle?.querySelectorAll('.line');
        if (lines) {
            lines[0].style.transform = 'none';
            lines[1].style.transform = 'none';
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== HERO ANIMATIONS ====================
// Animate hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const lines = heroTitle.querySelectorAll('.line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '0';
            line.style.transform = 'translateY(50px)';
            line.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Parallax effect for hero images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach((card, index) => {
        const speed = card.dataset.scrollSpeed || 1;
        const yPos = -(scrolled * speed * 0.05);
        card.style.transform = `translateY(${yPos}px) rotate(${card.classList.contains('img-1') ? 5 : card.classList.contains('img-2') ? -8 : 3}deg)`;
    });
});

// ==================== PORTFOLIO FILTER ====================
const filterTags = document.querySelectorAll('.filter-tag');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Remove active class from all tags
        filterTags.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tag
        tag.classList.add('active');

        const filterValue = tag.dataset.filter;

        portfolioCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize portfolio animation
portfolioCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// ==================== TESTIMONIAL SLIDER ====================
const testimonialTrack = document.querySelector('.testimonial-track');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const pagination = document.getElementById('testimonialPagination');
const testimonialItems = document.querySelectorAll('.testimonial-item');

let currentSlide = 0;
const totalSlides = testimonialItems.length;

// Create pagination dots
if (pagination) {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    }
}

const paginationDots = document.querySelectorAll('.pagination-dot');

function updateSlider() {
    if (testimonialTrack) {
        const slideWidth = testimonialItems[0]?.offsetWidth + 32; // card width + gap
        testimonialTrack.scrollTo({
            left: slideWidth * currentSlide,
            behavior: 'smooth'
        });
    }

    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
}

// Auto-play testimonials
let autoplayInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 5000);

// Stop autoplay on interaction
if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    testimonialTrack.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    });
}

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name')?.value,
            email: document.getElementById('email')?.value,
            phone: document.getElementById('phone')?.value,
            service: document.getElementById('service')?.value,
            message: document.getElementById('message')?.value
        };

        // Success animation
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span>';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);

        console.log('Form submitted:', formData);
    });

    // Floating label effect
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        // Set placeholder to empty for floating label effect
        if (input.tagName !== 'SELECT') {
            input.placeholder = ' ';
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animateElements = document.querySelectorAll(
    '.service-item, .portfolio-card, .testimonial-item, .contact-info-grid, .contact-form-alt'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ==================== NUMBER COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isPercent = element.textContent.includes('%');
    const hasPlus = element.textContent.includes('+');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (hasPlus ? '+' : '') + (isPercent ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (hasPlus ? '+' : '') + (isPercent ? '%' : '');
        }
    }, 16);
}

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const targetText = stat.textContent;
                const target = parseInt(targetText.replace(/\D/g, ''));
                animateCounter(stat, target, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== SERVICE HOVER EFFECTS ====================
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== IMAGE LAZY LOADING ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== FORM VALIDATION ====================
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Real-time validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

if (emailInput) {
    emailInput.addEventListener('blur', (e) => {
        const email = e.target.value;
        if (email && !validateEmail(email)) {
            e.target.style.borderColor = '#ff4444';
        } else {
            e.target.style.borderColor = '';
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('blur', (e) => {
        const phone = e.target.value;
        if (phone && !validatePhone(phone)) {
            e.target.style.borderColor = '#ff4444';
        } else {
            e.target.style.borderColor = '';
        }
    });
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        const lines = navToggle?.querySelectorAll('.line');
        if (lines) {
            lines[0].style.transform = 'none';
            lines[1].style.transform = 'none';
        }
    }
});

// ==================== CONSOLE EASTER EGG ====================
console.log(
    '%c🎬 FOTOIN PICTURES',
    'color: #FFE500; font-size: 32px; font-weight: bold; text-shadow: 2px 2px 0px rgba(0,0,0,0.5);'
);
console.log(
    '%cCrafting memories through lens 📸',
    'color: #A0A0A0; font-size: 14px; font-style: italic;'
);
console.log(
    '%cWebsite built with ❤️ using HTML, CSS & Vanilla JavaScript',
    'color: #FFFFFF; font-size: 12px;'
);

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll for heavy operations
const debouncedScroll = debounce(() => {
    // Heavy scroll operations here if needed
}, 100);

window.addEventListener('scroll', debouncedScroll);
