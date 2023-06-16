document.addEventListener('DOMContentLoaded', function(){

const envioInput = document.getElementById("envio");
const recojoInput = document.getElementById("recojo");
const formEnvio = document.getElementById("envio_main");
const formRecojo = document.getElementById("recojo_main");
const cenvio = document.getElementsByClassName("envio1");
const crecojo = document.getElementsByClassName("recojo1");

envioInput.addEventListener("change", function() {
  if (envioInput.checked) {
    formEnvio.style.display = "block";
    formRecojo.style.display = "none";
    cenvio[0].classList.add("activo");
    crecojo[0].classList.remove("activo");
  }
});

recojoInput.addEventListener("change", function() {
  if (recojoInput.checked) {
    formEnvio.style.display = "none";
    formRecojo.style.display = "block";
    cenvio[0].classList.remove("activo");
    crecojo[0].classList.add("activo");
  }
});

});