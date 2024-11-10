const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});

document.addEventListener("DOMContentLoaded", () => {
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

document.getElementById("lastModified").textContent = document.lastModified;
