# Viapool Challenge

Consideraciones:
    • Se tomó el formato de telefono pensando que la aplicación funcionaría solo en Argentina.
    • Los dominios de los mails están guardados en un array por cuestiones de simplicidad, la solución alternativa sería traerlos desde un feature-flag o desde el backend, para no necesitar cambiar el código cada vez que se agregue o quite un dominio.
    • Se toma como válido el año del auto solo si es mayor o igual a 1990
    • El modelo solo será valido si no está vacío, podría mejorarse implementando una API y trayendo los modelos para evitar errores de tipeo.