---
slug: /autofon/omega/configuration
id: omega-configuration
sidebar_label: Configuration
title: AutoFon - Омега Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AutoFon Омега para apuntar el equipo a los servidores compartidos de Plaspy y verificar conectividad
keywords:
  - Configuración AutoFon Омега
  - Configuración AutoFon Omega
  - AutoFon Омега Plaspy
  - Configuración de servidor AutoFon Омега
  - Guía de configuración de rastreador GPS
  - Configuración GPRS Omega
  - Configuración SMS Omega
  - Compatibilidad Omega Plaspy
  - Configuración de rastreo de vehículos
  - Configuración de seguimiento de flotas
---

# AutoFon - Омега Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Омега con Plaspy. Se enfoca en los ajustes y pasos prácticos relevantes para la plataforma, necesarios para apuntar el dispositivo a los servidores de Plaspy y verificar que las posiciones y eventos sean visibles en la plataforma de monitoreo. Utilice esta guía junto con la documentación del fabricante para entender menús específicos del equipo y comportamientos según la versión de firmware.

Plaspy emplea ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del equipo; sin embargo, los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El Omega soporta reporte por GPRS y fallback por SMS y generalmente se configura mediante la utilidad del fabricante o comandos SMS para que envíe coordenadas y eventos al endpoint de Plaspy.

## Resumen de la configuración

Esta configuración prepara el Omega para comunicarse con Plaspy estableciendo el endpoint y puerto del servidor, confirmando la selección de transporte y validando el comportamiento de reporte. Una vez configurado, el rastreador debe enviar actualizaciones regulares de ubicación, alertas de movimiento y de inclinación, y cualquier telemetría adicional que el dispositivo entregue.

- Apuntar el Omega al endpoint de Plaspy para que los paquetes GPRS se enruten a Plaspy para su procesamiento.
- Seleccionar el tipo de transporte que el equipo soporte y confirmar el puerto de servidor usado por Plaspy.
- Verificar el APN y la conectividad de la SIM para que el dispositivo pueda abrir una sesión GPRS y transmitir paquetes.
- Confirmar que el rastreador reporta eventos y actualizaciones de ubicación a Plaspy y que los mensajes en búfer se entregan tras la reconexión.
- Validar que eventos del acelerómetro y reportes de presencia BLE sean visibles en su cuenta Plaspy si esas funciones son necesarias.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for reporting

Estos valores exactos son los ajustes públicos de Plaspy que debe ingresar en el dispositivo o en la herramienta de configuración al registrar el rastreador en la plataforma.

## Requisitos típicos antes de la configuración

- Una unidad AutoFon Омега con alimentación y batería en buen estado, y el hardware requerido instalado.
- Una tarjeta SIM activa con datos habilitados y ajustes APN válidos para el reporte GPRS.
- Acceso al método de configuración oficial de AutoFon, como la herramienta de PC del fabricante, la interfaz micro USB o el conjunto de comandos SMS documentado.
- Conocimiento de si su firmware Omega requiere selección de UDP o TCP y la posibilidad de cambiar ese transporte si es necesario.
- Cobertura de red 2G GPRS en el área de despliegue y una forma de confirmar el establecimiento exitoso de la sesión GPRS.
- Acceso a los detalles de su cuenta Plaspy y a los contactos de soporte si necesita confirmar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Omega envía sus coordenadas GPS/GLONASS y la telemetría de eventos por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe los paquetes, identifica automáticamente el protocolo del rastreador y presenta los datos en la plataforma para alertas, mapas e historial.

- El rastreador envía coordenadas y telemetría por GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el equipo; Plaspy soporta ambos y detecta el protocolo automáticamente.
- SMS puede actuar como canal de respaldo para alertas críticas o cuando GPRS no está disponible, según la configuración del dispositivo.
- Eventos de movimiento, inclinación y presencia BLE se envían a Plaspy como parte del flujo de telemetría del dispositivo cuando están habilitados.
- Los mensajes en búfer almacenados en el dispositivo (black box) se transmiten cuando se restablece la conectividad, de modo que Plaspy reciba los datos perdidos.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de AutoFon, como la herramienta de configuración para PC, la interfaz micro USB o los comandos SMS documentados para el Омега.
2. Ingrese la dirección del servidor Plaspy añadiendo d.plaspy.com o 54.85.159.138 en el campo de servidor o plataforma del dispositivo.
3. Configure el puerto del dispositivo en 8888 — Plaspy usa el mismo puerto para todos los equipos soportados.
4. Elija el protocolo de transporte UDP o TCP si su firmware Omega exige selección explícita.
5. Confirme los ajustes de APN y de la SIM para que el rastreador pueda establecer una sesión de datos GPRS; use la detección automática de APN si está disponible, pero verifique la conectividad.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren un reinicio para activar los nuevos ajustes de servidor.
7. Valide el reporte verificando que el Omega aparezca en Plaspy y que se reciban actualizaciones de ubicación y eventos.

## Ejemplos de comandos de configuración

Los comandos exactos o el formato del archivo de configuración para el AutoFon Омега dependen de la versión de firmware y de la herramienta del fabricante que esté usando. Los dispositivos Omega se suelen configurar con una utilidad de PC, una conexión micro USB o cadenas de comandos SMS proporcionadas por AutoFon.

Si usa comandos SMS o el dispositivo acepta configuración textual, siga la guía del fabricante para la sintaxis y la secuencia correctas de comandos. Si su herramienta de instalación exporta un archivo de configuración, cargue el host del servidor como d.plaspy.com o 54.85.159.138 y el puerto como 8888, luego seleccione UDP o TCP según se requiera. Mantenga siempre los marcadores de posición en los ejemplos de comandos proporcionados por AutoFon, como [apn], [apnu] o [apnp], y reemplácelos con los datos APN de su operador cuando corresponda.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús y la sintaxis de los comandos; confirme siempre los pasos exactos para la revisión de firmware de su Omega.
- TCP y UDP son compatibles con Plaspy; UDP suele ser más ligero mientras que TCP ofrece mayor fiabilidad de conexión; elija según las necesidades de su instalación.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que use los ajustes estándar de servidor y puerto y evite alteraciones no estándar a menos que el soporte lo recomiende.
- La detección automática de APN puede funcionar en muchas redes, pero verifique el APN manualmente si el rastreador no logra abrir una sesión GPRS.
- El fallback por SMS y el buffering en black box son útiles para garantizar la entrega de eventos críticos cuando el GPRS es intermitente.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon Омега con Plaspy ofrece a las organizaciones un rastreador compacto y de larga vida útil que envía posición, movimiento y telemetría de presencia a una única plataforma de monitoreo. Los ajustes de servidor compartidos y la detección de protocolo de Plaspy simplifican la incorporación de múltiples equipos y reducen la sobrecarga de configuración por dispositivo al desplegar flotas o realizar seguimiento distribuido de activos.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific setup steps, firmware notes, and official configuration commands consult the AutoFon website at https://www.autofon.ru/ because manufacturer specifications and setup methods can change over time.
