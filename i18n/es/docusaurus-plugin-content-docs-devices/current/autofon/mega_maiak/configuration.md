---
slug: /autofon/mega_maiak/configuration
id: mega_maiak-configuration
sidebar_label: Configuration
title: AutoFon - Мега-Маяк + Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para AutoFon Мега-Маяк +, conexión a Plaspy, ajustes de servidor y flujo de instalación
keywords:
  - AutoFon Мега-Маяк + configuración
  - AutoFon Mega Mayak configuración
  - Мега-Маяк + configuración
  - configuración de rastreo AutoFon
  - configuración de rastreador Plaspy
  - configuración del servidor Plaspy
  - guía configuración rastreador GPS
  - configuración de rastreo de vehículos
  - configuración de rastreador GPRS
  - configuración de rastreador para gestión de flotas
---

# AutoFon - Мега-Маяк + Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon Мега-Маяк + con Plaspy. Incluye los ajustes compartidos del servidor Plaspy, el flujo práctico que deberá seguir en el dispositivo o la herramienta de configuración del fabricante, y las verificaciones habituales para poner el equipo en línea y que Plaspy reciba telemetría y eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Мега-Маяк + es compatible con Plaspy desde fábrica y soporta reportes por GPRS, redundancia de doble SIM, fallback por Wi‑Fi y LBS, etiquetado de presencia BLE y SMS como canal de notificación alternativo; use esta guía como referencia práctica y consulte al fabricante para instrucciones específicas por firmware.

## Resumen de configuración

El objetivo de la configuración es apuntar el Мега-Маяк + a Plaspy para que el rastreador reporte de forma confiable posiciones GNSS, eventos de movimiento y manipulación, y entradas auxiliares. Usando el endpoint y el puerto compartidos de Plaspy, el dispositivo envía ubicaciones en tiempo real, telemetría y registros en buffer (black box) a la plataforma para monitorización, alertas e historial.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy y así los paquetes GPRS lleguen al backend de monitoreo.
- Confirme la selección de transporte y el puerto para que el dispositivo y Plaspy intercambien mensajes sin pérdida de paquetes.
- Valide el registro en la red y el failover de doble SIM para que el reporte continúe con cobertura variable.
- Verifique que el dispositivo sea visible en Plaspy y que se reciban eventos como SOS, impacto o manipulación.
- Confirme el comportamiento del buffer de la caja negra para asegurar que los paquetes almacenados se sincronicen tras cortes de conectividad.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos del servidor Plaspy al configurar el dispositivo o la herramienta del fabricante:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija el transporte que requiera la interfaz de configuración de su dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para identificar los mensajes del equipo una vez que los paquetes lleguen

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto 8888 para reportes, lo que simplifica la configuración entre múltiples modelos de rastreadores.

## Requisitos típicos antes de la instalación

- El dispositivo está alimentado y con carga suficiente de batería o conectado a fuente externa
- SIM activa insertada y registrada en una red celular si usará reportes por GPRS
- Acceso al método de configuración oficial de AutoFon o al software provisto por el vendedor
- Versiones de firmware y revisión de hardware anotadas para poder consultar la guía del fabricante
- Medio para recibir o revisar registros del dispositivo o confirmaciones tras aplicar la configuración
- Acceso físico al equipo o acceso del instalador para completar la selección de transporte y puerto si es necesario

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el Мега-Маяк + suele enviar paquetes de ubicación y eventos por su conexión GPRS al endpoint y puerto del servidor Plaspy. Plaspy recibe coordenadas GNSS y telemetría suplementaria de BLE, Wi‑Fi y LBS, y usa la detección automática de protocolo para parsear los mensajes entrantes.

- El dispositivo reporta posiciones GNSS y lecturas suplementarias de Wi‑Fi/LBS al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888
- GPRS es el canal de transporte principal para la telemetría en tiempo real; SMS puede usarse como fallback según la configuración del equipo
- Eventos de movimiento, manipulación, SOS y auxiliares se transmiten a Plaspy para alertas inmediatas y flujos de trabajo de incidentes
- El buffer de la caja negra contiene paquetes durante cortes y se sincroniza con el servidor Plaspy cuando se restablece la conectividad
- Plaspy detecta automáticamente el protocolo del rastreador y muestra el dispositivo en la interfaz de monitoreo tras un reporte exitoso

## Flujo de configuración común

1. Acceda al método de configuración oficial de AutoFon o al software proporcionado por el fabricante o instalador autorizado.
2. En los ajustes de servidor del equipo, ingrese el endpoint de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de reporte a 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte según las opciones del firmware o la herramienta.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes fueron aceptados.
6. Reinicie el dispositivo si la documentación del fabricante o la herramienta indican que es necesario para que los nuevos ajustes entren en vigor.
7. Valide que el equipo reporte a Plaspy comprobando la llegada de actualizaciones de ubicación y eventos en la plataforma; confirme que la detección automática de protocolo haya reconocido el rastreador.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta varían según el firmware de AutoFon y la herramienta de configuración que use. El Mega Becon Plus soporta configuración vía el software oficial de AutoFon, comandos SMS o herramientas de configuración GPRS según la build de firmware. Como los conjuntos de comandos específicos del modelo cambian entre versiones, consulte la documentación de AutoFon o la herramienta proporcionada por su proveedor para los comandos precisos y su orden.

Si utiliza la interfaz por SMS del fabricante o una herramienta del proveedor, siga las instrucciones del vendedor para establecer el dominio o la IP del servidor y el puerto 8888, y luego seleccione UDP o TCP según se requiera. Mantenga intactos los marcadores de posición que proporcione el vendedor para credenciales APN como [apn], [apnu] o [apnp] y reemplácelos por los valores de su operador SIM según lo indique AutoFon.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y la sintaxis de comandos; siempre anote la versión de firmware antes de realizar cambios.
- Las configuraciones de doble SIM requieren establecer APN y prioridades de operador según la guía del fabricante para aprovechar los enlaces redundantes.
- La selección TCP versus UDP depende del firmware del equipo y de la preferencia del instalador; Plaspy soporta ambos transportes y detecta el protocolo automáticamente.
- Confirme el comportamiento del buffer de la caja negra y los intervalos de sincronización para que los paquetes históricos se envíen a Plaspy tras los cortes.
- Use los canales de configuración oficiales de AutoFon para operaciones sensibles como cambios de credenciales APN o actualizaciones de firmware OTA.

## Por qué usar Plaspy con esta configuración

Configurar el AutoFon Мега-Маяк + para reportar a Plaspy ofrece una vía práctica para combinar operación autónoma prolongada, características de instalación encubierta y telemetría robusta con una plataforma de monitoreo que reconoce automáticamente el protocolo del dispositivo. Las organizaciones obtienen visibilidad continua, alertas basadas en eventos y datos históricos de rutas mientras usan ajustes de servidor Plaspy estandarizados en toda su flota de dispositivos.

Para saber más sobre Plaspy y cómo la plataforma puede integrarse con rastreadores como el Мега-Маяк + visite https://www.plaspy.com. Para los pasos de configuración específicos más recientes del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información con la documentación oficial de AutoFon en https://www.autofon.ru/ para que su instalación coincida con el firmware y la revisión del equipo.
