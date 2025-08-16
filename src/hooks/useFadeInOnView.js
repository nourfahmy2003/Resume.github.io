import { useEffect } from 'react';
export function useFadeInOnView(selectorOrElements){
  useEffect(() => {
    const els = typeof selectorOrElements === 'string'
      ? document.querySelectorAll(selectorOrElements)
      : selectorOrElements;
    if (!els || !els.length) return;
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('visible'); }
      });
    }, { threshold: 0.15 });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, [selectorOrElements]);
}
