---
slug: /coban/bn_405c/configuration
id: bn_405c-configuration
sidebar_label: Configuration
title: Coban - BN-405C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Coban BN-405C para usar con Plaspy; incluye parámetros de servidor y comandos SMS
keywords:
  - Configuración Coban BN-405C
  - Configuración BN-405C
  - Coban rastreador Plaspy
  - Configuración Plaspy
  - Configuración rastreador GPS
  - Configuración rastreo vehicular
  - Rastreador gestión de flotas
  - Configuración servidor BN-405C
  - Configuración plataforma Coban GPS
  - Comandos SMS rastreador
---

# Coban - BN-405C Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-405C con la plataforma Plaspy. Reúne los parámetros de servidor prácticos, requisitos habituales y ejemplos de comandos SMS que se usan frecuentemente para apuntar un equipo BN-405C a Plaspy y habilitar el reporte de ubicación en tiempo real y alertas de eventos. Use esta guía como referencia práctica al preparar dispositivos para la integración con Plaspy.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-405C también soporta configuración vía SMS; los comandos de ejemplo que se muestran a continuación son las secuencias públicas comunes para ajustar APN, dirección del servidor, intervalos de reporte y modo de transporte.

## Resumen de la configuración

Este proceso prepara el BN-405C para comunicarse de forma fiable con Plaspy, de modo que el dispositivo aparezca en la plataforma y reporte ubicación, estado y alarmas. Las acciones típicas incluyen configurar parámetros GPRS, apuntar el dispositivo al servidor de Plaspy, elegir el transporte y validar que los reportes se reciben correctamente.

- Configurar el APN del dispositivo y las credenciales del operador para que use datos móviles y pueda reportar por GPRS.
- Establecer la dirección del servidor en Plaspy y seleccionar el modo de transporte UDP o TCP.
- Ajustar intervalos de reporte y opciones de protocolo para que el dispositivo envíe actualizaciones regulares de posición a Plaspy.
- Validar la conectividad y confirmar que el rastreador es visible en la plataforma Plaspy.
- Opcionalmente, ejecutar un reinicio de fábrica o un comando de verificación al preparar o solucionar problemas del equipo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo número de puerto para todos los dispositivos compatibles. Puede configurar un Coban BN-405C para usar el dominio d.plaspy.com o la dirección IP 54.85.159.138 y el puerto 8888 al establecer el servidor en el dispositivo.

## Requisitos típicos antes de la configuración

- Una unidad BN-405C con alimentación instalada o alimentada temporalmente en banco con una fuente estable (alimentación del vehículo o fuente de banco).
- Una tarjeta SIM operativa con datos habilitados y los detalles APN correctos del operador móvil.
- Acceso al método de configuración que provee el fabricante para el BN-405C, como la configuración por SMS o la herramienta del proveedor proporcionada por Coban.
- La contraseña por defecto del dispositivo si se requiere para la configuración por SMS. Los comandos públicos a continuación usan la contraseña por defecto 123456 cuando se indica.
- Herramientas básicas para enviar y recibir mensajes SMS desde el número del dispositivo o una herramienta administrativa local para emitir comandos SMS.
- Conocimiento del modo de transporte deseado, UDP o TCP, según la política del sitio o requisitos de la red.

## Cómo se conecta este rastreador a Plaspy

El BN-405C se configura para enviar mensajes de ubicación y estado a Plaspy utilizando el endpoint de servidor compartido y el transporte configurado. Plaspy recibe los mensajes del dispositivo para mostrar la posición en vivo, generar alertas y almacenar recorridos históricos para reportes.

