---
slug: /globalsat/lt_501e/protocol
id: lt-501e-protocol
sidebar_label: Protocol
title: GlobalSat - LT-501E Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GlobalSat LT-501E sobre cómo se comunica el rastreador con Plaspy y los ajustes clave de transporte para integrarlo
keywords:
  - Protocolo GlobalSat LT-501E
  - Protocolo GPS GlobalSat LT-501E
  - Compatibilidad LT-501E Plaspy
  - Comunicación LT-501E LoRaWAN
  - Protocolo rastreador GPS
  - Integración de dispositivos Plaspy
  - Rastreador GPS LoRa
  - Protocolo de seguimiento de activos
  - Protocolo de comunicación del rastreador
  - Protocolo de seguimiento de flotas
---

# GlobalSat - Protocolo LT-501E

Esta página describe el contexto público del protocolo para usar el GlobalSat LT-501E con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, cómo Plaspy recibe y reconoce los reportes del dispositivo, y qué ajustes de conexión son relevantes para integrar el rastreador en una implementación de Plaspy. El LT-501E es un rastreador GPS LoRa con BLE y detección de movimiento; esta guía emplea esa descripción del dispositivo para explicar el contexto de comunicación sin exponer detalles privados de implementación.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando recibe datos. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante para uplinks y downlinks, por lo que considere esta página como referencia de compatibilidad y contexto, no como un manual de firmware.

## Resumen del protocolo

El protocolo de un rastreador describe cómo el dispositivo se identifica, cómo informa ubicación y telemetría, y cómo se entregan comandos de gestión. Para el LT-501E esto cubre uplinks LoRaWAN para GPS y telemetría, así como eventos derivados de BLE o sensores (por ejemplo movimiento y proximidad) que se incluyen en los reportes o que Plaspy procesa tras el reenvío.

- Proporciona identidad del dispositivo y telemetría básica como coordenadas GPS, estado de batería y eventos de movimiento para que Plaspy pueda mapear y mostrar el estado.
- Permite reportes de eventos como geocercas, batería baja, solicitudes de ayuda y alertas basadas en el acelerómetro que activan flujos de trabajo en Plaspy.
- Soporta configuración y control remoto mediante mensajes de downlink o gestión para ajustar el intervalo de reporte, el uso del GPS y el comportamiento del buzzer.
- Transporta contexto de balizas BLE y telemetría de sensores que Plaspy puede asociar a escenarios de posicionamiento interior o híbrido.
- Permite que Plaspy normalice los datos entrantes para que ubicación, alertas y estado de batería sean visibles en paneles y notificaciones.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. Dado que muchos dispositivos soportados comparten un endpoint y puerto comunes, Plaspy puede recibir los reportes entrantes y emparejarlos con un patrón de protocolo conocido sin requerir la selección manual del protocolo en la mayoría de las configuraciones.

- Plaspy escucha en un endpoint y puerto compartidos y realiza detección automática del protocolo al recibir datos del dispositivo.
- Para dispositivos configurados para reportar directamente a Plaspy, apúntelos a d.plaspy.com o a la IP del servidor 54.85.159.138 para entregar telemetría.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y puesta en marcha.
- En general, usted no necesita especificar un protocolo en Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- La detección automática reduce la fricción en la configuración y permite que la plataforma enrute los mensajes entrantes hacia el decodificador y la canalización de datos adecuados.

## Contexto de transporte y conexión

El comportamiento a nivel de transporte depende del dispositivo y del despliegue. El LT-501E está optimizado para uplinks LoRaWAN hacia un servidor de red, pero para dispositivos que soportan reporte IP directo, Plaspy acepta conexiones TCP y UDP en un único puerto. Entender dónde y cómo el dispositivo envía los datos es esencial para un enrutamiento correcto y para coordinar la configuración del servidor de red o del gateway si es necesario.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 cuando reportan directamente a Plaspy.
- El endpoint público de Plaspy puede alcanzarse en d.plaspy.com o en la IP del servidor 54.85.159.138 para reportes directos.
- Todos los dispositivos en Plaspy usan el mismo puerto, el puerto 8888, lo que facilita las reglas de firewall y gateway.
- En despliegues LoRaWAN el LT-501E envía uplinks a través del servidor de red LoRa y Plaspy procesa las cargas útiles decodificadas que se entregan a la plataforma.
- Seleccione TCP o UDP en la configuración del dispositivo solo cuando el firmware del equipo soporte reporte IP directo; los dispositivos LoRaWAN normalmente dependen del servidor de red LoRa.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el conjunto de campos de telemetría disponibles y el formato de los reportes; verifique qué firmware tiene su dispositivo.
- Las clases LoRaWAN y las variantes regionales de radio afectan cómo funcionan los uplinks y downlinks; asegúrese de que la región de radio y la clase del dispositivo coincidan con la configuración de su red.
- La selección de transporte importa: los dispositivos que soportan tanto reporte IP directo como LoRaWAN se comportarán de forma distinta según el transporte elegido.
- Las páginas de configuración del fabricante y los manuales del dispositivo contienen claves de configuración específicas de modelo y firmware que afectan el comportamiento de los reportes.
- Al integrar a escala, valide primero una muestra pequeña de dispositivos para confirmar que Plaspy decodifica los campos y eventos esperados.
- Confirme cualquier enrutamiento o reenvío requerido desde el servidor de red LoRa hacia Plaspy si el dispositivo usa uplinks LoRaWAN en lugar de reporte IP directo.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el LT-501E le ayuda a desplegar y operar el rastreador de forma confiable con Plaspy. Comprender las opciones de transporte, la telemetría esperada y cómo la plataforma reconoce los mensajes reduce el tiempo de resolución de problemas y respalda la operación a largo plazo.

- Ayuda a validar que los eventos de GPS, balizas BLE y el acelerómetro llegan a Plaspy como se espera.
- Orienta la configuración de firewall, gateway y servidor de red al aclarar qué endpoint y transporte permitir.
- Agiliza la resolución de problemas al acotar si un problema está relacionado con el transporte, el firmware o la configuración.
- Informa decisiones sobre intervalo de reporte, compromisos de batería y configuración remota para alcanzar objetivos operativos.
- Facilita la planificación respecto a variantes regionales de radio, diferencias de certificación y el impacto de actualizaciones de firmware en el comportamiento de los reportes.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat LT-501E con Plaspy ofrece a las organizaciones una forma sencilla de capturar reportes GPS LoRaWAN de largo alcance, datos de proximidad BLE y eventos de movimiento en una única plataforma operativa. Plaspy ingiere los datos del rastreador, normaliza la telemetría y presenta ubicación y alertas en paneles y flujos de trabajo para que los equipos puedan monitorear activos, responder a solicitudes de ayuda y ajustar el comportamiento del dispositivo para optimizar la vida de la batería y la capacidad de respuesta.

Si desea obtener más información sobre cómo Plaspy maneja las integraciones de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más actuales y específicos del modelo sobre protocolo, firmware y hardware del LT-501E consulte la documentación del fabricante en https://www.globalsat.com.tw/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
