function updateClock() {

    // Create Date object
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero if needed
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display the time
    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);