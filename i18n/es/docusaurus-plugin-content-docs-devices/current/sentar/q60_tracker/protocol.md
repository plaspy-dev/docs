---
slug: /sentar/q60_tracker/protocol
id: q60_tracker-protocol
sidebar_label: Protocol
title: Sentar - Q60 Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Sentar Q60 con Plaspy, con contexto de conexión y notas de compatibilidad
keywords:
  - Protocolo Sentar Q60
  - Protocolo GPS Sentar Q60
  - Compatibilidad Sentar Q60 Plaspy
  - Comunicación tracker Q60
  - Protocolo de rastreo Q60
  - Protocolo tracker Sentar
  - Trackers compatibles con Plaspy
  - Guía de protocolo rastreador GPS
  - Rastreador personal Q60
  - Rastreador de activos Q60
---

# Sentar - Protocolo del rastreador Q60

Esta página explica el contexto público del protocolo para usar el rastreador Sentar Q60 con Plaspy. Describe cómo el Q60 transmite ubicación y telemetría básica a Plaspy, y qué debe tener en cuenta al configurar el dispositivo para que reporte de forma fiable a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo en el Q60 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso este documento ofrece orientación pública y neutral, y remite a los recursos del fabricante para detalles específicos por dispositivo.

## Visión general del protocolo

El protocolo de comunicación del Q60 regula cómo el dispositivo se identifica, informa ubicación y estado, y mantiene una sesión de transporte con Plaspy. En la práctica, esto significa que el rastreador envía telemetría periódica y basada en eventos que Plaspy procesa para mapas, alertas e historial.

- Permite que el Q60 transmita posición GNSS, ubicación por fallback de red y estado básico del equipo a Plaspy.
- Hace posible identificar el dispositivo y asociarlo a una cuenta en la plataforma Plaspy para monitorización en tiempo real.
- Soporta rastreo periódico, así como mensajes bajo demanda o disparados por eventos que Plaspy muestra como alertas e historial.
- Provee un canal consistente de telemetría para que Plaspy pueda correlacionar la ubicación con el estado del dispositivo, como batería y conectividad.
- Actúa como puente entre el posicionamiento híbrido del Q60 (GPS, BDS, LBS, WiFi) y funciones de Plaspy como geocercas y reportes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de dispositivos en un endpoint compartido de la plataforma y realiza detección automática del protocolo, de modo que la mayoría de los trackers correctamente configurados empiezan a reportar sin necesidad de seleccionar manualmente un protocolo dentro de Plaspy. Esto reduce los pasos de configuración para dispositivos comunes y permite ajustes específicos cuando se requieren.

- Los dispositivos informan al dominio del servidor de Plaspy d.plaspy.com o pueden apuntar directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el Q60 reportará en el puerto 8888 junto con otros equipos compatibles.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según soporte del equipo y condiciones de red.
- Plaspy detecta automáticamente el protocolo del tracker cuando los datos llegan al endpoint compartido, por lo que normalmente no es necesario seleccionar el protocolo manualmente en unidades correctamente configuradas.
- Si un dispositivo no aparece registrado, verificar primero los ajustes de transporte y la configuración del fabricante es la medida práctica inicial.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el Q60 alcanza a Plaspy, más que el formato interno de los mensajes. Para el Q60, las opciones de transporte y direccionamiento determinan si su dispositivo llega de forma fiable a Plaspy en redes diversas.

- El Q60 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888, según firmware y opciones de configuración.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 como alternativa.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica reglas de firewall y enrutamiento en la red.
- La calidad de la red y el comportamiento del operador pueden afectar la entrega de mensajes, por lo que la selección del transporte debe coincidir con la documentación del dispositivo y las necesidades del despliegue.
- Asegúrese de que el equipo tenga servicio celular válido y parámetros de red correctos según las indicaciones del fabricante para alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, eliminar o modificar tipos de mensajes y funciones; siempre revise las notas de la versión de firmware para ver cambios en el protocolo.
- Las revisiones de hardware pueden introducir pequeñas diferencias de comportamiento aun cuando el modelo se comercialice con el mismo nombre.
- Los menús de configuración del fabricante pueden ofrecer opciones tanto UDP como TCP; seleccione el modo que coincida con su despliegue y con la configuración del endpoint de Plaspy.
- Las condiciones de la red del operador y la provisión de la SIM pueden afectar la latencia y la fiabilidad en la entrega de mensajes.
- Confirme que el Q60 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar que llegue a Plaspy.
- Valide la compatibilidad contra la documentación oficial de Sentar para la revisión específica de firmware antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Q60 ayuda a garantizar una configuración correcta, agilizar la resolución de problemas y mantener la fiabilidad a largo plazo cuando el dispositivo está emparejado con Plaspy. Incluso cuando Plaspy detecta automáticamente el protocolo, conocer el contexto de conexión y los puntos comunes de compatibilidad acelera la solución de incidencias en despliegues.

- Acelera la configuración inicial al aclarar qué transporte y endpoint debe configurar en el dispositivo.
- Facilita el diagnóstico de problemas de conectividad acotando las causas a transporte de red, direccionamiento del endpoint o firmware del dispositivo.
- Asegura que la telemetría esperada aparezca en Plaspy para alertas, geocercas e informes históricos.
- Reduce falsas alarmas y huecos de datos alineando el comportamiento del dispositivo con las expectativas de reporte de Plaspy.
- Ayuda a planificar actualizaciones de firmware o cambios de hardware que puedan alterar el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Sentar Q60 con Plaspy ofrece a organizaciones y familias un rastreador compacto de posicionamiento híbrido combinado con una plataforma de ingestión que unifica mapas, alertas e historial. El posicionamiento híbrido del Q60 (GPS, BDS, LBS y WiFi) junto con la conectividad GSM/GPRS entrega telemetría continua que Plaspy convierte en visibilidad operativa para seguridad y monitoreo de activos.

Si desea conocer más sobre Plaspy y cómo gestiona la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la información más reciente del fabricante, verifique la documentación actual en http://www.sentarsmart.com/ dado que el soporte de protocolo y el comportamiento del equipo pueden cambiar con el tiempo.
