(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const form = document.querySelector('#quote-form');
  const year = document.querySelector('#year');
  const site = window.SITE_CONFIG;
  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = whatsappUrl;
  });

  const track = (eventName) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName });
  };

  year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-open', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.addEventListener('click', () => track('whatsapp_click'));
  });
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => track('phone_click'));
  });

  const tiktokContainer = document.querySelector('.tiktok-embed-wrap');
  if (tiktokContainer && 'IntersectionObserver' in window) {
    const tiktokObserver = new IntersectionObserver((entries, currentObserver) => {
      if (!entries[0].isIntersecting) return;
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onerror = () => {
        const status = tiktokContainer.querySelector('.embed-loading p');
        if (status) status.textContent = 'No fue posible cargar los videos. Puedes ver los trabajos en TikTok.';
      };
      document.body.appendChild(script);
      currentObserver.disconnect();
    }, { rootMargin: '250px 0px' });
    tiktokObserver.observe(tiktokContainer);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    track('quote_request');
    const data = new FormData(form);
    const nombre = String(data.get('nombre') || '').trim();
    const zona = String(data.get('zona') || '').trim();
    const servicio = String(data.get('servicio') || '').trim();
    const detalles = String(data.get('detalles') || '').trim();

    const message = [
      'Hola, vi la página de Construcciones Arce y deseo solicitar una cotización.',
      '',
      `Nombre: ${nombre}`,
      `Distrito o zona: ${zona}`,
      `Servicio: ${servicio}`,
      `Detalles: ${detalles}`,
      '',
      '¿Podrías indicarme cuándo podemos conversar o coordinar una evaluación?'
    ].join('\n');

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
