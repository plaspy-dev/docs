---
slug: /gosafe/g6c/protocol
id: g6c-protocol
sidebar_label: Protocol
title: Gosafe - G6C Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Gosafe G6C con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo Gosafe G6C
  - Protocolo GPS Gosafe G6C
  - Protocolo G6C Plaspy
  - Protocolo de rastreo Gosafe
  - Comunicación Gosafe G6C
  - Compatibilidad Gosafe G6C
  - Protocolo rastreador G6C
  - Integración Gosafe Plaspy
  - Rastreo vehicular G6C
  - Telemática de flotas G6C
---

# Gosafe - Protocolo G6C

Esta página explica, en términos públicos y no sensibles, cómo encaja la comunicación del rastreador Gosafe G6C dentro de una implementación de Plaspy. Describe el contexto del protocolo a nivel de dispositivo y los ajustes de conexión compartidos que Plaspy expone para dispositivos compatibles. El G6C es un rastreador robusto de calidad vehicular con GNSS, conectividad celular, buffer de mensajes y un conjunto amplio de entradas y salidas pensado para telemática de flotas y despliegues empresariales; esta página utiliza esa descripción del dispositivo como contexto del protocolo y no entra en detalles internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888. Todos los dispositivos en Plaspy usan el mismo puerto. Plaspy detecta automáticamente el protocolo del rastreador, y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.

## Descripción general del protocolo

A alto nivel, el protocolo del G6C regula cómo la unidad se identifica ante un servidor, cómo reporta coordenadas GNSS y telemetría, cómo almacena mensajes durante cortes de conectividad y cómo acepta ciertos comandos remotos o disparadores de configuración. Para la integración con Plaspy, el rol público del protocolo es asegurar la entrega fiable y oportuna de datos de ubicación y sensores, y preservar el orden e integridad de los mensajes a través de redes móviles.

- Permite al G6C transmitir posición GNSS, eventos del acelerómetro, estados de entradas y telemetría almacenada a un endpoint remoto.
- Proporciona un identificador de dispositivo y una cadencia básica de reporte para que Plaspy asocie mensajes con el activo y su línea de tiempo.
- Soporta comportamiento de almacenamiento en buffer y retransmisión que ayuda a mantener la continuidad durante pérdidas temporales de red.
- Transporta la telemetría necesaria para casos de uso de flota, como estado de ignición, lecturas analógicas y eventos de entradas digitales.
- Permite transporte sobre redes móviles estándar y soporta TCP, UDP o SMS según la configuración del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos y utiliza las características de la conexión entrante y los mensajes para determinar qué protocolo usa un dispositivo. Dado que el G6C está diseñado para ser compatible con Plaspy, la mayoría de los despliegues no requieren selección manual de protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, direcciones a las que los dispositivos pueden enviar reportes.
- El puerto es 8888 y Plaspy usa este mismo puerto para todos los dispositivos soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes para la detección del protocolo.
- Cuando un dispositivo correctamente configurado se conecta y envía datos, Plaspy detecta automáticamente el protocolo del rastreador e inicia la ingesta de registros de posición y telemetría.
- En configuraciones normales, solo es necesario apuntar el dispositivo al endpoint de Plaspy y asegurarse de que la selección de transporte coincida con la configuración del equipo.

## Transporte y contexto de conexión

Las opciones de conexión para el G6C se centran en transporte móvil fiable y direccionamiento de servidor flexible. La unidad soporta cargas por TCP y UDP, así como fallback por SMS en algunos despliegues. Para la integración con Plaspy, los detalles clave de conexión son consistentes entre dispositivos para simplificar la provisión y gestión a gran escala.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de provisión.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138; los dispositivos pueden apuntar a cualquiera de estas direcciones según lo permita el despliegue.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y APN.
- La selección de transporte (TCP vs UDP) puede afectar la semántica de entrega y el comportamiento de buffering; elija el transporte que coincida con el firmware del G6C y las necesidades operativas.
- Las condiciones de la red celular, la configuración del APN y la provisión de la SIM afectan la conectividad y deben validarse en campo antes de un despliegue masivo.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar formatos de mensaje, campos opcionales y la telemetría disponible; registre siempre la versión de firmware del dispositivo al probar el comportamiento del protocolo.
- Las revisiones de hardware y las variantes de radio opcionales (por ejemplo LTE vs GSM únicamente) pueden diferir en los transportes soportados o perfiles de potencia.
- Las opciones de configuración del fabricante —como intervalo de subida, umbrales de reporte por movimiento y mapeo de entradas— afectan lo que Plaspy recibe del dispositivo.
- Algunas funciones (tamaño de buffer, comportamiento FOTA, fallback por SMS) dependen de la configuración del dispositivo y del entorno del operador más que de Plaspy.
- Si administra una flota grande, valide un dispositivo de muestra de extremo a extremo con el endpoint de Plaspy antes de aplicar actualizaciones masivas o cambiar ajustes de transporte.
- Use la documentación oficial del fabricante para confirmar diferencias específicas de firmware antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del G6C ayuda a garantizar una incorporación fiable de dispositivos, facilita la resolución de problemas y permite un funcionamiento predecible a largo plazo dentro de Plaspy. Saber qué y cómo reporta el rastreador permite al equipo de operaciones configurar alertas, interpretar telemetría y diseñar flujos de trabajo que dependan de datos precisos y oportunos.

- Agiliza la configuración inicial al aclarar qué campos de datos proporcionará el dispositivo y con qué frecuencia se envían los reportes.
- Reduce el tiempo de resolución al acotar problemas a transporte, APN o comportamiento de firmware en lugar de a la configuración de Plaspy.
- Mejora la calidad de los datos al alinear intervalos de reporte y umbrales de eventos con las necesidades del negocio para alertas y análisis.
- Ayuda a planificar ciclos de actualización de firmware y hardware al identificar funciones asociadas a revisiones o builds concretos.
- Facilita despliegues fiables a gran escala al documentar el comportamiento esperado de buffering y retransmisión bajo conectividad intermitente.

## Por qué usar Plaspy con este protocolo

Usar el G6C con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad de flota en tiempo real, reportes históricos y alertas basadas en eventos. El G6C suministra ubicación, eventos de acelerómetro, estado de ignición y telemetría de sensores que Plaspy puede ingerir para habilitar paneles operativos, monitoreo de rutas y flujos de trabajo de seguridad. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la carga manual de configurar el protocolo por dispositivo, algo especialmente útil en despliegues a gran escala y servicios gestionados.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el Gosafe G6C visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del dispositivo del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre protocolo y firmware del dispositivo en el sitio del fabricante https://gosafesystem.com/.
