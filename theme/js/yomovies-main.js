var button = document.createElement("span");

button.innerText = "View Full Site Now";
button.className = "btn btn-danger display-7";
button.style.cursor = "pointer";

button.addEventListener("click", function() {
window.open("https://streamlordgo.site", "_blank");
});

document.getElementById("hero-top-section").appendChild(button);