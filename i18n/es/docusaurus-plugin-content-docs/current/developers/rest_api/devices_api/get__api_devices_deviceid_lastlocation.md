---
---
# GET /api/devices/{deviceId}/lastLocation
Este endpoint permite obtener la última ubicación conocida de un dispositivo específico en la aplicación de seguimiento satelital. Es útil para rastrear la ubicación más reciente del dispositivo y obtener detalles sobre esta ubicación.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método ```GET``` en la URL ```/api/devices/{deviceId}/lastLocation```. Debes reemplazar ```{deviceId}``` con el ID real del dispositivo que deseas consultar.

### Parámetros de la Solicitud

Este endpoint requiere el parámetro ```deviceId``` que debe incluirse en la ruta de la URL.

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo a consultar. |

###   
Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```GET /api/devices/device123/lastLocation HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
```

###   
Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y, en caso de éxito, información sobre la última ubicación del dispositivo solicitado. La respuesta puede variar dependiendo de si la solicitud fue exitosa o si hubo algún error.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| lastLocation | object | No | Información sobre la última ubicación del dispositivo. |

Dentro del campo ```lastLocation```, el objeto tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| dateTime | string | Sí | Fecha y hora de la última ubicación, en formato ISO 8601. |
| latitude | number | Sí | Latitud de la última ubicación. |
| longitude | number | Sí | Longitud de la última ubicación. |
| speed | number | No | Velocidad en la última ubicación. |
| course | number | No | Curso \(dirección\) en la última ubicación. |
| battery | integer | No | Nivel de batería del dispositivo en la última ubicación. |
| fuel | integer | No | Nivel de combustible del dispositivo en la última ubicación. |
| fuel2 | integer | No | Nivel de combustible secundario en la última ubicación. |
| temperature | number | No | Temperatura medida en la última ubicación. |
| temperature2 | number | No | Temperatura secundaria medida en la última ubicación. |
| sensorTime1 | integer | No | Tiempo del sensor 1 en la última ubicación. |
| sensorTime2 | integer | No | Tiempo del sensor 2 en la última ubicación. |
| sensorTime3 | integer | No | Tiempo del sensor 3 en la última ubicación. |
| sensorTime4 | integer | No | Tiempo del sensor 4 en la última ubicación. |
| inactiveSeconds | integer | No | Segundos de inactividad en la última ubicación. |
| rpm | integer | No | Revoluciones por minuto en la última ubicación. |
| milleage | number | No | Kilometraje en la última ubicación. |
| warningTexts | array | No | Textos de advertencia en la última ubicación. |
| alertTexts | array | No | Textos de alerta en la última ubicación. |
| alerts | array | No | Alertas en la última ubicación. |
| warnings | array | No | Advertencias en la última ubicación. |
| hasCriticalAlert | boolean | No | Indica si hay alertas críticas en la última ubicación. |
| attributes | object | No | Atributos adicionales de la última ubicación. |
| accessoriesAttributes | array | No | Atributos adicionales de accesorios en la última ubicación. |
| inputs | array | No | Estado de las entradas en la última ubicación. |
| outputs | array | No | Estado de las salidas en la última ubicación. |

###   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "lastLocation": {
    "dateTime": "2024-06-02T08:48:25.009Z",
    "latitude": 0,
    "longitude": 0,
    "speed": 0,
    "course": 0,
    "battery": 0,
    "fuel": 0,
    "fuel2": 0,
    "temperature": 0,
    "temperature2": 0,
    "sensorTime1": 0,
    "sensorTime2": 0,
    "sensorTime3": 0,
    "sensorTime4": 0,
    "inactiveSeconds": 0,
    "rpm": 0,
    "milleage": 0,
    "warningTexts": [
      "string"
    ],
    "alertTexts": [
      "string"
    ],
    "alerts": [
      "string"
    ],
    "warnings": [
      "string"
    ],
    "hasCriticalAlert": true,
    "attributes": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "accessoriesAttributes": [
      {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    ],
    "inputs": [
      true
    ],
    "outputs": [
      true
    ]
  }
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

#### Respuesta de Error 500 \(Internal Server Error\)

```{
  "success": false,
  "error": "Internal Server Error",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

Este endpoint es esencial para rastrear la última ubicación conocida de un dispositivo dentro del sistema Plaspy. Permite a los usuarios obtener información detallada y actualizada sobre la última posición registrada de un dispositivo específico, incluyendo atributos personalizados y datos de accesorios.
