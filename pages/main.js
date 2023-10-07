const monster = document.getElementById("monster");
const inputEmail = document.querySelector(".input-email");
const inputClave = document.querySelector(".input-clave");
const inputUsuario = document.querySelector(".input-usuario");
const body = document.querySelector("body");
const icon = document.querySelector(".bx");
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;

//------- SEGUIR PUNTERO DEL MOUSE-----------
body.addEventListener("mousemove", (m) => {
    if (seguirPunteroMouse) {
      if (m.clientX < anchoMitad && m.clientY < altoMitad) {
        monster.src = "img/idle/2.png";
      } else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
        monster.src = "img/idle/3.png";
      } else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
        monster.src = "img/idle/5.png";
      } else {
        monster.src = "img/idle/4.png";
      }
    }
  });
  
  
  // CONTRASEÑA
  inputClave.addEventListener("focus", () => {
    seguirPunteroMouse = false;
    let count = 1;
    const cubrirOjo = setInterval(() => {
      monster.src = "img/cover/" + count + ".png";
      if (count < 8) {
        count++;
      } else {
        clearInterval(cubrirOjo);
      }
    }, 60);
  });
  inputClave.addEventListener("blur", () => {
    seguirPunteroMouse = true;
    let count = 7;
    const descubrirOjo = setInterval(() => {
      monster.src = "img/cover/" + count + ".png";
      if (count > 1) {
        count--;
      } else {
        clearInterval(descubrirOjo);
      }
    }, 60);
  });
  
  
  
  // ---- MOSTRAR CONTRASEÑA ----
  let mostrandoContraseña = false;
  
  icon.addEventListener("click", () => {
    if (!mostrandoContraseña) {
      inputClave.type = "text";
      icon.classList.remove("bx-show-alt");
      icon.classList.add("bx-hide");
    
  
      let count = 7;
      const espiarOjo = setInterval(() => {
        if (count > 1) {
          count--;
          monster.src = "img/cover/" + count + ".png";
        } else {
          clearInterval(espiarOjo);
          mostrandoContraseña = true;
        }
      }, 70);
  
    } else {
      inputClave.type = "password";
      icon.classList.remove("bx-hide");
      icon.classList.add("bx-show-alt");
  
      let count = 1;
      const taparOjo = setInterval(() => {
        if (count < 8) {
          count++;
          monster.src = "img/cover/" + count + ".png";
        } else {
          clearInterval(taparOjo);
          mostrandoContraseña = false;
        }
      }, 70);
    }
  });
  
  //-----------SEGUIR ESCRITURA----------
  function cambiarImagen(input) {
    input.addEventListener('focus', () => {
        seguirPunteroMouse = false;
    });
  
    input.addEventListener('blur', () => {
        seguirPunteroMouse = true;
    });
  
    input.addEventListener('keyup', () => {
        let longitud = input.value.length;
  
        if (longitud >= 0 && longitud <= 5) {
            monster.src = `img/read/1.png`;
        } else if (longitud >= 6 && longitud <= 14) {
            monster.src = `img/read/2.png`;
        } else if (longitud >= 15 && longitud <= 20) {
            monster.src = `img/read/3.png`;
        } else {
            monster.src = `img/read/4.png`;
        }
    });
  }
  
  // cambiarImagen(inputEmail);
  // cambiarImagen(inputUsuario);
  if (inputEmail) {
    cambiarImagen(inputEmail);
  }
  
  
  if (inputUsuario) {
    cambiarImagen(inputUsuario);
  }
  
  