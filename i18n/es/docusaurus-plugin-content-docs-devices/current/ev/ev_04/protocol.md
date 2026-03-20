---
slug: /ev/ev_04/protocol
id: ev_04-protocol
sidebar_label: Protocol
title: EV - EV-04 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del localizador EV-04 y su integración con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Protocolo EV EV-04
  - Localizador GPS EV EV-04
  - Compatibilidad EV EV-04 con Plaspy
  - Protocolo de comunicación EV-04
  - Protocolo de rastreo EV-04
  - Protocolo de localizador GPS EV
  - Protocolo de dispositivo Plaspy
  - Protocolo de colgante GPS personal
  - Protocolo de rastreador con detección de caídas
  - Rastreador para monitoreo remoto de pacientes
---

# EV - EV-04 Protocolo

Esta página documenta el contexto público del protocolo para el uso del colgante localizador personal EV EV-04 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, cuáles son las configuraciones de conexión comúnmente utilizadas y cómo el comportamiento del protocolo influye en la integración y la operación diaria, sin exponer detalles sensibles de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a Plaspy. El tiempo exacto de los mensajes y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página describe el contexto general del protocolo y del transporte, recomendando siempre verificar con la documentación del fabricante y las notas de la versión del firmware del equipo.

## Visión general del protocolo

El protocolo de comunicación es el mecanismo que utiliza el EV-04 para reportar ubicación, estado y telemetría de eventos a un backend como Plaspy. A alto nivel, el protocolo permite que el rastreador se identifique, transmita datos de posición y eventos, y entregue alertas SOS y de detección de caídas a los sistemas de monitoreo.

- Permite reportes regulares de posición y estado para que Plaspy muestre ubicación en tiempo real y la salud del dispositivo.
- Transporta notificaciones de alarmas y eventos, como el botón SOS y detección de caídas, para su gestión inmediata.
- Transmite telemetría que permite a Plaspy registrar eventos, generar alertas y mantener trazas históricas para auditorías.
- Soporta canales de datos auxiliares para información de sensores Bluetooth y beacons cuando están disponibles, mejorando la precisión en interiores.
- Permite acciones de gestión remota, como actualizaciones de firmware y configuración, cuando el dispositivo y el servidor lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y utiliza detección automática para reconocer el protocolo del rastreador. En la práctica, esto significa que un EV-04 correctamente configurado que reporte a Plaspy por lo general será reconocido sin necesidad de seleccionar el protocolo manualmente en Plaspy.

- El endpoint público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor publicada en la documentación es 54.85.159.138.
- El puerto de red que Plaspy utiliza para el tráfico de dispositivos es 8888 y este mismo puerto se usa en todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888, según el soporte del equipo y la preferencia del operador.
- Cuando el EV-04 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del dispositivo, por lo que normalmente no se requiere selección manual.
- La configuración correcta del dispositivo para apuntar a d.plaspy.com o a la IP publicada y usar el puerto 8888 suele ser el paso principal de instalación.

## Transporte y contexto de conexión

Las decisiones sobre transporte y conexión determinan cómo el EV-04 intercambia mensajes de protocolo con Plaspy. El dispositivo puede soportar múltiples opciones de radio y transporte IP, y conocer cuál transporte está activo ayuda a la configuración de cortafuegos, operador y diagnóstico.

- El EV-04 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las características del firmware.
- Los dispositivos pueden reportar al nombre de host d.plaspy.com o a la dirección IP publicada 54.85.159.138 cuando así lo indique la configuración.
- Todos los dispositivos Plaspy usan el mismo número de puerto 8888 para reportes, lo que simplifica las reglas de red y firewall en despliegues de monitoreo.
- Elija el modo de transporte que coincida con el firmware del dispositivo y los requisitos del operador, y asegure que las políticas de red permitan el transporte seleccionado hacia el endpoint de Plaspy.
- Para resolución de problemas, confirmar que el rastreador apunta a d.plaspy.com o a la IP proporcionada y que el puerto 8888 es accesible es un paso práctico inicial.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre lotes de producción pueden cambiar el timing y campos opcionales en los reportes; verifique el comportamiento para el firmware específico instalado en su EV-04.
- Las revisiones de hardware y las variantes regionales pueden incluir diferentes módulos GNSS o módems que afectan la cadencia de reporte y la compatibilidad de red.
- Algunas funciones, como el reporte de beacons BLE o telemetría de sensores médicos, son opcionales y pueden activarse o desactivarse según el firmware y la configuración.
- La selección del transporte entre UDP y TCP puede afectar las garantías de entrega y debe coincidir con lo que el firmware del dispositivo espera para un reporte confiable.
- La detección automática de Plaspy reduce la configuración manual, pero la configuración inicial del dispositivo debe apuntar a la dirección y el puerto correctos de Plaspy.
- Valide el comportamiento de FOTA y la gestión remota con la documentación del fabricante antes de desplegar actualizaciones a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el EV-04 se comunica con Plaspy permite una instalación más confiable del dispositivo, una resolución de problemas más rápida y una operación predecible a largo plazo. Aunque Plaspy automatiza la detección del protocolo, conocer el contexto de transporte y protocolo reduce la fricción en el despliegue y mejora la respuesta ante incidentes.

- Confirma que el dispositivo está configurado para reportar al endpoint y puerto correctos de Plaspy para una detección exitosa.
- Ayuda a diagnosticar problemas de conectividad limitando las comprobaciones a transporte, DNS y accesibilidad de puerto.
- Aclara cómo se enrutan los eventos SOS y de detección de caídas para que los equipos de monitoreo reciban alertas oportunas.
- Facilita la planificación de actualizaciones de firmware y cambios de funciones que puedan alterar el comportamiento de reporte.
- Apoya reglas de red y configuración de firewall consistentes utilizando el puerto único de Plaspy para todos los dispositivos.

## Por qué usar Plaspy con este protocolo

Combinar el colgante EV-04 con Plaspy brinda a las organizaciones visibilidad centralizada de ubicación, eventos SOS, detecciones de caídas y estado de los dispositivos entre los usuarios monitoreados. El formato portátil del EV-04, la detección de caídas, el botón SOS, la comunicación bidireccional y la posicionamiento híbrido se integran con los paneles en tiempo real y el sistema de alertas de Plaspy para ofrecer soluciones prácticas de monitoreo para cuidado de personas mayores, monitoreo remoto de pacientes y seguridad de trabajadores aislados.

Plaspy simplifica la conectividad mediante un endpoint compartido y un puerto único para todos los dispositivos, y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado. Para conocer más sobre cómo Plaspy puede trabajar con el rastreador EV-04 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente y las notas de firmware con el fabricante en http://www.eviewltd.com/.
