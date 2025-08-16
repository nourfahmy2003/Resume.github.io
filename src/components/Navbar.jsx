import { useEffect } from 'react';
import './Navbar.css';

export default function Navbar(){
  useEffect(()=>{
    const nav = document.querySelector('.navbar');
    const links = Array.from(document.querySelectorAll('.nav-link'));
    const onScroll = ()=>{
      nav?.classList.toggle('scrolled', window.scrollY > 20);
      const fromTop = window.scrollY + 120;
      links.forEach(l=>{
        const hash = l.getAttribute('href');
        if(!hash || !hash.startsWith('#')) return;
        const sec = document.querySelector(hash);
        if(!sec) return;
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        l.classList.toggle('active', fromTop >= top && fromTop < bottom);
      });
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();

    const btn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const toggle = ()=>{
      const curr = root.getAttribute('data-theme') || 'dark';
      const next = curr === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    };
    btn?.addEventListener('click', toggle);

    return ()=>{
      window.removeEventListener('scroll', onScroll);
      btn?.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-link active">Home</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#card" className="nav-link">Contact</a>
      <button id="theme-toggle" aria-label="Toggle theme">🌓</button>
    </nav>
  );
}
