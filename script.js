function updateTimeAndDate() {
    const now = new Date();
    const hour = now.toLocaleTimeString('en-GB', { hour12: false });
    const date = now.toLocaleDateString('en-GB');

    document.getElementById('hour').textContent = hour;
    document.getElementById('date').textContent = date;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate(); // Initial call to set the time and date immediately
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('.input');
    const inputGroup = document.querySelector('.input-group');

    input.addEventListener('focus', () => {
        inputGroup.classList.add('active');
    });

    input.addEventListener('blur', () => {
        inputGroup.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector('.button--submit');
    const searchInput = document.querySelector('#search');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // Construct the Google search URL
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            // Redirect to the Google search results page
            window.location.href = googleSearchURL;
        }
    });
});
