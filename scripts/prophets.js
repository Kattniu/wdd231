//Mis notas para estudiar:
// 1- Obtenemos el URL del JSON
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//2- Encuentramos el elemento HTML con el ID "cards" y lo guardamos en la variable que creamos "cards"
const cards = document.querySelector('#cards');

//3- Declaramos y definimos la funcion getProphetData:
async function getProphetData() {
    const response = await fetch(url); 
     // Espera la respuesta de la solicitud.
     // fetch(url): hace una solicitud HTTP y obtiene los datos del archivo JSON.
    const data = await response.json(); 
    // Convierte la respuesta a JSON.
    // response.json(): convierte los datos(la respuesta) en un objeto de Javascript.
    console.table(data.prophets);
    // Muestra los datos temporalmente en la consola.
    // console.table(): muestra los datos en forma de una tabla. (util para depuracion).
    displayProphets(data.prophets);
     // Llama a la función para mostrar los datos.
     //Pasa los datos de los profetas para construir las tarjetas. 
  }

  //4- Llama a la función principal.
  getProphetData(); 
  //Para que sirve? Obtener los datos JSON, convertir a un onjeto usable,
  //construir las tarjetas con los datos obtenidos y mostrarlos en el HTML.

  //5- Declaramos y definimos la función displayProphets:
  const displayProphets = (prophets) => {
     //La funcion toma un parametro "prophets", que es el array de objetos
     //que contiene los datos de los profetas, osea cada objeto representa un profeta.
    prophets.forEach((prophet) => {
        //forEach: recorre cada objeto del array.

      // Crear elementos para la tarjeta.
      const card = document.createElement('section');
      const fullName = document.createElement('h2');
      const portrait = document.createElement('img');
  
      // Rellenar los elementos con la información del profeta.
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      //imagen: configuramos los atributos con setAttribute
      portrait.setAttribute('src', prophet.imageurl); //src:URL de la imagen
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); //la descripcion de la imagen.
      portrait.setAttribute('loading', 'lazy'); //loading: indica que la imagen se carga de forma diferida osea Lazy. 
      portrait.setAttribute('width', '200'); //width y height :El tamaño de la imagen.
      portrait.setAttribute('height', '300');
  
      // Agregar elementos al contenedor de la tarjeta.
      card.appendChild(fullName); //Insertamos el NOMBRE en la tarjeta.
      card.appendChild(portrait);//Inserta la IMAGEN en la tarjeta. 
  
      // Agregar la tarjeta al contenedor principal.
      cards.appendChild(card); //Inserta la tarjeta completa en el elemento ID "cards". 
    });
  };
  