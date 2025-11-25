// script.js — animasi halus: fade-in, tilt card, skill bars, modal portfolio, smooth nav
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // IntersectionObserver for reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Tilt effect on profile card (light)
  const card = document.getElementById('profileCard');
  if(card){
    let bounds, w = card.offsetWidth, h = card.offsetHeight;
    const onMove = (x,y) => {
      const rx = (y - bounds.top - h/2) / (h/2);
      const ry = (x - bounds.left - w/2) / (w/2);
      const tiltX = rx * 6; // degrees
      const tiltY = ry * -6;
      card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
      card.style.boxShadow = `${-tiltY*2}px ${tiltX*2}px 30px rgba(0,0,0,0.55)`;
    };
    const reset = () => { card.style.transform='none'; card.style.boxShadow='none'; };
    card.addEventListener('mousemove', (ev)=>{
      bounds = card.getBoundingClientRect();
      requestAnimationFrame(()=>onMove(ev.clientX, ev.clientY));
    });
    card.addEventListener('mouseleave', reset);
    card.addEventListener('blur', reset);
  }

  // Animate skill bars when visible
  const skillObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const bar = e.target.querySelector('.skill-bar span');
        const pct = e.target.querySelector('.skill-bar')?.dataset?.percent || '0';
        if(bar){
          bar.style.width = pct + '%';
        }
        skillObserver.unobserve(e.target);
      }
    });
  }, {threshold:0.2});
  document.querySelectorAll('.skill').forEach(s=>skillObserver.observe(s));

  // Portfolio modal
  const modal = document.getElementById('pfModal');
  const pfTitle = document.getElementById('pfTitle');
  const pfDesc = document.getElementById('pfDesc');
  const closeBtn = document.querySelector('.modal-close');
  function openModal(title,desc){
    pfTitle.textContent = title;
    pfDesc.textContent = desc;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.portfolio-item').forEach(item=>{
    const title = item.dataset.title || 'Proyek';
    const desc = item.dataset.desc || '';
    item.addEventListener('click', ()=> openModal(title,desc));
    item.addEventListener('keypress', (e)=> { if(e.key === 'Enter') openModal(title,desc); });
  });
  closeBtn.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') closeModal(); });

  // Simple contact form demo behavior
  const cForm = document.getElementById('contactForm');
  if(cForm){
    cForm.addEventListener('submit', ()=>{
      // Demo: show success toast (replace with real submission)
      alert('Terima kasih! Pesan Anda telah dikirim (demo).');
      cForm.reset();
    });
  }

  // Menu toggle for small screens
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if(nav){
        nav.style.display = expanded ? 'none' : 'block';
      }
    });
  }
});