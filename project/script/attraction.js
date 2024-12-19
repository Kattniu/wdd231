const hamburger = document.querySelector('#myButton');
const navElemeent = document.querySelector('#animateme');

hamburger.addEventListener('click', () => {
    navElemeent.classList.toggle('open');
    hamburger.classList.toggle('open');
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const url = 'data/attraction.json'; // Ruta al archivo JSON
const display = document.querySelector("#tarjetas"); // Contenedor para las tarjetas de lugares
const museosContainer = document.querySelector("#museos-cards"); // Corrige aquí: Contenedor para los museos

// Función para obtener datos del archivo JSON
async function getAttractionData(url) {
    try {
        const response = await fetch(url); // Fetch para obtener el JSON
        const data = await response.json(); // Convertir la respuesta a JSON

        displayAttractions(data.lugares); // Mostrar los lugares
        displayMuseos(data.museos); // Mostrar los museos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar los lugares en el DOM
const displayAttractions = (lugares) => {
    display.innerHTML = ''; // Limpiar el contenido actual
    lugares.forEach(lugar => {
        // Crear los elementos necesarios para la tarjeta
        let card = document.createElement("section");
        card.classList.add("cardClass");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let image = document.createElement("img");
        let address = document.createElement("p");

        // Asignar los valores del JSON a los elementos
        title.textContent = lugar.name;
        description.textContent = lugar.description;
        image.setAttribute("src", lugar.imageUrl);
        image.setAttribute("alt", `Imagen de ${lugar.name}`);
        image.setAttribute("loading", "lazy");
        address.textContent = `${lugar.address}`;
        // Agregar los elementos a la tarjeta
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(address);
        // Agregar la tarjeta al contenedor
        display.appendChild(card);
    });
};


// Función para mostrar los museos en el DOM
const displayMuseos = (museos) => {
    museosContainer.innerHTML = ''; // Limpiar el contenido actual

    museos.forEach(museo => {
        // Crear los elementos necesarios para la tarjeta
        let card = document.createElement("section");
        card.classList.add("card-Class");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        // Asignar los valores del JSON a los elementos
        title.textContent = museo.name;
        description.textContent = museo.description;
        image.setAttribute("src", museo.imageUrl);
        image.setAttribute("alt", `Imagen de ${museo.name}`);
        image.setAttribute("loading", "lazy");
        website.setAttribute("href", museo.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";
        address.textContent = `${museo.address}`;
        phone.textContent = `${museo.phone}`;

        // Agregar los elementos a la tarjeta
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(website);
        card.appendChild(address);
        card.appendChild(phone);
        // Agregar la tarjeta al contenedor de museos
        museosContainer.appendChild(card);
    });
};
// Cambiar entre vistas de cuadrícula y lista
document.addEventListener('DOMContentLoaded', () => {
    const gridButton = document.querySelector("#grid-id");
    const listButton = document.querySelector("#list-id");

    gridButton.addEventListener("click", () => {
        display.classList.add("migrid");
        display.classList.remove("milist");
    });
    listButton.addEventListener("click", () => {
        display.classList.add("milist");
        display.classList.remove("migrid");
    });
    // Llamar a la función para cargar los datos al cargar la página
    getAttractionData(url);
});
