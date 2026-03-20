---
slug: /thingsys/ts_p4b/configuration
id: ts_p4b-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador ThingSys TS-P4B con los ajustes del servidor Plaspy
keywords:
  - Configuración ThingSys TS-P4B
  - Instalación ThingSys TS-P4B
  - Configuración TS-P4B Plaspy
  - Configuración rastreador ThingSys
  - Configuración rastreador GPS Plaspy
  - Configuración servidor TS-P4B
  - Configuración SMS TS-P4B
  - Configuración seguimiento de vehículos
  - Configuración rastreador de activos
  - Compatibilidad rastreador GPS Plaspy
---

# ThingSys - Configuración TS-P4B

Esta página documenta el contexto público de configuración para usar el rastreador magnético ThingSys TS-P4B con Plaspy. Se enfoca en los ajustes prácticos del servidor, los pasos habituales de preparación y los comandos SMS de ejemplo publicados para el TS-P4B, para que usted pueda configurar el dispositivo y reportar datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía toma como base los comandos públicos del TS-P4B disponibles en ThingSys para configurar el dispositivo y que llegue a Plaspy.

## Resumen de la configuración

El proceso de configuración prepara el TS-P4B para establecer una conexión de datos con el endpoint de Plaspy, valida la conectividad y permite que el dispositivo reporte ubicación y telemetría a la plataforma Plaspy.

- Configure los ajustes GPRS/SMS del dispositivo para que pueda alcanzar el servidor Plaspy d.plaspy.com o la dirección IP equivalente.
- Proporcione las credenciales APN correctas para la tarjeta SIM usada en el rastreador.
- Establezca el endpoint y puerto del servidor Plaspy para que el rastreador envíe su telemetría a Plaspy.
- Valide la conectividad y confirme que el dispositivo aparece en los reportes de Plaspy después de la configuración.
- Opcionalmente use un restablecimiento de fábrica o comandos de verificación si están disponibles para asegurar un estado de configuración limpio.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos de Plaspy usados para configurar el TS-P4B y que éste pueda enviar telemetría y datos de ubicación a la plataforma.

## Requisitos previos habituales

- Un dispositivo TS-P4B con batería cargada instalado y listo para configurar.
- Una tarjeta SIM activa con plan de datos y la información APN correcta del operador móvil.
- Acceso al método de configuración SMS de ThingSys o a la herramienta de configuración del fabricante que describe su documentación.
- Conocimiento de la contraseña por defecto del dispositivo cuando sea requerida para comandos SMS (la instrucción pública del fabricante muestra 123456).
- Un método para verificar, como consultar Plaspy tras la configuración o usar el comando SMS de verificación del dispositivo si está disponible.

## Cómo se conecta este rastreador a Plaspy

El TS-P4B se configura para enviar posiciones GNSS y telemetría a través de la red móvil al endpoint y puerto del servidor Plaspy. Una vez configurado, Plaspy ingiere los datos del dispositivo y los pone a disposición para seguimiento en tiempo real, reproducción histórica y notificaciones de eventos.

- El rastreador envía actualizaciones de posición y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La telemetría del dispositivo, como nivel de batería y estado de movimiento, se reporta a Plaspy junto con las posiciones.
- Plaspy usa detección automática de protocolo para aceptar datos tanto si el rastreador se conecta por UDP como por TCP en el puerto compartido.
- Tras una configuración exitosa, el rastreador queda visible en Plaspy para monitoreo y alertas.
- Use comandos de verificación o el listado de dispositivos en la plataforma para confirmar que el rastreador está reportando correctamente.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de ThingSys para el TS-P4B, normalmente la interfaz de comandos SMS descrita por el fabricante.
2. Asegúrese de que la SIM esté instalada, tenga datos móviles habilitados y tenga a la mano las credenciales APN.
3. Envíe comandos o ingrese ajustes para apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
4. Configure el puerto del servidor a 8888 en la configuración del dispositivo.
5. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según su preferencia de instalación.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan reinicio.
7. Valide que el dispositivo reporte a Plaspy revisando la presencia del equipo y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración de ThingSys para el TS-P4B usan comandos SMS. El fabricante indica la contraseña por defecto del dispositivo como 123456 y muchos comandos SMS incluyen la contraseña como prefijo en la cadena del comando. A continuación se muestran los comandos publicados en el orden en que aparecen en la guía pública.

- Restablecimiento de fábrica inicial opcional (usar solo si desea resetear el dispositivo a estado de fábrica)
```text
FORMAT
```
Nota: FORMAT es un comando de restablecimiento de fábrica en las instrucciones públicas y sólo debe usarse cuando sea necesario.

- Establecer el APN del operador (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```
Este comando muestra el patrón donde 123456 es el prefijo de contraseña del dispositivo. Mantenga el marcador [apn] y reemplácelo por la cadena APN del operador.

- Establecer el usuario APN (reemplace [apnu] por el usuario APN si es requerido)
```text
apnuser123456 [apnu]
```

- Establecer la contraseña APN (reemplace [apnp] por la contraseña APN si es requerida)
```text
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
ip54.85.159.138 8888
```
Este comando público configura el dispositivo para reportar a la IP del servidor Plaspy en el puerto 8888. Si su firmware ThingSys admite el uso de un nombre de dominio, en alternativa puede introducir d.plaspy.com donde el firmware acepte un dominio.

- Consultar ajustes actuales (comando de verificación)
```text
CXZT
```
Envíe CXZT para solicitar un informe de ajustes del dispositivo cuando el firmware lo soporte.

Explicación de marcadores:
- [apn] es el APN proporcionado por su operador de red móvil.
- [apnu] es el usuario APN si el operador lo requiere.
- [apnp] es la contraseña APN si el operador lo requiere.
- 123456 se muestra en las instrucciones públicas como la contraseña por defecto del dispositivo utilizada en los prefijos de comandos SMS.

## Notas de configuración

- La configuración vía SMS está soportada por las instrucciones públicas del TS-P4B; siga la sintaxis de comandos SMS de ThingSys exactamente y respete el patrón del prefijo de contraseña del dispositivo.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de comandos o los comandos disponibles; consulte la documentación del fabricante si un comando no responde como se espera.
- Cuando el dispositivo soporte tanto ajustes por dominio como por IP, prefiera d.plaspy.com por claridad; el ejemplo público publicado establece directamente la IP 54.85.159.138.
- Plaspy acepta UDP o TCP en el puerto 8888 y detecta automáticamente el protocolo del rastreador; seleccionar UDP o TCP puede depender de la preferencia del instalador o de las condiciones de la red.
- Mantenga los marcadores APN y verifique la conectividad de la SIM en la red antes de la validación final en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TS-P4B con Plaspy ofrece seguimiento discreto y de larga duración junto con visibilidad centralizada para flotas y activos. La larga vida de batería del TS-P4B y sus capacidades de detección de movimiento lo hacen práctico para despliegues con mantenimiento poco frecuente, mientras que Plaspy recoge y normaliza la ubicación y la telemetría para monitoreo, alertas e informes históricos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details, firmware behavior, and manufacturer guidance at https://www.thingsys.com/ to ensure your TS-P4B configuration is current and optimized for your deployment.
