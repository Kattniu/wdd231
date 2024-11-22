// 1 select HTML elements in the document (los seleccionamos para modificarlos)

const currentTemp = document.querySelector('#current-temp');//Donde vamos a mostrar la temperatura 
const weatherIcon = document.querySelector('#weather-icon');//Donde mostrare un icono del clima
const captionDesc = document.querySelector('figcaption'); //Para mostrar una descripcion(ejm. cielo nublado)

// 2 construyo mi URL de la API

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=e5a516cddfb0278ec648b96bc8a0bdb9'
      //?lat=49.75&lon=6.64(latitud y longitud) son coordenadas , 
      //&units=metric(unidades metricas) Especifica que queremos los datos en el sistema metrico Celsius
      //&appid=(clave de API) es donde coloco mi clave personal


// 3 Define una funcion asincronica para obtener los datos

 //¿Qué hace esta función? La función apiFetch() es responsable de hacer la solicitud a la API 
 //(es decir, de conectarse con el servidor de OpenWeatherMap para obtener los datos) y 
 //de manejar cualquier error que pueda ocurrir.
async function apiFetch() {

    //try...catch: Maneja errores de manera segura.
    try {

      //Esta línea hace la solicitud al servidor de OpenWeatherMap usando la URL que construimos antes.
      // La variable response contiene la respuesta de la API (en formato de texto).  
      const response = await fetch(url); 
      
      if (response.ok) { // Si la respuesta es válida...

        //Esta es una función que pertenece al objeto response retornado por la llamada a fetch(url).
        //Convierte el cuerpo de la respuesta HTTP (el "payload") en un objeto JSON. En otras palabras,
        //toma los datos que el servidor envió en formato JSON (JavaScript Object Notation) y los 
        //transforma en un objeto que JavaScript puede manejar directamente.
        const data = await response.json(); 
        console.log(data); // Muestra los datos en la consola (para inspeccionarlos)
        displayResults(data); //: Llama a la función displayResults() para mostrar los datos de la API en el HTML.
      
        } else { // Si hay un error en la respuesta...

        //Si la respuesta no es válida (por ejemplo, si hubo un error en la solicitud), 
        //se lanza un error y se muestra el mensaje del error en la consola.
        throw Error(await response.text()); 
      }

    //Si hay un error en el bloque try (ya sea por la solicitud o por la conversión de datos),
    // lo atrapamos aquí y lo mostramos en la consola.  
    } catch (error) {
      console.log(error); // Muestra cualquier error en la consola
    }
  }


  //¿Por qué es importante apiFetch()? Esta función es el corazón de la interacción con la API. 
  //Si no tienes esta función, nunca podrías obtener los datos de OpenWeatherMap. 
  //Esencialmente, está comunicándose con el servidor para obtener información.
  apiFetch();


  // 4 la funcion displayResults

  //¿Qué hace esta función? Esta función se encarga de tomar los datos obtenidos de la API 
  //y mostrar esos datos en la página web. Está trabajando directamente con los elementos HTML 
  //que seleccionamos al principio (currentTemp, weatherIcon, captionDesc).
  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Muestra la temperatura
  
    //nos da un código que representa el ícono del clima.
    // Lo usamos para crear una URL que apunte a la imagen adecuada del clima.
    //El @2x es una versión de mayor resolución de la imagen.
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    const desc = data.weather[0].description; // Obtiene la descripción del clima
  

    //Aquí le decimos a la imagen (con id #weather-icon) que use la URL del ícono que creamos.
    weatherIcon.setAttribute('src', iconSrc); 

    //Establece el texto alternativo para la imagen del clima. Esto es útil para accesibilidad 
    //y también si la imagen no se puede cargar.
    weatherIcon.setAttribute('alt', desc);

    //Finalmente, la descripción del clima 
    //(por ejemplo, "Cielo nublado") se coloca en el <figcaption>.
    captionDesc.textContent = desc; 
  }
  
  //¿Por qué es importante displayResults()? Si no usáramos esta función, 
  //los datos obtenidos de la API no se mostrarían en la página web. Es crucial 
  //para actualizar dinámicamente la información de la página con los datos obtenidos de la AP