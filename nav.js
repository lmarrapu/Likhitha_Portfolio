// nav.js

// Function to load header
function loadHeader() {
    const headerHTML = `
        <header class="header">
            <div class="logo">PORTFOLIO</div>
            <div class="header-icons">
                <a href="https://www.linkedin.com/in/likhitha-marrapu-9964001b4/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/lmarrapu" target="_blank"><i class="fab fa-github"></i></a>
                <a href="mailto:likhithamarrapu811@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="https://drive.google.com/file/d/1JSbreYPkKn29tgpuLQ-fu6L-lCuISZjw/view?usp=sharing" class="download-btn" target="_blank"><i class="fas fa-download"></i> Resume</a>
            </div>
        </header>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', headerHTML);
}

// Function to load sidebar
function loadSidebar() {
    const sidebarHTML = `
        <nav class="sidebar">
                        
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

// Load header, sidebar, and footer when the page loads
window.onload = function() {
    loadHeader();
    loadSidebar();
    loadFooter();
};