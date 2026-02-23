---
---
# PATCH /api/users/{userId}
El endpoint ```PATCH /api/users/{userId}``` permite actualizar parcialmente la información de un usuario específico. Este método es útil cuando solo se necesita modificar algunos campos del usuario sin tener que enviar todos los datos. El identificador del usuario \(```userId```\) se incluye en la ruta de la solicitud.

## Detalles de la Solicitud

- **Método HTTP:** ```PATCH```
- **URL:** ```/api/users/{userId}```
- **Autenticación:** Requiere un token Bearer.
- **Formato de solicitud:** JSON

## Parámetros de la Solicitud

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| userId | string | Sí | El identificador único del usuario a actualizar. |

###   
Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe contener un array de operaciones de parcheo \(patch operations\) para indicar las modificaciones que se desean realizar.

###   
Cuerpo de la Solicitud

Cada operación de parcheo en el cuerpo de la solicitud debe seguir el formato definido en la especificación JSON Patch. Una operación de parcheo incluye los siguientes campos:

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| op | string | Sí | La operación a realizar, puede ser ```add```, ```remove```, ```replace```, ```move```, ```copy``` o ```test```. |
| path | string | Sí | La ruta del campo a modificar, siguiendo la sintaxis de JSON Pointer. |
| value | object | No | El nuevo valor para el campo especificado en ```path``` \(requerido para ```add``` y ```replace```\). |

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

###   
Ejemplo de Solicitud

```PATCH /api/users/usr-12345 HTTP/1.1
Host: www.plaspy.com
Authorization: Bearer tu_token_de_autenticacion
Content-Type: application/json

[
    {
        "op": "replace",
        "path": "/email",
        "value": "nuevo_email@example.com"
    },
    {
        "op": "add",
        "path": "/tags",
        "value": { "vip": "true" }
    }
]```

##   
Parámetros de Respuesta

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la operación fue exitosa. |
| error | string | No | Mensaje de error si la operación no fue exitosa. |
| apiUsage | integer | No | Uso del API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario del API. |
| id | string | No | Identificador del usuario actualizado. |
| name | string | No | Nombre del usuario. |
| email | string | No | Email del usuario. |
| country | string | No | País del usuario. |
| timeZone | string | No | Zona horaria del usuario. |
| description | string | No | Descripción del usuario. |
| message | string | No | Mensaje asociado al usuario. |
| disabled | boolean | No | Indica si el usuario está deshabilitado. |
| tags | object | No | Etiquetas asociadas al usuario. |
| privileges | array | No | Privilegios del usuario. |
| group | string | No | Grupo al que pertenece el usuario. |
| deviceId | string | No | Identificador del dispositivo asociado al usuario. |
| adminDevices | integer | No | Número de dispositivos administrados por el usuario. |
| from | string | No | Fecha de inicio de la validez del usuario. |
| expires | string | No | Fecha de expiración de la validez del usuario. |
| password | string | No | Contraseña del usuario. |
| creation | string | No | Fecha de creación del usuario. |
| modification | string | No | Fecha de la última modificación del usuario. |
| lastLogin | string | No | Fecha del último inicio de sesión del usuario. |

### Ejemplo de Respuesta Exitosa

```{
    "success": true,
    "id": "usr-12345",
    "name": "Juan Perez",
    "email": "nuevo_email@example.com",
    "country": "Colombia",
    "timeZone": "America/Bogota",
    "description": "Usuario VIP",
    "tags": {
        "vip": "true"
    },
    "privileges": ["read", "write"],
    "group": "administradores",
    "deviceId": "dev-67890",
    "adminDevices": 5,
    "from": "2023-01-01T00:00:00Z",
    "expires": "2024-01-01T00:00:00Z",
    "creation": "2022-01-01T00:00:00Z",
    "modification": "2023-06-01T00:00:00Z",
    "lastLogin": "2023-06-01T00:00:00Z"
}
```

### Ejemplo de Respuesta de Error

```{
    "success": false,
    "error": "Invalid patch operation",
    "apiUsage": 25,
    "apiDailyUsage": 100
}
```

Este endpoint facilita la actualización de datos específicos de un usuario, garantizando flexibilidad y eficiencia en la gestión de usuarios dentro del sistema Plaspy.
