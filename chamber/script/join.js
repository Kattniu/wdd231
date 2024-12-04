// Abre un modal específico
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

// Cierra un modal específico
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Establece la fecha y hora actual en el campo oculto del formulario
window.onload = function() {
    document.getElementById('timestamp').value = new Date().toISOString();
};
// Obtiene los parámetros de la URL y los muestra en la página
const params = new URLSearchParams(window.location.search);

document.getElementById('firstName').textContent = params.get('first_name');
document.getElementById('lastName').textContent = params.get('last_name');
document.getElementById('email').textContent = params.get('email');
document.getElementById('mobilePhone').textContent = params.get('mobile_phone');
document.getElementById('businessName').textContent = params.get('business_name');
document.getElementById('timestamp').textContent = params.get('timestamp');
