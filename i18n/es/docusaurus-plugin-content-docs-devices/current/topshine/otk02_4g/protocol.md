---
slug: /topshine/otk02_4g/protocol
id: otk02_4g-protocol
sidebar_label: Protocol
title: TopShine - OTK02-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopShine OTK02 4G y su comunicación con Plaspy para seguimiento OBD en tiempo real
keywords:
  - protocolo TopShine OTK02 4G
  - protocolo rastreador GPS TopShine
  - compatibilidad OTK02 4G Plaspy
  - protocolo GPS OTK02 4G
  - protocolo de rastreo OTK02 4G
  - integración de rastreadores Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo rastreador OBD II
  - protocolo de rastreo vehicular
  - protocolo GPS para gestión de flotas
---

# TopShine - Protocolo OTK02-4G

Esta página describe el contexto público del protocolo para usar el rastreador TopShine OTK02-4G con Plaspy. Explica cómo el dispositivo comunica en general la telemetría y los datos OBD al servidor de Plaspy, qué ajustes de conexión emplea la plataforma y qué debe considerarse al integrar el equipo en una flota o flujo de monitoreo. El contenido se centra en información de protocolo pública y no sensible, y se basa en la descripción del dispositivo OTK02-4G de tipo plug and play OBD II.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que, aunque Plaspy ofrece un endpoint de servidor común y detección automática, usted debe esperar diferencias de implementación entre versiones de firmware y revisiones de modelo.

## Visión general del protocolo

A grandes rasgos, el protocolo de reporte del rastreador es el conjunto de mensajes y comportamientos que utiliza el OTK02-4G para identificarse, reportar posiciones GNSS y enviar telemetría procedente del OBD a un servidor remoto. Para la compatibilidad con Plaspy, los aspectos importantes son la entrega fiable de posiciones y eventos, encabezados o IDs de dispositivo identificables y la capacidad de reanudar y sincronizar registros almacenados tras pérdidas temporales de red.

- Permite enviar en tiempo real reportes de posición GNSS y telemetría OBD como kilometraje y estado del motor a Plaspy.
- Transporta notificaciones de eventos para alarmas como geocercas, exceso de velocidad, remolque y batería baja para generar alertas y registros.
- Soporta registro offline y sincronización posterior, de modo que los registros almacenados se suben a Plaspy cuando se restablece la conectividad.
- Proporciona información identificadora para que Plaspy asocie los mensajes entrantes con la cuenta y el panel de control correctos.
- Permite que el dispositivo reporte mediante datos celulares o SMS según lo soporte el equipo y la configuración del usuario.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para la mayoría de los dispositivos compatibles. Esto significa que si un OTK02-4G está configurado para reportar al endpoint de Plaspy usando los ajustes comunes, por lo general no es necesaria la selección manual del protocolo en la plataforma para una operación normal.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- La plataforma escucha en el puerto 8888 y usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración.
- Los dispositivos pueden configurarse para usar UDP o TCP según las capacidades del equipo y las condiciones de red; Plaspy aceptará cualquiera de los dos transportes en el puerto compartido.
- La detección automática empareja los mensajes entrantes con perfiles de dispositivo conocidos, por lo que el usuario generalmente no necesita elegir un protocolo en la interfaz de Plaspy.
- Si un dispositivo no aparece como se espera, validar la dirección del servidor, el transporte y la versión de firmware es el primer paso de resolución de problemas.

## Contexto de transporte y conexión

El OTK02-4G puede usar UDP o TCP para el reporte de datos según la configuración del dispositivo y las condiciones de la red. Plaspy ofrece un único endpoint y puerto accesible que simplifica el despliegue tanto para flotas como para unidades individuales.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar la dirección de reporte.
- Plaspy escucha en el puerto 8888 para UDP y TCP; todos los dispositivos en Plaspy usan este mismo puerto.
- El OTK02-4G admite reporte por datos celulares y puede recurrir a reportes por SMS según lo descrito en la documentación del dispositivo.
- La elección del transporte puede afectar las características de entrega, pero Plaspy acepta tanto UDP como TCP en el puerto compartido para acomodar las capacidades del equipo.
- Verifique que los firewalls de red y la configuración APN permitan conexiones salientes a d.plaspy.com en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el tiempo exacto de los mensajes, los campos y las funciones opcionales disponibles en el dispositivo.
- Las revisiones de hardware o las versiones regionales de firmware pueden modificar los transportes soportados, la conmutación a SMS o la cobertura de telemetría OBD.
- Algunas funciones, como PIDs OBD específicos o valores diagnósticos, dependen del soporte OBD del vehículo y de cómo el firmware del rastreador interpreta esos datos.
- La selección del transporte (UDP vs TCP) puede influir en la fiabilidad de los mensajes y debe elegirse según el comportamiento del equipo y las condiciones de red.
- Siempre valide que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar la accesibilidad.
- Consulte las notas de instalación y firmware del dispositivo para conocer opciones de reporte específicas del modelo antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy facilita una configuración exitosa, un comportamiento predecible y una resolución de problemas más rápida cuando los dispositivos no aparecen como se espera. Tener claridad sobre la vía de reporte reduce el tiempo de inactividad y mejora la precisión de los datos de eventos e históricos que se usan para la toma de decisiones operativas.

- Ayuda a validar que el dispositivo está correctamente configurado para alcanzar el endpoint y puerto de Plaspy.
- Facilita la interpretación de escenarios de datos faltantes, como condiciones de registro offline o conmutación a SMS.
- Apoya la elección del transporte y la configuración de red para optimizar entrega y latencia.
- Contribuye a mapear campos de telemetría OBD y eventos hacia los paneles e informes de Plaspy.
- Permite colaborar más rápido con el soporte del fabricante cuando surgen discrepancias de firmware o comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el TopShine OTK02-4G con Plaspy ofrece una forma de baja fricción para añadir ubicación en tiempo real, diagnóstico OBD y alertas de eventos a flujos de monitoreo y operaciones de flota. El factor de forma OBD II plug and play y el registrador offline integrado permiten un despliegue rápido y un seguimiento histórico más resistente para operaciones que requieren visibilidad continua.

Plaspy ofrece un endpoint compartido y requisitos de conexión simples para que el OTK02-4G pueda apuntar rápidamente a la plataforma. Más información sobre Plaspy y cómo soporta integraciones de dispositivos en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; por favor verifique la información más reciente específica del dispositivo y del firmware en el sitio del fabricante https://www.gztopshine.com/.
