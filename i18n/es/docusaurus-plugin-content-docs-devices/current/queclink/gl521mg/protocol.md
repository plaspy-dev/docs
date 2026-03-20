---
slug: /queclink/gl521mg/protocol
id: gl521mg-protocol
sidebar_label: Protocol
title: QuecLink - GL521MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del QuecLink GL521MG que explica cómo el dispositivo se comunica con Plaspy y el contexto de conexión
keywords:
  - QuecLink GL521MG
  - Protocolo QuecLink GL521MG
  - Protocolo GPS GL521MG
  - Protocolo rastreador de activos QuecLink
  - Compatibilidad de dispositivos Plaspy
  - Comunicación de rastreadores GPS
  - Protocolo de rastreo de vehículos
  - Monitoreo de activos en cadena de frío
  - QuecLink @Track
  - Rastreador LTE Cat M1
---

# QuecLink - Protocolo GL521MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL521MG con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, en los ajustes de conexión necesarios para apuntarlo a la plataforma y en consideraciones prácticas de compatibilidad, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento explica el contexto general de comunicación y ofrece orientación de integración, recomendando verificar siempre contra la documentación del fabricante.

## Resumen del protocolo

El GL521MG transmite periódicamente posición y telemetría de sensores a un servidor remoto usando las opciones públicas de reporte de QuecLink. Cuando la integración se configura para Plaspy, el dispositivo envía telemetría estándar que Plaspy ingiere para rastreo en tiempo real, alarmas e informes históricos. Esta sección describe el rol del protocolo de reporte a alto nivel en lugar de detallar formatos internos de paquetes.

- Permite que el rastreador se identifique y envíe posición GNSS, estado de batería, movimiento y lecturas de sensores a Plaspy.
- Transporta reportes de alarmas y eventos como activaciones de geocerca, alertas por manipulación o movimiento y notificaciones de batería baja.
- Soporta múltiples transportes para que el dispositivo use el enlace de red más adecuado según el escenario de despliegue.
- Proporciona telemetría estructurada que Plaspy mapea en paneles, alertas y trazas históricas.
- Permite modos de reporte configurables y reportes programados para equilibrar la vida de batería con la capacidad de respuesta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes y telemetría en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador que usa el dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy siempre que el GL521MG esté configurado para reportar a los ajustes de conexión de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse donde DNS no esté disponible.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que un reporte con el formato esperado alcanza la plataforma.
- Si el dispositivo está configurado para reportar a Plaspy y el transporte es accesible, por lo general no se requiere seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

El GL521MG soporta múltiples opciones de transporte para el reporte y puede configurarse para usar el que mejor se adapte al despliegue y la disponibilidad de la red. Plaspy acepta ambos tipos de transporte principales en su puerto compartido, por lo que la ubicación del dispositivo y la accesibilidad del operador determinan la configuración más adecuada.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com como host de reporte o usar la IP del servidor Plaspy 54.85.159.138 en entornos con restricciones DNS.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el aprovisionamiento de la flota.
- Elija UDP para reportes con menor overhead cuando la red sea suficientemente confiable, o TCP cuando se prefiera un transporte orientado a conexión por parte del dispositivo o del operador.
- Asegúrese de que el APN y los ajustes celulares en el GL521MG estén provisionados para que el dispositivo pueda alcanzar el endpoint de Plaspy desde su red.

## Notas de compatibilidad del protocolo

- El soporte de QuecLink @Track en el GL521MG ofrece reportes comunes que Plaspy puede ingerir, pero la disponibilidad de comandos específicos puede depender de la compilación de firmware.
- Las actualizaciones de firmware o revisiones de hardware pueden cambiar comportamientos, opciones de frecuencia de mensajes o tipos de alarma soportados; valide el comportamiento tras las actualizaciones.
- Algunos despliegues pueden preferir TCP o UDP según el NAT del operador y las políticas de firewall; pruebe el transporte elegido en su entorno de red.
- El fallback por SMS es soportado por el dispositivo para reportes limitados o configuración en entornos sin cobertura de datos, aunque la ingestión en la plataforma difiere respecto al transporte IP.
- Valide la calibración de sensores y las unidades reportadas para temperatura, luminosidad y eventos del acelerómetro con la documentación del fabricante cuando los umbrales precisos sean críticos.
- Antes de rollouts a gran escala, realice un piloto reducido para confirmar que el dispositivo reporta los campos y alertas esperados a Plaspy en condiciones operativas reales.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación facilita una configuración confiable del dispositivo, acelera la resolución de problemas y aporta previsibilidad a largo plazo cuando se usa el GL521MG con Plaspy. Saber qué envía el rastreador y cómo lo recibe Plaspy reduce el tiempo de integración y apoya la continuidad operativa.

- Simplifica el aprovisionamiento inicial al alinear los ajustes de reporte del dispositivo con los detalles de conexión de Plaspy.
- Acelera la resolución de problemas al clarificar si el transporte, el APN o la configuración del dispositivo son la causa de telemetría faltante.
- Ayuda a elegir el modo de transporte adecuado según los compromisos entre vida de batería y fiabilidad de red.
- Asegura que los umbrales de alarmas y sensores se mapeen correctamente en Plaspy para evitar falsos positivos o eventos no detectados.
- Reduce el riesgo del despliegue al destacar la necesidad de confirmar comportamientos específicos del firmware antes de escalar la flota.

## Por qué usar Plaspy con este protocolo

Usar el GL521MG con Plaspy ofrece a las organizaciones una vía práctica para recopilar telemetría de ubicación y medioambiental desde un rastreador robusto con larga autonomía. El soporte nativo para reportes QuecLink sobre TCP, UDP y SMS, combinado con la detección automática de protocolo de Plaspy, facilita la ingesta de datos GNSS, temperatura, movimiento y alarmas en una única plataforma para monitoreo e informes.

Para saber más sobre cómo Plaspy gestiona la conectividad de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la documentación completa del fabricante, confirme la información actual en https://www.queclink.com/.
