let Formulario = document.querySelector("#Formulario");
Formulario.addEventListener("submit", evento => {
  evento.preventDefault();
  console.log("Validando");
  let InputCardn = document.querySelector("#InputCardn");
  let InputCardCvc = document.querySelector("#InputCardCvc");
  let inputAmount = document.querySelector("#inputAmount");
  let inputFirstName = document.querySelector("#inputFirstName");
  let inputLastName = document.querySelector("#inputLastName");
  let inputCity = document.querySelector("#inputCity");
  let inputState = document.querySelector("#inputState");
  let inputPostalCode = document.querySelector("#inputPostalCode");
  let mastercard = document.querySelector("#mastercard");
  let Americancard = document.querySelector("#Americancard");
  let Visacard = document.querySelector("#Visacard");
  let Paypalcard = document.querySelector("#Paypalcard");
  if (
    InputCardn.value !== "" &&
    InputCardCvc.value !== "" &&
    inputAmount.value !== "" &&
    inputFirstName.value !== "" &&
    inputLastName.value !== "" &&
    inputCity.value !== "" &&
    inputState.value !== "" &&
    inputPostalCode.value !== ""
  ) {
    evento.target.submit();
  } else {
    alert("Por favor ingrese CardN y Cvc");
  }
});
