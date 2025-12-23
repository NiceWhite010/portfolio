// Function to open the video popup
function openVideo(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("fullVideo");
    
    video.src = videoSrc;
    video.muted = false; // Enables sound
    modal.style.display = "block";
    
    video.play().catch(error => {
        console.log("Autoplay with sound requires user interaction first.");
    });
}

// Function to close the video popup
function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("fullVideo");
    
    modal.style.display = "none";
    video.pause();
    video.src = "";
}

// Close popup if user clicks outside the video box
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeVideo();
    }
}