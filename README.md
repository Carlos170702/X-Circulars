Configuración del Proyecto
1. Agregar el Token de API
Para que el proyecto funcione correctamente, debes configurar el Token de API.:

Archivo .env
As una copia del .env-template y renombrarlo a .env
Agrega la siguiente línea al archivo, reemplazando TU_TOKEN_DE_API por tu token real:
TOKEN=TU_TOKEN_DE_API
Guarda los cambios.
Opción 2: Archivo src/api/api.js
Si prefieres, también puedes agregar el token directamente en el archivo de configuración de la API:

2. Instalar Dependencias
Una vez configurado el token, instala las dependencias necesarias del proyecto ejecutando el siguiente comando en la terminal:

npm install

3. Ejecutar el Proyecto
Para iniciar el proyecto en modo de desarrollo, ejecuta:

npm run dev
El servidor se ejecutará en http://localhost:3000 por defecto.

Notas Importantes
Si el proyecto no funciona después de seguir los pasos anteriores, verifica que el token esté correctamente configurado.
Asegúrate de que las dependencias estén instaladas correctamente ejecutando npm install antes de iniciar el servidor.