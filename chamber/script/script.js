
document.getElementById("year").textContent = new Date().getFullYear();
const hamburger = document.querySelector('#menu');
const naviMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	naviMenu.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const url = 'data/members.json'; // Ruta al archivo JSON
const display = document.querySelector("#cards"); // Contenedor donde se mostrarán las tarjetas

// Función para obtener datos de los miembros desde el archivo JSON
async function getMembersData(url) {
    try {
        const response = await fetch(url); // Fetch para obtener el JSON
        const data = await response.json(); // Convertir la respuesta a JSON
        displayMembers(data.members); // Llamar a la función para mostrar los datos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
// Función para mostrar los miembros en el DOM
const displayMembers = (members) => {
    display.innerHTML = ''; // Limpiar el contenido actual

    members.forEach(member => {
        // Crear los elementos necesarios para la tarjeta
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let portrait = document.createElement("img");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let website = document.createElement("a");

        // Asignar los valores del JSON a los elementos
        companyName.textContent = `${member.name}`;
        portrait.setAttribute("src", member.imageUrl);
        portrait.setAttribute("alt", `Logo de ${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "150");
        portrait.setAttribute("height", "150");
        address.textContent = member.address;
        phoneNumber.textContent = member.phone;
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank"); // Abrir el enlace en una nueva pestaña
        website.textContent = "Sitio web";

        // Agregar los elementos a la tarjeta
        card.appendChild(companyName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);

        // Agregar la tarjeta al contenedor
        display.appendChild(card);
    });
};
// Cambiar entre vistas de grid y lista
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

// Llamar a la función para cargar los datos al cargar la página
getMembersData(url);