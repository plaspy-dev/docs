---
slug: /megastek/gvt_390/protocol
id: gvt_390-protocol
sidebar_label: Protocol
title: Megastek - GVT-390 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para compatibilidad del Megastek GVT-390 con Plaspy
keywords:
  - Protocolo Megastek GVT-390
  - Protocolo GPS Megastek GVT-390
  - Compatibilidad GVT-390 Plaspy
  - Protocolo de rastreo Megastek
  - Comunicación de localizador GPS
  - Integración de dispositivos Plaspy
  - Rastreo vehicular Megastek
  - Rastreo de flotas GVT-390
  - Protocolo de rastreo de activos
  - Configuración de conexión del rastreador
---

# Megastek - Protocolo GVT-390

Esta página presenta el contexto público del protocolo para usar el rastreador Megastek GVT-390 con la plataforma Plaspy. Resume cómo se comunica el equipo en términos generales, cuáles son los puntos de conexión que utiliza Plaspy y consideraciones prácticas para reportar los datos del GVT-390 a Plaspy sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, de modo que la información a continuación sirve como orientación general y no como referencia específica de firmware.

## Descripción del protocolo

El protocolo del GVT-390 regula cómo el rastreador envía posición, alarmas y estado de E/S a un servidor remoto y cómo puede recibir comandos de configuración. Para la integración con Plaspy, el objetivo del protocolo es permitir la entrega fiable de telemetría y datos de estado que Plaspy consume y presenta.

- Transfiere ubicación y telemetría con marcas de tiempo desde el GVT-390 a un servidor para su procesamiento y visualización
- Envía eventos de alarma como SOS, geovallas, exceso de velocidad, batería baja y detección de movimiento al servidor
- Reporta estados de entradas digitales y analógicas y señales de control de salidas para que Plaspy refleje el estado de E/S del dispositivo
- Utiliza el módem celular del dispositivo para transmitir datos por el transporte configurado hacia el endpoint de la plataforma
- Permite comandos de configuración remota y confirmaciones según el firmware del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo empleado por el rastreador. En la mayoría de los casos, cuando el GVT-390 está configurado para reportar al endpoint de Plaspy, no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto de la plataforma utilizado para todos los dispositivos es 8888 y Plaspy usa el mismo puerto para cada rastreador compatible
- Plaspy detecta automáticamente el protocolo del rastreador cuando la telemetría llega al endpoint del servidor
- Generalmente, los usuarios solo deben asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy para activar la detección

## Transporte y contexto de conexión

El GVT-390 puede usar el enlace celular del dispositivo para transmitir datos a la plataforma mediante UDP o TCP, según la configuración del equipo y las capacidades del firmware. Para Plaspy, lo importante es apuntar el rastreador al endpoint de red y puerto correctos para que la telemetría se entregue de forma fiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Los rastreadores pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto, por lo que la configuración es consistente entre modelos
- La elección entre UDP y TCP depende de las opciones del firmware del dispositivo y de la preferencia del usuario entre mayor fiabilidad o menor sobrecarga
- Verifique el modo de transporte en la configuración del equipo para que coincida con las características de la red y del operador

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los conjuntos de mensajes y los comandos remotos disponibles; siempre verifique la versión de firmware del dispositivo al solucionar problemas
- Las revisiones de hardware o las variantes regionales del GVT-390 pueden implementar funciones del protocolo de forma distinta
- Las opciones de configuración del fabricante determinan si el equipo envía reportes periódicos, mensajes por eventos o ambos
- La selección de transporte entre UDP y TCP afecta las características de entrega y debe elegirse según el caso de uso
- Algunas funciones avanzadas, como monitoreo de voz o datos de registrador SD, dependen del soporte de firmware y pueden no estar expuestas vía el canal de telemetría estándar
- Valide la compatibilidad y las configuraciones recomendadas con la documentación del fabricante al realizar la configuración inicial

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el GVT-390 ayuda a asegurar una configuración confiable, una resolución de problemas eficiente y un comportamiento predecible del dispositivo a lo largo del tiempo. Conocer el papel del transporte, el firmware y los modos de reporte reduce el tiempo de integración y evita sorpresas operativas.

- Confirma que el dispositivo está reportando al endpoint y puerto correctos de Plaspy
- Facilita el diagnóstico de telemetría faltante o informes de eventos revisando el transporte y el comportamiento del firmware
- Orienta decisiones sobre intervalos de reporte, modos de ahorro de energía y volumen de datos para costos celulares
- Aclara cómo entradas, salidas y alarmas se mapean a los campos visibles en Plaspy
- Simplifica la coordinación de actualizaciones cuando cambian el firmware o los conjuntos de funciones del fabricante

## Por qué usar Plaspy con este protocolo

Usar el Megastek GVT-390 con Plaspy proporciona una manera directa de recopilar ubicación, alarmas y datos de E/S del rastreador y transformarlos en información operativa. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación, de modo que un GVT-390 correctamente configurado puede comenzar a reportar sin selección manual de protocolo.

Si desea obtener más información sobre Plaspy y cómo se puede integrar con el GVT-390, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones del fabricante, revise la documentación del fabricante en https://www.megastek.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la información más reciente con el fabricante.
