---
slug: /ruptela/pro5s/protocol
id: pro5s-protocol
sidebar_label: Protocol
title: Ruptela - Pro5S Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador Ruptela Pro5S con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Protocolo Ruptela Pro5S
  - Protocolo GPS Ruptela Pro5S
  - Protocolo de comunicación Ruptela Pro5S
  - Protocolo de rastreo Ruptela Pro5S
  - Compatibilidad Plaspy Ruptela
  - Rastreo de flotas Pro5S
  - Protocolo telemetría Pro5S
  - Integración CANbus Ruptela Pro5S
  - Integración sensores BLE Pro5S
  - Ruptela Pro5S LATAM
---

# Ruptela - Pro5S Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador GPS Ruptela Pro5S con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, cómo Plaspy recibe y reconoce los reportes del equipo y qué aspectos del flujo de reporte son relevantes al integrar unidades Pro5S en una implementación de Plaspy. El Pro5S es un rastreador profesional LTE Cat4 con fallback 3G, receptor GNSS u‑blox, acceso CANbus avanzado, Bluetooth LE, audio y registro a bordo; estas capacidades determinan los tipos de telemetría que llegarán a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se centra en información pública e independiente de implementaciones que ayuda a administradores e integradores a preparar un Pro5S para enviar reportes confiables al endpoint de Plaspy, indicando además la necesidad de verificar detalles específicos del dispositivo según la documentación oficial del fabricante.

## Resumen del protocolo

El Pro5S envía telemetría, posición y eventos a un servidor remoto usando su protocolo de reporte. A alto nivel, el protocolo define las reglas y tipos de mensajes que el rastreador utiliza para identificarse, reportar fixes GNSS y datos de sensores, y transmitir alarmas o estados para que Plaspy pueda ingerir y presentar información útil a los usuarios.

- Permite que el Pro5S envíe posiciones GNSS, marcas de tiempo y estado básico de movimiento a Plaspy para mapeo y geocercas.
- Transporta parámetros derivados del CANbus y eventos de E/S para que combustible, RPM, estado de ignición y telemetría de accesorios sean visibles en Plaspy.
- Proporciona identificadores y contexto de sesión que permiten a Plaspy asociar reportes entrantes con el registro de dispositivo correcto.
- Lleva eventos del dispositivo como manipulación, interferencia por jamming, impactos y estado de batería auxiliar para activar alertas y flujos de trabajo.
- Permite al rastreador almacenar y reenviar logs guardados tras la reconexión, facilitando la reconstrucción de incidentes y la continuidad del servicio.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes entrantes en un endpoint de ingestión compartido y determina automáticamente el protocolo del rastreador, de modo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente dentro de la plataforma. La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy suele ser el único requisito en el lado del equipo.

- Plaspy detecta automáticamente el protocolo cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto de comunicación, lo que simplifica la configuración entre modelos.
- Si un Pro5S está configurado para reportar al endpoint de Plaspy, la plataforma identificará el formato entrante y gestionará el parseo sin selección manual de protocolo.
- Asegúrese de que los identificadores del dispositivo (IMEI o ID configurado) sean correctos para que Plaspy pueda emparejar los reportes con el activo correspondiente.
- Al resolver problemas de conectividad, confirme que el dispositivo está dirigiéndose al servidor de Plaspy y usando un modo de transporte permitido.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo los paquetes llegan al servicio de ingestión de Plaspy, pero no exponen la lógica interna del parser. El Pro5S puede configurarse para usar UDP o TCP según la unidad y el entorno de red. Plaspy acepta reportes en su endpoint compartido y escucha en un único puerto común para todos los dispositivos soportados.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto que usa Plaspy para ingestión es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita el aprovisionamiento de flotas y las reglas de firewall.
- Elija UDP o TCP en el dispositivo según la fiabilidad de la red y las opciones del firmware; ambos transportes son compatibles para reportar a Plaspy.
- Confirme la APN y la configuración de datos móviles en el Pro5S para que la unidad pueda alcanzar el endpoint de Plaspy a través de las redes de los operadores.

## Notas sobre compatibilidad del protocolo

- El firmware puede cambiar el tiempo de mensajes, los campos disponibles y las funciones opcionales; siempre confirme el nivel de firmware del Pro5S al validar el comportamiento.
- Las revisiones de hardware o SKUs regionales pueden exponer conjuntos de bandas de radio diferentes, cableado de accesorios distinto o conjuntos de funciones reducidas que afectan qué telemetría se reporta.
- La selección de transporte (UDP versus TCP) puede influir en las características de entrega pero no en los tipos generales de telemetría que el rastreador puede enviar.
- Las interfaces de configuración del fabricante y las herramientas de gestión remota pueden ser necesarias para habilitar completamente funciones como mapeo CAN, descubrimiento de sensores BLE o canales de audio.
- La detección automática de Plaspy reduce la necesidad de selección manual de protocolo, pero una direccionamiento correcto del dispositivo y IDs de dispositivo únicos son esenciales.
- Valide cualquier uso avanzado o no estándar, como mapeos CAN personalizados o cableado de E/S especial, con la documentación oficial de Ruptela.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Pro5S ayuda a los equipos a configurar correctamente los dispositivos, resolver problemas con mayor rapidez y mantener operaciones fiables en el tiempo. El conocimiento del protocolo es valioso incluso cuando Plaspy maneja el parseo automáticamente, porque la configuración, el transporte y el comportamiento del firmware siguen influyendo en lo que la plataforma recibe.

- Garantiza que los dispositivos apunten al endpoint y transporte correctos de Plaspy para que los datos lleguen con fiabilidad.
- Ayuda a interpretar por qué campos específicos de telemetría aparecen o faltan después de actualizaciones de firmware o cambios de configuración.
- Facilita la configuración de red y firewall al clarificar el dominio, la IP y el puerto que deben ser accesibles.
- Ayuda a planificar redundancia, registro offline y comportamiento de reconexión para preservar el historial crítico de ubicaciones.
- Hace que la resolución de problemas sea más eficiente al acotar si un problema está en el dispositivo, la red o el lado de ingestión.

## Por qué usar Plaspy con este protocolo

El Ruptela Pro5S ofrece telemetría vehicular completa, GNSS de alta precisión y múltiples sensores que se integran bien con las capacidades de ingestión y visualización de Plaspy. Usar unidades Pro5S con Plaspy brinda a los operadores de flotas mapas en tiempo real, alertas de eventos y paneles de telemetría que impulsan la visibilidad operativa y la seguridad en despliegues de flotas en LATAM.

Si despliega dispositivos Pro5S, confirme que cada unidad esté configurada para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según corresponda a su red. El puerto compartido de Plaspy y la detección automática del protocolo reducen la carga de configuración en flotas grandes, mientras que el conjunto de funciones del Pro5S permite telemetría más profunda cuando se requiere. Para más información sobre Plaspy y su funcionamiento con dispositivos de flota visite https://www.plaspy.com. Para el comportamiento específico del protocolo por dispositivo, notas de firmware y herramientas de configuración consulte al fabricante en https://ruptela.com/ para precisión y actualizaciones.
