---
slug: /sinotrack/st_906/protocol
id: st_906-protocol
sidebar_label: Protocol
title: SinoTrack - ST-906 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del SinoTrack ST-906 y su comunicación con Plaspy para rastreo GPS en tiempo real confiable
keywords:
  - Protocolo SinoTrack ST-906
  - Protocolo GPS SinoTrack ST-906
  - SinoTrack ST-906 y Plaspy
  - Protocolo de rastreo ST-906
  - Comunicación rastreador GPS SinoTrack
  - Integración rastreador GPS Plaspy
  - Guía protocolo rastreador vehicular
  - Compatibilidad de dispositivos Plaspy
  - Configuración SMS ST-906
  - Protocolo rastreo de flotas
---

# SinoTrack - Protocolo ST-906

Esta página describe el contexto del protocolo público para usar el SinoTrack ST-906 con Plaspy. Se centra en cómo se suele configurar el equipo para reportar a una plataforma de terceros, qué papel juega el protocolo de reporte en la entrega de datos y qué esperar al integrar el ST-906 en Plaspy para ubicación en tiempo real, historial y telemetría.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo para el ST-906 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que instaladores y administradores deben validar la configuración del equipo y el firmware antes de despliegues a gran escala.

## Resumen del protocolo

A nivel general, el protocolo de reporte del ST-906 define cómo el rastreador se identifica ante un servidor remoto, cómo transmite ubicación y telemetría, y cómo acepta configuración remota por SMS para cambiar el servidor destino. El equipo se configura por SMS para apuntar a un servidor y un APN específicos, de modo que pueda enviar actualizaciones de posición y otras señales a un punto de ingreso como Plaspy.

- El protocolo regula identificación, marcas de tiempo y los tipos de telemetría que el dispositivo envía al servidor sin implicar formatos de paquete concretos.
- La configuración por SMS sirve para establecer el APN y la dirección del servidor para que el ST-906 transmita por datos móviles a la plataforma elegida.
- El reporte permite al servidor recibir actualizaciones periódicas de posición, eventos de movimiento o encendido y otras señales que soporte la unidad.
- El comportamiento del protocolo puede influir en la frecuencia de reporte, el tamaño de los mensajes y qué campos de telemetría incluye el dispositivo.
- Una configuración correcta del APN y del servidor es esencial para que el dispositivo establezca una sesión de datos y alcance la plataforma seleccionada.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un punto de ingreso compartido y determina automáticamente el protocolo apropiado para cada unidad que se conecta. Cuando un ST-906 se configura para reportar a Plaspy, la plataforma ingiere los mensajes del dispositivo y los mapea en datos de rastreo utilizables sin requerir que el usuario seleccione manualmente el protocolo.

- Apunte el ST-906 a Plaspy configurando el servidor del dispositivo a d.plaspy.com o 54.85.159.138 mediante los comandos SMS del equipo.
- Plaspy escucha en un único puerto para todos los dispositivos y usa ese punto para aceptar conexiones entrantes de los rastreadores.
- El puerto de ingestión estándar usado por Plaspy es el 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Cuando el dispositivo reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante.
- En la mayoría de los casos no será necesario elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El ST-906 puede configurarse para usar datos móviles para el reporte y por lo general depende del SMS para la configuración inicial del servidor y del APN. Para el transporte hacia Plaspy, el rastreador puede usar UDP o TCP según la configuración del dispositivo y las capacidades del firmware. Utilice la configuración de red y APN correcta para la tarjeta SIM instalada en el equipo para garantizar conectividad fiable.

- El equipo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como dirección del servidor.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos soportados usan ese mismo puerto para la ingestión de datos.
- La comunicación puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Configure el APN y la dirección del servidor del rastreador mediante los comandos SMS del ST-906 para que la unidad pueda abrir una sesión de datos hacia Plaspy.
- Verifique la disponibilidad de la red móvil y la configuración del APN de la SIM en la zona de despliegue para evitar problemas de conectividad.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan, con qué frecuencia se envían los mensajes y qué transportes se soportan.
- Las revisiones de hardware y los modelos variantes pueden incluir diferente soporte de E/S o sensores que afecten lo que el rastreador reporta a Plaspy.
- El conjunto de comandos SMS del fabricante es el método soportado para cambiar APN y ajustes de servidor en el ST-906; confirme la sintaxis exacta en el manual del equipo.
- La selección entre UDP y TCP puede afectar las características de entrega en redes celulares y debe elegirse según las necesidades de confiabilidad y la capacidad del dispositivo.
- Confirme el registro de IMEI, el soporte de bandas de red local y los requisitos regulatorios en el país de destino antes del despliegue.
- Valide siempre un pequeño número de unidades y confirme el reporte exitoso a d.plaspy.com o 54.85.159.138 en el puerto 8888 antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a instaladores y administradores a poner los dispositivos en línea rápidamente, resolver problemas de conectividad o calidad de datos, y planear el mantenimiento y las actualizaciones de firmware a largo plazo. Conocer cómo reporta el ST-906 y cómo Plaspy ingiere los datos reduce el tiempo para obtener la primera posición y mejora la confiabilidad operativa.

- Asegura que se apliquen los ajustes correctos de APN y servidor para que el dispositivo alcance Plaspy por la red móvil.
- Ayuda a diagnosticar telemetría faltante o incompleta correlacionando las capacidades del firmware con los campos esperados.
- Permite una mejor planificación de la selección de transporte, como UDP o TCP, según las condiciones de red y las necesidades de confiabilidad.
- Facilita las pruebas controladas y la validación durante pilotos para confirmar la cadencia de reporte y la reproducción del historial.
- Hace más fácil la coordinación con instaladores y con el fabricante cuando el comportamiento del dispositivo difiere de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-906 con Plaspy ofrece una vía práctica para seguimiento vehicular en tiempo real, reproducción de historial y monitoreo operativo. Dado que el ST-906 puede apuntar a un servidor y APN personalizados vía SMS, administradores de flotas e instaladores pueden integrar la telemetría del dispositivo en Plaspy para mapeo, alertas e informes sin depender del servicio en la nube del fabricante.

Plaspy centraliza la ingestión de dispositivos en un único endpoint para que pueda administrar flotas mixtas y múltiples modelos de rastreadores usando una dirección y puerto de servidor consistentes. Más información sobre Plaspy y cómo maneja la ingestión de dispositivos y la gestión de flotas en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; confirme la información específica más reciente y la sintaxis de comandos SMS en el sitio del fabricante https://www.sinotrackgps.com/ antes del despliegue.
