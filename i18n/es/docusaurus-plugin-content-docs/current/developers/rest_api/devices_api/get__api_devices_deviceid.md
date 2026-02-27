---
sidebar_label: GET /api/devices/{deviceId}
---
# GET /api/devices/\{deviceId\}
Este endpoint permite obtener información detallada sobre un dispositivo específico en la aplicación de seguimiento satelital. Es útil para obtener detalles completos sobre un dispositivo en particular.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método `GET` en la URL `/api/devices/{deviceId}`. Debes reemplazar `{deviceId}` con el ID real del dispositivo que deseas consultar.

### Parámetros de la Solicitud

Este endpoint requiere el parámetro `deviceId` que debe incluirse en la ruta de la URL.

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo a consultar. |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
GET /api/devices/device123 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
```

### Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y, en caso de éxito, información detallada sobre el dispositivo solicitado. La respuesta puede variar dependiendo de si la solicitud fue exitosa o si hubo algún error.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| device | object | No | Información detallada sobre el dispositivo. |

Dentro del campo `device`, el objeto tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| id | string | No | Identificador único del dispositivo. |
| name | string | No | Nombre del dispositivo. |
| description | string | No | Descripción del dispositivo. |
| min \(Mobile Identity Number\) | string | No | Número de teléfono asociado al dispositivo. |
| tags | object | No | Etiquetas asociadas al dispositivo. |
| expires | string | No | Fecha y hora de expiración del dispositivo, en formato ISO 8601. |

### Ejemplo de Respuesta Exitosa

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "device": {
    "id": "device123",
    "name": "Device 1",
    "description": "Main tracking device",
    "min": "12345",
    "tags": {
      "tag1": "value1",
      "tag2": "value2"
    },
    "expires": "2024-12-31T23:59:59Z"
  }
}
```

### Ejemplo de Respuesta de Error

#### Respuesta de Error 400 \(Bad Request\)

```
{
  "success": false,
  "error": "Bad Request",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

#### Respuesta de Error 500 \(Internal Server Error\)

```
{
  "success": false,
  "error": "Internal Server Error",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

Este endpoint es esencial para gestionar dispositivos individuales dentro del sistema Plaspy. Permite a los usuarios obtener información detallada y actualizada sobre un dispositivo específico mediante su identificador único.
