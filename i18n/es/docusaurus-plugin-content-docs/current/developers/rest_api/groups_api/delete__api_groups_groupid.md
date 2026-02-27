---
sidebar_label: DELETE /api/groups/{groupId}
---
# DELETE /api/groups/\{groupId\}
Este endpoint permite eliminar un grupo existente del sistema. Es esencial para gestionar y organizar los grupos, permitiendo eliminar aquellos que ya no son necesarios o que fueron creados por error.

## Detalles de la Solicitud

Para eliminar un grupo, debe enviar una solicitud DELETE especificando el identificador del grupo \(`groupId`\) en la ruta de la solicitud. Asegúrese de que la solicitud esté autorizada con un token válido.

## Parámetros de la Solicitud

### Parámetros de la Ruta

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| groupId | string | Sí | Identificador único del grupo que se va a eliminar |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
DELETE /api/groups/grp-125 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

## Parámetros de Respuesta

La respuesta incluye información sobre el resultado de la operación de eliminación.

| Campo | Tipo | Obligatorio | Descripción |
| --- | --- | --- | --- |
| success | boolean | Sí | Indica si la solicitud fue exitosa. |
| error | string | No | Mensaje de error si la solicitud falló. |
| apiUsage | integer | No | Uso total de la API en el momento de la solicitud. |
| apiDailyUsage | integer | No | Uso diario de la API en el momento de la solicitud. |

### Ejemplo de Respuesta Exitosa

```
{
 "success": true,
 "error": null,
 "apiUsage": 123,
 "apiDailyUsage": 45
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

Este endpoint es fundamental para mantener la organización y la limpieza de los grupos en la aplicación, permitiendo eliminar aquellos que ya no son necesarios y asegurando que la información esté siempre actualizada y relevante.
