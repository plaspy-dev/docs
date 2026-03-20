---
slug: /teltonika/fmc230/protocol
id: fmc230-protocol
sidebar_label: Protocol
title: Teltonika - FMC230 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar Teltonika FMC230 con Plaspy, ajustes de servidor y guía de conexión
keywords:
  - Protocolo Teltonika FMC230
  - Protocolo GPS Teltonika FMC230
  - Protocolo FMC230 Plaspy
  - Protocolo de comunicación FMC230
  - Protocolo de rastreo FMC230
  - Protocolo de rastreador GPS Teltonika
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos FMC230
  - Telemetría BLE FMC230
  - Gestión de flotas FMC230
---

# Teltonika - Protocolo FMC230

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Teltonika FMC230 con Plaspy. Resume cómo el FMC230 suele comunicarse con Plaspy para posiciones en tiempo real, telemetría y datos de sensores BLE sin entrar en detalles de firmware ni en formatos propietarios de paquetes. El FMC230 es un rastreador robusto IP67 con LTE Cat 1, retroceso a 2G y soporte BLE; esta documentación se centra en los patrones de comunicación observables relevantes para la integración con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo envía datos al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la guía aquí debe considerarse un contexto general que complementa la documentación del fabricante y las notas de versión del firmware.

## Descripción general del protocolo

El FMC230 envía telemetría e información de eventos a un servidor remoto usando su módem celular integrado y las interfaces BLE para sensores externos. El protocolo del dispositivo define cómo el rastreador se identifica, reporta ubicación y valores de sensores, y notifica eventos que Plaspy ingiere para monitoreo en tiempo real e informes históricos.

- Proporciona identidad y estado del dispositivo para que Plaspy asocie los datos entrantes con el activo correcto.
- Envía posición GNSS, eventos de movimiento y lecturas de sensores BLE al endpoint remoto para seguimiento en vivo y generación de alertas.
- Transporta telemetría de I/O y analógica como encendido, puertas y sensores auxiliares para reglas y flujos de trabajo.
- Entrega actualizaciones periódicas y por evento que Plaspy usa para geocercas, alertas y reproducción histórica.
- Soporta actualizaciones OTA de firmware y gestión remota según lo documentado por el fabricante, lo cual puede afectar el comportamiento de reporte.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando el dispositivo se conecta y envía datos. Usted normalmente no necesita seleccionar un protocolo dentro de Plaspy si el FMC230 está configurado para reportar al endpoint y puerto correctos de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración.
- Cuando el FMC230 reporta al endpoint de Plaspy, Plaspy empata los datos entrantes con un dispositivo conocido y su protocolo de forma automática.
- Por lo general no se requiere selección manual de protocolo en Plaspy para dispositivos correctamente configurados.
- La detección se basa en los datos reales enviados al endpoint de Plaspy y en la identificación del dispositivo presentada por el rastreador.
- Si ocurren problemas de conexión o de parseo, revisar la configuración del dispositivo y el estado del firmware es el primer paso recomendado.

## Contexto de transporte y conexión

El FMC230 puede configurarse para usar UDP o TCP para el reporte según ajustes del equipo y consideraciones de red. Plaspy acepta conexiones en su endpoint y puerto compartidos, y los dispositivos pueden apuntar al dominio de Plaspy o a su IP pública.

- El dominio del servidor Plaspy para reportes es d.plaspy.com para la configuración estándar de dispositivos.
- La IP pública del servidor Plaspy es 54.85.159.138 si se prefiere una configuración por IP directa.
- Los dispositivos pueden usar transporte UDP o TCP en el puerto 8888 según la configuración del rastreador y las necesidades de fiabilidad de la red.
- Todos los dispositivos que se conectan a Plaspy utilizan el mismo número de puerto, lo que simplifica el aprovisionamiento y despliegues masivos.
- Plaspy detecta automáticamente el protocolo del rastreador tras recibir el primer reporte al endpoint y puerto compartidos.

## Notas sobre compatibilidad del protocolo

- El FMC230 se describe como compatible con Plaspy, pero las revisiones de firmware pueden cambiar el comportamiento de reporte y las funciones disponibles.
- Los SKUs de hardware y las variantes regionales celulares pueden afectar el comportamiento de la red y las bandas soportadas; verifique el SKU correcto para su despliegue.
- La elección entre UDP y TCP puede influir en la entrega y reintentos en redes con pérdida de paquetes.
- El comportamiento de sensores BLE y los tipos de accesorios soportados pueden depender del firmware del rastreador y de la versión de los sensores EYE.
- Valide la configuración como APN, servidor de reporte y modo de transporte en función de las guías de Plaspy y la documentación de Teltonika.
- Realice pruebas en red en la geografía de su despliegue para confirmar conectividad, señal y cadencia de reportes.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el FMC230 ayuda a garantizar una configuración fluida, operación confiable y resolución eficiente de problemas cuando se usa con Plaspy. La familiaridad con la superficie del protocolo reduce tiempos de puesta en marcha y mejora la confianza diagnóstica para instaladores y operadores de flota.

- Permite verificar que el dispositivo está apuntando correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a elegir UDP o TCP según la estabilidad de la red y los requisitos de reporte.
- Facilita resolver más rápido las brechas de telemetría revisando firmware, modo de transporte y asignación de ID de dispositivo.
- Mejora la planificación de la cobertura de sensores BLE y los tipos de telemetría esperados en Plaspy.
- Soporta escalado y aprovisionamiento predecibles, dado que todos los dispositivos usan el mismo puerto y modelo de endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC230 con Plaspy ofrece a los operadores una combinación práctica de hardware robusto y una plataforma centralizada de gestión de flotas. El FMC230 aporta diseño mecánico duradero, conectividad LTE con retroceso a 2G y soporte para sensores BLE, mientras que Plaspy ingiere esos datos para generar alertas, geocercas e informes históricos que respaldan la supervisión operativa y los flujos de trabajo antirobo.

Para más información sobre Plaspy y cómo soporta rastreadores como el FMC230 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y orientación de implementación consulte la documentación de Teltonika en https://www.teltonika-gps.com/ para verificar la información más reciente del fabricante.
