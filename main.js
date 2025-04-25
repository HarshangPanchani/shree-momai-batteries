// Preloader
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Handle preloader with smooth transition
    const preloader = document.getElementById('preloader');
    const batteryText = document.querySelector('.battery-text');
    const loadingTexts = ['Loading', 'Charging', 'Almost Ready', 'Starting Up'];
    let textIndex = 0;

    if (preloader) {
        // Animate loading text
        const animateText = () => {
            batteryText.textContent = loadingTexts[textIndex] + '...';
            textIndex = (textIndex + 1) % loadingTexts.length;
        };

        // Change text every 1.5 seconds
        const textInterval = setInterval(animateText, 1500);

        // Add a small delay for the animation to be visible
        setTimeout(() => {
            clearInterval(textInterval);
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 3000); // Increased delay to 3 seconds to show the animation
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Battery scroll indicator
const batteryScrollbar = document.querySelector('.battery-scrollbar-thumb');
const batteryLevels = document.querySelectorAll('.battery-level');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (batteryScrollbar) {
        batteryScrollbar.style.top = `${scrollPercentage}%`;
    }

    // Update battery levels
    batteryLevels.forEach((level, index) => {
        const levelThreshold = (index + 1) * 25;
        if (scrollPercentage >= levelThreshold) {
            level.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        } else {
            level.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
    });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add floating battery animations
function createFloatingBatteries() {
    const animatedBg = document.querySelector('.animated-bg');
    if (!animatedBg) return;

    for (let i = 0; i < 10; i++) {
        const battery = document.createElement('div');
        battery.className = 'battery';
        battery.style.left = `${Math.random() * 100}%`;
        battery.style.animationDuration = `${15 + Math.random() * 10}s`;
        battery.style.animationDelay = `${Math.random() * 5}s`;
        animatedBg.appendChild(battery);
    }
}

// Initialize floating batteries
createFloatingBatteries();

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Add smooth scrolling for navigation links
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

// Add battery charge animation for hero section
function initHeroBatteryAnimation() {
    const batteryCharge = document.querySelector('.battery-3d .battery-charge');
    if (batteryCharge) {
        batteryCharge.style.animation = 'charge3d 8s infinite ease-in-out';
    }
}

// Initialize hero battery animation
initHeroBatteryAnimation();

// Add electricity effect
function createSparks() {
    const electricityEffect = document.querySelector('.electricity-effect');
    if (!electricityEffect) return;

    for (let i = 0; i < 5; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.left = `${Math.random() * 100}%`;
        spark.style.top = `${Math.random() * 100}%`;
        spark.style.animationDelay = `${Math.random() * 2}s`;
        electricityEffect.appendChild(spark);
    }
}

// Initialize sparks
createSparks();

// Initialize the battery scrollbar
function initializeBatteryScrollbar() {
    // Check if scrollbar already exists in the HTML
    const existingScrollbar = document.querySelector('.battery-scrollbar-container');
    
    if (!existingScrollbar) {
        // If not, create it dynamically
        createBatteryScrollbar();
    } else {
        // If it exists, just update it
        updateBatteryScrollbar();
    }
    
    // Add glow effect to the thumb
    const scrollbarThumb = document.querySelector('.battery-scrollbar-thumb');
    if (scrollbarThumb) {
        setInterval(() => {
            scrollbarThumb.style.boxShadow = `0 0 ${5 + Math.random() * 10}px rgba(${Math.random() > 0.5 ? '226, 27, 35' : '10, 142, 56'}, 0.7)`;
        }, 1000);
    }
}

// Create battery-shaped scrollbar
function createBatteryScrollbar() {
    // Create the scrollbar container
    const scrollbarContainer = document.createElement('div');
    scrollbarContainer.className = 'battery-scrollbar-container';
    
    // Create the track
    const scrollbarTrack = document.createElement('div');
    scrollbarTrack.className = 'battery-scrollbar-track';
    
    // Create the thumb (the moving part)
    const scrollbarThumb = document.createElement('div');
    scrollbarThumb.className = 'battery-scrollbar-thumb';
    
    // Add battery level indicator lines
    const batteryLevels = document.createElement('div');
    batteryLevels.className = 'battery-indicator-levels';
    
    // Add 4 indicator lines
    for (let i = 0; i < 4; i++) {
        const level = document.createElement('div');
        level.className = 'battery-level';
        batteryLevels.appendChild(level);
    }
    
    // Assemble the scrollbar
    scrollbarTrack.appendChild(batteryLevels);
    scrollbarTrack.appendChild(scrollbarThumb);
    scrollbarContainer.appendChild(scrollbarTrack);
    document.body.appendChild(scrollbarContainer);
    
    // Update the scrollbar position
    updateBatteryScrollbar();
}

// Update the battery scrollbar position based on scroll
function updateBatteryScrollbar() {
    const scrollbarThumb = document.querySelector('.battery-scrollbar-thumb');
    const scrollbarTrack = document.querySelector('.battery-scrollbar-track');
    
    if (!scrollbarThumb || !scrollbarTrack) return;
    
    // Initial update
    updateScrollbarPosition();
    
    // Throttle scroll event for better performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateScrollbarPosition();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', updateScrollbarPosition);
    
    function updateScrollbarPosition() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const thumbHeight = Math.max(50, (winHeight / docHeight) * winHeight);
        
        // Update thumb height
        scrollbarThumb.style.height = thumbHeight + 'px';
        
        // Update thumb position
        const trackHeight = scrollbarTrack.offsetHeight;
        const maxPosition = trackHeight - thumbHeight;
        const thumbPosition = Math.min(maxPosition, Math.max(0, maxPosition * scrollPercent));
        scrollbarThumb.style.top = thumbPosition + 'px';
        
        // Add pulse effect on scroll
        scrollbarThumb.style.transform = 'scale(1.05)';
        setTimeout(() => {
            if (scrollbarThumb) {
                scrollbarThumb.style.transform = 'scale(1)';
            }
        }, 100);
        
        // Update thumb color based on scroll position
        const redValue = Math.max(10, Math.round(226 - (scrollPercent * 216)));
        const greenValue = Math.min(200, Math.round(142 + (scrollPercent * 58)));
        scrollbarThumb.style.background = `linear-gradient(to bottom, 
            rgb(${redValue}, 27, 35), 
            rgb(10, ${greenValue}, 56))`;
    }
}

// Create additional animated batteries for the background
function createBatteries() {
    const animatedBg = document.querySelector('.animated-bg');
    
    // Add 15 more random batteries
    for (let i = 0; i < 15; i++) {
        const battery = document.createElement('div');
        battery.className = 'battery';
        
        // Random positioning and timing
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 15;
        
        battery.style.left = `${left}%`;
        battery.style.animationDuration = `${duration}s`;
        battery.style.animationDelay = `${delay}s`;
        
        // Random size for variety
        const size = 0.6 + Math.random() * 0.8; // between 0.6 and 1.4
        battery.style.transform = `scale(${size})`;
        
        animatedBg.appendChild(battery);
    }
}

// Add battery animation containers to each section
function addSectionBatteries() {
    const sections = document.querySelectorAll('.hero-section, .about-section, .brands-section, .services-section, .contact-section');
    
    sections.forEach(section => {
        // Add dark overlay
        const overlay = document.createElement('div');
        overlay.className = 'section-overlay';
        
        // Add battery charging animation
        const battery = document.createElement('div');
        battery.className = 'section-battery';
        
        const charge = document.createElement('div');
        charge.className = 'charge';
        
        battery.appendChild(charge);
        
        // Add battery floating animations
        const animContainer = document.createElement('div');
        animContainer.className = 'battery-animation-container';
        
        // Add random floating batteries
        for (let i = 0; i < 8; i++) {
            const batteryFloat = document.createElement('div');
            batteryFloat.className = 'battery-icon-float';
            
            // Random positioning and animation
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 20 + Math.random() * 20;
            
            batteryFloat.style.left = `${left}%`;
            batteryFloat.style.animationDelay = `${delay}s`;
            batteryFloat.style.animationDuration = `${duration}s`;
            
            // Random color
            const isRed = Math.random() > 0.5;
            if (isRed) {
                batteryFloat.style.backgroundColor = `rgba(226, 27, 35, ${0.05 + Math.random() * 0.05})`;
                batteryFloat.style.borderColor = `rgba(226, 27, 35, ${0.1 + Math.random() * 0.1})`;
            } else {
                batteryFloat.style.backgroundColor = `rgba(10, 142, 56, ${0.05 + Math.random() * 0.05})`;
                batteryFloat.style.borderColor = `rgba(10, 142, 56, ${0.1 + Math.random() * 0.1})`;
            }
            
            animContainer.appendChild(batteryFloat);
        }
        
        section.appendChild(overlay);
        section.appendChild(battery);
        section.appendChild(animContainer);
    });
}

// Handle scroll indicator
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const batteryLevel = document.querySelector('.battery-indicator .battery-level');
    
    // Show the indicator after a short delay
    setTimeout(() => {
        scrollIndicator.classList.add('visible');
    }, 2000);
    
    // Update the battery level based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        batteryLevel.style.height = `${scrollPercentage}%`;
        
        // Hide the indicator when near bottom of page
        if (scrollPercentage > 80) {
            scrollIndicator.classList.remove('visible');
        } else if (scrollPercentage > 5) {
            scrollIndicator.classList.add('visible');
        } else {
            scrollIndicator.classList.remove('visible');
        }
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createBatteries();
    addSectionBatteries();
    handleScrollIndicator();
    enhanceSectionBackgrounds();
});

