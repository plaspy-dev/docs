---
slug: /tramigo/t23/protocol
id: t23-protocol
sidebar_label: Protocol
title: Tramigo - T23 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el rastreador Tramigo T23 con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo Tramigo T23
  - Tramigo T23 GPS
  - protocolo Tramigo Plaspy
  - protocolo del rastreador T23
  - protocolo de comunicación T23
  - rastreo vehicular Tramigo
  - compatibilidad de dispositivo Plaspy
  - guía de protocolo de rastreador GPS
  - rastreador para gestión de flotas
  - compatibilidad de protocolo de rastreo
---

# Tramigo - Protocolo T23

Esta página describe el contexto público del protocolo para usar el rastreador vehicular Tramigo T23 con Plaspy. Se centra en cómo se comunica el T23 en términos generales y qué puede esperarse al apuntar un dispositivo T23 a Plaspy para el envío de ubicaciones, alertas y telemetría básica. La información está dirigida a usuarios técnicos, integradores y gestores de flotas que necesitan una visión clara y no sensible de la relación de comunicación del dispositivo con Plaspy.

Plaspy acepta informes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente. Para el Tramigo T23 esto significa que puede apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según las capacidades del equipo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y las opciones del fabricante, por lo que siempre valide las opciones específicas del dispositivo con la documentación de Tramigo.

## Resumen del protocolo

El protocolo de comunicación del T23 regula cómo el rastreador envía actualizaciones de posición, cambios de estado y alertas de eventos vía GSM y GPRS a un servidor backend. A alto nivel, el protocolo establece las reglas que el dispositivo usa para entregar información de ubicación y telemetría útil a Plaspy, a la vez que permite configuración y monitoreo remoto cuando están soportados.

- Permite al T23 reportar ubicación GPS, marcas de tiempo e información de estado a un servidor remoto
- Proporciona reportes de eventos por entradas como encendido, pánico y otros sensores digitales disponibles en el equipo
- Transporta confirmaciones de configuración o comandos cuando se admite la configuración remota o cambios de parámetros
- Opera sobre la pila celular del equipo usando GPRS para transporte de datos y GSM para voz cuando aplica
- Soporta opciones de comportamiento como modo de reposo, envío de posiciones por tiempo, distancia o cambio de ángulo, y almacenamiento local cuando está sin conexión

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido e identifica automáticamente el protocolo del rastreador usado por cada dispositivo cuando los ajustes de reporte están correctos. Esto reduce la configuración manual dentro de Plaspy para muchos rastreadores de uso común, incluidos modelos Tramigo compatibles.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la dirección pública 54.85.159.138
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, que es el 8888
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo
- Cuando un T23 envía datos al endpoint de Plaspy, la plataforma empata el flujo entrante con un perfil de protocolo conocido automáticamente
- En la mayoría de los casos no es necesario que el usuario seleccione manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy

## Transporte y contexto de conexión

El contexto de transporte abarca cómo el T23 establece conectividad con Plaspy y qué opciones de red son habitualmente utilizadas. El Tramigo T23 usa datos celulares sobre GPRS y puede configurarse para enviar sus reportes a Plaspy usando UDP o TCP en el puerto unificado de Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138
- El puerto 8888 es el puerto único que usa Plaspy para todos los dispositivos y debe configurarse en el equipo al reportar a Plaspy
- El T23 puede configurarse para UDP o TCP según el firmware y las necesidades de configuración
- La cobertura celular y la estabilidad de la sesión GPRS afectan la frecuencia con la que el dispositivo entrega los reportes con éxito
- El almacenamiento local del dispositivo y una batería de respaldo ayudan a preservar los datos cuando la alimentación principal o la red se interrumpen

## Notas de compatibilidad del protocolo

- El Tramigo T23 es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy en el puerto 8888
- Las revisiones de firmware pueden cambiar formatos de mensaje, funciones disponibles o los valores por defecto de transporte, por lo que verifique la versión de firmware si encuentra comportamientos inesperados
- Las revisiones de hardware y accesorios opcionales como antenas fijas, micrófono o sensores de temperatura pueden afectar la telemetría y las opciones de reporte disponibles
- La selección de transporte entre UDP y TCP puede impactar las garantías de entrega, especialmente en condiciones de red inestables
- Siempre valide la configuración y compatibilidad del dispositivo con la documentación oficial de Tramigo para el hardware y firmware exactos en uso

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del T23 ayuda a agilizar la configuración inicial, facilita una resolución de problemas más efectiva y soporta una operación confiable a largo plazo dentro de Plaspy. Saber cómo y qué reporta el dispositivo reduce errores de configuración y acelera la resolución cuando surgen incidencias.

- Ayuda a garantizar ajustes de reporte correctos para que Plaspy pueda detectar automáticamente el protocolo
- Aclara las decisiones de transporte entre UDP y TCP y su efecto en el comportamiento de entrega
- Permite decisiones informadas sobre intervalos de reporte y gestión de energía para equilibrar la vida útil de la batería y la frecuencia de actualizaciones
- Facilita la resolución de problemas cuando faltan reportes o éstos son irregulares al acotar las posibles causas
- Apoya la coordinación con el soporte de Tramigo cuando surjan preguntas específicas de firmware o hardware

## Por qué usar Plaspy con este protocolo

Usar el Tramigo T23 con Plaspy ofrece a las organizaciones una forma práctica de combinar un dispositivo de rastreo vehicular probado con una plataforma backend que normaliza los datos entrantes entre muchos tipos de equipos. El modelo de endpoint centralizado de Plaspy y la detección automática de protocolos reducen la complejidad de configuración para flotas y usuarios individuales, mientras que las funciones del T23 como múltiples disparadores de posicionamiento y monitoreo de entradas proporcionan la información básica necesaria para la visibilidad operativa.

Para conocer más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles específicos más recientes del protocolo del dispositivo, comportamiento de firmware y orientación del fabricante, verifique la información vigente en el sitio web de Tramigo en http://www.tramigo.net/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
