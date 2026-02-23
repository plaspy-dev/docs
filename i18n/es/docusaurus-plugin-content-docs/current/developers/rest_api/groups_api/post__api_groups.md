---
sidebar_label: POST /api/groups
---
# POST /api/groups
Este endpoint permite crear un nuevo grupo dentro del sistema. Es esencial para organizar dispositivos y gestionarlos eficientemente agrupándolos en unidades lógicas. Cada grupo puede tener un nombre único, una descripción y una lista de dispositivos asociados.

## Detalles de la Solicitud

Para crear un grupo, debe enviar una solicitud POST con los detalles del grupo en el cuerpo de la solicitud. Asegúrese de que la solicitud esté autorizada con un token válido.

## Parámetros de la Solicitud

El cuerpo de la solicitud debe incluir los detalles del grupo que se va a crear.

### Parámetros del Cuerpo de la Solicitud

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| name | string | Sí | El nombre del grupo. Debe ser una cadena no vacía. |
| description | string | No | Una descripción del grupo. |
| devices | array | No | Lista de IDs de dispositivos asociados con el grupo. |

### Ejemplo del Cuerpo de la Solicitud

```
{
  "name": "Nuevo Grupo",
  "description": "Descripción del nuevo grupo",
  "devices": ["dev-456", "dev-789"]
}
```


### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
POST /api/groups HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
Content-Type: application/json

{
  "name": "Nuevo Grupo",
  "description": "Descripción del nuevo grupo",
  "devices": ["dev-456", "dev-789"]
}
```


## Parámetros de Respuesta

La respuesta incluye detalles del grupo recién creado.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error si la solicitud falló. |
| apiUsage | integer | No | Uso total de la API en el momento de la solicitud. |
| apiDailyUsage | integer | No | Uso diario de la API en el momento de la solicitud. |
| id | string | No | Identificador único del grupo creado. |
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
  "name": "Nuevo Grupo",
  "description": "Descripción del nuevo grupo",
  "devices": ["dev-456", "dev-789"],
  "creation": "2023-06-01T12:00:00Z",
  "lastModified": "2023-06-01T12:00:00Z"
}
```


### Ejemplo de Respuesta de Error

```
{
  "success": false,
  "error": "Entrada inválida",
  "apiUsage": 123,
  "apiDailyUsage": 45
}
```


Este endpoint es crucial para agregar nuevos grupos a la aplicación Plaspy, permitiendo una mejor organización y gestión de dispositivos al agruparlos en unidades con nombre y descripción.
