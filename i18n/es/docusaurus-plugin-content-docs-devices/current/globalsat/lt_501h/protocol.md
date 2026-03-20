---
slug: /globalsat/lt_501h/protocol
id: lt-501h-protocol
sidebar_label: Protocol
title: GlobalSat - LT-501H Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador GlobalSat LT-501H con Plaspy y LoRaWAN
keywords:
  - Protocolo GlobalSat LT-501H
  - Protocolo GPS GlobalSat LT-501H
  - Protocolo GlobalSat LT-501H para Plaspy
  - Protocolo de comunicación GlobalSat LT-501H
  - Protocolo de rastreo GlobalSat LT-501H
  - LT-501H LoRaWAN Plaspy
  - Compatibilidad LT-501H con Helium
  - Rastreador GPS LoRaWAN Plaspy
  - Posicionamiento interior BLE LT-501H
  - Compatibilidad protocolo rastreador GPS
---

# GlobalSat - Protocolo LT-501H

Esta página describe el contexto público del protocolo para usar el rastreador GlobalSat LT-501H con Plaspy. Se centra en cómo el dispositivo se comunica en escenarios de despliegue habituales y en cómo Plaspy ingiere y procesa los uplinks sin exponer parsers privados ni detalles propietarios de los paquetes.

La serie LT-501H es compatible con Plaspy desde el primer momento vía LoRaWAN y admite Helium y otras redes LoRaWAN. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre consulte la documentación del fabricante para comportamientos específicos de firmware.

## Resumen del protocolo

El LT-501H emplea LoRaWAN como transporte principal para enviar ubicación, detecciones de balizas BLE, telemetría de movimiento y estados de salud a plataformas en la nube. Para Plaspy, la función del protocolo del dispositivo es generar uplinks codificados de forma fiable que la plataforma pueda ingerir, decodificar en telemetría utilizable y aplicar a flujos de seguimiento y alertas.

- Permite el envío de posición GPS, eventos de balizas BLE, telemetría de movimiento y estado de salud a endpoints en la nube.
- Proporciona identidad y metadatos del dispositivo para que Plaspy asocie la telemetría con el registro de activo correcto.
- Ofrece modos de reporte e intervalos configurables para que Plaspy reciba actualizaciones oportunas según el caso de uso.
- Soporta patrones de transmisión de bajo consumo para preservar la batería sin sacrificar la fidelidad de ubicación necesaria.
- Funciona con servidores de red como Helium u otros proveedores LoRaWAN que reenvían los uplinks a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente los protocolos entrantes de los rastreadores cuando un dispositivo está configurado correctamente para reportar al endpoint de Plaspy. Normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy para dispositivos compatibles; el enrutamiento correcto de la red y la identificación del dispositivo permiten la detección automática.

- Plaspy acepta tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, por lo que una configuración de puerto único simplifica la puesta en marcha.
- Plaspy escucha en el puerto 8888 y puede recibir datos de dispositivos configurados para usar ese puerto.
- Si un rastreador reenvía datos vía servidor de red o transporte IP directo, Plaspy intentará detectar el protocolo automáticamente al recibir un uplink válido.
- Una configuración correcta del dispositivo y un firmware actualizado aumentan la probabilidad de detección automática inmediata por parte de Plaspy.

## Contexto de transporte y conexión

El comportamiento de conexión depende de cómo esté configurado el LT-501H y de la ruta de red empleada para alcanzar Plaspy. La familia LT-501H se comunica principalmente por LoRaWAN a través de servidores de red, pero Plaspy también documenta un endpoint compartido y opciones de transporte para dispositivos que soportan reporte IP directo.

- El LT-501H está diseñado para redes LoRaWAN, incluyendo Helium, y opera en modos Clase A y Clase C.
- El endpoint público de Plaspy es d.plaspy.com y la IP pública equivalente es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos; los dispositivos pueden configurarse para enviar a este puerto.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según sus capacidades y la ruta de red.
- Al usar LoRaWAN, los uplinks viajan por el servidor de red elegido, que luego reenvía las cargas a los endpoints de ingestión de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la codificación de payloads, los campos disponibles y el comportamiento de reporte; verifique las notas de firmware al diagnosticar diferencias.
- Las variantes de hardware y las bandas regionales de radio (US, AS, EU) pueden afectar la configuración de red y los pasos de aprovisionamiento.
- El modo de clase LoRaWAN (Clase A frente a Clase C) influye en el tiempo de downlink y en las opciones de configuración remota.
- La configuración del servidor de red y el enrutamiento a Plaspy deben validarse al desplegar en Helium u otros proveedores.
- La elección del transporte es relevante para el reporte directo: asegúrese de que los dispositivos capaces de reporte IP directo apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el protocolo previsto.
- Siempre valide la compatibilidad con la documentación del fabricante y los requisitos actuales de Plaspy antes de un despliegue a gran escala.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración correcta, un flujo de datos fiable y una resolución de problemas eficiente al integrar el LT-501H con Plaspy. Conocer con claridad cómo y cuándo reporta el dispositivo permite un comportamiento predecible en seguimiento, alertas y gestión de energía.

- Permite verificar si el dispositivo está configurado en la clase LoRaWAN y la cadencia de reporte deseadas.
- Facilita la resolución de problemas cuando los uplinks no aparecen en Plaspy o cuando el contenido del payload difiere de lo esperado.
- Orienta las decisiones sobre la relación entre frecuencia de actualización y duración de la batería en dispositivos de bajo consumo.
- Aclara cómo se presentan a Plaspy los eventos de balizas BLE y movimiento para un seguimiento híbrido interior/exterior.
- Soporta el enrutamiento y la configuración del servidor de red adecuados para que los uplinks lleguen a Plaspy de forma fiable.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat LT-501H con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación, movimiento y telemetría de proximidad de dispositivos LoRaWAN de bajo consumo. Plaspy ingiere los uplinks, decodifica la telemetría en posiciones y eventos en tiempo real, y proporciona mapas, historial y alertas útiles para seguridad de personal, protección de activos y monitoreo de áreas extensas.

La detección automática de protocolos de Plaspy, combinada con un modelo de endpoint compartido, simplifica la incorporación de muchos dispositivos. Para saber más sobre Plaspy y cómo puede integrarse con dispositivos LoRaWAN como el LT-501H, visite https://www.plaspy.com. Para detalles actuales específicos del protocolo del dispositivo, comportamiento de firmware y notas de implementación, verifique con el fabricante en https://www.globalsat.com.tw/.
