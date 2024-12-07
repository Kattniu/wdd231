 // El código dentro de esta función se ejecuta una vez que el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Elementos del modal
    const dialogBox = document.querySelector("#dialogBox");
    const closeButton = document.querySelector("#closeButton");
    const dialogBoxText = dialogBox ? dialogBox.querySelector("div") : null;

    // Botones para abrir el modal
    const openButton1 = document.querySelector("#openButton1");
    const openButton2 = document.querySelector("#openButton2");
    const openButton3 = document.querySelector("#openButton3");
    const openButton4 = document.querySelector("#openButton4");

    // Aseguramos que los botones y el modal existan antes de agregar eventos
    //nos aseguramos de que estos elementos existan antes de intentar
    //asignarles eventos o manipulaciones. Si un elemento no existe, 
    //no intentaremos interactuar con él y evitaremos errores.    
    if (dialogBox && dialogBoxText && closeButton) {
        if (openButton1) {
            openButton1.addEventListener("click", () => {
                dialogBox.showModal();
                dialogBoxText.innerHTML = "Access to networking and events for non-profits at no cost.";
            });
        }
        if (openButton2) {
            openButton2.addEventListener("click", () => {
                dialogBox.showModal();  // Abre el modal
                dialogBoxText.innerHTML = "Includes basic discounts and exclusive webinars.";
            });
        }
        if (openButton3) {
            openButton3.addEventListener("click", () => {
                dialogBox.showModal();
                dialogBoxText.innerHTML = "Additional discounts and priority event access.";
            });
        }
        if (openButton4) {
            openButton4.addEventListener("click", () => {
                dialogBox.showModal();
                dialogBoxText.innerHTML = "All benefits included plus VIP event access and exclusive advertising opportunities.";
            });
        }

        closeButton.addEventListener("click", () => {
            dialogBox.close();  
        });
    }

    // Abre un modal específico (si usas esta funcionalidad en otros lugares)
    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Cierra un modal específico
    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Establece la fecha y hora actual en el campo oculto del formulario
    const timestampInput = document.getElementById('timestamp');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // Obtiene los parámetros de la URL y los muestra en la página
    const params = new URLSearchParams(window.location.search);

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const mobilePhone = document.getElementById('mobilePhone');
    const businessName = document.getElementById('businessName');
    const timestampDisplay = document.getElementById('timestamp');

    if (firstName) firstName.textContent = params.get('first_name') || 'Not provided';
    if (lastName) lastName.textContent = params.get('last_name') || 'Not provided';
    if (email) email.textContent = params.get('email') || 'Not provided';
    if (mobilePhone) mobilePhone.textContent = params.get('mobile_phone') || 'Not provided';
    if (businessName) businessName.textContent = params.get('business_name') || 'Not provided';
    if (timestampDisplay) timestampDisplay.textContent = params.get('timestamp') || 'Not provided';
});
