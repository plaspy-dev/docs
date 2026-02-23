---
---
# GET /api/users/{userId}
El endpoint **GET /api/users/\{userId\}** permite obtener los detalles de un usuario específico registrado en el sistema. Proporciona información completa sobre el usuario, incluyendo nombre, correo electrónico, país, zona horaria, y otros atributos importantes. Este endpoint es útil para la gestión de usuarios, permitiendo a los administradores del sistema revisar y administrar los datos de un usuario en particular.

Este endpoint es especialmente útil para aplicaciones que necesitan mostrar información detallada de un usuario o para administradores que requieren verificar o actualizar los datos de un usuario específico.

## Detalles de la Solicitud

**Método HTTP**: GET  
**URL**: ```/api/users/{userId}```

##   
Parámetros de la Solicitud

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| userId | string | Sí | El identificador único del usuario. |

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

###   
Ejemplo de Solicitud

```GET /api/users/12345 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

##   
Parámetros de Respuesta

La respuesta de este endpoint contiene una estructura detallada del usuario. A continuación se detallan los campos de la respuesta:

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la solicitud fue exitosa. |
| error | string | No | Contiene el mensaje de error en caso de que ```success``` sea ```false```. |
| apiUsage | integer | No | Uso actual de la API por el usuario. |
| apiDailyUsage | integer | No | Uso diario de la API por el usuario. |
| id | string | No | Identificador único del usuario. |
| name | string | Sí | Nombre del usuario. |
| email | string | Sí | Correo electrónico del usuario. |
| country | string | Sí | País del usuario. |
| timeZone | string | Sí | Zona horaria del usuario. |
| description | string | No | Descripción adicional del usuario. |
| message | string | No | Mensaje asociado al usuario. |
| disabled | boolean | No | Indica si el usuario está deshabilitado. |
| disabledMessage | string | No | Mensaje que describe por qué el usuario está deshabilitado. |
| tags | object | No | Conjunto de etiquetas asociadas al usuario. |
| privileges | array | No | Lista de privilegios del usuario. |
| group | string | No | Grupo al que pertenece el usuario. |
| deviceId | string | No | Identificador del dispositivo del usuario. |
| adminDevices | integer | No | Número de dispositivos gestionados por el usuario. |
| from | string | No | Fecha y hora de inicio de la actividad del usuario. |
| expires | string | No | Fecha y hora de expiración del usuario. |
| password | string | No | Contraseña del usuario \(cifrada\). |
| creation | string | No | Fecha y hora de creación del usuario. |
| modification | string | No | Fecha y hora de la última modificación del usuario. |
| lastLogin | string | No | Fecha y hora del último inicio de sesión del usuario. |

###   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
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
```

### Ejemplo de Respuesta de Error

```{
  "success": false,
  "error": "Usuario no encontrado.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}```
