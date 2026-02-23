---
sidebar_position: 50
---
# Notificaciones WhatsApp
La sección " Notificaciones WhatsApp" en la [configuración](https://app.plaspy.com/Settings) de Plaspy permite a los administradores configurar notificaciones a través de WhatsApp. Esta funcionalidad es útil para enviar alertas y mensajes directamente a los usuarios a través de WhatsApp. Es esencial que el usuario ya haya creado su propia cuenta de WhatsApp Business y bot, siguiendo las instrucciones proporcionadas. Esta guía detalla los campos disponibles y los pasos para configurarlos correctamente.

![](./Configuraci&oacute;n - Plaspy-animated.webp "Configuraci&oacute;n - Plaspy-animated.webp")

###   
Descripción de Campos

- **App ID:** ID de tu aplicación de WhatsApp.
- **Clave secreta de la App:**ID único de la aplicación para su integración de WhatsApp Business API.
- **WhatsApp Business Account ID:** ID de tu cuenta de WhatsApp Business.
- **Phone Number ID:** ID del número de teléfono asociado con tu cuenta de WhatsApp Business.
- **Access Token:** Token para acceder a la API de WhatsApp Business.
- **Nombre plantilla:** Nombre de la plantilla de mensaje a usar.
- **Webhook:**
    - **Callback URL:** URL para recibir eventos de webhook.
    - **Verify Token:** Token utilizado para verificar la configuración del webhook.
- **Número de teléfono de prueba:** Número de teléfono usado para probar las notificaciones.

### Instrucciones Paso a Paso

1. **Acceder a la Sección:**

    - Inicia sesión en Plaspy y navega al menú principal en la parte superior derecha.
    - Selecciona "[Configuración](https://app.plaspy.com/Settings)" y luego " Notificaciones WhatsApp."
2. **Crear una Cuenta de WhatsApp Business y Obtener Credenciales de API:**

    - Ve a la [Consola de Desarrolladores de Facebook](https://developers.facebook.com/) y crea una cuenta de WhatsApp Business.
    - Sigue las instrucciones en la [Ayuda de API de WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) para obtener tu App ID, WhatsApp Business Account ID, Phone Number ID y Access Token.
    - Puedes crear un token de acceso permanente a través de [Usuarios del Sistema](https://business.facebook.com/settings/system-users/).
3. **Configurar Credenciales de API de WhatsApp Business:**

    - Introduce el App ID en el campo "App ID".
    - Introduce la Clave secreta de la App en el campo "Clave secreta de la App".
    - Introduce el WhatsApp Business Account ID en el campo "WhatsApp Business Account ID".
    - Introduce el Phone Number ID en el campo "Phone Number ID".
    - Introduce el Access Token en el campo "Access Token".
4. **Configurar la Plantilla de Mensaje:**

    - Introduce el nombre de la plantilla de mensaje en el campo "Nombre plantilla".
    - Puedes crear plantillas en 'es' y 'en' en el [Consola de Negocios de Facebook](https://business.facebook.com/wa/manage/message-templates/).
5. **Configurar el Webhook:**

    - La "Callback URL" está preconfigurada y es de solo lectura. Se usa para recibir eventos de webhook de WhatsApp.
    - El "Verify Token" también está preconfigurado y es de solo lectura. Se usa para verificar la configuración del webhook. Sigue la guía sobre [Configurar Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#configure-webhooks) para más detalles.
6. **Probar la Configuración:**

    - Introduce un número de teléfono de prueba en el campo "Número de teléfono de prueba".
    - Haz clic en "Probar" para enviar una notificación de prueba y verificar que la configuración es correcta.
7. **Guardar los Cambios:**

    - Revisa todos los campos para asegurar que la información es correcta.
    - Haz clic en "Aceptar" para guardar todos los cambios realizados.

### Validaciones y Restricciones

- **App ID, Clave secrata de la App, WhatsApp Business Account ID, Phone Number ID, Access Token:** Deben ser credenciales válidas obtenidas de la Consola de Desarrolladores de Facebook.
- **Nombre plantilla:** Debe ser el nombre de una plantilla de mensaje existente creada en la Consola de Negocios de Facebook.
- **Número de teléfono de prueba:** Debe ser un número de teléfono válido para probar las notificaciones.

### Preguntas Frecuentes

- **¿Cómo creo una cuenta de WhatsApp Business y obtengo credenciales de API?**
    - Ve a la [Consola de Desarrolladores de Facebook](https://developers.facebook.com/) y sigue las instrucciones en la [Ayuda de API de WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) para crear una cuenta y obtener tus credenciales.
- **¿Qué es un Webhook y cómo lo configuro?**
    - Un Webhook es una URL que recibe datos en tiempo real de WhatsApp. Sigue la guía sobre [Configurar Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#configure-webhooks) para los pasos detallados.
- **¿Qué debo hacer si el Access Token no funciona?**
    - Asegúrate de que el token es correcto y no ha expirado. Si el problema persiste, puedes generar un nuevo token a través de [Usuarios del Sistema](https://business.facebook.com/settings/system-users/).
- **¿Cómo puedo probar que las notificaciones de WhatsApp funcionan correctamente?**
    - Introduce un número de teléfono de prueba en el campo "Número de teléfono de prueba" y haz clic en "Probar" para enviar una notificación de prueba. Verifica que la notificación se reciba correctamente en el número de teléfono especificado.
- **¿Puedo usar cualquier plantilla de mensaje para las notificaciones de WhatsApp?**
    - Debes usar una plantilla de mensaje que haya sido creada y aprobada en la Consola de Negocios de Facebook. Introduce el nombre exacto de la plantilla en el campo "Nombre plantilla".

Con estas instrucciones, podrás configurar la sección de " Notificaciones WhatsApp" de manera efectiva y asegurar que las notificaciones se envíen correctamente a través de WhatsApp en la plataforma Plaspy.
