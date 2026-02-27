---
sidebar_label: GET /api/groups/{groupId}
---
# GET /api/groups/\{groupId\}
Este endpoint permite recuperar los detalles de un grupo específico utilizando su identificador único \(`groupId`\). Es útil para obtener información detallada sobre un grupo, incluyendo su nombre, descripción, dispositivos asociados y otros detalles relevantes.

## Detalles de la Solicitud

Para obtener los detalles de un grupo, debe enviar una solicitud GET con el identificador del grupo en la ruta de la solicitud. Asegúrese de que la solicitud esté autorizada con un token válido.

## Parámetros de la Solicitud

### Parámetros de la Ruta

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| groupId | string | Sí | Identificador único del grupo cuyos detalles se desean recuperar |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
GET /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

## Parámetros de Respuesta

La respuesta incluye detalles del grupo especificado.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error si la solicitud falló. |
| apiUsage | integer | No | Uso total de la API en el momento de la solicitud. |
| apiDailyUsage | integer | No | Uso diario de la API en el momento de la solicitud. |
| id | string | No | Identificador único del grupo. |
| name | string | Sí | Nombre del grupo. |
| description | string | No | Descripción del grupo. |
| devices | array | No | Lista de IDs de dispositivos asociados con el grupo. |
| creation | string | No | Fecha y hora de creación del grupo \(en formato ISO 8601\). |
| lastModified | string | No | Fecha y hora de la última modificación del grupo \(en formato ISO 8601\). |

### Ejemplo de Respuesta Exitosa

```
{
 "success": true,
 "error": null,
 "apiUsage": 123,
 "apiDailyUsage": 45,
 "id": "grp-125",
 "name": "Grupo Ejemplo",
 "description": "Descripción del grupo ejemplo",
 "devices": ["dev-123", "dev-456"],
 "creation": "2023-01-01T12:00:00Z",
 "lastModified": "2023-06-01T12:00:00Z"
}
```

### Ejemplo de Respuesta de Error

```
{
 "success": false,
 "error": "Group not found",
 "apiUsage": 123,
 "apiDailyUsage": 45
}
```

Este endpoint es fundamental para obtener información detallada y específica de un grupo en la aplicación, permitiendo a los usuarios ver y gestionar los detalles de un grupo específico.
