export default {
  mounted(el) {
    const obs = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{
        if (e.isIntersecting) {
          el.style.animationPlayState = 'running'
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    obs.observe(el)
  }
}
