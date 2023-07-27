function saludar() {
  console.log("Prueba");
  alert("Hola desde el Evento Click");
}
var captura = document.getElementById("sendbtn");
captura.addEventListener("click", saludar);
