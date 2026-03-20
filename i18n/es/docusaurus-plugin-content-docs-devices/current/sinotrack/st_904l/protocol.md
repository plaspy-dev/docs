---
slug: /sinotrack/st_904l/protocol
id: st_904l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-904L Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para integrar el rastreador SinoTrack ST-904L con Plaspy para seguimiento en vivo y alertas
keywords:
  - protocolo SinoTrack ST-904L
  - protocolo GPS SinoTrack ST-904L
  - compatibilidad ST-904L Plaspy
  - protocolo SinoTrack Plaspy
  - protocolo de comunicación ST-904L
  - protocolo de rastreo SinoTrack
  - protocolo de rastreador GPS ST-904L
  - configuración GPRS SMS ST-904L
  - rastreo en tiempo real SinoTrack
  - integración de dispositivos Plaspy
---

# SinoTrack - Protocolo ST-904L

Esta página resume el contexto público del protocolo para integrar el rastreador GPS SinoTrack ST-904L con la plataforma Plaspy. Describe cómo el dispositivo puede reportar posición y eventos a Plaspy usando canales estándar como GPRS y SMS, y explica el papel del protocolo de comunicación del rastreador para entregar telemetría útil a la plataforma.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. El comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta guía se enfoca en detalles interoperables y prácticos de configuración en lugar de formatos internos sensibles de los paquetes.

## Resumen del protocolo

El ST-904L comunica datos de ubicación, alarmas y estado a plataformas en línea mediante reportes por GPRS y SMS. El rol del protocolo es identificar de forma fiable el dispositivo, enviar telemetría periódica o por eventos, y entregar señales de alarma y control por voz/SMS para que un servidor como Plaspy pueda mostrar historial de ubicaciones y alertas en tiempo real.

- Permite reportes de posición GPS periódicos y por eventos para mapeo en vivo y registro de trayectos.
- Entrega eventos de alarma como SOS, geocerca y exceso de velocidad para que Plaspy dispare notificaciones.
- Permite configuración remota vía SMS incluyendo IP del servidor y APN, para apuntar el dispositivo a servidores externos.
- Transporta señales de control bidireccional por voz y SMS cuando está soportado, para contacto directo y consultas remotas.
- Proporciona IMEI e identificadores de registro que las plataformas usan para asociación y gestión de dispositivos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de los rastreadores en un único endpoint compartido y reconoce automáticamente el formato del dispositivo, por lo que normalmente usted no necesita seleccionar manualmente un protocolo. Cuando un ST-904L se configura para enviar datos a Plaspy, la plataforma usa esa información entrante para asociar el dispositivo y procesar la telemetría sin pasos adicionales de selección de protocolo por parte del usuario.

- Plaspy acepta reportes de dispositivos en el endpoint común de Plaspy y detecta el protocolo del rastreador automáticamente.
- Por lo general, los usuarios apuntan el ST-904L a Plaspy mediante configuración por SMS y no necesitan elegir un parser dentro de Plaspy cuando el reporte es correcto.
- Plaspy centraliza el parseo y el mapeo para los dispositivos soportados, convirtiendo los mensajes en eventos de ubicación, estado y alarma.
- La detección automática reduce los pasos de configuración en la mayoría de despliegues, manteniendo sencillo el proceso de registro y mapeo por IMEI.

## Transporte y contexto de conexión

El ST-904L soporta métodos estándar de reporte celular y puede configurarse para enviar sus datos por UDP o TCP según el firmware y la configuración. Para la integración con Plaspy, los dispositivos deben configurarse para reportar a la dirección y puerto del servidor Plaspy usados por todos los dispositivos compatibles.

- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888.
- El dominio del servidor Plaspy para datos entrantes de rastreadores es d.plaspy.com.
- Plaspy también acepta conexiones a la dirección IP del servidor 54.85.159.138 si se requiere IP en lugar de hostname.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración por SMS del servidor y del APN.
- Utilice los comandos SMS de configuración GPRS del ST-904L para establecer el endpoint de Plaspy y el APN para el reporte por datos celulares.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el ritmo de envío de mensajes, los modos de transporte soportados o el conjunto de eventos reportados; verifique detalles de firmware antes de despliegues masivos.
- Las variantes de hardware o SKUs regionales a veces modifican bandas o conjuntos de funciones y pueden afectar la conectividad o los métodos de reporte disponibles.
- Algunas funciones, como la voz bidireccional o telemetría extendida, pueden requerir firmware específico o soporte del operador; valide esto al planificar despliegues.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega en redes móviles; confirme la combinación de dispositivo y operador que mejor funcione para su caso de uso.
- Use las opciones de configuración por SMS del ST-904L para apuntar los dispositivos a Plaspy, pero confirme los comandos SMS exactos con la documentación oficial del equipo.
- Siempre valide el registro del IMEI y los requisitos regulatorios locales antes de poner dispositivos en producción.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el ST-904L ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y garantizar una operación predecible a largo plazo cuando se integra con Plaspy. Comprender el comportamiento del protocolo reduce la ambigüedad durante la puesta en marcha y facilita la resolución de problemas de conectividad y reporte.

- Confirma la correcta orientación del servidor y del APN para que los datos lleguen a Plaspy sin errores intermedios.
- Ayuda a interpretar la cadencia de la telemetría del dispositivo frente a las expectativas de la plataforma para la reproducción histórica y las alertas.
- Orienta los pasos de solución de problemas cuando las actualizaciones de posición, las alarmas o la voz bidireccional no aparecen en Plaspy.
- Informa decisiones sobre la selección de transporte UDP o TCP y cualquier configuración a nivel de red necesaria.
- Ayuda a planificar el comportamiento de batería y modos de energía para cumplir con la frecuencia de reporte y el tiempo de operación deseados.

## Ventajas de usar Plaspy con este protocolo

Usar el ST-904L con Plaspy ofrece una solución práctica para recopilar eventos de ubicación y alarma en tiempo real desde un rastreador compacto que soporta GPRS y configuración por SMS. La detección automática de protocolos de Plaspy y su endpoint centralizado simplifican poner dispositivos en línea, habilitar historial de ubicaciones, alertas por geocerca, notificaciones por exceso de velocidad y la gestión consolidada de dispositivos en una flota o para uso personal.

Para obtener más información sobre Plaspy y cómo puede recibir y gestionar datos de dispositivos ST-904L visite https://www.plaspy.com. Para comandos específicos de protocolo del dispositivo, comportamiento de firmware y orientación del fabricante verifique los detalles en el sitio oficial de SinoTrack https://www.sinotrackgps.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
