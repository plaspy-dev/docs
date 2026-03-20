---
slug: /globalsat/lw_360hr/protocol
id: lw_360hr-protocol
sidebar_label: Protocol
title: GlobalSat - LW-360HR Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador wearable GlobalSat LW-360HR y su comunicación con Plaspy para ubicación y telemetría confiables
keywords:
  - protocolo GlobalSat LW-360HR
  - protocolo GPS GlobalSat LW-360HR
  - LW-360HR en Plaspy
  - protocolo de comunicación LW-360HR
  - protocolo de rastreo LW-360HR
  - protocolo de rastreador wearable GlobalSat
  - protocolo GPS LoRaWAN
  - protocolo de rastreador GPS wearable
  - integración de dispositivos Plaspy
  - protocolo de rastreador Plaspy
---

# GlobalSat - LW-360HR Protocolo

Esta página documenta el contexto del protocolo público para usar el rastreador wearable GlobalSat LW-360HR con Plaspy. Explica, en términos generales, cómo se comunica el rastreador con Plaspy, qué ajustes de conexión espera la plataforma y por qué conocer el protocolo facilita la configuración y la resolución de problemas. El contenido se centra en hechos de integración disponibles públicamente y no revela detalles privados de implementación.

El LW-360HR combina conectividad de largo alcance LoRaWAN, posicionamiento GPS y BLE para aprovisionamiento y OTA. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la variante de hardware y la implementación del fabricante. Para comandos específicos del dispositivo o comportamientos de firmware consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el LW-360HR informa ubicación, telemetría y alertas a un extremo en la nube, y cómo se usa BLE de corto alcance para aprovisionamiento y actualizaciones. En Plaspy el rol del protocolo se limita a permitir la entrega fiable de posiciones y datos de sensores para mapas, alertas y paneles de telemetría.

- Provee identificación e informes periódicos para que Plaspy asigne los mensajes entrantes al dispositivo correcto.
- Transporta fijaciones de posición GPS y telemetría con sello de tiempo para que Plaspy muestre ubicación en vivo y recorridos históricos.
- Transmite notificaciones de eventos como pulsaciones SOS y disparos de geocercas para que Plaspy pueda escalar alertas.
- Soporta BLE de corto alcance para aprovisionamiento local, emparejamiento y OTA de firmware, mientras que los reportes de área amplia usan reenvío por LoRaWAN.
- Permite que Plaspy integre telemetría wearable como frecuencia cardiaca y temperatura en paneles de monitoreo junto con la ubicación.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los informes de dispositivos en un único extremo compartido e identifica automáticamente el protocolo del rastreador usado en un informe entrante. En la mayoría de los casos no necesita seleccionar el protocolo manualmente dentro de Plaspy, siempre que el LW-360HR esté configurado para reportar al extremo de Plaspy.

- Plaspy usa el dominio de servidor compartido d.plaspy.com y la IP asignada 54.85.159.138 para el reporte de dispositivos.
- La plataforma escucha en el puerto 8888 para los informes de rastreadores y utiliza el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo por las características de la conexión y la carga útil entrante, lo que simplifica la incorporación de dispositivos.
- Si el LW-360HR está configurado correctamente para reenviar uplinks LoRaWAN hacia los flujos de trabajo de Plaspy, los informes aparecerán sin selección manual de protocolo.
- Para el aprovisionamiento basado en BLE, el dispositivo utiliza enlaces móviles locales; esas interacciones no requieren que Plaspy detecte el protocolo.

## Transporte y contexto de conexión

El transporte de conexión describe cómo los mensajes se trasladan desde el dispositivo o la nube LoRaWAN hacia Plaspy, en lugar del encapsulado interno del protocolo. El LW-360HR usa principalmente uplinks LoRaWAN para reportes de área amplia y BLE para interacción local. Al configurar el reenvío de red o el reporte directo por socket, el dispositivo puede estar configurado para usar UDP o TCP para llegar a Plaspy.

- Los dispositivos y los reenviadores en la nube pueden configurarse para enviar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta tanto UDP como TCP en el puerto 8888 según la configuración del dispositivo o del reenviador de red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que facilita la configuración de firewalls y redes en despliegues.
- Los uplinks LoRaWAN suelen ser gestionados por servidores de red o plataformas IoT que luego reenvían datos a Plaspy usando el extremo y los ajustes de transporte compartidos.
- BLE se usa para aprovisionamiento local y OTA de firmware y está separado del transporte de área amplia que llega a Plaspy.

## Notas sobre compatibilidad del protocolo

- Revisiones de firmware y variantes de hardware pueden cambiar cuándo y cómo el LW-360HR informa campos de telemetría o eventos específicos.
- La configuración del fabricante para llaves de red LoRaWAN, clases de dispositivo y calendarios de uplink puede afectar el comportamiento de reporte y la duración de la batería.
- Algunos despliegues envían uplinks LoRaWAN a través de servidores de red de terceros; asegúrese de que esos reenviadores estén configurados para apuntar al extremo de Plaspy.
- La selección de transporte (UDP vs TCP) puede estar limitada por el servicio de reenvío o el entorno de red; confirme qué método usa su nube LoRaWAN.
- Plaspy detecta el protocolo automáticamente, pero se requiere la configuración correcta de la red del dispositivo y los identificadores del mismo para un mapeo fiable.
- Siempre valide la compatibilidad y las funciones dependientes del firmware consultando la documentación del dispositivo proporcionada por GlobalSat.

## Por qué importa entender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar una incorporación fiable, diagnósticos precisos y operación predecible a lo largo del tiempo cuando el LW-360HR se usa con Plaspy. Estar al tanto del transporte, la cadencia de reporte y el manejo de eventos reduce la fricción de integración y mejora el tiempo de actividad operativo.

- Ayuda a confirmar que el dispositivo está reportando al extremo y transporte correctos de Plaspy.
- Acelera la resolución de problemas cuando no aparecen informes o faltan campos de telemetría esperados.
- Permite evaluar compensaciones entre batería y frecuencia de reporte según la cadencia de uplinks y el comportamiento del firmware.
- Facilita la planificación del reenvío de red desde servidores LoRaWAN hacia el extremo de ingestión de Plaspy.
- Soporta despliegues mixtos donde la telemetría wearable se combina con rastreadores de vehículos o activos en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el LW-360HR con Plaspy ofrece una forma práctica de centralizar ubicación wearable, SOS y telemetría de salud junto con otros datos de activos y vehículos. Para cuidado de adultos mayores, equipos en exteriores o gestión de eventos, Plaspy puede recopilar fijaciones GPS y métricas de sensores reenviadas desde flujos LoRaWAN y presentarlas en mapas unificados y canales de alerta.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el LW-360HR visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la guía específica más reciente del fabricante en https://www.globalsat.com.tw/.
