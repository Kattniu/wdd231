// Obtener la fecha actual
const today = new Date().getTime();

// Recuperar la última visita desde localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Seleccionar el contenedor para el mensaje
const visitMessage = document.getElementById("visit-message");

if (lastVisit) {
    const daysPassed = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
        visitMessage.textContent = "You've come back so soon! Awesome!";
    } else if (daysPassed === 1) {
        visitMessage.textContent ="Your last visit was 1 day ago.";
    } else {
        visitMessage.textContent = `Your last visit was ${daysPassed} days ago.`;
    }
} else {
    visitMessage.textContent ="Welcome! Let us know if you have any questions.";
}

// Guardar la fecha actual como la última visita
localStorage.setItem("lastVisit", today);

document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    const monthYear = document.getElementById("month-year");
    const prevMonth = document.getElementById("prev-month");
    const nextMonth = document.getElementById("next-month");

    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    function renderCalendar(month, year) {
        calendarBody.innerHTML = ""; // Clear previous calendar
        monthYear.textContent = `${months[month]} ${year}`;

        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) { // 6 weeks for calendar grid
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                if (i === 0 && j < firstDay) {
                    cell.textContent = ""; // Empty cells before the first day
                } else if (date > daysInMonth) {
                    break; // No more days in this month
                } else {
                    cell.textContent = date;
                    if (
                        date === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear()
                    ) {
                        cell.classList.add("current-date"); // Highlight today's date
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    prevMonth.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonth.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
