
document.addEventListener("DOMContentLoaded", () => { //addevenlistener registra un evento
    const allButton = document.querySelector(".filter-buttom button:nth-child(1)");
    const cseButton = document.querySelector(".filter-buttom button:nth-child(2)");
    const wddButton = document.querySelector(".filter-buttom button:nth-child(3)");
    const courses = document.querySelectorAll(".certificates-buttom button");


//Con todos los botones:
allButton.addEventListener("click", () => {
            courses.forEach(course => {
            course.style.display = "inline-block"; // Mostrar todos los cursos
        });
    });

// con los botones de cse:
    cseButton.addEventListener("click", () => {
            courses.forEach(course => {
            if (course.classList.contains("cse")) {
                course.style.display = "inline-block"; // Mostrar solo cursos de CSE
            } else {
                course.style.display = "none"; // Ocultar los otros
            }
        });
    });

// con los botones wdd:
    wddButton.addEventListener("click", () => {
        courses.forEach(course => {
            if (course.classList.contains("wdd")) {
                course.style.display = "inline-block"; // Mostrar solo cursos de WDD
            } else {
                course.style.display = "none"; // Ocultar los otros
            }
        });
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Seleccionamos todos los enlaces en el documento
const links = document.querySelectorAll('a');

// Iterar sobre todos los enlaces y añadir target="_blank" :)
links.forEach(link => {
     link.setAttribute('target', '_blank');
 });
