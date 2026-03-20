---
slug: /astra_telematics/at402/protocol
id: at402-protocol
sidebar_label: Protocol
title: Astra Telematics - AT402 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Astra Telematics AT402 y cómo se comunica con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo Astra Telematics AT402
  - protocolo GPS AT402
  - compatibilidad Astra AT402 Plaspy
  - protocolo de comunicación AT402
  - protocolo rastreador GPS Astra AT402
  - protocolo de rastreo AT402
  - rastreadores compatibles con Plaspy
  - protocolo de gestión de flotas AT402
  - protocolo de telemetría Astra AT402
  - protocolo de seguimiento de vehículos AT402
---

# Astra Telematics - Protocolo AT402

Esta página ofrece un resumen público del protocolo del Astra Telematics AT402 cuando se integra con Plaspy. Explica el contexto de comunicación y las consideraciones prácticas del protocolo que importan al registrar y operar unidades AT402 con Plaspy para seguimiento en tiempo real, telemetría y flujos de trabajo de flotas.

El AT402 es un equipo automotriz compacto con protección IP65 que utiliza LTE-M con conmutación automática a GSM GPRS 2G y soporta CANBus, RS232, BLE, 1-Wire, entradas y salidas digitales (I/O) y funciones de identificación de conductor. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar la configuración del dispositivo con la documentación de Astra Telematics cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del AT402 define cómo el dispositivo se identifica, envía posición GNSS y telemetría, y comunica eventos del vehículo y datos de sensores a Plaspy. En la práctica, permite que el rastreador entregue ubicación, parámetros de CANBus, eventos de entradas digitales y datos BLE de corto alcance de forma que Plaspy pueda ingerirlos y presentarlos en la plataforma.

- Permite reportes de posición GNSS y telemetría multi‑GNSS para actualizaciones de ubicación en tiempo real.
- Transporta telemetría del bus del vehículo y periféricos, como parámetros CANBus, datos RS232 y eventos de identificación de conductor.
- Transmite eventos de entradas y salidas digitales para encendido, alarmas y acciones de control remoto.
- Soporta interacción con sensores y balizas BLE locales para telemetría de proximidad y corto alcance.
- Proporciona la identidad del dispositivo y el contexto de sesión necesarios para que Plaspy asocie los datos entrantes con el activo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones en un endpoint compartido y determina automáticamente el protocolo del rastreador en función de la sesión entrante y las características de los mensajes. En la mayoría de los casos, un AT402 correctamente configurado que apunte al endpoint de Plaspy será detectado y procesado sin necesidad de seleccionar el protocolo manualmente en la plataforma.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com para configuraciones basadas en DNS.
- La dirección IP del servidor Plaspy es 54.85.159.138 para configuración mediante IP directa.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual dentro de la plataforma suele ser innecesaria.
- Asegúrese de que el AT402 esté configurado para reportar al endpoint de Plaspy para que la detección automática pueda ocurrir.

## Transporte y contexto de conexión

El AT402 soporta reporte mediante redes celulares y puede configurarse para usar transporte UDP o TCP para conectarse a Plaspy. Las decisiones sobre TCP frente a UDP y el uso de DNS o IP deben tomarse según las necesidades del despliegue, las opciones del firmware del dispositivo y las limitaciones de la red.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según soporte del equipo y elección administrativa.
- El dispositivo puede apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores soportados para simplificar la configuración.
- La elección del transporte puede afectar características de entrega como retransmisión y comportamiento de sesión.
- Verifique las opciones del firmware del dispositivo para la selección de transporte y la configuración del endpoint antes de un despliegue a gran escala.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el contenido de los mensajes, la disponibilidad de funciones y los parámetros de configuración del AT402.
- Las revisiones de hardware o el firmware de accesorios opcionales pueden cambiar qué interfaces están disponibles o cómo se reporta la telemetría.
- La configuración por defecto del fabricante puede apuntar a un servidor distinto o usar otro transporte; ajuste el endpoint a Plaspy al registrar los dispositivos.
- La selección de transporte entre UDP y TCP puede configurarse en el dispositivo y afectar el comportamiento observado por Plaspy.
- Algunos parámetros del vehículo expuestos por CANBus dependen del modelo del vehículo y de la configuración del bus, no solo del rastreador.
- Siempre valide la compatibilidad y las funciones soportadas consultando la documentación de Astra Telematics para la versión de firmware y el lote de modelo específicos.

## Por qué es importante entender el protocolo

Tener una comprensión clara y práctica del protocolo de comunicación del AT402 ayuda a asegurar una configuración fiable, acelerar la solución de problemas y lograr una operación predecible a largo plazo en Plaspy. Conocer qué reporta el rastreador y cómo se conecta reduce el tiempo de despliegue y mejora la precisión de la analítica y las alertas de la flota.

- Garantiza que los dispositivos apunten al endpoint y transporte correctos de Plaspy para la detección automática.
- Ayuda a identificar si la falta de datos se debe a configuración, transporte o diferencias de firmware.
- Facilita el mapeo de parámetros CANBus y eventos digitales a reglas y paneles en Plaspy.
- Permite planificar actualizaciones de firmware y validación en la flota para mantener un comportamiento consistente.
- Reduce sorpresas en la integración al usar BLE, RS232 u otras interfaces periféricas en despliegues mixtos.

## Por qué usar Plaspy con este protocolo

Usar el AT402 con Plaspy proporciona a las organizaciones un endpoint en la nube unificado para recopilar ubicación GNSS, telemetría del vehículo y eventos de periféricos destinados a gestión de flotas, movilidad compartida y flujos anti‑robo. Las características de hardware del dispositivo, como LTE‑M con respaldo 2G, soporte CANBus, BLE y batería interna de respaldo, complementan los flujos de trabajo de Plaspy para monitoreo, alertas e informes operativos.

Si desea conocer más sobre Plaspy y cómo gestiona la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guía de implementación más actualizados consulte la documentación de Astra Telematics en https://astratelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
