// Smooth scroll for navigation links
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
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

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.skill-card, .project-card, .blog-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }, 1500);

        // For actual implementation, use:
        /*
        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
        */
    });
}

// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease forwards';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Generate placeholder images if images don't exist
window.addEventListener('load', () => {
    const images = [
        { id: 'profile-img', text: 'Abdullah\nBin Shahid', gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' },
        { id: 'project-img', text: 'AI\nCompanion', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
        { id: 'blog-img-1', text: 'Flutter\nGuide', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
        { id: 'blog-img-2', text: 'Mentor\nJourney', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' },
        { id: 'blog-img-3', text: 'AI Apps', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }
    ];

    images.forEach(({ id, text, gradient }) => {
        const img = document.getElementById(id);
        if (img && !img.complete) {
            // Create canvas placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 800;
            const ctx = canvas.getContext('2d');

            // Create gradient
            const grd = ctx.createLinearGradient(0, 0, 800, 800);
            if (gradient.includes('#6366f1')) {
                grd.addColorStop(0, '#6366f1');
                grd.addColorStop(1, '#8b5cf6');
            } else if (gradient.includes('#10b981')) {
                grd.addColorStop(0, '#10b981');
                grd.addColorStop(1, '#059669');
            } else if (gradient.includes('#f59e0b')) {
                grd.addColorStop(0, '#f59e0b');
                grd.addColorStop(1, '#d97706');
            } else if (gradient.includes('#ec4899')) {
                grd.addColorStop(0, '#ec4899');
                grd.addColorStop(1, '#be185d');
            } else {
                grd.addColorStop(0, '#3b82f6');
                grd.addColorStop(1, '#1d4ed8');
            }

            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, 800, 800);

            // Add text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.font = 'bold 80px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const lines = text.split('\n');
            const lineHeight = 100;
            const startY = 400 - ((lines.length - 1) * lineHeight) / 2;

            lines.forEach((line, index) => {
                ctx.fillText(line, 400, startY + (index * lineHeight));
            });

            // Set as image source
            img.src = canvas.toDataURL();
        }
    });
});

// Add smooth reveal animation for stats
const stats = document.querySelectorAll('.stat-item h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const isNumber = !isNaN(parseInt(finalValue));

            if (isNumber) {
                const num = parseInt(finalValue);
                let current = 0;
                const increment = num / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num) {
                        target.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + (finalValue.includes('+') ? '+' : '');
                    }
                }, 30);
            }

            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    statsObserver.observe(stat);
});

console.log('Portfolio loaded successfully! 🚀');
