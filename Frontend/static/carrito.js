document.addEventListener('DOMContentLoaded', function(){

const envioInput = document.getElementById("envio");
const recojoInput = document.getElementById("recojo");
const formEnvio = document.getElementById("envio_main");
const formRecojo = document.getElementById("recojo_main");

envioInput.addEventListener("change", function() {
  if (envioInput.checked) {
    formEnvio.style.display = "block";
    formRecojo.style.display = "none";
  }
});

recojoInput.addEventListener("change", function() {
  if (recojoInput.checked) {
    formEnvio.style.display = "none";
    formRecojo.style.display = "block";
  }
});

});