---
---
# POST /api/devices/{deviceId}/locations
Este endpoint permite enviar datos de ubicación para un dispositivo específico en la aplicación de seguimiento satelital. Es útil para actualizar el sistema con nueva información de ubicación del dispositivo.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método ```POST``` en la URL ```/api/devices/{deviceId}/locations```. Debes reemplazar ```{deviceId}``` con el ID real del dispositivo que deseas actualizar.

### Parámetros de la Solicitud

Este endpoint requiere el parámetro ```deviceId``` que debe incluirse en la ruta de la URL.

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo a actualizar. |

###   
Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe incluir un objeto JSON con los datos de ubicación para el dispositivo.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| from | string | Sí | Fecha y hora de inicio de los datos de ubicación, en formato ISO 8601. |
| to | string | Sí | Fecha y hora de fin de los datos de ubicación, en formato ISO 8601. |
| location | object | Sí | Objeto que contiene los datos de ubicación. |

Dentro del campo ```location```, el objeto tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| dateTime | string | Sí | Fecha y hora de la ubicación, en formato ISO 8601. |
| latitude | number | Sí | Latitud de la ubicación. |
| longitude | number | Sí | Longitud de la ubicación. |
| speed | number | No | Velocidad en la ubicación. |
| course | number | No | Curso \(dirección\) en la ubicación. |
| battery | integer | No | Nivel de batería del dispositivo en la ubicación. |
| fuel | integer | No | Nivel de combustible del dispositivo en la ubicación. |
| fuel2 | integer | No | Nivel de combustible secundario en la ubicación. |
| temperature | number | No | Temperatura medida en la ubicación. |
| temperature2 | number | No | Temperatura secundaria medida en la ubicación. |
| sensorTime1 | integer | No | Tiempo del sensor 1 en la ubicación. |
| sensorTime2 | integer | No | Tiempo del sensor 2 en la ubicación. |
| sensorTime3 | integer | No | Tiempo del sensor 3 en la ubicación. |
| sensorTime4 | integer | No | Tiempo del sensor 4 en la ubicación. |
| inactiveSeconds | integer | No | Segundos de inactividad en la ubicación. |
| rpm | integer | No | Revoluciones por minuto en la ubicación. |
| milleage | number | No | Kilometraje en la ubicación. |
| warningTexts | array | No | Textos de advertencia en la ubicación. |
| alertTexts | array | No | Textos de alerta en la ubicación. |
| alerts | array | No | Alertas en la ubicación. |
| warnings | array | No | Advertencias en la ubicación. |
| hasCriticalAlert | boolean | No | Indica si hay alertas críticas en la ubicación. |
| attributes | object | No | Atributos adicionales en la ubicación. |
| accessoriesAttributes | array | No | Atributos adicionales de accesorios en la ubicación. |
| inputs | array | No | Estado de las entradas en la ubicación. |
| outputs | array | No | Estado de las salidas en la ubicación. |

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

###   
Ejemplo de Solicitud

```POST /api/devices/device123/locations HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "from": "2024-06-01T00:00:00Z",
  "to": "2024-06-01T23:59:59Z",
  "location": {
    "dateTime": "2024-06-01T12:00:00Z",
    "latitude": 40.712776,
    "longitude": -74.005974,
    "speed": 60.5,
    "course": 180.0,
    "battery": 85,
    "fuel": 50,
    "fuel2": 50,
    "temperature": 22.5,
    "temperature2": 22.0,
    "sensorTime1": 1234567890,
    "sensorTime2": 1234567891,
    "sensorTime3": 1234567892,
    "sensorTime4": 1234567893,
    "inactiveSeconds": 120,
    "rpm": 3000,
    "milleage": 15000,
    "warningTexts": ["Engine Check"],
    "alertTexts": ["Speeding"],
    "alerts": ["High Speed"],
    "warnings": ["Low Fuel"],
    "hasCriticalAlert": true,
    "attributes": {
      "customAttribute1": "value1",
      "customAttribute2": "value2"
    },
    "accessoriesAttributes": [
      {
        "accessoryType": "sensor",
        "accessoryStatus": "active"
      }
    ],
    "inputs": [true, false, true],
    "outputs": [false, true]
  }
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
| locations | array | No | Lista de objetos de ubicación si la solicitud fue exitosa. Cada objeto contiene información detallada sobre la ubicación. |

###   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "locations": [
    {
      "dateTime": "2024-06-01T12:00:00Z",
      "latitude": 40.712776,
      "longitude": -74.005974,
      "speed": 60.5,
      "course": 180.0,
      "battery": 85,
      "fuel": 50,
      "fuel2": 50,
      "temperature": 22.5,
      "temperature2": 22.0,
      "sensorTime1": 1234567890,
      "sensorTime2": 1234567891,
      "sensorTime3": 1234567892,
      "sensorTime4": 1234567893,
      "inactiveSeconds": 120,
      "rpm": 3000,
      "milleage": 15000,
      "warningTexts": ["Engine Check"],
      "alertTexts": ["Speeding"],
      "alerts": ["High Speed"],
      "warnings": ["Low Fuel"],
      "hasCriticalAlert": true,
      "attributes": {
        "customAttribute1": "value1",
        "customAttribute2": "value2"
      },
      "accessoriesAttributes": [
        {
          "accessoryType": "sensor",
          "accessoryStatus": "active"
        }
      ],
      "inputs": [true, false, true],
      "outputs": [false, true]
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

Este endpoint es esencial para actualizar los datos de ubicación de un dispositivo dentro del sistema Plaspy. Permite a los usuarios enviar información de ubicación detallada y actualizada para un dispositivo específico, asegurando un seguimiento y monitoreo precisos.
