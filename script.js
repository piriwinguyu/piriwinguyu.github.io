document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'piriwin' && password === '2302') {
        alert('¡Inicio de sesión exitoso!');
        // Redirigir a index.html después de un breve retraso
        setTimeout(function() {
            window.location.href = 'inicio.html';
        }, 1000); // Espera 1 segundo antes de redirigir
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});