// Active navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// Newsletter form submission
const footerForm = document.querySelector('.footer-newsletter form');
if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // If validation passes, you would typically send the form data to a server
        // For demo purposes, we'll just show a success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Battery animation on scroll (additional cool effect)
window.addEventListener('scroll', function() {
    const batterySection = document.querySelector('.hero-section');
    if (!batterySection) return;
    
    const batteryChargeElement = document.querySelector('.battery-icon .battery-charge');
    if (!batteryChargeElement) return;
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Adjust the battery charge level based on scroll percentage
    batteryChargeElement.style.width = scrollPercentage + '%';
    
    // Change the gradient colors based on scroll position
    const redValue = Math.max(226 - scrollPercentage, 10);
    const greenValue = Math.min(142 + scrollPercentage, 200);
    batteryChargeElement.style.background = `linear-gradient(to right, 
        rgb(${redValue}, 27, 35), 
        rgb(10, ${greenValue}, 56))`;
        
    // Add parallax effect to floating batteries
    const floatingBatteries = document.querySelectorAll('.battery-icon-float');
    floatingBatteries.forEach(battery => {
        const speed = parseFloat(battery.getAttribute('data-speed') || 0.1);
        const yPos = -scrollPercentage * speed;
        battery.style.transform = `translateY(${yPos}px) rotate(${scrollPercentage * 0.5}deg)`;
    });
    
    // Add text visibility enhancement
    const heroTexts = document.querySelectorAll('.hero-section h1, .hero-section p');
    heroTexts.forEach(text => {
        text.style.textShadow = `0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)`;
    });
});

