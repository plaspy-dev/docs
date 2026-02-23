---
---
# GET /api/devices
Este endpoint permite obtener una lista de dispositivos disponibles en la aplicación de seguimiento satelital. Es útil para ver todos los dispositivos que están siendo rastreados y obtener detalles básicos sobre cada uno de ellos.

### Detalles de la Solicitud

La solicitud se realiza a través del método ```GET``` en la URL ```/api/devices```. No se requieren parámetros adicionales en la URL para realizar esta solicitud.

### Parámetros de la Solicitud

Este endpoint no requiere parámetros específicos en la solicitud.

### Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```GET /api/devicesHTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
```

###   
Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y, en caso de éxito, un listado de los dispositivos. La respuesta puede variar dependiendo de si la solicitud fue exitosa o si hubo algún error.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| devices | array | No | Lista de dispositivos. Cada dispositivo es representado por un objeto con detalles específicos. |

Dentro del campo ```devices```, cada dispositivo tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| id | string | No | Identificador único del dispositivo. |
| name | string | No | Nombre del dispositivo. |
| description | string | No | Descripción del dispositivo. |
| min \(Mobile Identity Number\) | string | No | Número de teléfono asociado al dispositivo. |
| tags | object | No | Tags asociados al dispositivo. |
| expires | string | No | Fecha y hora de expiración del dispositivo, en formato ISO 8601. |

###   
Ejemplo de Respuesta Exitosa

```{
    "apiDailyUsage": 3000,
    "apiUsage": 150,
    "devices": [
        {
            "description": "Main tracking device",
            "expires": "2024-12-31T23:59:59Z",
            "id": "device123",
            "min": "12345",
            "name": "Device 1",
            "tags": {
                "tag1": "value1",
                "tag2": "value2"
            }
        },
        {
            "description": "Backup tracking device",
            "expires": "2025-12-31T23:59:59Z",
            "id": "device456",
            "min": "67890",
            "name": "Device 2",
            "tags": {
                "tagA": "valueA",
                "tagB": "valueB"
            }
        }
    ],
    "success": true
}```

###   
Ejemplo de Respuesta de Error

#### Respuesta de Error 400 \(Bad Request\)

```{
    "success": false,
    "error": "Bad Request",
    "apiUsage": 150,
    "apiDailyUsage": 3000
}```

#### Respuesta de Error 500 \(Internal Server Error\)

```{
    "success": false,
    "error": "Internal Server Error",
    "apiUsage": 150,
    "apiDailyUsage": 3000
}```

Este endpoint es crucial para gestionar y supervisar los dispositivos rastreados dentro del sistema Plaspy. Permite a los usuarios obtener información detallada y actualizada sobre todos los dispositivos bajo su control.
