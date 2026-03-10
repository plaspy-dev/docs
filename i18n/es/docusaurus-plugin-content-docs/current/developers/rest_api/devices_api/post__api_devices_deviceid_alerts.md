---
sidebar_label: POST /api/devices/{deviceId}/alerts
---
# POST /api/devices/\{deviceId\}/alerts
Este endpoint permite enviar datos de alertas para un dispositivo específico en la aplicación de seguimiento satelital. Es útil para actualizar el sistema con nueva información de alertas del dispositivo.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método `POST` en la URL `/api/devices/{deviceId}/alerts`. Debes reemplazar `{deviceId}` con el ID real del dispositivo que deseas actualizar.

### Parámetros de la Solicitud

Este endpoint requiere el parámetro `deviceId` que debe incluirse en la ruta de la URL.

| Parámetro | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo a actualizar. |

### Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe incluir un objeto JSON con los datos de la alerta para el dispositivo.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| from | string | Sí | Fecha y hora de inicio de la alerta, en formato ISO 8601. |
| to | string | Sí | Fecha y hora de fin de la alerta, en formato ISO 8601. |
| alertName | string | No | Nombre de la alerta por la cual filtrar. Si se omite o es nulo, se devolverán todas las alertas disponibles en el rango de fechas especificado. Consulta la sección de **Nombres de Alertas Disponibles** a continuación para los valores válidos. |

### Nombres de Alertas Disponibles

El parámetro `alertName` acepta valores de cadena de texto específicos correspondientes a los diferentes tipos de eventos rastreados por el dispositivo. Si no se proporciona este campo, la API devolverá todas las alertas del dispositivo dentro del rango de fechas.

Los nombres de alerta válidos son:

| Nombre de Alerta | Descripción |
| --- | --- |
| `GPSOff` | El GPS está apagado. |
| `GPSNoSignal` | El GPS ha perdido la señal. |
| `ForbiddenArea` | El dispositivo entró en un área prohibida (geocerca). |
| `AllowedArea` | El dispositivo salió o entró en un área permitida. |
| `SOSButton` | Se presionó el botón de pánico/SOS. |
| `SpeedLimit` | El dispositivo excedió el límite de velocidad. |
| `NoMovementTime` | El dispositivo ha estado inactivo/detenido por demasiado tiempo. |
| `Sensor1On` | Se activó el sensor 1. |
| `GPSUnplugged` | El dispositivo fue desconectado de su fuente de energía principal. |
| `Sensor1Off` | Se desactivó el sensor 1. |
| `TemperatureGreaterThan` | La temperatura excedió el límite máximo. |
| `TemperatureLowerThan` | La temperatura cayó por debajo del límite mínimo. |
| `FuelJumpDown` | Caída repentina en el nivel de combustible (posible robo). |
| `FuelJumpUp` | Aumento repentino en el nivel de combustible (reabastecimiento). |
| `FuelLessThan` | El nivel de combustible está críticamente bajo. |
| `FutureDate` | El dispositivo envió una fecha en el futuro. |
| `PastDate` | El dispositivo envió una fecha en el pasado. |
| `Sensor2On` | Se activó el sensor 2. |
| `Sensor2Off` | Se desactivó el sensor 2. |
| `Sensor3On` | Se activó el sensor 3. |
| `Sensor3Off` | Se desactivó el sensor 3. |
| `Sensor4On` | Se activó el sensor 4. |
| `Sensor4Off` | Se desactivó el sensor 4. |
| `ExpiredDate` | Los datos han expirado. |
| `Mileage` | Alerta de kilometraje activada. |
| `Vibration` | Vibración detectada. |
| `RPM` | Límite de RPM excedido. |
| `CheckPoint` | Se alcanzó un punto de control. |
| `CheckArea` | Se cruzó un área de control. |
| `SpeedLower` | La velocidad cayó por debajo de un límite establecido. |
| `Offline` | El dispositivo se desconectó (offline). |
| `LowBattery` | La batería interna del dispositivo está baja. |
| `BatteryVoltage` | El voltaje de la batería principal está fuera de rango. |
| `SleepMode` | El dispositivo entró en modo de suspensión/ahorro de energía. |
| `Temperature2LessThan` | La temperatura secundaria cayó por debajo del límite mínimo. |
| `Temperature2GreaterThan` | La temperatura secundaria excedió el límite máximo. |
| `Route` | Desviación de ruta detectada. |
| `Sensor1Time` | Se alcanzó el límite de tiempo específico del sensor 1. |
| `Sensor2Time` | Se alcanzó el límite de tiempo específico del sensor 2. |
| `Sensor3Time` | Se alcanzó el límite de tiempo específico del sensor 3. |
| `Sensor4Time` | Se alcanzó el límite de tiempo específico del sensor 4. |
| `SensorAccumulated1Time` | El tiempo acumulado en el sensor 1 excedió el límite. |
| `SensorAccumulated2Time` | El tiempo acumulado en el sensor 2 excedió el límite. |
| `SensorAccumulated3Time` | El tiempo acumulado en el sensor 3 excedió el límite. |
| `SensorAccumulated4Time` | El tiempo acumulado en el sensor 4 excedió el límite. |
| `FuelJumpDown2` | Caída repentina en el nivel de combustible del tanque secundario. |
| `FuelJumpUp2` | Aumento repentino en el nivel de combustible del tanque secundario. |
| `FuelLessThan2` | El nivel de combustible del tanque secundario está críticamente bajo. |
| `AttributeEquals` | Se cumplió la condición de igualdad de un atributo personalizado. |
| `AttributeLessThan` | Se cumplió la condición de menor-que de un atributo personalizado. |
| `AttributeGreaterThan` | Se cumplió la condición de mayor-que de un atributo personalizado. |
| `HarshBraking` | Frenado brusco o repentino detectado. |
| `HarshAcceleration` | Aceleración brusca o repentina detectada. |
| `AuthenticationFailed` | Falló la autenticación del dispositivo o del conductor. |
| `IdleTime` | El vehículo ha estado en ralentí por demasiado tiempo. |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
POST /api/devices/device123/alerts HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
 "from": "2024-06-01T00:00:00Z",
 "to": "2024-06-01T23:59:59Z",
 "alertName": "Speeding Alert"
}
```

### Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y cualquier error que pueda haber ocurrido.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| alerts | array | No | Lista de objetos de alerta si la solicitud fue exitosa. Cada objeto contiene información detallada sobre la alerta. |

Dentro del campo `alerts`, el objeto tiene los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| dateTime | string | Sí | Fecha y hora de la alerta. |
| latitude | number | Sí | Latitud de la alerta. |
| longitude | number | Sí | Longitud de la alerta. |
| text | string | No | Texto descriptivo de la alerta. |
| notifications | array | No | Lista de notificaciones. |
| alerts | array | No | Lista de alertas asociadas. |

### Ejemplo de Respuesta Exitosa

```
{
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

Este endpoint es esencial para actualizar los datos de alertas de un dispositivo dentro del sistema. Permite a los usuarios enviar información de alertas detallada y actualizada para un dispositivo específico, asegurando un seguimiento y monitoreo precisos.
