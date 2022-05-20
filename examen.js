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
let message = document.getElementById("#message");
let h1 = document.getElementById("h1");


for(i=0; i<cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener('click', function(){
        clickedColor = colors[i];
        console.log("el elegido" + pickedColor);
        console.log("el clickeado" + clickedColor);
        if(clickedColor == pickedColor){
            message.innerHTML = ("¡Correcto!");
            h1.style.backgroundColor = colors[i];
        }
    })
};




