---
slug: /concox/vl101/protocol
id: vl101-protocol
sidebar_label: Protocol
title: Concox - VL101 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox VL101 y compatibilidad con Plaspy, con guía de conexión y transporte
keywords:
  - Concox VL101
  - protocolo Concox VL101
  - protocolo VL101 GPS
  - comunicación VL101
  - protocolo Concox Plaspy
  - protocolo rastreador GPS
  - protocolo seguimiento vehicular
  - compatibilidad dispositivo Plaspy
  - rastreador doble frecuencia
  - compatibilidad GNSS rastreador
---

# Concox - Protocolo VL101

Esta página documenta el contexto público del protocolo para usar el rastreador Concox VL101 con Plaspy. Describe cómo el dispositivo suele comunicarse con un endpoint en la nube, el papel del protocolo de reporte del rastreador y las configuraciones de conexión prácticas que debe considerar al integrar dispositivos VL101 con Plaspy. Los detalles están pensados para implementadores, integradores y usuarios técnicos que requieren comprender consideraciones de conexión y compatibilidad sin exponer información privada de implementación.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. Para Plaspy el endpoint es d.plaspy.com y la plataforma es accesible en 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, la región y la implementación del fabricante, por lo que debe verificar las configuraciones específicas de su variante de firmware y hardware VL101.

## Resumen del protocolo

El VL101 emplea un protocolo de reporte para enviar telemetría e información de estado del dispositivo hacia una plataforma en la nube. Ese protocolo regula cómo el rastreador se identifica, transmite fijaciones GNSS y datos de sensores, y reporta alarmas o cambios de estado. Plaspy recibe esos mensajes en su endpoint compartido y usa los datos reportados para mostrar ubicación, estado y eventos en la plataforma.

- Permite reportes de ubicación periódicos y por eventos desde el VL101 hacia la nube
- Transporta identidad y estado del equipo para que Plaspy asocie los mensajes con el activo correcto
- Transmite posicionamiento GNSS y datos asistidos por INS para mantener un seguimiento preciso incluso en zonas con señal débil
- Permite reportes de estados de IO, como encendido, sensores y alertas de comportamiento de conducción
- Soporta LTE con fallback a GSM para transporte de datos resiliente en condiciones de red variadas

## Cómo detecta Plaspy el protocolo

Plaspy observa las conexiones entrantes y los mensajes para reconocer el protocolo del rastreador que utiliza un equipo que reporta. Dado que Plaspy usa un endpoint y puerto compartidos para todos los rastreadores compatibles, la plataforma puede aceptar y clasificar tráfico de muchos modelos sin que el usuario tenga que seleccionar manualmente un protocolo en la mayoría de los casos.

- Plaspy escucha en un único puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador
- Configure los VL101 para apuntar a d.plaspy.com o a 54.85.159.138 para que los mensajes lleguen al endpoint de Plaspy
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según capacidades y configuración del equipo
- Cuando un dispositivo correctamente configurado reporta, Plaspy asociará los datos entrantes con la identidad del dispositivo incluida en el mensaje
- Generalmente no es necesario seleccionar el protocolo manualmente en la plataforma si el equipo está configurado para reportar al endpoint de Plaspy

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el VL101 envía datos a Plaspy y qué ajustes de red son comúnmente requeridos. El VL101 soporta LTE con fallback a GSM y puede configurarse para transporte UDP o TCP. Para la integración con Plaspy, asegúrese de que el dispositivo esté configurado para reportar a la dirección y puerto compartidos de Plaspy para que la plataforma pueda aceptar y procesar los mensajes.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos y transportes, lo que simplifica la configuración
- El VL101 puede ajustarse para usar UDP o TCP en el puerto 8888 según las opciones del firmware
- Las redes LTE y GSM proveen la ruta de datos; confirme la APN y la configuración de la SIM en el dispositivo
- La estabilidad de la red y el comportamiento del operador pueden afectar los intervalos de reporte y la persistencia de la conexión

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y las funcionalidades disponibles; confirme siempre la versión de firmware antes de un despliegue a gran escala
- Las revisiones de hardware y las variantes regionales del VL101 pueden habilitar o deshabilitar ciertas interfaces o sensores
- Algunas funciones, como tracking asistido por INS, GNSS de doble frecuencia e interfaces para accesorios, pueden requerir firmware o configuraciones específicas
- La elección de transporte entre UDP y TCP puede afectar la entrega de mensajes y debe coincidir con las capacidades del dispositivo y los requisitos del operador
- Los valores por defecto del fabricante podrían apuntar a otro servidor; actualice la dirección de reporte del dispositivo a d.plaspy.com o 54.85.159.138 al integrar con Plaspy
- Valide el reporte de identidad del dispositivo para asegurar que Plaspy pueda emparejar los mensajes con el registro de activo correcto

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación y el contexto de conexión del VL101 ayuda a asegurar una incorporación confiable de dispositivos, telemetría consistente y una resolución eficiente de problemas. Entender el alcance del protocolo y la interacción entre firmware, transporte y endpoint reduce retrasos en la integración y apoya la fiabilidad operativa.

- Acelera la incorporación inicial confirmando la dirección de reporte y los ajustes de transporte correctos
- Ayuda a diagnosticar reportes faltantes o comportamientos inesperados revisando compatibilidad de transporte y firmware
- Garantiza que alertas, detección de encendido y funciones de control remoto se comporten como se espera cuando el dispositivo lo soporta
- Orienta las decisiones sobre configuración de red y APN para mejorar la conectividad en campo
- Facilita la planificación de actualizaciones de firmware y despliegues de hardware a lo largo de la flota

## Por qué usar Plaspy con este protocolo

Usar el Concox VL101 con Plaspy proporciona a las organizaciones un endpoint en la nube consistente y una plataforma que reconoce automáticamente los mensajes de los dispositivos enviados a la dirección compartida de Plaspy. El conjunto de características del VL101, incluyendo soporte multi-GNSS, posicionamiento de doble frecuencia, tracking asistido por INS y robustos mecanismos de conmutación de red, encaja bien con una plataforma que centraliza el reporte y la gestión de dispositivos.

Si desea obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos de dispositivo, notas de firmware y revisiones de hardware de productos Concox consulte al fabricante en https://www.iconcox.com/ ya que los detalles de implementación pueden cambiar con el tiempo.
