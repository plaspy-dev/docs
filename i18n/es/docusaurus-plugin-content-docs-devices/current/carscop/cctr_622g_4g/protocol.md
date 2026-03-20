---
slug: /carscop/cctr_622g_4g/protocol
id: cctr_622g_4g-protocol
sidebar_label: Protocol
title: Carscop - CCTR-622G-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del Carscop CCTR-622G-4G y cómo se comunica con Plaspy para seguimiento y alertas
keywords:
  - protocolo Carscop CCTR-622G-4G
  - protocolo rastreador GPS Carscop
  - compatibilidad Carscop Plaspy
  - protocolo comunicación CCTR 622G 4G
  - rastreo vehicular Carscop
  - protocolo rastreador personal Carscop
  - integración dispositivo Plaspy
  - guía protocolo rastreador GPS
  - protocolo reporte tracker Carscop
  - protocolo abierto rastreador GPS
---

# Carscop - Protocolo CCTR-622G-4G

Esta página describe el contexto público del protocolo para usar el rastreador Carscop CCTR-622G-4G con Plaspy. Resume cómo se comunica el dispositivo a alto nivel, qué papel juega el protocolo de reporte del rastreador y qué verificar cuando apunta el equipo a Plaspy para rastreo en tiempo real, alertas y telemetría. El CCTR-622G-4G es un rastreador portátil compacto con GNSS GPS y BeiDou, alarmas SOS y por impacto, voz bidireccional, modos de reporte configurables y un protocolo abierto que facilita la integración directa con plataformas de terceros.

Plaspy usa ajustes de conexión compartidos entre los rastreadores soportados y detecta el protocolo automáticamente cuando llegan los mensajes. Los dispositivos que deban reportar a Plaspy pueden configurarse para usar el endpoint de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el puerto 8888. El dispositivo puede usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante confirmar la configuración y el estado del firmware antes del despliegue.

## Resumen del protocolo

El protocolo de comunicación del dispositivo es el mecanismo que el rastreador utiliza para empaquetar identidad, posición y eventos y enviarlos a un servidor remoto. En el CCTR-622G-4G, el protocolo público y las salidas de telemetría estándar permiten a Plaspy recibir actualizaciones regulares de ubicación, eventos de alarma y mensajes de estado que la plataforma convierte en vistas de mapa, alertas y recorridos históricos.

- Permite envíos periódicos de posición y telemetría con marca de tiempo para que Plaspy pueda trazar recorridos en vivo e históricos.
- Transmite notificaciones de eventos como pulsos SOS, alarmas por impacto y aviso de batería baja para atención inmediata.
- Incluye información de identidad y estado del dispositivo para que Plaspy asocie los mensajes con el activo o usuario correcto.
- Soporta almacenamiento en búfer offline para que los puntos guardados se envíen cuando el rastreador recupere acceso a la red.
- Facilita funciones de gestión remota, como actualizaciones de firmware e intervalos de reporte configurables cuando el proveedor lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe la telemetría entrante en un endpoint y puerto compartidos y determina automáticamente el manejo apropiado para los dispositivos soportados. Cuando un CCTR-622G-4G está configurado para reportar a Plaspy, la plataforma ingestará los mensajes sin requerir la selección manual del protocolo en la mayoría de los casos.

- Plaspy escucha en un único puerto utilizado por todos los dispositivos soportados para simplificar la configuración y el aprovisionamiento.
- Configure el dispositivo para enviar datos a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 como destino.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita el modelo y sus preferencias de configuración.
- Si el rastreador está correctamente apuntado a Plaspy y hay conectividad de red, Plaspy intentará detectar y parsear los mensajes entrantes automáticamente.
- En general, usted no necesita seleccionar un protocolo dentro de Plaspy cuando el rastreador reporta al endpoint de Plaspy; aun así, se recomienda verificar la configuración del dispositivo y la versión de firmware.

## Transporte y contexto de conexión

Las elecciones de transporte y conexión determinan cómo se entrega la telemetría desde el rastreador a Plaspy, pero no cambian los tipos de datos de alto nivel que el protocolo transporta. Los dispositivos CCTR-622G-4G soportan redes celulares y pueden configurarse para usar cualquiera de los modos de transporte para reportar al servidor de Plaspy.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El puerto 8888 es el puerto de destino compartido y es usado por todos los dispositivos que se conectan a Plaspy.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888; elija el transporte que soporte su firmware y las condiciones de red.
- La conectividad celular en 2G, 3G y 4G se utiliza para alcanzar el endpoint de Plaspy, sujeto a la cobertura del operador local y la configuración de la SIM.
- Asegúrese de que las configuraciones APN y SIM en el dispositivo sean correctas para que el rastreador establezca una sesión de datos y alcance el servidor de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos disponibles y las funciones opcionales; verifique el firmware del rastreador antes de asumir un comportamiento exacto.
- Revisiones de hardware o variantes regionales del modelo pueden modificar las bandas soportadas o opciones menores del protocolo que afectan la conectividad y el reporte.
- La selección entre UDP y TCP es una opción de configuración en el dispositivo y puede influir en la fiabilidad y el comportamiento de retransmisión.
- La voz bidireccional y la escucha silenciosa suelen gestionarse por canales de voz estándar y no dependen del transporte de telemetría hacia Plaspy.
- El soporte de protocolo abierto facilita la integración, pero confirme con el fabricante cualquier variante específica del concesionario o vendedor.
- Valide las características personalizadas del proveedor o las opciones de portales de marca contra la documentación oficial de Carscop antes de integrar a escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un despliegue sin contratiempos, una supervisión confiable y una resolución efectiva de problemas al usar el CCTR-622G-4G con Plaspy. Saber qué envía el rastreador y cómo se conecta reduce el tiempo dedicado a diagnosticar problemas de conectividad y datos.

- Confirma que el dispositivo está apuntando al endpoint y puerto correctos de Plaspy para que los mensajes lleguen a la plataforma.
- Ayuda a interpretar diferencias en el comportamiento del dispositivo causadas por actualizaciones de firmware o cambios de modo.
- Permite una resolución más rápida de reportes de alarma o de actualizaciones de posición faltantes revisando el transporte y las configuraciones APN.
- Orienta las decisiones de configuración sobre intervalos de reporte y gestión de energía para equilibrar la vida útil de la batería y la capacidad de respuesta.
- Apoya la planificación para escenarios offline donde los recorridos almacenados deben subirse una vez que la cobertura regrese.

## Por qué usar Plaspy con este protocolo

Usar el Carscop CCTR-622G-4G con Plaspy ofrece visibilidad práctica para seguridad personal, rastreo de activos livianos y supervisión de pequeñas flotas. La combinación de un rastreador portátil sin instalación, modos de reporte configurables y la ingestión de telemetría de Plaspy proporciona ubicación en tiempo real, alarmas y recorridos históricos que ayudan a los equipos a monitorear activos y responder a eventos.

Plaspy facilita la recepción de datos desde dispositivos apuntados al endpoint compartido de Plaspy. Para conocer más sobre Plaspy y cómo la plataforma ingiere la telemetría de rastreadores, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo con el fabricante en http://www.carscop.com/.
