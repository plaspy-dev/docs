---
sidebar_position: 4
---
# Autenticación
Para interactuar con la API REST de Plaspy, es necesario autenticarse utilizando un esquema de autenticación OAuth. El proceso de autenticación asegura que solo los usuarios autorizados puedan acceder a los recursos de la API. En este documento se explica cómo generar un token de autenticación \(JWT\) y cómo utilizarlo para realizar solicitudes a otros endpoints de la API.

La autenticación es un paso crucial para asegurar que solo los usuarios autorizados puedan acceder a la API REST de Plaspy. Siguiendo los pasos mencionados, puedes generar un token de autenticación y utilizarlo para interactuar con los diferentes endpoints de la API de manera segura y eficiente. Para más detalles sobre otras operaciones, consulta la [documentación completa de la API REST de Plaspy](https://app.plaspy.com/rest-api-docs).

## Endpoint de Autenticación

### Obtener el Token de Autenticación

El token de autenticación se obtiene mediante una solicitud POST al endpoint ```/api/Auth/Token```. A continuación, se detallan los pasos para realizar esta solicitud.

### Detalles de la Solicitud

- **Endpoint:** ```/api/Auth/Token```
- **Método:** ```POST```
- **Encabezado:** ```Content-Type: application/json```
- **Base URL:** ```https://api.plaspy.com```

### Parámetros de la Solicitud

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| userName | String | Sí | Tu nombre de usuario en Plaspy. |
| apiKey | String | Sí | Tu clave de API proporcionada por Plaspy. |

### Cuerpo de la Solicitud

```{
  "userName": "tu_nombre_de_usuario",
  "apiKey": "tu_api_key"
}
```

###   
Ejemplo de Solicitud

```POST /api/Auth/Token HTTP/1.1
Host: api.plaspy.com
Content-Type: application/json
{
  "userName": "tu_nombre_de_usuario",
  "apiKey": "tu_api_key"
}
```

###   
Parámetros de Respuesta

| Parámetro | Tipo | Descripción |
| --- | --- | --- |
| success | Boolean | Indica si la solicitud fue exitosa \(```true``` o ```false```\). |
| token | String | El token de autenticación JWT. |
| expires | String | La fecha y hora de expiración del token. |
| error | String | Mensaje explicando la causa del error \(si aplica\). |

### Ejemplo de Respuesta Exitosa

```{
  "success": true,
  "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...",
  "expires": "2025-12-31T23:59:59Z"
}
```

###   
Ejemplo de Respuesta de Error

```{
  "success": false,
  "error": "Invalid API key or username."
}
```

##   
Usar el Token de Autenticación

Una vez obtenido el token de autenticación, este debe incluirse en el encabezado ```Authorization``` de todas las solicitudes a la API. El formato del encabezado es ```Authorization: Bearer tu_token```.

### Ejemplo de Solicitud con Token

```GET /api/devices HTTP/1.1
Host: api.plaspy.com
Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXV...
```

##   
Manejo de Errores

Si la solicitud para obtener el token de autenticación falla, la respuesta incluirá un mensaje de error explicando la causa del fallo.

### Ejemplo de Respuesta de Error

```{
  "success": false,
  "error": "Invalid API key or username."
}
```

- **success:** Indica que la solicitud falló \(```false```\).
- **error:** Mensaje que explica la causa del error.

## Consideraciones de Seguridad

- **Protección del Token:** Mantén tu token de autenticación seguro y no lo compartas con terceros no autorizados.
- **Renovación del Token:** El token tiene una fecha de expiración \(```expires```\). Asegúrate de renovarlo antes de que expire para mantener el acceso continuo a la API.
