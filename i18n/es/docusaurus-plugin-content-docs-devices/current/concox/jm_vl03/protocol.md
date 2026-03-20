---
slug: /concox/jm_vl03/protocol
id: jm_vl03-protocol
sidebar_label: Protocol
title: Concox - JM-VL03 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox JM-VL03 y cómo se comunica con Plaspy para rastreo fiable de flotas
keywords:
  - Concox JM-VL03
  - protocolo JM-VL03
  - protocolo GPS Concox
  - JM-VL03 Plaspy
  - compatibilidad Concox rastreo
  - comunicación JM-VL03
  - telemetría JM-VL03
  - compatibilidad rastreadores Plaspy
  - rastreo vehicular Concox
  - rastreo de flotas JM-VL03
---

# Concox - JM-VL03: Protocolo

Esta página ofrece un panorama público del protocolo para usar el rastreador Concox JM-VL03 con Plaspy. Se enfoca en el contexto de comunicación, la configuración de conexión y las consideraciones prácticas de compatibilidad que ayudan a administradores de flotas e integradores a entender cómo el dispositivo informa ubicación y telemetría a Plaspy sin exponer detalles sensibles de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto general de comunicación y consideraciones operativas más que los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del JM-VL03 regula cómo el rastreador envía la posición GNSS, telemetría por eventos y la identidad básica del dispositivo a un servidor remoto para que Plaspy procese y muestre esas actualizaciones. En la práctica, el protocolo permite que el equipo entregue ubicación, estado y eventos de sensores, y que Plaspy lo identifique para mapeo, alertas y reglas automatizadas.

- Permite el envío de actualizaciones de ubicación basadas en GNSS y telemetría adicional como estado de ignición y eventos de acelerómetro
- Transmite información de identidad y estado del dispositivo para que Plaspy asocie los reportes al activo correcto
- Lleva notificaciones de eventos como activación de geocercas, exceso de velocidad, vibración y eventos de alimentación eléctrica hacia la plataforma
- Soporta actualizaciones casi en tiempo real, adecuadas para paneles de flota, alertas y automatizaciones en Plaspy
- Funciona sobre transportes de red estándar para que el rastreador pueda alcanzar el endpoint de ingestión de Plaspy desde redes celulares

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores usando un endpoint y puerto compartidos, y detectará automáticamente el protocolo del dispositivo cuando éste esté configurado correctamente para reportar a la plataforma. Normalmente, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el rastreador apunta al endpoint de Plaspy.

- Plaspy utiliza un endpoint de servidor común para reportes de dispositivos d.plaspy.com
- Plaspy también acepta conexiones al servidor IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que los rastreadores envían datos al puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe los reportes
- Si el dispositivo está configurado para enviar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente

## Transporte y contexto de conexión

El JM-VL03 puede alcanzar Plaspy usando el transporte IP estándar proporcionado por el módem celular. Dependiendo de la configuración del dispositivo y de las capacidades del firmware, el rastreador puede usar UDP o TCP para comunicarse con Plaspy. Se requieren ajustes correctos de red y de la SIM para una conectividad confiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Los rastreadores pueden apuntar al nombre de dominio d.plaspy.com o al servidor IP 54.85.159.138
- El puerto de escucha de Plaspy para todos los dispositivos soportados es 8888
- La selección del transporte (UDP vs TCP) depende del firmware del dispositivo y de la configuración del instalador
- Asegúrese de que la SIM del rastreador y el plan celular permitan conexiones salientes al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware del dispositivo y de la revisión de hardware específica del JM-VL03
- Variaciones del fabricante entre modelos regionales pueden afectar qué modos de transporte y conjuntos de mensajes están disponibles
- Algunas funciones reportadas por el dispositivo, como detección de ignición, control de relé o eventos de conducta del conductor, son expuestas por el equipo y pueden mapearse de forma distinta según las versiones de firmware
- La elección entre UDP y TCP para la conexión debe seguir las recomendaciones del dispositivo y las consideraciones de fiabilidad de la red
- Después de la instalación, valide siempre el reporte del dispositivo al endpoint d.plaspy.com en el puerto 8888
- Para integraciones profundas o despliegues inusuales, consulte los recursos del fabricante para confirmar los comportamientos soportados

## Por qué es importante comprender el protocolo

Tener una comprensión práctica del protocolo de comunicación del JM-VL03 y del contexto de conexión ayuda a los instaladores y administradores a lograr reportes confiables, agilizar la resolución de problemas y obtener un comportamiento predecible en Plaspy. Saber cómo el dispositivo llega a la plataforma y qué tipos de eventos enviará reduce el tiempo de integración y mejora la fiabilidad operativa.

- Garantiza que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando un transporte soportado
- Ayuda a diagnosticar problemas de conectividad relacionados con la SIM, el APN o el comportamiento de la red celular frente a problemas de parseo del protocolo
- Aclara qué telemetría y eventos enviará el dispositivo para que las reglas y alertas de Plaspy puedan ajustarse eficazmente
- Facilita la planificación de actualizaciones de firmware y despliegues de hardware al anticipar cambios de protocolo entre revisiones
- Favorece implementaciones consistentes en toda la flota estandarizando las comprobaciones de conexión y reporte

## Por qué usar Plaspy con este protocolo

Usar el JM-VL03 con Plaspy proporciona a los operadores de flotas y administradores de activos una forma unificada de recibir ubicación, eventos y telemetría de comportamiento de manejo desde un rastreador compacto y diseñado para vehículos. El soporte del dispositivo para detección de ignición, control de relé para inmovilización y alertas por eventos se integra de forma natural en los flujos de trabajo de Plaspy para monitoreo, notificaciones y automatización operativa.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles como el Concox JM-VL03, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la documentación del fabricante en el sitio oficial de Concox https://www.iconcox.com/ ya que el soporte del protocolo y las implementaciones del dispositivo pueden cambiar con el tiempo.
