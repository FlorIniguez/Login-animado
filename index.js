const iniciarSesion = document.getElementById("btn__iniciar-sesion");
const regitrarse = document.getElementById("btn__registrarse");

//-----------INDEX-------------

iniciarSesion.addEventListener("click", function () {
  window.location.href = "pages/login.html";
});

regitrarse.addEventListener("click", function () {
  window.location.href = "pages/registro.html";
});