// Add interactive hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    // Alternate between red and green borders
    if (index % 2 === 0) {
        card.style.borderLeft = '3px solid var(--primary-color)';
    } else {
        card.style.borderLeft = '3px solid var(--secondary-color)';
    }
    
    card.addEventListener('mouseenter', function() {
        this.querySelector('.service-icon i').style.transform = 'rotateY(180deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        setTimeout(() => {
            this.querySelector('.service-icon i').style.transform = 'rotateY(0deg)';
        }, 500);
    });
});

// Add pulse effect to brand logos on hover
const brandCards = document.querySelectorAll('.brand-card');
brandCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.brand-logo img').style.animation = 'pulse 1s infinite';
        
        // Highlight with either red or green glow depending on position
        if (index % 2 === 0) {
            this.style.boxShadow = '0 10px 25px rgba(226, 27, 35, 0.2)';
        } else {
            this.style.boxShadow = '0 10px 25px rgba(10, 142, 56, 0.2)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.brand-logo img').style.animation = 'none';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Initialize animation for specific elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to the hero title
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1500);
    }
    
    // Position the 3D battery and 2D battery icon correctly
    positionBatteryAnimations();
    
    // Add interactive mouse movement effect to the 3D battery
    const battery3d = document.querySelector('.battery-3d');
    if (battery3d) {
        document.addEventListener('mousemove', function(e) {
            // Get mouse position relative to viewport
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            // Apply rotation based on mouse position with limited range
            battery3d.style.transform = `rotateX(${15 - mouseY * 20}deg) rotateY(${15 + mouseX * 20}deg)`;
        });
        
        // Add random spark effect
        const sparks = document.querySelectorAll('.spark');
        sparks.forEach(spark => {
            // Create random patterns for each spark
            setInterval(() => {
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                spark.style.left = `${randomX}%`;
                spark.style.top = `${randomY}%`;
                
                // Random color between red and green
                const isRed = Math.random() > 0.5;
                if (isRed) {
                    spark.style.boxShadow = `0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--primary-color)`;
                } else {
                    spark.style.boxShadow = `0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--secondary-color)`;
                }
            }, 3000 + Math.random() * 2000);
        });
        
        // Add subtle floating effect
        let time = 0;
        function floatBattery3d() {
            time += 0.01;
            const floatY = Math.sin(time) * 10;
            const floatX = Math.cos(time * 0.8) * 5;
            
            // Apply floating movement
            battery3d.style.marginTop = `${floatY}px`;
            battery3d.style.marginLeft = `${floatX}px`;
            
            requestAnimationFrame(floatBattery3d);
        }
        
        floatBattery3d();
    }
});

