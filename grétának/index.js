let title = "Szeretlek Kicsim 💕";
let index = 0;

function animateTitle() {
    // Move the index and wrap around if necessary
    document.title = title.slice(index) + " " + title.slice(0, index);
    index = (index + 1) % title.length;
}

// Update the title every 300 milliseconds (adjust as needed)
setInterval(animateTitle, 300);