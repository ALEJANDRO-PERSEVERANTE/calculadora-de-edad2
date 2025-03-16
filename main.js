// Variables
const añoActual = new Date().getFullYear();
const MAX_EDAD = 150;

// Elementos del DOM
const calcularBtn = document.getElementById('calcularBtn');
const resultado = document.getElementById('resultado');

// Función principal
function calcularEdad() {
    let añoNacimiento = prompt("📅 ¿En qué año naciste?");
    
    if (!añoNacimiento) {
        mostrarError("❌ No ingresaste ningún año");
        return;
    }
    
    añoNacimiento = parseInt(añoNacimiento);
    
    if (isNaN(añoNacimiento)) {
        mostrarError("🔢 Por favor ingresa un número válido");
        return;
    }
    
    if (añoNacimiento > añoActual) {
        mostrarError("🕰️ ¡Eres del futuro! Ingresa un año válido");
        return;
    }
    
    const edad = añoActual - añoNacimiento;
    
    if (edad > MAX_EDAD) {
        mostrarError(`👴 ¿Tienes ${edad} años? ¡Eso parece imposible!`);
        return;
    }
    
    mostrarResultado(edad);
}

// Función para mostrar resultados
function mostrarResultado(edad) {
    resultado.innerHTML = `
        🎉 ¡Tienes <strong>${edad}</strong> años!<br>
        📆 Naciste en el año ${añoActual - edad}<br>
        🌟 En 10 años tendrás ${edad + 10} años
    `;
}

// Función para manejar errores
function mostrarError(mensaje) {
    resultado.innerHTML = mensaje;
    resultado.style.color = "#ff4444";
    setTimeout(() => {
        resultado.style.color = "#00ff88";
    }, 2000);
}

// Event Listeners
calcularBtn.addEventListener('click', calcularEdad);

// Efecto especial para el botón
calcularBtn.addEventListener('mousemove', (e) => {
    const x = e.pageX - calcularBtn.offsetLeft;
    const y = e.pageY - calcularBtn.offsetTop;
    calcularBtn.style.setProperty('--x', x + 'px');
    calcularBtn.style.setProperty('--y', y + 'px');
});
// Función para reiniciar automáticamente
function reiniciarAutomaticamente() {
    setTimeout(() => {
        resultado.innerHTML = '';
        calcularBtn.disabled = false;
    }, 5000);
}

// Modificar la función mostrarResultado para reiniciar automáticamente
function mostrarResultado(edad) {
    resultado.innerHTML = `
        🎉 ¡Tienes <strong>${edad}</strong> años!<br>
        📆 Naciste en el año ${añoActual - edad}<br>
        🌟 En 10 años tendrás ${edad + 10} años
    `;
    reiniciarAutomaticamente();
}

// Modificar la función mostrarError para reiniciar automáticamente
function mostrarError(mensaje) {
    resultado.innerHTML = mensaje;
    resultado.style.color = "#ff4444";
    setTimeout(() => {
        resultado.style.color = "#00ff88";
        reiniciarAutomaticamente();
    }, 2000);
}
