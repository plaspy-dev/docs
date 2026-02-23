---
sidebar_position: 7
---
# Users API
La presente documentación proporciona una guía completa sobre el uso de la API de Usuarios del sistema de seguimiento satelital Plaspy. Esta API está diseñada para facilitar la gestión y administración de los usuarios registrados en el sistema, ofreciendo a los administradores la capacidad de interactuar con los datos de los usuarios mediante solicitudes HTTP. La documentación se estructura en varios endpoints, cada uno de los cuales está destinado a una funcionalidad específica, permitiendo una comprensión clara y detallada de las capacidades del sistema.

## Importancia de la API de Usuarios

En el ámbito de la administración de sistemas, la gestión eficiente de los usuarios es esencial para asegurar un control adecuado y mantener la seguridad. La API de Usuarios de Plaspy permite a los administradores acceder a información detallada sobre los usuarios, crear nuevos usuarios, actualizar los detalles de los usuarios existentes y eliminar aquellos que ya no son necesarios. Estas capacidades son fundamentales para aplicaciones en sectores como la logística, la seguridad, la gestión de flotas y otros, donde el manejo de los datos de los usuarios es crucial para la operatividad eficiente.

## Descripción General de los Endpoints

La API de Usuarios de Plaspy incluye varios endpoints que cubren una amplia gama de funcionalidades:

1. **[GET /api/users](../../../users_api/rest_api/developers/get__api_users)**: Permite obtener una lista de todos los usuarios registrados en el sistema. Este endpoint es útil para visualizar y administrar la información de los usuarios, incluyendo detalles como nombre, correo electrónico, país, y otros atributos importantes.
2. **[POST /api/users](../../../users_api/rest_api/developers/post__api_users)**: Permite crear un nuevo usuario en el sistema. Este endpoint es esencial para añadir nuevos usuarios, permitiendo especificar varios atributos como nombre, correo electrónico, país y zona horaria.
3. **[GET /api/users/countries](../../../users_api/rest_api/developers/get__api_users_countries)**: Permite obtener una lista de todos los países registrados en el sistema con sus códigos ISO de dos dígitos. Este endpoint es útil para llenar listas desplegables o formularios donde se necesita seleccionar un país.
4. **[GET /api/users/timeZones](../../../users_api/rest_api/developers/get__api_users_timezones)**: Permite obtener una lista de todas las zonas horarias registradas en el sistema. Este endpoint es útil para llenar listas desplegables o formularios donde se necesita seleccionar una zona horaria.
5. **[GET /api/users/\{userId\}](../../../users_api/rest_api/developers/get__api_users_userid)**: Permite obtener los detalles de un usuario específico registrado en el sistema utilizando su identificador único \(userId\). Este endpoint es útil para la gestión de usuarios, permitiendo a los administradores revisar y administrar los datos de un usuario en particular.
6. **[PUT /api/users/\{userId\}](../../../users_api/rest_api/developers/put__api_users_userid)**: Permite actualizar la información de un usuario específico. Este endpoint es útil para modificar los detalles del usuario, como su nombre, correo electrónico, país y zona horaria.
7. **[PATCH /api/users/\{userId\}](../../../users_api/rest_api/developers/patch__api_users_userid)**: Permite actualizar parcialmente la información de un usuario específico. Este endpoint es útil cuando solo se necesita modificar algunos campos del usuario sin tener que enviar todos los datos.
8. **[DELETE /api/users/\{userId\}](../../../users_api/rest_api/developers/delete__api_users_userid)**: Permite eliminar un usuario específico del sistema. Este endpoint es esencial para gestionar la eliminación de usuarios que ya no deben tener acceso al sistema.

## Estructura de las Solicitudes y Respuestas

Cada endpoint está diseñado para recibir y procesar solicitudes HTTP, siguiendo una estructura clara y específica:

- **Método HTTP**: Cada endpoint utiliza un método HTTP adecuado \(GET, POST, PUT, PATCH, DELETE\) según la operación a realizar.
- **Parámetros de Solicitud**: Los parámetros requeridos y opcionales que deben incluirse en la URL o en el cuerpo de la solicitud.
- **Cuerpo de la Solicitud**: Para endpoints que reciben datos \(como POST, PUT, PATCH\), se debe enviar un objeto JSON con la información requerida.
- **Parámetros de Respuesta**: Los detalles de la respuesta que incluyen el estado de la operación, mensajes de error \(si los hubiera\), y la información solicitada en caso de éxito.

### Ejemplos de Solicitudes y Respuestas

Para facilitar la implementación y el uso de la API, la documentación incluye ejemplos de solicitudes y respuestas tanto exitosas como de error. Estos ejemplos son cruciales para que los desarrolladores comprendan cómo estructurar sus solicitudes y cómo interpretar las respuestas del sistema.

## Conclusión

La API de Usuarios de Plaspy es una herramienta poderosa para la gestión y administración de los usuarios registrados en el sistema. Esta documentación está diseñada para proporcionar a los administradores toda la información necesaria para integrar y utilizar eficientemente la API en sus sistemas. Con una estructura clara y ejemplos detallados, esta guía facilita el acceso a las diversas funcionalidades ofrecidas por la API, asegurando una implementación exitosa y una gestión precisa de los usuarios.
