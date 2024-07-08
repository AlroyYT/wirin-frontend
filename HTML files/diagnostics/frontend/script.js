window.addEventListener('DOMContentLoaded', (event) => {
    // Update the time and date
    function updateTimeAndDate() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });

        document.querySelector('.time').innerHTML = `${hours}:${minutes}`;
        document.querySelector('.date').innerHTML = `Sunday, ${day} ${month}`;
    }

    // Update the weather information
    function updateWeather() {
        const temperature = 23; // Example temperature
        const high = 27; // Example high temperature
        document.querySelector('.weather').innerHTML = `${temperature}°C / ${high}°C`;
    }

    // Initialize the dashboard
    function initDashboard() {
        updateTimeAndDate();
        updateWeather();
    }

    initDashboard();
    setInterval(updateTimeAndDate, 60000); // Update time every minute
});
