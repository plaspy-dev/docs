---
sidebar_label: PUT /api/users/{userId}
---
# PUT /api/users/\{userId\}
El endpoint **PUT /api/users/\{userId\}** permite actualizar la información de un usuario específico registrado en el sistema. Se utiliza para modificar los detalles del usuario, como su nombre, correo electrónico, país, zona horaria y otros atributos relevantes. Este endpoint es útil para los administradores del sistema que necesitan mantener la información de los usuarios actualizada.

Este endpoint es especialmente útil para aplicaciones que permiten la gestión y administración de usuarios, proporcionando la capacidad de actualizar datos de usuarios específicos.

## Detalles de la Solicitud

**Método HTTP**: PUT  
**URL**: `/api/users/{userId}`

## Parámetros de la Solicitud

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| userId | string | Sí | El identificador único del usuario. |

### Parámetros del cuerpo de la Solicitud

El cuerpo de la solicitud debe ser un objeto JSON con los siguientes campos:

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| name | string | Sí | El nombre del usuario. |
| email | string | Sí | La dirección de correo electrónico del usuario. |
| country | string | Sí | El país del usuario. |
| timeZone | string | Sí | La zona horaria del usuario. |
| description | string | No | Una descripción del usuario. |
| message | string | No | Un mensaje asociado con el usuario. |
| disabled | boolean | No | Indica si el usuario está deshabilitado. |
| disabledMessage | string | No | Un mensaje que describe por qué el usuario está deshabilitado. |
| tags | object | No | Un conjunto de etiquetas asociadas con el usuario. |
| privileges | array | No | Una lista de privilegios para el usuario. |
| group | string | No | El grupo al que pertenece el usuario. |
| deviceId | string | No | El identificador del dispositivo del usuario. |
| adminDevices | integer | No | El número de dispositivos gestionados por el usuario. |
| from | string | No | La fecha y hora de inicio de la actividad del usuario. |
| expires | string | No | La fecha y hora de expiración del usuario. |
| password | string | No | La contraseña del usuario \(debe estar encriptada\). |
| creation | string | No | La fecha y hora en que se creó el usuario. \(Este campo es típicamente generado por el sistema.\) |
| modification | string | No | La fecha y hora de la última modificación del usuario. \(Este campo es típicamente generado por el sistema.\) |
| lastLogin | string | No | La fecha y hora del último inicio de sesión del usuario. |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
PUT /api/users/12345 HTTP/1.1
Host: api.plaspy.com
Content-Type: application/json
Authorization: Bearer {your_auth_token}

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "Updated user for the marketing department",
  "tags": {
    "role": "user",
    "department": "marketing"
  },
  "privileges": ["read", "write"],
  "group": "Marketing",
  "deviceId": "dev-12345",
  "adminDevices": 2,
  "from": "2023-01-01T00:00:00Z",
  "expires": "2024-01-01T00:00:00Z",
  "password": "P@ssw0rd123",
  "creation": "2023-01-01T00:00:00Z",
  "modification": "2023-06-01T00:00:00Z",
  "lastLogin": "2024-05-01T00:00:00Z"
}
```

## Parámetros de Respuesta

La respuesta de este endpoint incluye los detalles del usuario actualizado o un mensaje de error si la solicitud no fue exitosa.

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la solicitud fue exitosa. |
| error | string | No | Contiene el mensaje de error en caso de que `success` sea `false`. |
| apiUsage | integer | No | Uso actual de la API por el usuario. |
| apiDailyUsage | integer | No | Uso diario de la API por el usuario. |
| id | string | No | Identificador único del usuario actualizado. |
| name | string | Sí | Nombre del usuario actualizado. |
| email | string | Sí | Correo electrónico del usuario actualizado. |
| country | string | Sí | País del usuario actualizado. |
| timeZone | string | Sí | Zona horaria del usuario actualizado. |
| description | string | No | Descripción del usuario actualizado. |
| message | string | No | Mensaje asociado con el usuario actualizado. |
| disabled | boolean | No | Indica si el usuario actualizado está deshabilitado. |
| disabledMessage | string | No | Mensaje que describe por qué el usuario actualizado está deshabilitado. |
| tags | object | No | Conjunto de etiquetas asociadas con el usuario actualizado. |
| privileges | array | No | Lista de privilegios del usuario actualizado. |
| group | string | No | Grupo al que pertenece el usuario actualizado. |
| deviceId | string | No | Identificador del dispositivo del usuario actualizado. |
| adminDevices | integer | No | Número de dispositivos gestionados por el usuario actualizado. |
| from | string | No | Fecha y hora de inicio de la actividad del usuario actualizado. |
| expires | string | No | Fecha y hora de expiración del usuario actualizado. |
| password | string | No | Contraseña del usuario actualizado \(encriptada\). |
| creation | string | No | Fecha y hora en que se creó el usuario actualizado. |
| modification | string | No | Fecha y hora de la última modificación del usuario actualizado. |
| lastLogin | string | No | Fecha y hora del último inicio de sesión del usuario actualizado. |

### Ejemplo de Respuesta Exitosa

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "id": "usr-12345",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "Updated user for the marketing department",
  "tags": {
    "role": "user",
    "department": "marketing"
  },
  "privileges": ["read", "write"],
  "group": "Marketing",
  "deviceId": "dev-12345",
  "adminDevices": 2,
  "from": "2023-01-01T00:00:00Z",
  "expires": "2024-01-01T00:00:00Z",
  "password": null,
  "creation": "2023-01-01T00:00:00Z",
  "modification": "2023-06-01T00:00:00Z",
  "lastLogin": "2024-05-01T00:00:00Z"
}
```

### Ejemplo de Respuesta de Error

```
{
  "success": false,
  "error": "Correo electrónico inválido.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}
```
