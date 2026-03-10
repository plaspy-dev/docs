---
sidebar_label: POST /api/devices/{deviceId}/sendCommand
sidebar_position: 4
---
# POST /api/devices/\{deviceId\}/sendCommand
Este endpoint te permite enviar un comando a un dispositivo específico en la aplicación de rastreo satelital. Es útil para ejecutar instrucciones remotas o enviar una configuración específica al dispositivo.

### Detalles de la Solicitud

La solicitud se realiza utilizando el método `POST` en la URL `/api/devices/{deviceId}/sendCommand`. Debes reemplazar `{deviceId}` con el ID real del dispositivo al que quieres enviar el comando.

### Parámetros de la Solicitud

Este endpoint requiere que el parámetro `deviceId` se incluya en la ruta de la URL.

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| deviceId | string | Sí | El identificador único del dispositivo al que se enviará el comando. |

### Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe incluir un objeto JSON con los datos del comando para el dispositivo.

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| command | string | Sí | El comando a enviar al dispositivo. |
| format | string | No | Formato de la cadena del comando. Puede ser uno de los siguientes:<br/>- `Text`: El comando es una cadena de texto sin formato.<br/>- `Hex`: El comando es una cadena hexadecimal.<br/>- `Base64`: El comando es una cadena codificada en Base64.<br/>Por defecto es `Text`. |
| sms | boolean | No | Si es `true`, el comando se envía por SMS. Si es `false` (o se omite), el comando se envía mediante GPRS al dispositivo. |

### Formatos de Comando y Método de Entrega

Este endpoint admite diferentes formatos para la cadena de comando y dos métodos de entrega. Entender estas opciones garantiza que el comando sea interpretado correctamente por el dispositivo físico.

#### 1. Formatos de Comando (`format`)
El parámetro `format` dicta cómo se decodificará la cadena proporcionada en el campo `command` antes de ser enviada al dispositivo.

- **`Text` (Por defecto):** El comando se trata como texto sin formato. Se envía exactamente como se escribió, codificado en UTF-8.
  - *Caso de uso de ejemplo:* Enviar una instrucción legible para humanos como un comando de apagado de motor.
  - *Carga útil de ejemplo:*
    ```json
    {
      "command": "engine_stop",
      "format": "Text"
    }
    ```

- **`Hex`:** El comando representa datos binarios codificados como una cadena hexadecimal. Esto es útil para dispositivos que requieren comandos de bytes sin procesar (por ejemplo, paquetes de protocolo propietario). Se permiten espacios o guiones en la cadena y se ignorarán automáticamente de forma segura.
  - *Caso de uso de ejemplo:* Enviar bytes puros para configurar un parámetro de hardware.
  - *Carga útil de ejemplo:*
    ```json
    {
      "command": "0A 1B 2C",
      "format": "Hex"
    }
    ```

- **`Base64`:** El comando representa datos binarios codificados en formato Base64. Esta es otra forma de transmitir de manera segura flujos binarios dentro de un objeto JSON.
  - *Caso de uso de ejemplo:* Enviar una carga útil binaria más larga o un archivo generado por otro sistema.
  - *Carga útil de ejemplo:*
    ```json
    {
      "command": "SGVsbG8=",
      "format": "Base64"
    }
    ```

#### 2. Método de Entrega (`sms`)
El parámetro `sms` determina el canal de comunicación utilizado para enrutar el comando al dispositivo de rastreo.

- **GPRS (Por defecto / `sms: false`):** El comando se envía utilizando la conexión de datos de internet del dispositivo (TCP/UDP). Este es el método estándar para un dispositivo activo y generalmente es más rápido.
- **SMS (`sms: true`):** El comando se entrega al dispositivo a través de un mensaje de texto estándar. Esto es útil cuando el dispositivo está fuera de cobertura de internet GPRS o está en un modo de sueño profundo sin conexiones de datos activas, pero todavía está conectado a la red de telefonía celular.

### Autenticación Requerida

La [autenticación requerida](../authentication) para usar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o la aplicación que realiza la solicitud, asegurando que solo entidades autorizadas puedan modificar la información del usuario. Al exigir este tipo de autenticación, el sistema garantiza un alto nivel de seguridad y control de acceso, protegiendo los datos de los usuarios frente a accesos no autorizados.

### Ejemplo de Solicitud

```
POST /api/devices/device123/sendCommand HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {token}
Content-Type: application/json

{
  "command": "engine_stop",
  "format": "Text",
  "sms": false
}
```

### Parámetros de Respuesta

La respuesta de este endpoint incluye detalles sobre el éxito de la operación y cualquier error que pueda haber ocurrido.

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error en caso de que la solicitud falle. |
| apiUsage | integer | No | Uso de la API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario de la API. |
| result | string | No | El resultado o la respuesta de la ejecución del comando. |

### Ejemplo de Respuesta Exitosa

```
{
  "success": true,
  "apiUsage": 150,
  "apiDailyUsage": 3000,
  "result": "Command executed successfully"
}
```

### Ejemplo de Respuesta de Error

#### Respuesta de Error 400 (Bad Request)

```
{
  "success": false,
  "error": "Bad Request",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

#### Respuesta de Error 500 (Internal Server Error)

```
{
  "success": false,
  "error": "Internal Server Error",
  "apiUsage": 150,
  "apiDailyUsage": 3000
}
```

Este endpoint es fundamental para gestionar las funciones del dispositivo de forma remota. Permite a los usuarios enviar comandos explícitos y recibir los resultados correspondientes, lo que garantiza un control completo sobre el dispositivo.
