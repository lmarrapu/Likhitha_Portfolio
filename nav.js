// nav.js

// Function to load header
function loadHeader() {
    const headerHTML = `
        <header class="header">
            <div class="logo">PORTFOLIO</div>
            <div class="mobile-menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <div class="header-icons">
                <a href="https://www.linkedin.com/in/likhitha-marrapu-9964001b4/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/lmarrapu" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:likhithamarrapu811@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://drive.google.com/file/d/1-unKWKfur9c7YafcqZ1lOS8irpXpQ_k_/view?usp=sharing" class="download-btn" target="_blank"><i class="fas fa-download"></i> Resume</a>
            </div>
        </header>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
}

// Function to load sidebar
function loadSidebar() {
    const sidebarHTML = `
        <nav class="sidebar">
            <div class="sidebar-close">
                <i class="fas fa-times"></i>
            </div>            
            <ul class="nav-links">
                <li><a href="index.html"><i class="fas fa-home"></i>Home</a></li>
                <li><a href="about.html"><i class="fas fa-user"></i>About</a></li>
                <li><a href="education.html"><i class="fas fa-graduation-cap"></i>Education</a></li>
                <li><a href="experience.html"><i class="fas fa-briefcase"></i>Experience</a></li>
                <li><a href="skills.html"><i class="fas fa-tools"></i>Skills</a></li>
                <li><a href="projects.html"><i class="fas fa-project-diagram"></i>Projects</a></li>
                <li><a href="publication.html"><i class="fas fa-newspaper"></i>Publication</a></li>
                <li><a href="recommendation.html"><i class="fas fa-newspaper"></i>Recommendation</a></li>
            </ul>
        </nav>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Add CSS for mobile menu
    const mobileCSS = `
        <style>
            .mobile-menu-toggle {
                display: none;
                font-size: 1.5rem;
                color: #fff;
                cursor: pointer;
            }
            
            .sidebar-close {
                display: none;
                text-align: right;
                padding: 15px;
                font-size: 1.5rem;
                color: #fff;
                cursor: pointer;
            }
            
            .active {
                background-color: rgba(161, 196, 253, 0.2);
                border-left: 3px solid #a1c4fd;
            }
            
            @media (max-width: 768px) {
                .sidebar {
                    transform: translateX(-250px);
                    transition: transform 0.3s ease;
                    position: fixed;
                    z-index: 1000;
                }
                
                .sidebar.open {
                    transform: translateX(0);
                }
                
                .mobile-menu-toggle {
                    display: block;
                }
                
                .sidebar-close {
                    display: block;
                }
                
                .header-icons {
                    display: none;
                }
                
                .header {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 20px;
                    width: 100%;
                    box-sizing: border-box;
                    margin-left: 0;
                }
                
                .main-content {
                    margin-left: 0;
                    width: 100%;
                }
            }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', mobileCSS);
}

// Function to load footer
function loadFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <p><span class="name-highlight"> ${new Date().getFullYear()} Likhitha Marrapu</span></p>
                <div class="footer-social">
                    <a href="https://www.linkedin.com/in/likhitha-marrapu-9964001b4/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/lmarrapu" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="mailto:likhithamarrapu811@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', footerHTML);
    
    // Add CSS for the footer
    const footerCSS = `
        <style>
            .footer {
                text-align: center;
                padding: 20px;
                background-color: #1a1a1a;
                color: #ffffff;
                margin-left: 250px;
                width: calc(100% - 250px);
                box-sizing: border-box;
            }
            
            .footer-content {
                max-width: 900px;
                margin: 0 auto;
                padding: 1rem;
            }
            
            .name-highlight {
                color: #a1c4fd;
                font-weight: 500;
            }
            
            .footer-social {
                margin-top: 10px;
            }
            
            .footer-social a {
                color: #a1c4fd;
                font-size: 1.2rem;
                margin: 0 10px;
                transition: all 0.3s ease;
            }
            
            .footer-social a:hover {
                color: #c2e9fb;
                transform: translateY(-3px);
            }
            
            @media (max-width: 1200px) {
                .footer {
                    width: calc(100% - 200px);
                    margin-left: 200px;
                }
            }
            
            @media (max-width: 768px) {
                .footer {
                    width: 100%;
                    margin-left: 0;
                }
            }
        </style>
    `;
    document.head.insertAdjacentHTML('beforeend', footerCSS);
}

// Function to set up mobile menu
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar-close');
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });
    
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

// Function to highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.parentElement.classList.add('active');
        }
    });
}

// Load header, sidebar, and footer when the page loads
window.onload = function() {
    loadHeader();
    loadSidebar();
    loadFooter();
    
    // Setup mobile menu and highlight current page
    setupMobileMenu();
    highlightCurrentPage();
};