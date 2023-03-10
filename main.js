
let icons = document.getElementsByClassName("icon-password");
let iconsArray = Array.from(icons)
let inputs = document.querySelectorAll("input");
let firstPass = document.getElementById("firstPassword");
let secondPass = document.getElementById("secondPassword");
let button = document.querySelector("button")

iconsArray.forEach((icon, i) => {
    icon.addEventListener("click", () => {
       let type = inputs[i].getAttribute("type") === "password" ? "text" : "password";
       inputs[i].setAttribute("type", type);
       icon.classList.toggle("fa-eye-slash");
    });
});

function compare(){
 if(firstPass.value === secondPass.value){
    alert("You are welcome")
 }
 else {alert("Потрібно ввести однакові значення")
}
}

button.addEventListener("click", compare)