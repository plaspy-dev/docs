---
sidebar_label: Rest API
sidebar_position: 53
---
# Rest API
Una API REST \(Representational State Transfer\) es un conjunto de funciones que permite la comunicación y el intercambio de datos entre diferentes sistemas a través de la web. Utiliza métodos HTTP estándar como GET, POST, PUT, DELETE para realizar operaciones sobre recursos, representados en formato JSON. Las API REST son ampliamente utilizadas por su simplicidad, flexibilidad y escalabilidad.

La API REST de Plaspy proporciona una manera robusta y segura de integrar las funcionalidades de Plaspy en tus propias aplicaciones. Siguiendo las directrices anteriores, podrás realizar solicitudes eficientes y gestionar correctamente los errores y los límites de la API. Para más detalles, consulta la [documentación completa de la API REST de Plaspy](https://app.plaspy.com/rest-api-docs).

### Usos de una API REST

- **Integración de Sistemas:** Permite que diferentes sistemas y aplicaciones se comuniquen y compartan datos de manera eficiente.
- **Automatización de Procesos:** Facilita la automatización de tareas y flujos de trabajo.
- **Extensión de Funcionalidades:** Permite a los desarrolladores agregar nuevas funcionalidades a las aplicaciones existentes sin necesidad de modificar el código base.
- **Desarrollo de Aplicaciones Móviles:** Provee una manera fácil de conectar aplicaciones móviles a servicios backend.
- **Acceso Remoto a Servicios:** Permite el acceso a servicios y datos desde cualquier lugar con conexión a internet.

## Base URL de Peticiones

La base URL para todas las peticiones a la API REST de Plaspy es:

https://api.plaspy.com

## Método de Autenticación

Para comunicarte con el servicio de Plaspy, debes autenticarte utilizando un esquema OAuth. El primer paso es generar un Token de acceso tipo [JWT](https://jwt.io/) \(JSON Web Token\). Este token se obtiene a través de la siguiente operación:

- **Endpoint:** `/api/Auth/Token`
- **Método:** `POST`
- **Descripción:** [Obtener el Auth token](authentication) necesario para realizar peticiones a otros endpoints de la API.

### Cómo usar OAuth en Plaspy

1. **Generar un Token de Autenticación:**

    - **Endpoint:** `/api/Auth/Token`
    - **Método:** `POST`
    - **Descripción:** Obtener el Auth token necesario para realizar peticiones a otros endpoints de la API.
    - **Ejemplo de solicitud:**

\{ "userName": "tu\_nombre\_de\_usuario", "apiKey": "tu\_api\_key" \}
2. **Incluir el Token en las Peticiones:**

    - Una vez obtenido el token, debes incluirlo en el encabezado de cada solicitud a la API.
    - **Encabezado:** `Authorization: Bearer tu_token`
    - **Ejemplo de uso en una petición GET:**

GET /api/devices HTTP/1.1  
Host: api.plaspy.com  
Authorization: Bearer tu\_token

## Operaciones

A continuación, se presenta una tabla con las operaciones disponibles en la API REST de Plaspy:

| Operación | Método | Endpoint | Descripción |
| --- | --- | --- | --- |
| [Obtener Token de Autenticación](authentication) | POST | `/api/Auth/Token` | Obtener el Auth token para realizar peticiones a otros endpoints. |
| [Listar Dispositivos](devices_api/get__api_devices) | GET | `/api/devices` | Listar dispositivos activos en la cuenta. |
| [Información de Dispositivo](devices_api/get__api_devices_deviceid) | GET | `/api/devices/{deviceId}` | Obtener información sobre un dispositivo específico. |
| [Última Ubicación](devices_api/get__api_devices_deviceid_lastlocation) | GET | `/api/devices/{deviceId}/lastLocation` | Obtener la última ubicación registrada de un dispositivo. |
| [Obtener Ubicaciones](devices_api/post__api_devices_deviceid_locations) | POST | `/api/devices/{deviceId}/locations` | Obtener ubicaciones de un dispositivo en un rango de fechas. |
| [Obtener Alertas](devices_api/post__api_devices_deviceid_alerts) | POST | `/api/devices/{deviceId}/alerts` | Obtener alertas generadas por un dispositivo en un rango de fechas. |
| [Listar Grupos](groups_api/get__api_groups) | GET | `/api/groups` | Listar todos los grupos creados en la cuenta. |
| [Crear Grupo](groups_api/post__api_groups) | POST | `/api/groups` | Crear un nuevo grupo. |
| [Obtener Información de Grupo](groups_api/get__api_groups_groupid) | GET | `/api/groups/{groupId}` | Obtener información de un grupo específico. |
| [Actualizar Grupo](groups_api/put__api_groups_groupid) | PUT | `/api/groups/{groupId}` | Actualizar información de un grupo específico. |
| [Borrar Grupo](groups_api/delete__api_groups_groupid) | DELETE | `/api/groups/{groupId}` | Borrar un grupo específico. |
| [Listar Usuarios](users_api/get__api_users) | GET | `/api/users` | Listar usuarios registrados en la cuenta. |
| [Crear Usuario](users_api/post__api_users) | POST | `/api/users` | Crear un nuevo usuario. |
| [Obtener Información de Usuario](users_api/get__api_users_userid) | GET | `/api/users/{userId}` | Obtener información de un usuario específico. |
| [Actualizar Usuario](users_api/put__api_users_userid) | PUT | `/api/users/{userId}` | Actualizar información de un usuario específico. |
| [Borrar Usuario](users_api/delete__api_users_userid) | DELETE | `/api/users/{userId}` | Borrar un usuario específico. |
| [Obtener Países](users_api/get__api_users_countries) | GET | `/api/users/countries` | Obtener la lista de países disponibles. |
| [Obtener Zonas Horarias](users_api/get__api_users_timezones) | GET | `/api/users/timeZones` | Obtener la lista de zonas horarias disponibles |

## Códigos de Estado HTTP

| Código de Estado | Descripción |
| --- | --- |
| **200 OK** | La solicitud ha tenido éxito. |
| **201 Created** | La solicitud ha tenido éxito y se ha creado un nuevo recurso. |
| **400 Bad Request** | Existe un problema en el lado del cliente, es necesario validar los parámetros. |
| **401 Unauthorized** | No se ha proporcionado un token válido. |
| **403 Forbidden** | El usuario asociado con el token no tiene permisos para realizar la solicitud. |
| **404 Not Found** | El recurso solicitado no existe. |
| **408 Request Timeout** | La solicitud no se completó dentro del tiempo permitido. |
| **409 Conflict** | Solicitud HTTP válida, pero se intenta poner los recursos del servidor en un estado imposible o inconsistente. |
| **415 Unsupported Media Type** | Se envió un tipo de medio no soportado. El servidor esperaba JSON. |
| **429 Too Many Requests** | Se han enviado demasiadas solicitudes en un corto periodo de tiempo. |
| **500 Internal Server Error** | Error no controlado durante el proceso de la solicitud. |
| **503 Service Unavailable** | La API no está disponible debido a una sobrecarga temporal o mantenimiento. |

## Manejo de Errores

Los errores en la API REST de Plaspy tienen la siguiente estructura JSON:

\{ "success": false, "error": "Mensaje con la explicación del error." \}

- **success:** `false` cuando se produce un error en la petición.
- **error:** Mensaje que explica la causa del error.

## Límite de Solicitudes

Es importante tener en cuenta los siguientes límites al integrar la API de Plaspy:

- **Solicitudes por minuto:** Existe un límite de peticiones para proteger el rendimiento del sistema.
- **Resultados por dispositivo diario:** Cada dispositivo tiene un límite diario de resultados consultables

Estos límites están diseñados para asegurar el rendimiento y la estabilidad del sistema.
