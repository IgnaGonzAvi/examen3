const colors = [
    "rgb(34, 153, 84)",
    "rgb(16, 40, 236)",
    "rgb(236, 16, 46)",
    "rgb(124, 89, 209)",
    "rgb(15, 221, 231)",
    "rgb(95, 106, 106)"
];


let cuadrados = document.querySelectorAll(".square");
let pickedColor = colors[2];
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.innerHTML= pickedColor;
let clickedColor;
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");


for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function () {
        clickedColor = colors[i];
        console.log(clickedColor);
        if (pickedColor === clickedColor) {
            message.textContent = "¡Correcto!";
            h1.style.backgroundColor = colors[i];
        } else {
            cuadrados[i].style.backgroundColor = "#232323";
        }
    })
};




