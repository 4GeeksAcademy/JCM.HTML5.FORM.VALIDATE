let Formulario = document.querySelector("#Formulario");
Formulario.addEventListener("submit", evento => {
  evento.preventDefault();
  console.log("Validando");
  let InputCardn = document.querySelector("#InputCardn");
  let InputCardCvc = document.querySelector("#InputCardCvc");

  if (InputCardn.value !== "" && InputCardCvc.value !== "") {
    evento.target.submit();
  } else {
    alert("Por favor ingrese CardN y Cvc");
  }
});
