// Function to update battery percentage (simulated)
function updateBatteryPercentage() {
    // Simulated battery value (you should replace this with real data)
    var batteryValue = Math.floor(Math.random() * (100 - 70 + 1)) + 70; // Random number between 70 and 100

    // Update the battery percentage display
    document.getElementById('battery').textContent = batteryValue;

    // Update the battery bar fill height based on the battery value
    var batteryBarFill = document.getElementById('battery-bar-fill');
    batteryBarFill.style.height = batteryValue + '%';
}

// Function to update current date and time
function updateDateTime() {
    var now = new Date();

    // Update time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    document.getElementById('time').textContent = timeString;

    // Update date
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[now.getDay()];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var dateString = dayOfWeek + ', ' + date + ' ' + month;
    document.getElementById('date').textContent = dateString;
}

// Initial call to update time and battery percentage
updateDateTime();
updateBatteryPercentage();

// Update time and battery percentage every minute (adjust as needed)
setInterval(function() {
    updateDateTime();
    updateBatteryPercentage();
}, 60000); // 60000 milliseconds = 1 minute

// Function to open new page
function openNewPage(url) {
    window.open(url, '_blank');
}
