(function(){
  "use strict";

  /* ======= EDIT YOUR CONTENT HERE ======= */
  const CONFIG = {
    email: "aditya.cse24@gmail.com",
    terminalLines: [
      { cmd: "whoami" },
      { out: "Aditya Kumar — Computer Science Student" },
      { cmd: "status" },
      { out: "Available for freelance & full-time roles" },
      { cmd: "cat focus.txt" },
      { out: "Data Structures & Algorithms, Web Development" }
    ],
    skills: [
      { category: "Languages", items: ["JavaScript", "Java", "Python", "SQL", "HTML5", "CSS3"] },
      { category: "Frameworks", items: ["React", "Node.js", "Express", "Next.js"] },
      { category: "Tools & Cloud", items: ["Git", "Docker", "AWS", "PostgreSQL", "Figma", "Linux"] }
    ],
    projects: [
      {
        title: "TravelBuddy",
         desc: `Developed a full-stack AI-powered travel planning platform enabling users to generate itineraries, match with travel buddies,
           manage group trips, and split/settle expenses.`,
        tags: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
        live: "https://travel-buddy-drab-sigma.vercel.app/", code: "https://github.com/adityakumar-cs24/travelbuddy"
      },
      
      {
        title: "Amazon Clone",
        desc: "Responsive Amazon landing page using HTML, CSS, and JavaScript with a focus on UI/UX design.",
        tags: ["HTML", "CSS", "JavaScript"],
        live: "#", code: "#"
      },
      {
        title: "Snake Game",
        desc: "Python Pygame implementation with score tracking.",
        tags: ["Python", "Pygame"],
        live: "#", code: "#"
      }
    ],
    achievements: [
      { year: "2026", title: " Competitive Programming", desc: "Solved 700+ DSA problems across coding platforms with a maximum LeetCode Contest Rating of 1590." },
      { year: "2026", title: "LeetCode Contest", desc: "Achieved Global Rank 1601 in LeetCode Weekly Contest 505 among 35,000+ participants." },
      { year: "2026", title: "Technical Events", desc: "Participated in the Google Big Code Challenge 2026 and multiple college hackathons, collaborating to build software solutions under strict deadlines." },
    ],
    socials: [
      { label: "GitHub", handle: "@adityakumar-cs24", href: "https://github.com/adityakumar-cs24" },
      { label: "LinkedIn", handle: "in/Aditya Kumar", href: "https://www.linkedin.com/in/aditya-kumar-6971a831b/" },
      { label: "Email", handle: "aditya.cse24@gmail.com", href: "mailto:aditya.cse24@gmail.com" }
    ]
  };
  // Keep the Email row in sync with CONFIG.email above.
  CONFIG.socials[2].handle = CONFIG.email;
  CONFIG.socials[2].href = "mailto:" + CONFIG.email;

  /* ---- FIX: helper — is this an external (http/https) link? ---- */
  function isExternal(href){
    return /^https?:\/\//i.test(href);
  }
  /* ---- FIX: helper — build safe target/rel attrs for external links ---- */
  function externalAttrs(href){
    return isExternal(href) ? 'target="_blank" rel="noopener noreferrer"' : '';
  }

  /* ======= RENDER: SKILLS ======= */
  const skillsGrid = document.getElementById('skillsGrid');
  CONFIG.skills.forEach(group => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<h3>// ${group.category}</h3><div class="chip-row">${
      group.items.map(i => `<span class="chip">${i}</span>`).join('')
    }</div>`;
    skillsGrid.appendChild(card);
  });

  /* ======= RENDER: PROJECTS ======= */
  const projectsGrid = document.getElementById('projectsGrid');
  CONFIG.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    /* ---- FIX: placeholder "#" links are now shown as disabled "Coming soon"
       instead of live anchors that jump the page to the top ---- */
    const liveLink = p.live && p.live !== '#'
      ? `<a href="${p.live}" ${externalAttrs(p.live)}>Live demo →</a>`
      : `<a class="is-disabled" aria-disabled="true">Live demo (soon)</a>`;
    const codeLink = p.code && p.code !== '#'
      ? `<a href="${p.code}" ${externalAttrs(p.code)}>Source code →</a>`
      : `<a class="is-disabled" aria-disabled="true">Source (soon)</a>`;
    card.innerHTML = `
      <div class="win-bar"><span></span><span></span><span></span></div>
      <div class="body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="chip-row">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${liveLink}
          ${codeLink}
        </div>
      </div>`;
    projectsGrid.appendChild(card);
  });

  /* ======= RENDER: TIMELINE ======= */
  const timeline = document.getElementById('timeline');
  CONFIG.achievements.forEach(a => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `<div class="tl-year">${a.year}</div><h3>${a.title}</h3><p>${a.desc}</p>`;
    timeline.appendChild(item);
  });

  /* ======= RENDER: SOCIALS ======= */
  const socialList = document.getElementById('socialList');
  CONFIG.socials.forEach(s => {
    const a = document.createElement('a');
    a.href = s.href;
    /* ---- FIX: external social links now open in a new tab safely ---- */
    if(isExternal(s.href)){
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.innerHTML = `<span>${s.label}</span><small>${s.handle}</small>`;
    socialList.appendChild(a);
  });

  /* ======= MOBILE NAV ======= */
  const burger = document.getElementById('burgerBtn');
  const panel = document.getElementById('mobilePanel');
  burger.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  }));

  /* ======= THEME TOGGLE ======= */
  const themeBtn = document.getElementById('themeToggle');
  let theme = 'dark';
  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'dark' ? '☾ dark' : '☀ light';
  });

  /* ======= ACTIVE NAV LINK ON SCROLL ======= */
  const sections = ['home','about','skills','work','achievements','contact'];
  const navAnchors = document.querySelectorAll('nav.links a');
  const sbSection = document.getElementById('sbSection');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {  
      if(entry.isIntersecting){
        const id = entry.target.id;
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        sbSection.textContent = id;
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(el) observer.observe(el);
  });

  /* ======= SCROLL PROGRESS + CLOCK IN STATUS BAR ======= */
  const sbScroll = document.getElementById('sbScroll');
  function updateScroll(){
    const h = document.documentElement;
    const pct = Math.round((h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100);
    sbScroll.textContent = (isFinite(pct) ? pct : 0) + '% scrolled';
  }
  document.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  const sbClock = document.getElementById('sbClock');
  function updateClock(){
    const d = new Date();
    sbClock.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  updateClock();
  setInterval(updateClock, 1000 * 30);

  document.getElementById('sbTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ======= HERO TERMINAL TYPE EFFECT ======= */
  const termBody = document.getElementById('termBody');
  let lineIndex = 0, charIndex = 0;
  function typeNextChar(){
    if(lineIndex >= CONFIG.terminalLines.length){
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      termBody.appendChild(cursor);
      return;
    }
    const item = CONFIG.terminalLines[lineIndex];
    const text = item.cmd || item.out;
    let row = termBody.lastElementChild;
    if(charIndex === 0){
      row = document.createElement('div');
      row.className = 'line';
      row.innerHTML = item.cmd
        ? `<span class="prompt">$</span><span class="cmd"></span>`
        : `<span class="prompt"> </span><span class="out"></span>`;
      termBody.appendChild(row);
    }
    const target = row.querySelector(item.cmd ? '.cmd' : '.out');
    charIndex++;
    target.textContent = text.slice(0, charIndex);
    if(charIndex >= text.length){
      lineIndex++; charIndex = 0;
      setTimeout(typeNextChar, item.cmd ? 260 : 420);
    } else {
      setTimeout(typeNextChar, item.cmd ? 38 : 16);
    }
  }
  setTimeout(typeNextChar, 500);

  /* ======= CONTACT FORM ======= */
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!name || !email || !message){
      formMsg.style.color = '#E8756B';
      formMsg.textContent = 'Please fill in every field before sending.';
      return;
    }
    if(!emailOk){
      formMsg.style.color = '#E8756B';
      formMsg.textContent = 'That email address doesn\'t look right.';
      return;
    }

    // No backend attached — opens the visitor's email client with the message pre-filled.
    // Swap this block for a service like Formspree or EmailJS to submit in-page instead.
    const subject = encodeURIComponent('Portfolio inquiry from ' + name);
    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

    formMsg.style.color = 'var(--accent-teal)';
    formMsg.textContent = 'Opening your email client…';
    form.reset();
  });

})();