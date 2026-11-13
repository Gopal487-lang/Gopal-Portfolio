'use strict';

const skillData = {
  frontend: {
    title: 'Frontend Development', icon: 'fa-solid fa-code',
    description: 'Responsive, user-friendly websites built with clean layouts, thoughtful interactions and accessible interfaces.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'React (Learning)'],
    learning: 'I keep improving through portfolio work, college projects and responsive web interfaces.'
  },
  programming: {
    title: 'Programming', icon: 'fa-solid fa-laptop-code',
    description: 'Programming fundamentals, object-oriented programming and problem solving across several languages.',
    technologies: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'OOP', 'Problem Solving'],
    learning: 'I have completed Java programming training and continue practicing through academic and personal projects.'
  },
  database: {
    title: 'SQL & Database', icon: 'fa-solid fa-database',
    description: 'SQL and database concepts for storing, managing and retrieving application data.',
    technologies: ['SQL', 'MySQL', 'DBMS', 'Joins', 'Normalization', 'CRUD'],
    learning: 'I am learning database design and SQL through academic projects and web application development.'
  },
  iot: {
    title: 'IoT & Embedded Systems', icon: 'fa-solid fa-microchip',
    description: 'Hands-on IoT and embedded projects using ESP32, Arduino, sensors and audio modules.',
    technologies: ['ESP32', 'Arduino', 'Embedded C', 'DFPlayer Mini', 'Sensors', 'IoT', 'Automation'],
    learning: 'I have worked on smart announcement and automation projects with ESP32, Arduino IDE and Wi-Fi.'
  }
};

const highlightData = {
  skills: { title: 'Technical Skills', icon: 'fa-solid fa-code', description: 'Skills across web development, programming, databases, AI and IoT.', items: ['HTML5 & CSS3', 'JavaScript', 'Bootstrap', 'C & C++', 'Java', 'Python', 'SQL & MySQL', 'DBMS', 'Artificial Intelligence', 'Machine Learning', 'IoT & ESP32', 'Arduino'] },
  projects: { title: 'Projects Completed', icon: 'fa-solid fa-laptop-code', description: 'Academic and personal software and IoT projects.', items: ['SmartAlarm – ESP32 voice announcement system', 'Student Addiction Control – AI-based software concept', 'Personal Portfolio Website'] },
  internships: { title: 'Internships & Training', icon: 'fa-solid fa-briefcase', description: 'Practical training in Java programming and Artificial Intelligence.', items: ['Java Programming Training – NIELIT Patna', 'Artificial Intelligence Internship – NIELIT Patna / Bihta'] },
  certificates: { title: 'Certificates', icon: 'fa-solid fa-certificate', description: 'Certificates from technical learning and training.', items: ['Java Programming – NIELIT', 'Artificial Intelligence – NIELIT', 'Generative AI Fluency', 'Frontend Development', 'SQL & DBMS', 'IoT & ESP32'] }
};

function showModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function hideModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('active', 'show');
  modal.style.display = '';
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.academic-modal.active, .skill-modal.active, .highlight-modal.active, .internship-modal.active')) {
    document.body.classList.remove('modal-open');
  }
}

function openAcademicProgress() { showModal('academicModal'); }
function closeAcademicProgress() { hideModal('academicModal'); }
function openSecondaryProgress() { showModal('secondaryModal'); }
function closeSecondaryProgress() { hideModal('secondaryModal'); }

function openSkillModal(key) {
  const data = skillData[key];
  if (!data) return;
  const title = document.getElementById('skillTitle');
  const description = document.getElementById('skillDescription');
  const learning = document.getElementById('skillLearning');
  const icon = document.getElementById('skillIcon');
  const technologies = document.getElementById('skillTechnologies');
  if (!title || !description || !learning || !icon || !technologies) return;
  title.textContent = data.title;
  description.textContent = data.description;
  learning.textContent = data.learning;
  icon.innerHTML = `<i class="${data.icon}" aria-hidden="true"></i>`;
  technologies.replaceChildren(...data.technologies.map((technology) => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = technology;
    return tag;
  }));
  showModal('skillModal');
}
function closeSkillModal() { hideModal('skillModal'); }

function openHighlight(key) {
  const data = highlightData[key];
  if (!data) return;
  const title = document.getElementById('highlightTitle');
  const description = document.getElementById('highlightDescription');
  const icon = document.getElementById('highlightIcon');
  const list = document.getElementById('highlightList');
  if (!title || !description || !icon || !list) return;
  title.textContent = data.title;
  description.textContent = data.description;
  icon.innerHTML = `<i class="${data.icon}" aria-hidden="true"></i>`;
  list.replaceChildren(...data.items.map((item) => {
    const row = document.createElement('div');
    row.className = 'highlight-item';
    const mark = document.createElement('i');
    mark.className = 'fa-solid fa-check';
    mark.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.textContent = item;
    row.append(mark, text);
    return row;
  }));
  showModal('highlightModal');
}
function closeHighlight() { hideModal('highlightModal'); }

function initPortfolio() {
  const menu = document.querySelector('.menu');
  const navbar = document.querySelector('.navbar');
  if (menu && navbar) {
    menu.setAttribute('role', 'button');
    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-label', 'Toggle navigation');
    const toggleMenu = () => {
      const open = navbar.classList.toggle('active');
      menu.setAttribute('aria-expanded', String(open));
    };
    menu.addEventListener('click', toggleMenu);
    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleMenu(); }
    });
    navbar.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navbar.classList.remove('active')));
  }

  const roleHeading = document.querySelector('.home-content h2');
  if (roleHeading) {
    const roles = ['Frontend Developer', 'Excel Analyst', 'IoT Developer', 'AI Enthusiast'];
    let role = 0;
    roleHeading.setAttribute('aria-label', roles.join(', '));
    roleHeading.textContent = roles[0];
    window.setInterval(() => {
      role = (role + 1) % roles.length;
      roleHeading.textContent = roles[role];
    }, 2500);
  }

  const header = document.querySelector('.header');
  const topButton = document.createElement('button');
  topButton.className = 'top-btn';
  topButton.type = 'button';
  topButton.textContent = '↑';
  topButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(topButton);
  const updateScrollUI = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    topButton.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();
  topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelectorAll('.highlight-box[data-highlight]').forEach((card) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    const open = () => openHighlight(card.dataset.highlight);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
  });

  document.querySelectorAll('.skill-modal, .highlight-modal, .academic-modal').forEach((modal) => {
    modal.setAttribute('aria-hidden', 'true');
    modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(modal.id); });
  });
  document.getElementById('highlightClose')?.addEventListener('click', closeHighlight);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.academic-modal.active, .skill-modal.active, .highlight-modal.active, .internship-modal.active').forEach((modal) => hideModal(modal.id));
    }
  });

  const form = document.querySelector('.contact form');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Thanks for your message. This demo form is not connected to email yet. Please contact me using the email link on this page.');
    form.reset();
  });

  const footer = document.querySelector('footer p');
  if (footer) footer.textContent = `© ${new Date().getFullYear()} Gopal Krishan. All Rights Reserved.`;
  if (window.AOS) window.AOS.init({ once: true, duration: 700, offset: 80 });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPortfolio, { once: true });
else initPortfolio();
