---
sidebar_label: GET /api/users
---
# GET /api/users
El endpoint **GET /api/users** permite obtener una lista de todos los usuarios registrados en el sistema. Este endpoint es útil para administrar y visualizar la información de los usuarios, incluyendo detalles como su nombre, correo electrónico, país, y otros atributos importantes. La respuesta incluye detalles completos sobre cada usuario, lo que permite una administración eficiente y la posibilidad de integrar estos datos con otras aplicaciones o sistemas.

Este endpoint es particularmente útil para los administradores del sistema que necesitan revisar y gestionar los usuarios, ya sea para realizar auditorías, verificaciones o actualizaciones de datos. También puede ser utilizado en aplicaciones donde se requiere mostrar información de los usuarios en un frontend.

## Detalles de la Solicitud

**Método HTTP**: GET  
**URL**: `/api/users`

###   
Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
GET /api/users HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```


## Parámetros de Respuesta

La respuesta de este endpoint contiene una estructura detallada de los usuarios. A continuación, se detallan los campos de la respuesta:

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la solicitud fue exitosa o no. |
| error | string | No | Contiene el mensaje de error en caso de que `success` sea `false`. |
| apiUsage | integer | No | Uso actual de la API por el usuario. |
| apiDailyUsage | integer | No | Uso diario de la API por el usuario. |
| users | array | No | Lista de objetos de usuarios. |
| users.id | string | No | Identificador único del usuario. |
| users.name | string | Sí | Nombre del usuario. |
| users.email | string | Sí | Correo electrónico del usuario. |
| users.country | string | Sí | País del usuario. |
| users.timeZone | string | Sí | Zona horaria del usuario. |
| users.description | string | No | Descripción adicional del usuario. |
| users.message | string | No | Mensaje asociado al usuario. |
| users.disabled | boolean | No | Indica si el usuario está deshabilitado. |
| users.disabledMessage | string | No | Mensaje que describe por qué el usuario está deshabilitado. |
| users.tags | object | No | Conjunto de etiquetas asociadas al usuario. |
| users.privileges | array | No | Lista de privilegios del usuario. |
| users.group | string | No | Grupo al que pertenece el usuario. |
| users.deviceId | string | No | Identificador del dispositivo del usuario. |
| users.adminDevices | integer | No | Número de dispositivos administrados por el usuario. |
| users.from | string | No | Fecha y hora de inicio de la actividad del usuario. |
| users.expires | string | No | Fecha y hora de expiración del usuario. |
| users.password | string | No | Contraseña del usuario \(cifrada\). |
| users.creation | string | No | Fecha y hora de creación del usuario. |
| users.modification | string | No | Fecha y hora de la última modificación del usuario. |
| users.lastLogin | string | No | Fecha y hora del último inicio de sesión del usuario. |

### Ejemplo de Respuesta Exitosa

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "users": [
    {
      "id": "usr-12345",
      "name": "Juan Perez",
      "email": "juan.perez@example.com",
      "country": "Argentina",
      "timeZone": "America/Argentina/Buenos_Aires",
      "description": "Administrador de sistemas",
      "message": null,
      "disabled": false,
      "disabledMessage": null,
      "tags": {
        "role": "admin"
      },
      "privileges": ["read", "write", "execute"],
      "group": "Admins",
      "deviceId": "dev-67890",
      "adminDevices": 5,
      "from": "2023-01-01T00:00:00Z",
      "expires": "2024-01-01T00:00:00Z",
      "password": null,
      "creation": "2023-01-01T00:00:00Z",
      "modification": "2023-06-01T00:00:00Z",
      "lastLogin": "2024-05-01T00:00:00Z"
    }
  ]
}
```


### Ejemplo de Respuesta de Error

```
{
  "success": false,
  "error": "Authentication failed. Invalid token.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}`
