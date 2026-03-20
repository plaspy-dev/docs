---
slug: /xirgo/xt_4700/protocol
id: xt_4700-protocol
sidebar_label: Protocol
title: Xirgo - XT-4700 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Xirgo XT-4700 y cómo el rastreador comunica ubicación y estado a Plaspy
keywords:
  - protocolo Xirgo XT-4700
  - protocolo GPS Xirgo XT-4700
  - compatibilidad XT-4700 Plaspy
  - protocolo rastreador Xirgo
  - protocolo de seguimiento XT-4700
  - comunicación rastreador GPS Xirgo
  - seguimiento de flotas XT-4700
  - rastreadores compatibles con Plaspy
  - integración protocolo rastreador GPS
  - seguimiento remoto activos XT-4700
---

# Xirgo - Protocolo XT-4700

Esta página ofrece un contexto público del protocolo para usar el Xirgo XT-4700 con Plaspy. Explica, en términos generales, cómo el XT-4700 comunica la ubicación, el estado y la información de salud hacia un servicio backend sin exponer detalles sensibles de implementación. El XT-4700 es un modem celular robusto y autónomo con un motor GPS de alta precisión integrado y funciones de gestión de energía que lo hacen idóneo para el monitoreo remoto de activos a largo plazo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de los mensajes y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de comunicación para un rastreador como el XT-4700 define cómo el dispositivo se identifica, reporta posición y estado, y recibe comandos remotos opcionales o acuses de recibo. Para Plaspy esto implica que el protocolo debe entregar datos útiles de ubicación, hora y estado del dispositivo al endpoint de Plaspy, de modo que la plataforma pueda procesar y presentar la información del activo de forma confiable.

- Permite la identificación del dispositivo y el reporte de sesión para que Plaspy asocie los mensajes con el activo correcto
- Transporta la ubicación GPS, la marca de tiempo y los indicadores básicos de salud o batería necesarios para el monitoreo
- Transmite reportes periódicos o basados en eventos según la gestión de energía y la configuración del dispositivo
- Soporta transporte sobre protocolos IP comunes para que el rastreador pueda alcanzar Plaspy en el endpoint compartido
- Permite campos opcionales de sensores y estado, como eventos del acelerómetro o detectores de movimiento, que complementan los datos de ubicación

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos de reporte en un endpoint y puerto comunes y determina automáticamente el protocolo entrante del rastreador cuando llegan los mensajes. En la mayoría de los casos, un XT-4700 correctamente configurado y apuntando a la dirección de Plaspy será reconocido sin necesidad de seleccionar el protocolo de forma manual dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos
- El puerto de escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Normalmente no es necesario elegir un protocolo dentro de Plaspy si el dispositivo está configurado para reportar a la dirección de Plaspy
- Una configuración de reporte adecuada y firmware actualizado aumentan la probabilidad de detección automática y compatibilidad inmediata

## Contexto de transporte y conexión

El contexto de conexión describe cómo el XT-4700 alcanza Plaspy más que el esquema interno de los mensajes del protocolo. La familia XT-4700 soporta transportes IP estándar y puede configurarse para usar el transporte que mejor se ajuste a las necesidades del despliegue. Los dispositivos deben apuntar al endpoint de Plaspy y seleccionar la configuración de transporte según la capacidad del dispositivo y las condiciones de red.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino para el reporte
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las preferencias del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y la incorporación
- La elección del transporte puede afectar el comportamiento de entrega en redes pequeñas o enlaces de alta latencia
- Asegúrese de que el APN celular y la conectividad saliente permitan el transporte y destino escogidos

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el conjunto exacto de campos, los intervalos de reporte y las funciones opcionales disponibles en el XT-4700
- La configuración del fabricante puede requerir opciones específicas de servidor o latido (heartbeat) para habilitar el reporte completo a una plataforma de terceros
- Sensores opcionales como acelerómetro o detector de movimiento pueden generar mensajes por eventos que difieren de los reportes periódicos de ubicación
- La selección de transporte entre UDP y TCP puede configurarse en el dispositivo y afectar la fiabilidad y el comportamiento de acuse de recibo
- Confirme que la configuración del dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la compatibilidad con Plaspy
- Valide siempre el comportamiento después de actualizaciones de firmware o cambios de hardware para garantizar la compatibilidad continua

## Por qué es importante entender el protocolo

Una comprensión clara y pragmática del protocolo de comunicación del XT-4700 ayuda a asegurar una configuración exitosa, reportes confiables y una resolución de problemas eficiente al integrar dispositivos con Plaspy. Conocer el papel del transporte, las opciones de servidor y las diferencias de firmware reduce el tiempo de despliegue y evita sorpresas en campo.

- Facilita la validación de que el dispositivo está reportando correctamente al endpoint de Plaspy
- Permite una resolución de problemas más rápida cuando un equipo no aparece en Plaspy
- Orienta en la elección de transporte, frecuencia de reporte y compensaciones de gestión de energía
- Ayuda a determinar si los sensores opcionales están configurados correctamente y reportan eventos útiles
- Apoya la planificación de actualizaciones de firmware y el mantenimiento a largo plazo del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-4700 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad confiable de activos remotos de alto valor, como contenedores, remolques y vehículos. El diseño robusto del XT-4700, su GPS integrado y el reporte eficiente en consumo lo hacen adecuado para despliegues donde la larga duración de batería y la resistencia ambiental son requisitos, mientras que Plaspy proporciona un backend consolidado que acepta reportes del dispositivo y presenta datos accionables de ubicación y estado.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos y la gestión de flotas, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique las notas y el protocolo específico más reciente del fabricante en https://xirgo.com/.
