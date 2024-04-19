<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>
<body>
    <form class="formcontato__form" action="https://formsubmit.co/amthogomez14@gmail.com" method="POST">
        
        <input type="text" id="nombre" name="name" placeholder="Nombre" required>
        <input type="email" id="email" name="email" placeholder="Correo electrónico" required>
        <input type="text" id="asunto" name="asunto" placeholder="Asunto" required>
        <textarea id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
    </form>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('.formcontato__form');

            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Evita que el formulario se envíe automáticamente

                // Validación de campos
                const nombre = document.getElementById('nombre');
                const email = document.getElementById('email');
                const asunto = document.getElementById('asunto');
                const mensaje = document.getElementById('mensaje');

                const nombreValido = validarCampo(nombre, 'nombre');
                const emailValido = validarCampo(email, 'email');
                const asuntoValido = validarCampo(asunto, 'asunto');
                const mensajeValido = validarCampo(mensaje, 'mensaje');

                if (nombreValido && emailValido && asuntoValido && mensajeValido) {
                    // Si todos los campos son válidos, puedes enviar el formulario
                    form.submit();
                } else {
                    // Si algún campo es inválido, puedes mostrar un mensaje de error o realizar otra acción
                    console.log('Por favor, completa todos los campos correctamente.');
                }
            });

            function validarCampo(campo, tipo) {
                const valor = campo.value.trim();

                // Validación de campos según el tipo (puedes agregar más validaciones según tus necesidades)
                switch (tipo) {
                    case 'nombre':
                        return valor !== '';
                    case 'email':
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
                    case 'asunto':
                        return valor !== '';
                    case 'mensaje':
                        return valor !== '';
                    default:
                        return false;
                }
            }
        });
    </script>
</body>
</html>
