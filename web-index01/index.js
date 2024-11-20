/* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const offset = 30; // Ajusta el desplazamiento en píxeles
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
}); */
 
// Obtén el elemento de menú
const menu = document.getElementById("encabezado_pages");
const div_offset = document.getElementById("video_encabezado");

// Posición original del menú desde la parte superior de la página
const menuOffset = menu.offsetTop;
const divGrandeBottom = (div_offset.offsetTop + div_offset.offsetHeight)/1.5;

// Escucha el evento de desplazamiento
window.addEventListener("scroll", () => {
    if (window.scrollY > divGrandeBottom) {
        // Cuando pasas el menú, agrega la clase que lo hace fijo
        menu.classList.add("encabezado_pages_fijo");
    } else {
        // Si vuelves hacia arriba, remueve la clase
        menu.classList.remove("encabezado_pages_fijo"); 
        /* setTimeout(() => {
            menu.style.visibility = 'hidden'; // Ocultar el menú después de que la transición termine
        }, 500); */ 
    }
}); 