- El rastreador se apunta al endpoint de Plaspy mediante el dominio d.plaspy.com o la IP 54.85.159.138 en el puerto 8888.
- El dispositivo envía actualizaciones GPS periódicas a través de datos móviles usando transporte UDP o TCP hacia el endpoint configurado de Plaspy.
- Plaspy detecta automáticamente el protocolo del equipo y analiza los mensajes entrantes para extraer posición y datos de eventos.
- Los mensajes de estado y las alarmas reportadas por el BN-405C aparecen en Plaspy para monitoreo en vivo y flujos de notificación.
- Tras la configuración, validar que el dispositivo reporte correctamente a Plaspy confirma la integración completa.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del Coban BN-405C para su dispositivo. Esto normalmente se hace vía comandos SMS o mediante la herramienta del proveedor descrita por el fabricante.
2. Ingrese la información del servidor Plaspy en los ajustes del dispositivo usando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto del servidor en 8888, que es el que Plaspy usa para los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el equipo requiere seleccionar el transporte de forma explícita.
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, envíe los comandos SMS finales para cambiar al modo de reporte GPRS.
6. Reinicie el equipo si el fabricante recomienda un reinicio para aplicar los ajustes de red.
7. Verifique que el BN-405C reporte a Plaspy comprobando la actividad del dispositivo en la plataforma o utilizando el comando de verificación del equipo.

## Comandos de configuración de ejemplo

El BN-405C soporta configuración vía SMS. Los siguientes comandos SMS públicos se presentan en el orden que se suele utilizar para la puesta en marcha. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Reemplace los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} con el APN, el usuario y la contraseña del APN de su operador respectivamente.

Optional initial factory reset
```
begin123456
```

Set the device time zone to UTC 0
```
time zone123456 0
```

Set the operator APN
```
apn123456 {{apn}}
```

Set the APN username and password
```
up123456 {{apnu}} {{apnp}}
```

Set the GPRS server by IP address and port
```
adminip123456 54.85.159.138 8888
```

Set the GPS update interval example
```
fix060s060s***n123456
```

Switch the device to GPRS reporting mode and select transport
- Example to explicitly set GPRS with transport flags
```
gprs123456,1,1
```
- Simpler GPRS enable command
```
gprs123456
```

Check current settings on the device
```
check123456
```

Enable improved digital sensor reporting or fuel sensor status
```
protocol123456 18
```

Notas sobre los marcadores de posición
- {{apn}} es el nombre del punto de acceso (APN) del operador móvil requerido para datos.
- {{apnu}} es el usuario del APN para redes que requieren autenticación.
- {{apnp}} es la contraseña del APN para redes que requieren autenticación.

Si su instalación utiliza el dominio en lugar de la IP, puede configurar el servidor en consecuencia usando cualquier sintaxis de comando que acepte nombres de dominio y sea compatible con el fabricante. El comando adminip de ejemplo arriba usa la IP pública de Plaspy tal como se ha indicado.

## Observaciones de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos SMS y las opciones disponibles. Confirme siempre los comandos en el manual del dispositivo o con los recursos del fabricante.
- La configuración por SMS suele estar soportada en el BN-405C, pero las herramientas del fabricante también pueden proporcionar un método de configuración por PC o web.
- Elija TCP o UDP según su red y políticas de firewall. Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto en todos los dispositivos, por lo que configurar el puerto 8888 es necesario para que el equipo sea visible en la plataforma.
- Si encuentra problemas de conectividad, verifique las credenciales APN, la asignación de datos de la SIM y que el dispositivo pueda alcanzar la dirección del servidor de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Coban BN-405C con Plaspy ofrece una vía sencilla hacia la visibilidad centralizada de la flota, alertas de eventos y reproducción histórica de trayectos. Configurar el rastreador para apuntar a Plaspy con los ajustes de servidor compartidos hace que los dispositivos reporten de forma consistente a la plataforma, de modo que los gestores puedan monitorear ubicación, eventos de encendido y alarmas desde un único panel.

Learn more about Plaspy and platform features at https://www.plaspy.com. For device specific instructions, firmware updates, and the latest command references verify current details on the official Coban site https://www.coban.net/ as manufacturer procedures and firmware behavior can change over time.
