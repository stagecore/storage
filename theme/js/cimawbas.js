var button = document.createElement("span");

button.innerText = "اضغط هنا للذهاب للصفحة الرئيسية";
button.className = "btn btn-danger display-7";
button.style.cursor = "pointer";

button.addEventListener("click", function() {
window.open("https://cima4uptv.com", "_blank");
});

document.getElementById("welcome-section").appendChild(button);