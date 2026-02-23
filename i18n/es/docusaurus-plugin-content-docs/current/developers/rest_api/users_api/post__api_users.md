---
---
# POST /api/users
El endpoint **POST /api/users** se utiliza para crear un nuevo usuario en el sistema. Este endpoint es esencial para añadir nuevos usuarios, permitiendo especificar varios atributos como nombre, correo electrónico, país y zona horaria, junto con detalles opcionales como descripción y etiquetas. Garantiza que la base de usuarios del sistema se pueda gestionar de manera dinámica, permitiendo a los administradores agregar nuevos usuarios según sea necesario.

Este endpoint es particularmente útil para aplicaciones que requieren funcionalidad de registro de usuarios o para administradores del sistema que necesitan crear cuentas de usuarios manualmente.

### Detalles de la Solicitud

**Método HTTP**: POST  
**URL**: ```/api/users```

##   
Parámetros de la Solicitud

La solicitud a este endpoint no tiene parámetros en la URL, pero requiere un cuerpo JSON con los detalles del usuario.

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

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

###   
Ejemplo de Solicitud

```POST /api/users HTTP/1.1
Host: api.plaspy.com
Content-Type: application/json
Authorization: Bearer {your_auth_token}

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "Nueva usuaria para el departamento de marketing",
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

##   
Parámetros de Respuesta

La respuesta de este endpoint incluye los detalles del usuario creado o un mensaje de error si la solicitud no fue exitosa.

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la solicitud fue exitosa. |
| error | string | No | Contiene el mensaje de error en caso de que ```success``` sea ```false```. |
| apiUsage | integer | No | Uso actual de la API por el usuario. |
| apiDailyUsage | integer | No | Uso diario de la API por el usuario. |
| id | string | No | Identificador único del usuario creado. |
| name | string | Sí | Nombre del usuario creado. |
| email | string | Sí | Correo electrónico del usuario creado. |
| country | string | Sí | País del usuario creado. |
| timeZone | string | Sí | Zona horaria del usuario creado. |
| description | string | No | Descripción del usuario creado. |
| message | string | No | Mensaje asociado con el usuario creado. |
| disabled | boolean | No | Indica si el usuario creado está deshabilitado. |
| disabledMessage | string | No | Mensaje que describe por qué el usuario creado está deshabilitado. |
| tags | object | No | Conjunto de etiquetas asociadas con el usuario creado. |
| privileges | array | No | Lista de privilegios del usuario creado. |
| group | string | No | Grupo al que pertenece el usuario creado. |
| deviceId | string | No | Identificador del dispositivo del usuario creado. |
| adminDevices | integer | No | Número de dispositivos gestionados por el usuario creado. |
| from | string | No | Fecha y hora de inicio de la actividad del usuario creado. |
| expires | string | No | Fecha y hora de expiración del usuario creado. |
| password | string | No | Contraseña del usuario creado \(encriptada\). |
| creation | string | No | Fecha y hora en que se creó el usuario creado. |
| modification | string | No | Fecha y hora de la última modificación del usuario creado. |
| lastLogin | string | No | Fecha y hora del último inicio de sesión del usuario creado. |

###   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 15,
  "id": "usr-67890",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "country": "USA",
  "timeZone": "America/Los_Angeles",
  "description": "Nueva usuaria para el departamento de marketing",
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
  "lastLogin": null
}```

### Ejemplo de Respuesta de Error

```{
  "success": false,
  "error": "Correo electrónico inválido.",
  "apiUsage": 150,
  "apiDailyUsage": 15
}```
