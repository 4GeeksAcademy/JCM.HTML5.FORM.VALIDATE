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

  let Error1 = "";
  let Error2 = "";
  let Error3 = "";
  let Error4 = "";
  let Error5 = "";
  let Error6 = "";
  let Error7 = "";
  let Error8 = "";

  if (InputCardn.value !== "" && !isNaN(InputCardn.value)) {
  } else {
    Error1 = "Card Number";
  }
  if (InputCardCvc.value !== "" && !isNaN(InputCardCvc.value)) {
  } else {
    Error2 = "Card CVC";
  }
  if (inputAmount.value !== "" && !isNaN(inputAmount.value)) {
  } else {
    Error3 = "Amount";
  }
  if (inputFirstName.value !== "" && typeof inputFirstName.value === "string") {
  } else {
    Error4 = "First Name";
  }
  if (inputLastName.value !== "" && typeof inputLastName.value === "string") {
  } else {
    Error5 = "Last Name";
  }
  if (inputCity.value !== "" && typeof inputCity.value === "string") {
  } else {
    Error6 = "City";
  }
  if (inputState.value !== "" && typeof inputState.value === "string") {
  } else {
    Error7 = "State";
  }
  if (inputPostalCode.value !== "" && !isNaN(inputPostalCode.value)) {
  } else {
    Error8 = "Postal Code";
  }

  if (
    Error1 == "" &&
    Error2 == "" &&
    Error3 == "" &&
    Error4 == "" &&
    Error5 == "" &&
    Error6 == "" &&
    Error7 == "" &&
    Error8 == ""
  ) {
    evento.target.submit();
  } else {
    alert(
      "Please review the following: " +
        Error1 +
        " " +
        Error2 +
        " " +
        Error3 +
        " " +
        Error4 +
        " " +
        Error5 +
        " " +
        Error6 +
        " " +
        Error7 +
        " " +
        Error8
    );
  }
});
