let timer1, timer2, timer3;

function cambiarImagenes() {
    const img = document.getElementById('logo-img');
    
    
    timer1 = setTimeout(() => {
        img.src = "../imagenes/dad.png";
    }, 500);

   
    timer2 = setTimeout(() => {
        img.src = "../imagenes/elliot.png";
    }, 1000);

  
    timer3 = setTimeout(() => {
        img.src = "../imagenes/fsociety.png";
    }, 2000);
}

function restaurarImagen() {
 
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

    const img = document.getElementById('logo-img');
    img.src = "../imagenes/fsociety.png";
}


var originalTitle = document.title;

    document.addEventListener("visibilitychange", function() {
      if (document.hidden) {
        document.title = "we always watch you";
      } else {
        document.title = originalTitle;
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const a = new Date();
        const dia = a.getDay();
        document.getElementById("dia-semana").innerHTML = `<b>${dias[dia]}</b>`;
    });
    
    function enviar(){
        alert ("Email send ")
    }
    
    const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

if (registerLink) {
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
}

if (btnPopup) {
    btnPopup.addEventListener('click', () => {
        console.log("Login popup activado"); // puedes quitar esto luego
        wrapper.classList.remove('active'); // Asegura que se muestre el login
        wrapper.classList.add('active-popup');
    });
}

if (iconClose) {
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
}
