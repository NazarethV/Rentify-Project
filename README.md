# PF-Rentify

Plataforma para Hoteles:

Descripción
La aplicación web de reserva de hoteles es una plataforma diseñada para facilitar el proceso de reserva y alquiler de habitaciones de hoteles tanto para usuarios como para propietarios de hoteles. Permite a los usuarios buscar, comparar y reservar habitaciones de hotel de manera rápida y sencilla, al tiempo que proporciona a los propietarios de hoteles una plataforma para mostrar y administrar sus habitaciones disponibles.

Características Principales
Roles de Usuario: Los usuarios pueden acceder a la plataforma como "client" o "owner", cada uno con funcionalidades específicas.
Pasarelas de Pagos: Integración de métodos de pago seguros para facilitar transacciones.
Autenticación de Terceros: Inicio de sesión utilizando credenciales de otras plataformas.
Almacenamiento Local Persistente: Utilización de local storage para mantener datos importantes del usuario.
Filtros Combinados: Búsqueda de habitaciones utilizando múltiples criterios simultáneamente.
Cloudinary: Integración de servicios de almacenamiento y gestión de imágenes en la nube.
Notificaciones: Envío de notificaciones por correo electrónico o mediante socket.io para mantener a los usuarios informados.
Reseñas: Funcionalidad para que los usuarios dejen comentarios y calificaciones sobre las habitaciones y la experiencia.
Favoritos: Opción para que los usuarios guarden sus habitaciones favoritas para futuras referencias.
Carrito de Reservas: Capacidad para que los usuarios agreguen habitaciones a un carrito y realicen reservas múltiples.
Panel de Control de Administrador: Herramienta para que los propietarios de hoteles gestionen sus habitaciones y reservas.
Borrado Lógico: Implementación de una función de eliminación que conserva los datos en lugar de eliminarlos permanentemente.





INSTALACIONES: .env
VITE_FIREBASE_API_KEY=AIzaSyCIt0lPc8wdrVvgL_t6ASu8TLJGRw84XVs
VITE_FIREBASE_AUTH_DOMAIN=rentify-852d9.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=rentify-852d9
VITE_FIREBASE_STORAGE_BUCKET=rentify-852d9.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=412905531159
VITE_FIREBASE_APP_ID=1:412905531159:web:8feb5f2cf1200a33843952
VITE_FIREBASE_MEASUREMENT_ID=G-TCPD24G3WQ

Dependencias:
En Frontend:
npm i --legacy-peer-deps
npm install leaflet @types/leaflet @react-leaflet/core react-leaflet --legacy-peer-deps
npm install mercadopago  @mercadopago/sdk-react  --legacy-peer-deps

En Backend: 
npm install
node-fetch@2


--