// Function to position the battery animations correctly
function positionBatteryAnimations() {
    const heroAnimation = document.querySelector('.hero-animation');
    const battery3d = document.querySelector('.battery-3d');
    const batteryIcon = document.querySelector('.battery-icon');
    
    if (!heroAnimation || !battery3d || !batteryIcon) return;
    
    // Adjust for screen size
    if (window.innerWidth < 992) {
        // For smaller screens, stack vertically
        battery3d.style.top = '0';
        battery3d.style.right = '50%';
        battery3d.style.transform = 'translateX(50%) rotateX(15deg) rotateY(15deg)';
        
        batteryIcon.style.bottom = '5%';
        batteryIcon.style.left = '50%';
        batteryIcon.style.transform = 'translateX(-50%)';
    } else {
        // For larger screens, position side by side
        battery3d.style.top = '10%';
        battery3d.style.right = '0';
        
        batteryIcon.style.bottom = '20%';
        batteryIcon.style.left = '15%';
    }
    
    // Adjust on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 992) {
            battery3d.style.top = '0';
            battery3d.style.right = '50%';
            battery3d.style.transform = 'translateX(50%) rotateX(15deg) rotateY(15deg)';
            
            batteryIcon.style.bottom = '5%';
            batteryIcon.style.left = '50%';
            batteryIcon.style.transform = 'translateX(-50%)';
        } else {
            battery3d.style.top = '10%';
            battery3d.style.right = '0';
            battery3d.style.transform = 'rotateX(15deg) rotateY(15deg)';
            
            batteryIcon.style.bottom = '20%';
            batteryIcon.style.left = '15%';
            batteryIcon.style.transform = 'none';
        }
    });
}

// Create pulsing effect for contact info items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    item.style.animationDelay = (index * 0.2) + 's';
    item.style.animation = 'fadeInUp 1s forwards';
});

// Make the map container interactive
const mapContainer = document.querySelector('.map-container');
if (mapContainer) {
    mapContainer.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    mapContainer.addEventListener('mouseleave', function() {
        this.style.opacity = '0.9';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
    
    // Set initial styles
    mapContainer.style.opacity = '0.9';
    mapContainer.style.transition = 'all 0.5s ease';
}

// Add floating effect to battery icon
const batteryIcon = document.querySelector('.battery-icon');
if (batteryIcon) {
    function floatAnimation() {
        batteryIcon.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0px)' }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    }
    
    floatAnimation();
}

// Function to enhance section backgrounds
function enhanceSectionBackgrounds() {
    const sections = document.querySelectorAll('.hero-section, .about-section, .brands-section, .services-section, .contact-section');
    
    sections.forEach(section => {
        // Add semi-transparent overlay to improve text readability
        const overlays = section.querySelectorAll('.section-overlay');
        if (overlays.length === 0) {
            const overlay = document.createElement('div');
            overlay.className = 'section-overlay';
            overlay.style.background = 'rgba(0, 0, 0, 0.5)';
            section.appendChild(overlay);
        } else {
            overlays.forEach(overlay => {
                overlay.style.background = 'rgba(0, 0, 0, 0.5)';
            });
        }
        
        // Make sure all text elements are above the overlay
        const textElements = section.querySelectorAll('h1, h2, h3, h4, p, .lead, .btn');
        textElements.forEach(el => {
            el.style.position = 'relative';
            el.style.zIndex = '5';
            el.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.8)';
        });
    });
} 