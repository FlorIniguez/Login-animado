const monster = document.getElementById('monster');
const inputEmail = document.querySelector('.input-email');
const inputClave = document.querySelector('.input-clave');
const inputUsuario = document.querySelector('.input-usuario');
const body = document.querySelector('body');
const icon = document.querySelector('.bx')
const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2;
let seguirPunteroMouse = true;

body.addEventListener('mousemove', (m)=>{
    if(seguirPunteroMouse) { 
    if(m.clientX < anchoMitad && m.clientY < altoMitad) {
        monster.src = "img/idle/2.png";
    }
    else if(m.clientX < anchoMitad && m.clientY > altoMitad) {
        monster.src = "img/idle/3.png";
    }
    else if(m.clientX > anchoMitad && m.clientY < altoMitad) {
        monster.src = "img/idle/5.png";
    } else {
        monster.src = "img/idle/4.png";
    }
    }
})
//SEGUIR ESCRITURA MAIL
inputEmail.addEventListener('focus', ()=>{
    seguirPunteroMouse = false;
})
inputEmail.addEventListener('blur', ()=>{
    seguirPunteroMouse = true;
})
inputEmail.addEventListener('keyup', ()=>{
    let email = inputEmail.value.length;
    if(email >= 0 && email <= 5) {
        monster.src = "img/read/1.png"
    } else if (email >= 6 && email <= 14) {
        monster.src = "img/read/2.png"
    }else if (email >= 15 && email <= 20) {
        monster.src = "img/read/3.png"
    } else {
        monster.src = "img/read/4.png"
    }
})
//SEGUIR ESCRITURA USER
inputUsuario.addEventListener('focus', ()=>{
    seguirPunteroMouse = false;
})
inputUsuario.addEventListener('blur', ()=>{
    seguirPunteroMouse = true;
})
inputUsuario.addEventListener('keyup', ()=>{
    let user = inputUsuario.value.length;
    if(user >= 0 && user <= 5) {
        monster.src = "img/read/1.png"
    } else if (user >= 6 && user <= 14) {
        monster.src = "img/read/2.png"
    }else if (user >= 15 && user <= 20) {
        monster.src = "img/read/3.png"
    } else {
        monster.src = "img/read/4.png"
    }
})

inputClave.addEventListener ('focus', ()=> {
    seguirPunteroMouse = false;
    let count = 1;
    const cubrirOjo = setInterval(()=> {
        monster.src = "img/cover/"+count+ ".png";
        if (count < 8) {
            count ++;
        }else {
            clearInterval(cubrirOjo);
        }
    },60)
})
inputClave.addEventListener ('blur', ()=> {
    seguirPunteroMouse =true;
    let count = 7;
    const descubrirOjo = setInterval(()=> {
        monster.src = "img/cover/"+count+ ".png";
        if (count > 1) {
            count --;
        }else {
            clearInterval(descubrirOjo);
        }
    },60)
})

// CLAVE SHADOW
let mostrandoContraseña = false;

icon.addEventListener("click", () => {
    if (!mostrandoContraseña) {
        inputClave.type = "text";
        icon.classList.remove('bx-show-alt');
        icon.classList.add('bx-hide');

        let count = 7;
        const espiarOjo = setInterval(() => {
            monster.src = "img/cover/" + count + ".png";
            if (count > 5) {
                count--;
            } else {
                clearInterval(espiarOjo);
                mostrandoContraseña = true;
            }
        }, 70);
    } else {
        let count = 5;
        const taparOjo = setInterval(() => {
            monster.src = "img/cover/" + count + ".png";
            if (count < 8) {
                count++;
            } else {
                clearInterval(taparOjo);
                inputClave.type = "password";
                icon.classList.remove('bx-hide');
                icon.classList.add('bx-show-alt');
                mostrandoContraseña = false;
            }
        }, 70);
    }
});

