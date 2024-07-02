document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // Highlight active navigation item
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Animate skill bars on scroll
    const skillLevels = document.querySelectorAll('.skill-level');
    const animateSkills = () => {
        skillLevels.forEach(level => {
            const sectionPos = level.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                level.style.width = level.getAttribute('data-level');
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Form submission
    //const form = document.getElementById('contact-form');
    // form.addEventListener('submit', (e) => {
    // e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    //   const formData = new FormData(form);
    //  console.log('Form submitted with data:', Object.fromEntries(formData));
    // form.reset();
    // alert('Thank you for your message! I will get back to you soon.');
    // });

    // Project hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
        });
    });

    // Typewriter effect for hero section
    const typeWriter = (text, i, fnCallback) => {
        if (i < text.length) {
            document.querySelector(".hero h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    // Start the typewriter effect
    typeWriter("Software Developer", 0);
});