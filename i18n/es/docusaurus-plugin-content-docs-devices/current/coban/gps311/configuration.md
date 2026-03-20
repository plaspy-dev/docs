---
slug: /coban/gps311/configuration
id: gps311-configuration
sidebar_label: Configuration
title: Coban - GPS311 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban GPS311 para integrarlo con Plaspy mediante servidor compartido y comandos SMS o GPRS
keywords:
  - Configuración Coban GPS311
  - Configuración GPS311 para Plaspy
  - Configuración rastreador Coban GPS
  - Configuración de rastreador GPS para vehículos
  - Configuración de servidor GPS311
  - Integración de rastreador con Plaspy
  - Comandos SMS GPS311
  - Configuración GPRS del rastreador
  - Rastreo de flotas GPS311
  - Configuración de la plataforma GPS311
---

# Coban - Configuración GPS311

Esta página describe el contexto público de configuración para usar el Coban GPS311 con Plaspy. Resume los pasos prácticos de instalación y los ajustes de servidor compartido que debe aplicar para apuntar el equipo a Plaspy y lograr seguimiento en tiempo real por GPRS, o para enviar/recibir comandos SMS necesarios durante la instalación.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPS311 soporta patrones de configuración por SMS y GPRS; esta guía incluye los comandos SMS más comunes publicados para el GPS311 para que pueda aplicar los ajustes de servidor de Plaspy en su entorno.

## Resumen de la configuración

Configurar el GPS311 para Plaspy prepara el dispositivo para conectarse al endpoint del servidor Plaspy, reportar ubicación y estado, y ser visible en la plataforma Plaspy. El proceso se centra en ajustar los parámetros de red, el APN, el modo de transporte y los intervalos de reporte para que el rastreador comunique de forma fiable con Plaspy.

- Configure el APN y las credenciales del equipo para que use datos GPRS y alcance Plaspy.
- Ajuste el rastreador para que reporte al endpoint y puerto del servidor Plaspy.
- Seleccione el transporte (UDP o TCP) y active el modo GPRS para reportes en vivo.
- Verifique la conectividad y los reportes usando el comando de verificación del rastreador y confirmando la visibilidad en la plataforma Plaspy.
- Guarde y, si es necesario, reinicie el equipo para aplicar los ajustes y comenzar a enviar reportes.

## Ajustes del servidor Plaspy

Use los siguientes valores de servidor al configurar el GPS311 para Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

Estos valores son el endpoint público de Plaspy que debe ingresarse en el dispositivo o mediante comandos SMS cuando corresponda.

## Requisitos típicos antes de la configuración

- Un GPS311 alimentado e instalado o conectado a una fuente de alimentación de banco dentro del rango de voltaje soportado.
- Una tarjeta SIM activa con datos habilitados y la información del APN del operador.
- Acceso para enviar comandos SMS al rastreador (para configuración por SMS) o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimiento de la contraseña del dispositivo (la contraseña por defecto publicada en los comandos públicos es 123456).
- Cobertura de red para datos GPRS del operador móvil seleccionado.
- Acceso básico a la cuenta de Plaspy o al software de monitoreo para confirmar que el dispositivo reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el GPS311 envía la posición y el estado del equipo por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes y usa la detección automática de protocolo para interpretar los datos del rastreador y presentarlos en la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según el transporte que seleccione durante la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.
- El dispositivo usa los intervalos de reporte configurados para determinar con qué frecuencia envía actualizaciones de posición a Plaspy.
- El SMS sigue disponible para comandos remotos, verificación y resolución de problemas cuando el dispositivo lo soporta.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el GPS311 (comandos SMS o software del fabricante).
2. Configure el APN del equipo usando el valor del APN del operador y, opcionalmente, establezca nombre de usuario y contraseña del APN si el operador lo requiere.
3. Ingrese la dirección del servidor Plaspy ya sea como d.plaspy.com o como la IP 54.85.159.138 y establezca el puerto 8888.
4. Seleccione UDP o TCP en el dispositivo si el rastreador requiere elegir un modo de transporte.
5. Aplique o guarde la configuración en el rastreador y envíe los comandos SMS necesarios para confirmar los ajustes.
6. Reinicie el rastreador si el dispositivo lo solicita o después de guardar los parámetros para asegurarse de que se apliquen los cambios.
7. Valide que el equipo reporte a Plaspy comprobando la llegada de datos en la plataforma Plaspy y usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El GPS311 puede configurarse vía SMS usando la contraseña del dispositivo. A continuación se muestran los comandos SMS públicos publicados por el fabricante. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Conserve y reemplace los marcadores de posición donde corresponda.

- Restauración de fábrica (paso inicial opcional)
```text
begin123456
```

- Ajustar la zona horaria a UTC+0
```text
time zone123456 0
```

- Establecer el APN del operador (reemplace {{apn}} con el APN de su operador)
```text
apn123456 {{apn}}
```

- Establecer el usuario y la contraseña del APN (reemplace los marcadores con las credenciales del operador)
```text
up123456 {{apnu}} {{apnp}}
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de actualización periódico (comando de ejemplo público)
```text
fix060s060s***n123456
```

- Cambiar a modo GPRS y seleccionar transporte
  - Ejemplo para habilitar GPRS y elegir la variante UDP o TCP según se indique:
```text
gprs123456,1,1
```
  - Comando alternativo simple para habilitar GPRS:
```text
gprs123456
```

- Verificar la configuración actual del dispositivo
```text
check123456
```

- Activar reporte de sensores digitales mejorado o estado de sensor de combustible
```text
protocol123456 18
```

Notas sobre marcadores y comandos:
- {{apn}} es la cadena APN del operador móvil necesaria para datos GPRS.
- {{apnu}} y {{apnp}} son el nombre de usuario y la contraseña del APN cuando el operador requiere acceso con credenciales.
- Use el comando adminip para establecer la IP y el puerto del servidor. Si su firmware admite nombres de dominio, puede ser posible establecer d.plaspy.com en lugar de la IP; consulte la documentación del fabricante para comandos con dominio.

## Observaciones de configuración

- El conjunto de comandos SMS mostrado arriba es un ejemplo público para el GPS311; la sintaxis exacta y los comandos disponibles pueden variar según la versión de firmware.
- Algunas instalaciones prefieren nombres de dominio (d.plaspy.com) mientras que otras usan la IP numérica 54.85.159.138; utilice la forma que soporte el firmware de su dispositivo.
- Elija UDP o TCP según la preferencia del instalador y las notas del firmware del dispositivo; ambos transportes son soportados por Plaspy en el puerto 8888.
- El rastreador permite configuración por SMS, por lo que el SMS sigue siendo un método útil de recuperación y verificación durante la instalación.
- Mantenga la contraseña del equipo segura y cambie el valor de fábrica cuando corresponda después de la configuración inicial.

## Por qué usar Plaspy con esta configuración

Usar el GPS311 con Plaspy ofrece una vía sencilla hacia la visibilidad de la flota y el monitoreo operativo al enrutar los datos del equipo al endpoint compartido de Plaspy y permitir que la plataforma interprete automáticamente el protocolo del dispositivo. Para organizaciones que requieren seguimiento de ubicación, alertas y reproducción histórica, configurar el rastreador hacia el endpoint de Plaspy garantiza la ingestión consistente de eventos del dispositivo.

Para aprender más sobre Plaspy y cómo la plataforma maneja dispositivos como el Coban GPS311, visite https://www.plaspy.com. Para los comandos de configuración más recientes por dispositivo, notas de firmware y actualizaciones del fabricante, verifique la información actual en el sitio de Coban https://www.coban.net/.
