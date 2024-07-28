function updateTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('currentTime').textContent = timeString;
}

function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();
