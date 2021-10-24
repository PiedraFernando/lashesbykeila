const imgs = document.getElementsByTagName('img')
const cargarImg = (entradas, observador) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }else{
            entrada.target.classList.remove('visible')
        }
    });
}
const observador = new IntersectionObserver(cargarImg, {
    root:null,
    rootMargin: '0px',
    threshold: 0.6,
})
for(const img of imgs){
    observador.observe(img)
}