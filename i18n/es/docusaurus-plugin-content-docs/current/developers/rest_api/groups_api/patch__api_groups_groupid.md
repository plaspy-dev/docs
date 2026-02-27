---
sidebar_label: PATCH /api/groups/{groupId}
---
# PATCH /api/groups/\{groupId\}
Este endpoint permite actualizar parcialmente los detalles de un grupo existente utilizando su identificador único \(`groupId`\). Es útil para modificar uno o varios atributos de un grupo sin necesidad de enviar todos los datos del grupo.

## Detalles de la Solicitud

Para actualizar parcialmente un grupo, debe enviar una solicitud PATCH con las operaciones de parcheo en el cuerpo de la solicitud. Asegúrese de que la solicitud esté autorizada con un token válido y que el identificador del grupo \(`groupId`\) sea correcto.

## Parámetros de la Solicitud

### Parámetros de la Ruta

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| groupId | string | Sí | Identificador único del grupo que se va a actualizar |

### Parámetros del Cuerpo de la Solicitud

El cuerpo de la solicitud debe incluir una lista de operaciones de parcheo a realizar en el grupo. Cada operación sigue el formato de JSON Patch.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| op | string | Sí | Operación a realizar \(por ejemplo, "add", "remove", "replace"\). |
| path | string | Sí | Ruta del atributo del grupo a modificar \(por ejemplo, "/name", "/description"\). |
| value | object | No | Nuevo valor para el atributo especificado en `path`. Obligatorio si `op` es "add" o "replace". |

### Ejemplo del Cuerpo de la Solicitud

```
[
 {
 "op": "replace",
 "path": "/name",
 "value": "Nombre Actualizado"
 },
 {
 "op": "replace",
 "path": "/description",
 "value": "Descripción actualizada del grupo"
 }
]
```

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
PATCH /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
Content-Type: application/json

[
 {
 "op": "replace",
 "path": "/name",
 "value": "Nombre Actualizado"
 },
 {
 "op": "replace",
 "path": "/description",
 "value": "Descripción actualizada del grupo"
 }
]
```

## Parámetros de Respuesta

La respuesta incluye detalles del grupo actualizado.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error si la solicitud falló. |
| apiUsage | integer | No | Uso total de la API en el momento de la solicitud. |
| apiDailyUsage | integer | No | Uso diario de la API en el momento de la solicitud. |
| id | string | No | Identificador único del grupo actualizado. |
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
 "name": "Nombre Actualizado",
 "description": "Descripción actualizada del grupo",
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

Este endpoint es fundamental para realizar actualizaciones parciales en la información de los grupos en la aplicación, permitiendo modificaciones específicas sin necesidad de enviar todos los datos del grupo.
