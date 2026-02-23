---
---
# GET /api/groups
Este endpoint permite recuperar la lista de grupos disponibles. Es útil para obtener información detallada sobre cada grupo, incluyendo su nombre, descripción, dispositivos asociados y otros detalles relevantes. Es ideal para gestionar grupos y verificar sus datos.

## Autenticación Requerida

La [autenticación requerida](../../../rest_api/developers/authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

## Ejemplo de Solicitud

```GET /api/groups HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

##   
Parámetros de Respuesta

La respuesta incluye una lista de grupos junto con detalles específicos de cada grupo.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error si la solicitud falló. |
| apiUsage | integer | No | Uso total de la API en el momento de la solicitud. |
| apiDailyUsage | integer | No | Uso diario de la API en el momento de la solicitud. |
| groups | array | No | Lista de grupos disponibles. Cada grupo contiene los siguientes campos: |
| groups.id | string | No | Identificador único del grupo. |
| groups.name | string | Sí | Nombre del grupo. |
| groups.description | string | No | Descripción del grupo. |
| groups.devices | array | No | Lista de IDs de dispositivos asociados al grupo. |
| groups.creation | string | No | Fecha y hora de creación del grupo \(en formato ISO 8601\). |
| groups.lastModified | string | No | Fecha y hora de la última modificación del grupo \(en formato ISO 8601\). |

##   
Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "error": null,
  "apiUsage": 123,
  "apiDailyUsage": 45,
  "groups": [
    {
      "id": "grp-123",
      "name": "Grupo A",
      "description": "Descripción del Grupo A",
      "devices": ["dev-456", "dev-789"],
      "creation": "2023-01-01T12:00:00Z",
      "lastModified": "2023-01-10T12:00:00Z"
    },
    {
      "id": "grp-124",
      "name": "Grupo B",
      "description": "Descripción del Grupo B",
      "devices": ["dev-012", "dev-345"],
      "creation": "2023-02-01T12:00:00Z",
      "lastModified": "2023-02-10T12:00:00Z"
    }
  ]
}
```

##   
Ejemplo de Respuesta de Error

```{
  "success": false,
  "error": "Unauthorized access",
  "apiUsage": 123,
  "apiDailyUsage": 45,
  "groups": null
}
```

Este endpoint es esencial para la gestión y visualización de grupos dentro de la aplicación Plaspy, permitiendo obtener una visión completa y detallada de cada grupo y sus dispositivos asociados.
