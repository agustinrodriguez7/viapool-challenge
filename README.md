# Viapool Challenge

## Consideraciones de negocio:

    - Se tomó el formato de telefono pensando que la aplicación funcionaría solo en Argentina.
    - Se toma como válido el año del auto solo si es mayor o igual a 1990
    - El modelo solo será valido si no está vacío, podría mejorarse implementando una API y trayendo los modelos para evitar errores de tipeo.
    - La edad será válida si se encuentra entre 18 y 99 años inclusive.

## Consideraciones técnicas:

    - Los dominios de los mails están guardados en un array por cuestiones de simplicidad, la solución alternativa sería traerlos desde un feature-flag o desde el backend, para no necesitar cambiar el código cada vez que se agregue o quite un dominio.
    - Al igual que los dominios, los textos podrían quedar externalizados en feature-flags o desde el backend, para no generar dependencias de código y despliegues de artefactoss innecesarios.

Para obtener reporte de coverage de Jest:  `npx jest --coverage`