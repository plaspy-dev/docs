---
slug: /maxtrack/mtc_700/protocol
id: mtc_700-protocol
sidebar_label: Protocol
title: Maxtrack - MTC-700 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Maxtrack MTC-700 y cómo se comunica con Plaspy para integración y configuración
keywords:
  - Protocolo Maxtrack MTC-700
  - Compatibilidad MTC-700 con Plaspy
  - Protocolo rastreador GPS Maxtrack
  - Protocolo de comunicación MTC-700
  - Protocolo de rastreo Maxtrack
  - Rastreo vehicular MTC-700
  - Integración de rastreadores con Plaspy
  - Telemetría MTC-700
  - Rastreador Lua Maxtrack
  - Fallback satelital MTC-700
---

# Maxtrack - MTC-700: Protocolo

Esta página describe el contexto público del protocolo para usar la familia de rastreadores Maxtrack MTC-700 con Plaspy. Explica, en términos no sensibles, cómo el dispositivo se comunica con Plaspy y qué aspectos del comportamiento de reporte son relevantes al configurar equipos MTC-700 hacia el endpoint de Plaspy. El contenido se centra en el contexto del protocolo más que en detalles internos de implementación.

Plaspy utiliza parámetros de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La familia MTC-700 ofrece funciones avanzadas como personalización embebida en Lua, conectividad Wi‑Fi en ciertos modelos, soporte de doble SIM, modos de telemetría incluyendo CAN y acelerómetro, fallback por SMS, compatibilidad con módem satelital, detección de interferencias (jamming), registro tipo caja negra y múltiples interfaces físicas que pueden influir en cómo el dispositivo reporta a un servidor.

## Resumen del protocolo

El protocolo de reporte define cómo el MTC-700 transmite identificación, posición, telemetría y eventos a un servidor remoto para que la plataforma pueda interpretar y mostrar información útil para monitoreo y operación. Aquí se explica el rol público de ese protocolo en relación con Plaspy, en lugar de los mecanismos internos del dispositivo.

- Permite que el rastreador se identifique y entregue datos de posición y telemetría que Plaspy puede procesar para seguimiento y análisis.
- Transporta reportes de eventos como encendido/apagado de ignición, detección de interferencias, activaciones de sensores y registros de caja negra para que los eventos operativos sean visibles en Plaspy.
- Soporta múltiples modos de transporte y rutas de respaldo, como reportes por GPRS y fallback por SMS, de modo que los datos lleguen al servidor bajo diferentes condiciones de red.
- Funciona junto con las opciones de personalización del dispositivo, como acciones embebidas y scripts en Lua, que pueden cambiar qué se reporta y cuándo.
- Proporciona la base para telemetría confiable y configuración remota cuando los dispositivos están apuntados al endpoint de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes de dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo para que la mayoría de los equipos puedan reportar sin que el usuario seleccione manualmente el protocolo dentro de la plataforma. Cuando un MTC-700 está configurado correctamente para reportar a Plaspy, la plataforma reconocerá el protocolo por las características de la conexión y los datos entrantes.

- El dominio del servidor de Plaspy es d.plaspy.com, por lo que los rastreadores pueden apuntar a ese nombre de host para el reporte.
- La IP del servidor de Plaspy es 54.85.159.138, que puede usarse cuando se requiere un host numérico.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para conexiones entrantes de rastreadores.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo dentro de la plataforma una vez que el dispositivo reporta al endpoint de Plaspy.
- Si un equipo soporta tanto UDP como TCP, asegúrese de configurarlo para usar uno de los transportes compatibles y el host y puerto correctos para que Plaspy pueda recibir y detectar el protocolo.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el MTC-700 establece el transporte hacia Plaspy más que el formato interno de los paquetes. El dispositivo puede configurarse para usar distintos transportes y hosts según la puesta en marcha y las capacidades del firmware.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino del servidor al configurar el reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la planificación de firewalls y redes para flotas.
- Algunas configuraciones del MTC-700 pueden caer a fallback por SMS o usar un módem satelital externo cuando GPRS no está disponible; esos canales alternos están fuera de la ruta primaria TCP/UDP pero son importantes para la continuidad.
- Verifique la selección de transporte en la configuración del dispositivo para que coincida con las políticas de red y los requisitos del endpoint de Plaspy.

## Notas sobre compatibilidad de protocolo

- Las diferencias de firmware entre revisiones del MTC-700 pueden cambiar las opciones de reporte disponibles, los transportes por defecto y los conjuntos de funciones que afectan el comportamiento del protocolo.
- Las revisiones de hardware y variantes de modelo, como los que incluyen Wi‑Fi o soporte satelital, pueden alterar cómo se implementa la conectividad y el reporte.
- La configuración por parte del fabricante y los módulos opcionales como scripts Lua o macros pueden modificar qué datos se envían y cuándo, lo que impacta la compatibilidad con las expectativas de la plataforma.
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con cómo está configurado para reportar a Plaspy.
- El fallback por SMS y el reporte satelital son funciones a nivel de dispositivo que pueden complementar el reporte por GPRS, pero requieren configuración y pruebas separadas.
- Siempre valide la configuración del equipo contra la documentación más reciente del fabricante para confirmar los comandos de reporte exactos y las opciones soportadas.

## Por qué es importante entender el protocolo

Comprender cómo el MTC-700 se comunica con Plaspy ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y mejorar la operación a largo plazo de su solución de seguimiento. Conocer las opciones de transporte, los efectos del firmware y el papel de la personalización embebida permite un comportamiento predecible de los dispositivos en la plataforma.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint y transporte correcto de Plaspy para que los datos fluyan sin problemas.
- Facilita el diagnóstico de problemas de conectividad revisando host, IP y puerto antes de analizar comportamientos de datos de mayor nivel.
- Orienta la configuración de acciones embebidas, scripts Lua y modos de telemetría para que los datos reportados se ajusten a las necesidades operativas.
- Aclara cómo los métodos de respaldo como SMS o satélite interactúan con el reporte principal por GPRS para mantener la continuidad.
- Reduce prueba y error al alinear expectativas entre las capacidades del dispositivo y la detección automática de protocolo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Maxtrack MTC-700 con Plaspy puede ofrecer visibilidad robusta para logística, operaciones de flota y casos de monitoreo crítico donde la telemetría avanzada, la lógica personalizada y las comunicaciones de respaldo son relevantes. El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación para que las flotas puedan concentrarse en la configuración y las reglas operativas en lugar de los detalles de integración de bajo nivel.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores GPS como el MTC-700, visite https://www.plaspy.com. Para detalles específicos de protocolo y comportamiento de firmware más actualizados, verifique la información en el sitio del fabricante https://maxtrack.com.br ya que el soporte de protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
