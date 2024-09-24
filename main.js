const monster = document.getElementById("monster");
const inputEmail = document.querySelector(".input-email");
const inputClave = document.querySelector(".input-clave");
const inputUsuario = document.querySelector(".input-usuario");
const body = document.querySelector("body");
const icon = document.querySelector(".bx");
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;
let animacionActiva = false; // Evitar animaciones simultáneas

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

// Función para animar el monstruo cubriendo/descubriendo los ojos
function cambiarImagenOjos(inicio, fin, velocidad, callback) {
    if (animacionActiva) return; // Evitar múltiples animaciones
    animacionActiva = true;

    let count = inicio;
    const cambiar = () => {
        monster.src = `img/cover/${count}.png`;
        if (inicio < fin) {
            count++;
            if (count > fin) {
                animacionActiva = false;
                if (callback) callback();
                return;
            }
        } else {
            count--;
            if (count < fin) {
                animacionActiva = false;
                if (callback) callback();
                return;
            }
        }
        setTimeout(cambiar, velocidad);
    };

    cambiar();
}

// CONTRASEÑA
inputClave.addEventListener("focus", () => {
    seguirPunteroMouse = false;
    cambiarImagenOjos(1, 8, 60);
});
inputClave.addEventListener("blur", () => {
    seguirPunteroMouse = true;
    cambiarImagenOjos(7, 1, 60);
});

// ---- MOSTRAR CONTRASEÑA ----
let mostrandoContraseña = false;

icon.addEventListener("click", () => {
    if (!mostrandoContraseña) {
        inputClave.type = "text";
        icon.classList.remove("bx-show-alt");
        icon.classList.add("bx-hide");
        cambiarImagenOjos(7, 1, 70, () => {
            mostrandoContraseña = true;
        });
    } else {
        inputClave.type = "password";
        icon.classList.remove("bx-hide");
        icon.classList.add("bx-show-alt");
        cambiarImagenOjos(1, 8, 70, () => {
            mostrandoContraseña = false;
        });
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

if (inputEmail) {
    cambiarImagen(inputEmail);
}

if (inputUsuario) {
    cambiarImagen(inputUsuario);
}
