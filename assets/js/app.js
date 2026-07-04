/* ═══════════════════════════════════════════════════════════
   CONNEXT — App Logic
   Data-driven profile card with tabs, ripple effects,
   and smooth animations.
   ═══════════════════════════════════════════════════════════ */

;(function () {
  'use strict';

  // ── SVG Icons ───────────────────────────────────────────
  const ICONS = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    // Generic icons for projects & portfolio
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  };

  // ── Data: Social Media ──────────────────────────────────
  const socialData = [
    {
      title: 'Instagram',
      desc: '@farrelberwyn',
      url: 'https://instagram.com/farrelberwyn',
      icon: 'instagram',
    },
    {
      title: 'LinkedIn',
      desc: 'Farrel Berwyn',
      url: 'https://linkedin.com/in/farrelberwyn',
      icon: 'linkedin',
    },
    {
      title: 'GitHub',
      desc: '@farrelberwyn',
      url: 'https://github.com/farrelberwyn',
      icon: 'github',
    },
    {
      title: 'X (Twitter)',
      desc: '@farrelberwyn',
      url: 'https://x.com/farrelberwyn',
      icon: 'twitter',
    },
    {
      title: 'TikTok',
      desc: '@farrelberwyn',
      url: 'https://tiktok.com/@farrelberwyn',
      icon: 'tiktok',
    },
    {
      title: 'YouTube',
      desc: 'Farrel Berwyn',
      url: 'https://youtube.com/@farrelberwyn',
      icon: 'youtube',
    },
  ];

  // ── Data: Projects ─────────────────────────────────────
  const projectsData = [
    {
      title: 'AI Search Engine',
      desc: 'Intelligent search powered by LLMs',
      url: 'https://example.com/ai-search',
      icon: 'search',
    },
    {
      title: 'Computer Vision Project',
      desc: 'Real-time object detection system',
      url: 'https://example.com/cv-project',
      icon: 'eye',
    },
    {
      title: 'Mobile App',
      desc: 'Cross-platform mobile application',
      url: 'https://example.com/mobile-app',
      icon: 'smartphone',
    },
    {
      title: 'Portfolio Website',
      desc: 'Personal portfolio & showcase',
      url: 'https://example.com/portfolio-website',
      icon: 'globe',
    },
    {
      title: 'Startup Landing Page',
      desc: 'High-converting SaaS landing page',
      url: 'https://example.com/startup-landing',
      icon: 'rocket',
    },
  ];

  // ── Data: Portfolio ─────────────────────────────────────
  const portfolioData = [
    {
      title: 'UI Design',
      desc: 'Interface design & prototyping',
      url: 'https://example.com/ui-design',
      icon: 'palette',
    },
    {
      title: 'Branding',
      desc: 'Visual identity & brand systems',
      url: 'https://example.com/branding',
      icon: 'star',
    },
    {
      title: 'Photography',
      desc: 'Visual storytelling & composition',
      url: 'https://example.com/photography',
      icon: 'camera',
    },
    {
      title: 'Articles',
      desc: 'Tech writing & thought pieces',
      url: 'https://example.com/articles',
      icon: 'fileText',
    },
    {
      title: 'Resume',
      desc: 'Experience & qualifications',
      url: 'https://example.com/resume',
      icon: 'user',
    },
  ];

  // ── Data: Footer Icons ─────────────────────────────────
  const footerData = [
    { label: 'Facebook',  url: 'https://facebook.com/farrelberwyn',    icon: 'facebook' },
    { label: 'X',         url: 'https://x.com/farrelberwyn',           icon: 'twitter' },
    { label: 'Instagram', url: 'https://instagram.com/farrelberwyn',   icon: 'instagram' },
    { label: 'LinkedIn',  url: 'https://linkedin.com/in/farrelberwyn', icon: 'linkedin' },
    { label: 'GitHub',    url: 'https://github.com/farrelberwyn',     icon: 'github' },
    { label: 'Email',     url: 'mailto:hello@farrelberwyn.com',        icon: 'email' },
  ];

  // ── Render Helpers ─────────────────────────────────────
  function renderLinkCard(item, delay) {
    const li = document.createElement('li');
    li.className = 'link-card';
    li.style.animationDelay = `${delay}ms`;

    li.innerHTML = `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${item.title}">
        <span class="link-card-icon" aria-hidden="true">
          ${ICONS[item.icon] || ICONS.globe}
        </span>
        <span class="link-card-content">
          <span class="link-card-title">${item.title}</span>
          ${item.desc ? `<span class="link-card-desc">${item.desc}</span>` : ''}
        </span>
        <span class="link-card-arrow" aria-hidden="true">
          ${ICONS.arrowUpRight}
        </span>
      </a>
    `;

    // Ripple on click
    const anchor = li.querySelector('a');
    anchor.addEventListener('click', createRipple);

    return li;
  }

  function renderList(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    data.forEach((item, i) => {
      container.appendChild(renderLinkCard(item, i * 60));
    });
  }

  function renderFooter() {
    const container = document.getElementById('footer-icons');
    if (!container) return;

    footerData.forEach((item) => {
      const a = document.createElement('a');
      a.className = 'footer-icon';
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', item.label);
      a.innerHTML = ICONS[item.icon] || '';
      container.appendChild(a);
    });
  }

  // ── Ripple Effect ──────────────────────────────────────
  function createRipple(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    target.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }

  // ── Tabs Logic ─────────────────────────────────────────
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const indicator = document.querySelector('.tab-indicator');
    const panels = document.querySelectorAll('.tab-panel');

    const tabDataMap = {
      social: { containerId: 'list-social', data: socialData },
      projects: { containerId: 'list-projects', data: projectsData },
      portfolio: { containerId: 'list-portfolio', data: portfolioData },
    };

    function moveIndicator(btn) {
      const track = btn.parentElement;
      const trackRect = track.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const offsetLeft = btnRect.left - trackRect.left;

      indicator.style.width = `${btnRect.width}px`;
      indicator.style.transform = `translateX(${offsetLeft - 3}px)`;
    }

    function activateTab(tab) {
      const tabName = tab.dataset.tab;

      // Update buttons
      tabBtns.forEach((btn) => {
        const isActive = btn === tab;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
      });

      // Update panels
      panels.forEach((panel) => {
        const isTarget = panel.id === `panel-${tabName}`;
        if (isTarget) {
          panel.removeAttribute('hidden');
          panel.classList.add('active');
          // Re-trigger animation
          panel.style.animation = 'none';
          panel.offsetHeight; // force reflow
          panel.style.animation = '';
        } else {
          panel.setAttribute('hidden', '');
          panel.classList.remove('active');
        }
      });

      // Re-render list to re-trigger stagger animation
      const mapping = tabDataMap[tabName];
      if (mapping) {
        renderList(mapping.containerId, mapping.data);
      }

      moveIndicator(tab);
    }

    // Bind click events
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => activateTab(btn));
    });

    // Keyboard navigation
    const tabList = document.querySelector('[role="tablist"]');
    tabList.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabBtns);
      const current = tabs.indexOf(document.activeElement);
      let next = current;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        next = (current + 1) % tabs.length;
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        next = (current - 1 + tabs.length) % tabs.length;
        e.preventDefault();
      } else if (e.key === 'Home') {
        next = 0;
        e.preventDefault();
      } else if (e.key === 'End') {
        next = tabs.length - 1;
        e.preventDefault();
      }

      if (next !== current) {
        tabs[next].focus();
        activateTab(tabs[next]);
      }
    });

    // Initialize first tab indicator
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
      // Delay to ensure layout is computed
      requestAnimationFrame(() => {
        moveIndicator(activeBtn);
        // Enable transition after initial position is set
        requestAnimationFrame(() => {
          indicator.style.transition = `transform var(--duration-normal) var(--ease-out), width var(--duration-normal) var(--ease-out)`;
        });
      });
    }
  }

  // ── Handle Resize for Indicator ────────────────────────
  function initResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const activeBtn = document.querySelector('.tab-btn.active');
        if (activeBtn) {
          const indicator = document.querySelector('.tab-indicator');
          const track = activeBtn.parentElement;
          const trackRect = track.getBoundingClientRect();
          const btnRect = activeBtn.getBoundingClientRect();
          indicator.style.width = `${btnRect.width}px`;
          indicator.style.transform = `translateX(${btnRect.left - trackRect.left - 3}px)`;
        }
      }, 100);
    });
  }

  // ── Boot ───────────────────────────────────────────────
  function init() {
    renderList('list-social', socialData);
    renderList('list-projects', projectsData);
    renderList('list-portfolio', portfolioData);
    renderFooter();
    initTabs();
    initResizeHandler();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
