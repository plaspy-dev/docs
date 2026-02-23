---
---
# POST /api/devices/{deviceId}/alerts
Este endpoint permite enviar datos de alertas para un dispositivo específico en la aplicación de seguimiento satelital. Es útil para actualizar el sistema con nueva información de alertas del dispositivo.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método ```POST``` en la URL ```/api/devices/{deviceId}/alerts```. Debes reemplazar ```{deviceId}``` con el ID real del dispositivo que deseas actualizar.

### Parámetros de la Solicitud

Este endpoint requiere el parámetro ```deviceId``` que debe incluirse en la ruta de la URL.

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo a actualizar. |

###   
Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe incluir un objeto JSON con los datos de la alerta para el dispositivo.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| from | string | Sí | Fecha y hora de inicio de la alerta, en formato ISO 8601. |
| to | string | Sí | Fecha y hora de fin de la alerta, en formato ISO 8601. |
| alertName | string | No | Nombre de la alerta. |

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

###   
Ejemplo de Solicitud

```POST /api/devices/device123/alerts HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "from": "2024-06-01T00:00:00Z",
  "to": "2024-06-01T23:59:59Z",
  "alertName": "Speeding Alert"
}
```

###   
Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y cualquier error que pueda haber ocurrido.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| alerts | array | No | Lista de objetos de alerta si la solicitud fue exitosa. Cada objeto contiene información detallada sobre la alerta. |

Dentro del campo ```alerts```, el objeto tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| dateTime | string | Sí | Fecha y hora de la alerta. |
| latitude | number | Sí | Latitud de la alerta. |
| longitude | number | Sí | Longitud de la alerta. |
| text | string | No | Texto descriptivo de la alerta. |
| notifications | array | No | Lista de notificaciones. |
| alerts | array | No | Lista de alertas asociadas. |

###   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "alerts": [
    {
      "dateTime": "2024-06-01T12:00:00Z",
      "latitude": 40.712776,
      "longitude": -74.005974,
      "text": "Speeding Alert",
      "notifications": ["Email", "SMS"],
      "alerts": ["High Speed"]
    }
  ]
}
```

###   
Ejemplo de Respuesta de Error

#### Respuesta de Error 400 \(Bad Request\)

```{
  "success": false,
  "error": "Bad Request",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

####   
Respuesta de Error 500 \(Internal Server Error\)

```{
  "success": false,
  "error": "Internal Server Error",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

Este endpoint es esencial para actualizar los datos de alertas de un dispositivo dentro del sistema Plaspy. Permite a los usuarios enviar información de alertas detallada y actualizada para un dispositivo específico, asegurando un seguimiento y monitoreo precisos.
