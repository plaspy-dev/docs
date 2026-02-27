---
sidebar_label: GET /api/users/timeZones
---
# GET /api/users/timeZones
El endpoint **GET /api/users/timeZones** permite obtener una lista de todas las zonas horarias registradas en el sistema. Esta funcionalidad es útil para llenar listas desplegables o formularios donde se necesita seleccionar una zona horaria, asegurando que los datos se mantengan consistentes y actualizados.

Este endpoint es especialmente útil para aplicaciones que requieren información de zonas horarias, ya sea para la creación de perfiles de usuario, configuraciones de cuenta, o cualquier otra funcionalidad que necesite un listado de zonas horarias.

## Detalles de la Solicitud

**Método HTTP**: GET 
**URL**: `/api/users/timeZones`

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
GET /api/users/timeZones HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer {your_auth_token}
```

## Parámetros de Respuesta

La respuesta de este endpoint contiene una estructura que incluye el estado de la solicitud y una lista de zonas horarias. A continuación se detallan los campos de la respuesta:

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la solicitud fue exitosa. |
| error | string | No | Contiene el mensaje de error en caso de que `success` sea `false`. |
| apiUsage | integer | No | Uso actual de la API por el usuario. |
| apiDailyUsage | integer | No | Uso diario de la API por el usuario. |
| timeZones | object | No | Un objeto con las zonas horarias y sus descripciones. |

### Ejemplo de Respuesta Exitosa

```
{
 "success": true,
 "apiUsage": 100,
 "apiDailyUsage": 10,
 "timeZones": {
 "America/New_York": "Eastern Standard Time",
 "America/Los_Angeles": "Pacific Standard Time",
 "Europe/London": "Greenwich Mean Time",
 "Asia/Tokyo": "Japan Standard Time",
 "Australia/Sydney": "Australian Eastern Standard Time"
 }
}
```

### Ejemplo de Respuesta de Error

```
{
 "success": false,
 "error": "Autenticación fallida. Token inválido.",
 "apiUsage": 100,
 "apiDailyUsage": 10
}
```
