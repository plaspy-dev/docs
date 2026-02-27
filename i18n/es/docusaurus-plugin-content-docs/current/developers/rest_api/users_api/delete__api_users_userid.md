---
sidebar_label: DELETE /api/users/{userId}
---
# DELETE /api/users/\{userId\}
El endpoint `DELETE /api/users/{userId}` permite eliminar un usuario específico del sistema. Este método es útil para gestionar la eliminación de usuarios que ya no deben tener acceso o que ya no son necesarios en el sistema. El identificador del usuario \(`userId`\) se incluye en la ruta de la solicitud.

## Detalles de la Solicitud

- **Método HTTP:** `DELETE`
- **URL:** `/api/users/{userId}`
- **Autenticación:** Requiere un token Bearer.
- **Formato de solicitud:** No aplica \(el cuerpo de la solicitud no se usa para este endpoint\).

## Parámetros de la Solicitud

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| userId | string | Sí | El identificador único del usuario a eliminar. |

### Autenticación Requerida

La [autenticación requerida](../authentication) para utilizar el endpoint es mediante un token Bearer. Este método de autenticación implica que cada solicitud debe incluir un encabezado de autorización con un token de acceso válido. Este token Bearer actúa como una credencial que verifica la identidad del usuario o aplicación que realiza la solicitud, asegurando que solo las entidades autorizadas puedan modificar la información del usuario. Al requerir este tipo de autenticación, el sistema Plaspy garantiza un nivel elevado de seguridad y control de acceso, protegiendo los datos de los usuarios contra accesos no autorizados.

### Ejemplo de Solicitud

```
DELETE /api/users/usr-12345 HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer tu_token_de_autenticacion
```

## Parámetros de Respuesta

| Campo | Tipo | Obligatoria | Descripción |
| --- | --- | --- | --- |
| success | boolean | No | Indica si la operación fue exitosa. |
| error | string | No | Mensaje de error si la operación no fue exitosa. |
| apiUsage | integer | No | Uso del API en la solicitud actual. |
| apiDailyUsage | integer | No | Uso diario del API. |

### Ejemplo de Respuesta Exitosa

```
{
    "success": true,
    "apiUsage": 50,
    "apiDailyUsage": 200
}
```

### Ejemplo de Respuesta de Error

```
{
    "success": false,
    "error": "User not found",
    "apiUsage": 50,
    "apiDailyUsage": 200
}
```

Este endpoint es esencial para mantener la limpieza y seguridad del sistema, permitiendo la eliminación de usuarios que ya no deben tener acceso.
