---
slug: /gotop/d50/configuration
id: d50-configuration
sidebar_label: Configuration
title: GOTOP - D50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador para mascotas GOTOP D50 con ajustes del servidor Plaspy y pasos prácticos
keywords:
  - configuración GOTOP D50
  - instalación GOTOP D50
  - configuración de servidor GOTOP D50
  - GOTOP D50 Plaspy
  - configuración del rastreador D50
  - configuración de rastreador Plaspy
  - configuración rastreador GPS para mascotas
  - integración rastreador GPS Plaspy
  - instalación rastreador de mascotas D50
  - compatibilidad GOTOP con Plaspy
---

# GOTOP - D50: Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS para mascotas GOTOP D50 con Plaspy. Explica los ajustes del servidor compartido que Plaspy requiere, detalla el flujo práctico de configuración y señala lo que debe verificar antes de integrar el D50 para que pueda enviar ubicaciones y eventos a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta página para preparar el dispositivo para Plaspy y luego consulte la documentación oficial de GOTOP para detalles específicos del dispositivo.

## Resumen de la configuración

El proceso de configuración garantiza que el D50 pueda establecer un enlace de datos fiable con Plaspy para que las posiciones, eventos de movimiento, alertas SOS y el historial de rutas aparezcan en su cuenta de Plaspy. En el dispositivo, esto normalmente implica ingresar el endpoint y el transporte del servidor Plaspy, confirmar que el equipo tiene conexión de datos activa y validar que el dispositivo está reportando correctamente.

- Dirija los ajustes de reporte del D50 al endpoint del servidor Plaspy para que el uplink GPRS entregue posiciones y eventos a Plaspy.
- Seleccione el tipo de transporte (UDP o TCP) si el rastreador lo requiere y ajuste el puerto de la plataforma para que coincida con Plaspy.
- Verifique que el dispositivo tenga una ruta de datos activa y que GNSS o LBS estén generando fijaciones de posición.
- Guarde y aplique las configuraciones en el rastreador, luego confirme que el dispositivo aparece en línea y reporta en el panel de Plaspy.
- Use Plaspy para validar el seguimiento en vivo, las alertas de geocerca, la reproducción de historial y los eventos SOS/movimiento una vez establecida la comunicación.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el dispositivo comience a reportar al endpoint del servidor.

## Requisitos típicos antes de configurar

- Un D50 con batería cargada y energía suficiente para realizar la configuración y un ciclo inicial de reporte.
- Una tarjeta SIM activa con plan de datos válido instalada si el dispositivo usa GPRS para reportar.
- Acceso al método de configuración oficial de GOTOP para el D50 (app móvil, portal web, SMS o herramienta USB según lo proporcione el fabricante).
- El IMEI del dispositivo o identificador disponible para registrar o validar la unidad en Plaspy.
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo aparece en línea y envía telemetría.
- Comprensión de que el firmware del fabricante y las variantes regionales pueden afectar los ajustes disponibles y los nombres de los menús.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el D50 envía actualizaciones de ubicación y eventos del dispositivo por GPRS al endpoint y puerto compartidos de Plaspy para que Plaspy pueda mostrar posiciones en tiempo real, alertas y rutas históricas. Plaspy procesa los mensajes entrantes de posición y evento y aplica detección automática de protocolo para que los dispositivos que usan formatos estándar sean reconocidos sin cambios especiales en el servidor.

- El dispositivo reporta coordenadas GNSS o LBS y marcas de tiempo a d.plaspy.com en el puerto 8888.
- Los datos de eventos como alertas de movimiento y notificaciones SOS se reenvían a Plaspy para alerta inmediata.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint configurado.
- El D50 puede usar transporte UDP o TCP en el puerto 8888 según la opción de configuración del equipo.
- Plaspy muestra ubicación en vivo, reproducción de historial y eventos de geocerca una vez que el D50 reporta correctamente.

## Flujo común de configuración

1. Acceda al método oficial de configuración de GOTOP para el D50 (app del fabricante, herramienta web, comandos SMS o utilidad de configuración).
2. En los ajustes de red o servidor del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto de reporte en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte y guarde la opción.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante.
6. Reinicie el D50 si el dispositivo o el firmware lo requieren para activar los nuevos ajustes de reporte.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado en línea, actualizaciones de ubicación en vivo y la telemetría inicial en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

No se incluyen comandos específicos públicos del dispositivo aquí. El D50 admite reporte GPRS estándar y puede ofrecer varias interfaces de configuración como la app de GOTOP, un portal web o comandos por SMS. La sintaxis exacta de los comandos y la interfaz disponible dependen del firmware GOTOP y del modelo regional.

Si dispone de ejemplos de comandos proporcionados por el fabricante o una guía de configuración de GOTOP, aplique los ajustes de servidor mostrados en esta página (d.plaspy.com o 54.85.159.138 y puerto 8888) dentro de esos comandos o en la herramienta del fabricante. Conserve cualquier marcador de posición que proporcione GOTOP, como campos APN (por ejemplo [apn], [apnu], [apnp]) y reemplácelos por los valores de su operador cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar los nombres de los menús y el lugar exacto para introducir los ajustes del servidor; consulte la documentación de GOTOP para la revisión de firmware de su D50.
- Elija UDP o TCP según las opciones de configuración del rastreador; Plaspy acepta ambos en el puerto 8888 y realiza detección automática de protocolo en el servidor.
- El endpoint y el puerto del servidor Plaspy se comparten entre dispositivos compatibles para simplificar la configuración e incorporación a la plataforma.
- Si la configuración por SMS está disponible en su D50, es posible enviar comandos de configuración vía SMS para establecer servidor y valores APN; siga la sintaxis de comandos SMS publicada por GOTOP.
- Confirme los ajustes de APN y del operador de la SIM antes de configurar los campos del servidor para asegurar que el rastreador pueda establecer una sesión GPRS.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D50 con Plaspy ofrece a propietarios y administradores de pequeñas flotas una vía sencilla para el rastreo en tiempo real de mascotas, alertas SOS y análisis de rutas históricas en una plataforma unificada. La combinación del D50 de posicionamiento GNSS y LBS, detección de movimiento y diseño compacto y resistente al agua lo hace práctico para la monitorización continua de mascotas, mientras que Plaspy recibe los reportes de ubicación y eventos a través del endpoint compartido para ofrecer mapas, alertas y reproducción de historial.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device-specific configuration instructions, firmware behavior, and manufacturer details for the GOTOP D50, verify the current documentation at https://www.gotop.cc/.
