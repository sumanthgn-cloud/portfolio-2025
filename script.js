// ===== PORTFOLIO WEBSITE JAVASCRIPT =====
// This file contains all interactive functionality for the portfolio website

// ===== PROJECT DATA =====
// Customize: Update this array with your actual projects
const projects = [
    {
        id: 1,
        title: "E-Commerce Mobile App",
        description: "A comprehensive mobile e-commerce application with modern UI/UX design, featuring product catalog, shopping cart, and secure payment integration.",
        image: "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=E-Commerce+App",
        tags: ["Figma", "React Native", "UI/UX Design"],
        details: {
            role: "Lead UI/UX Designer",
            duration: "3 months",
            tools: ["Figma", "Adobe XD", "Principle"],
            challenges: "Creating an intuitive shopping experience for mobile users while maintaining brand consistency across all touchpoints.",
            solutions: "Implemented user-centered design principles, conducted usability testing, and created comprehensive design systems.",
            link: "#"
        }
    },
    {
        id: 2,
        title: "Healthcare Dashboard",
        description: "A responsive healthcare management dashboard designed for medical professionals to track patient data and manage appointments efficiently.",
        image: "https://via.placeholder.com/400x250/6BB6FF/FFFFFF?text=Healthcare+Dashboard",
        tags: ["Dashboard Design", "Healthcare", "Responsive"],
        details: {
            role: "UI/UX Designer",
            duration: "4 months",
            tools: ["Figma", "Sketch", "InVision"],
            challenges: "Designing a complex dashboard that displays large amounts of medical data in an easily digestible format.",
            solutions: "Created information hierarchy, used color coding for different data types, and implemented progressive disclosure.",
            link: "#"
        }
    },
    {
        id: 3,
        title: "Travel Booking Platform",
        description: "A modern travel booking website with advanced search functionality, user reviews, and seamless booking experience.",
        image: "https://via.placeholder.com/400x250/2C3E50/FFFFFF?text=Travel+Platform",
        tags: ["Web Design", "Booking System", "User Research"],
        details: {
            role: "Senior UI/UX Designer",
            duration: "6 months",
            tools: ["Figma", "Adobe Creative Suite", "Framer"],
            challenges: "Simplifying the complex booking process while maintaining all necessary functionality for users.",
            solutions: "Conducted extensive user research, created user journey maps, and designed a streamlined booking flow.",
            link: "#"
        }
    },
    {
        id: 4,
        title: "Fitness Tracking App",
        description: "A mobile fitness application that helps users track workouts, set goals, and monitor their progress with beautiful data visualization.",
        image: "https://via.placeholder.com/400x250/27AE60/FFFFFF?text=Fitness+App",
        tags: ["Mobile App", "Fitness", "Data Visualization"],
        details: {
            role: "UI/UX Designer",
            duration: "5 months",
            tools: ["Figma", "Principle", "Protopie"],
            challenges: "Designing engaging data visualizations that motivate users to continue their fitness journey.",
            solutions: "Created gamification elements, progress indicators, and social features to increase user engagement.",
            link: "#"
        }
    },
    {
        id: 5,
        title: "Banking Mobile App",
        description: "A secure and user-friendly banking application with modern design, biometric authentication, and comprehensive financial management features.",
        image: "https://via.placeholder.com/400x250/8E44AD/FFFFFF?text=Banking+App",
        tags: ["Banking", "Security", "Mobile Design"],
        details: {
            role: "Lead UI/UX Designer",
            duration: "8 months",
            tools: ["Figma", "Sketch", "InVision"],
            challenges: "Balancing security requirements with user experience while maintaining trust and accessibility.",
            solutions: "Implemented clear security indicators, simplified authentication flows, and created intuitive financial dashboards.",
            link: "#"
        }
    },
    {
        id: 6,
        title: "Restaurant Ordering System",
        description: "A digital menu and ordering system for restaurants, featuring real-time updates, payment processing, and kitchen management integration.",
        image: "https://via.placeholder.com/400x250/E67E22/FFFFFF?text=Restaurant+System",
        tags: ["Restaurant", "Ordering System", "POS Integration"],
        details: {
            role: "UI/UX Designer",
            duration: "4 months",
            tools: ["Figma", "Adobe XD", "Framer"],
            challenges: "Creating an efficient ordering system that works for both customers and restaurant staff.",
            solutions: "Designed separate interfaces for customers and staff, implemented real-time updates, and created intuitive navigation.",
            link: "#"
        }
    }
];

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const projectModal = document.getElementById('project-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contact-form');

// ===== NAVIGATION FUNCTIONALITY =====

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// ===== PROJECTS FUNCTIONALITY =====

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        projectCard.addEventListener('click', () => {
            openProjectModal(project);
        });
        
        projectsGrid.appendChild(projectCard);
    });
}

// Open project modal
function openProjectModal(project) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="modal-project">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin-bottom: 1.5rem;">
            <h2>${project.title}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6;">${project.description}</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Role</h4>
                    <p>${project.details.role}</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Duration</h4>
                    <p>${project.details.duration}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Tools Used</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${project.details.tools.map(tool => `<span class="project-tag">${tool}</span>`).join('')}
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Challenges</h4>
                <p style="color: var(--text-secondary); line-height: 1.6;">${project.details.challenges}</p>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Solutions</h4>
                <p style="color: var(--text-secondary); line-height: 1.6;">${project.details.solutions}</p>
            </div>
            
            ${project.details.link !== '#' ? `<a href="${project.details.link}" class="btn btn-primary" target="_blank">View Project</a>` : ''}
        </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal
function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Modal event listeners
closeModal.addEventListener('click', closeProjectModal);

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'block') {
        closeProjectModal();
    }
});

// ===== CONTACT FORM FUNCTIONALITY =====

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Sending message...', 'info');
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== NOTIFICATION SYSTEM =====

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : type === 'error' ? '#E74C3C' : '#3498DB'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== SCROLL ANIMATIONS =====

// Intersection Observer for scroll animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .certification-item, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== INITIALIZATION =====

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render projects
    renderProjects();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('Portfolio website loaded successfully! 🎨');
    console.log('Customize the projects array in script.js to add your own projects.');
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events
const optimizedScrollHandler = throttle(() => {
    // Navbar scroll effect is handled here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Preload images for better performance
function preloadImages() {
    projects.forEach(project => {
        const img = new Image();
        img.src = project.image;
    });
}

// Call preload after initial load
window.addEventListener('load', preloadImages); 