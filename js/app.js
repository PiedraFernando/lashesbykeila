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

function openProyect(cityName) {
    var i;
    var x = document.getElementsByClassName("misTrabajos-proyectos");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

    var x = document.getElementsByClassName("folderLi");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("folderSelected")
        console.log(x[i])
    }
    document.getElementById(cityName+"Li").classList.add("folderSelected");

}

function validar(event){
    event.preventDefault(); 
    alert('Se envió tu peticion a revición, te responderemos en breve')
}

setTimeout(() => {
    let loader = document.getElementById('loading')
    loader.style.display = 'none'
}, 8000);