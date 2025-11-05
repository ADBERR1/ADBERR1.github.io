// Navegación entre secciones
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.dataset.section;
        
        // Actualizar active en nav
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Mostrar sección correspondiente
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// Animación de números en estadísticas
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = element.textContent.replace(/[\d,.$]/g, '') + 
            (element.textContent.includes('$') ? '$' : '') + 
            (element.textContent.includes('M') ? value.toLocaleString() + 'M' : value.toLocaleString());
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Activar animación cuando la sección de inicio es visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('$')) {
                    const num = parseFloat(text.replace(/[$M]/g, ''));
                    animateValue(stat, 0, num, 2000);
                } else if (text.includes('%')) {
                    const num = parseFloat(text.replace('%', ''));
                    animateValue(stat, 0, num, 2000);
                } else if (text.includes('s')) {
                    stat.textContent = '0.03s';
                } else {
                    const num = parseInt(text.replace(/,/g, ''));
                    animateValue(stat, 0, num, 2000);
                }
            });
            observer.unobserve(entry.target);
        }
    });
});

const inicioSection = document.getElementById('inicio');
if (inicioSection) {
    observer.observe(inicioSection);
}

// Manejo del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulación de envío
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '✓ Mensaje Enviado';
        submitBtn.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
        
        // Resetear formulario
        event.target.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }, 1500);
}

// Efecto parallax suave en el scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Animación de entrada para las tarjetas de enlaces
const linkCards = document.querySelectorAll('.link-card');
const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            }, index * 100);
            linkObserver.unobserve(entry.target);
        }
    });
});

linkCards.forEach(card => {
    linkObserver.observe(card);
});

// Efecto de typing en el título principal
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
}
