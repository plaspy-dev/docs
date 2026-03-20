---
slug: /pst/avl_011/protocol
id: avl_011-protocol
sidebar_label: Protocol
title: PST - AVL-011 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para compatibilidad del PST AVL-011 con Plaspy y contexto de conexión para reportes fiables
keywords:
  - protocolo PST AVL-011
  - protocolo GPS PST AVL-011
  - compatibilidad PST AVL-011 Plaspy
  - protocolo rastreador AVL-011
  - protocolo rastreador de vehículo PST
  - protocolo de comunicación AVL-011
  - protocolo de rastreo GPS PST
  - rastreador antirrobo AVL-011
  - compatibilidad rastreador Plaspy
  - protocolo rastreador GPS Plaspy
---

# PST - AVL-011 Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador PST AVL-011 con Plaspy. Explica, en términos generales y no sensibles, cómo el dispositivo suele comunicarse con la plataforma Plaspy y señala los elementos de la configuración de comunicación que normalmente encontrará al integrar este modelo. El AVL-011 es un rastreador vehicular con funciones antirrobo, capacidad de corte remoto de energía, opciones de instalación discreta y monitoreo SOS que reporta eventos y estado a un punto final de servidor.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo para el AVL-011 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los puntos de integración a alto nivel más que en los detalles internos del dispositivo.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el AVL-011 se identifica, informa su ubicación y estado, y señala alarmas o eventos de control remoto. El protocolo permite que Plaspy reciba actualizaciones de posición, señales de emergencia y estado operativo de forma utilizable para mapeo, alertas y acciones remotas.

- Permite que el AVL-011 envíe reportes periódicos de ubicación y estado a un servidor remoto para seguimiento y monitoreo
- Soporta la transmisión de eventos de alarma y emergencia como SOS para que Plaspy genere alertas y registre incidentes
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el activo correcto
- Transporta información de estado operativo relevante para funciones antirrobo y solicitudes de inmovilización remota
- Provee un flujo consistente de telemetría que Plaspy utiliza para visualización, notificaciones y registros históricos

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y determina automáticamente qué protocolo de rastreador se está usando. Eso significa que en la mayoría de los casos no necesitará seleccionar manualmente un protocolo en Plaspy siempre que el AVL-011 esté configurado para reportar al endpoint y puerto de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto de escucha de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el soporte y la configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido
- Si el rastreador está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy recibirá los datos del dispositivo para su procesamiento

## Transporte y contexto de conexión

Las opciones de transporte y conexión determinan cómo el AVL-011 entrega los mensajes a Plaspy, pero no cambian los objetivos generales de reporte. Los elementos de integración más importantes son la dirección y el puerto de destino y si el dispositivo está configurado para usar UDP o TCP.

- Los dispositivos suelen apuntar al dominio de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138
- El puerto de destino configurado para Plaspy es 8888 y este mismo puerto se usa para todos los dispositivos compatibles con Plaspy
- El AVL-011 puede operar sobre UDP o TCP para enviar reportes según la configuración del modelo y el firmware
- La estabilidad de la red y la conectividad de la SIM afectan la fiabilidad con la que los reportes llegan a Plaspy por cualquiera de los transportes
- Asegúrese de que el rastreador esté configurado con el endpoint y el puerto correctos para que los datos entrantes lleguen a Plaspy sin necesidad de seleccionar manualmente el protocolo

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre lotes de producción del AVL-011 pueden cambiar qué funciones están disponibles o cómo se reportan algunos mensajes
- Las revisiones de hardware y el cableado opcional para inmovilización o SOS pueden requerir pasos de configuración específicos indicados en la documentación del fabricante
- La elección del transporte TCP o UDP puede ser seleccionable en el dispositivo y debe coincidir con la configuración usada al validar la conectividad con Plaspy
- Puede ser necesario usar menús de configuración del fabricante o comandos SMS para apuntar el equipo a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El comportamiento de funciones como corte remoto de energía o monitoreo de voz puede depender del firmware y de cómo esté instalado el dispositivo
- Siempre valide la compatibilidad y las funciones soportadas consultando la documentación del fabricante para la revisión específica de firmware

## Por qué entender el protocolo es importante

Conocer el protocolo de comunicación y el contexto de conexión le ayuda a configurar correctamente el AVL-011, agiliza la resolución de problemas y reduce tiempos de inactividad al integrarlo con Plaspy. Tener claro cómo informa el dispositivo y qué puede hacer garantiza un seguimiento y manejo de alarmas más fiables.

- Ayuda a verificar que el equipo esté apuntando al endpoint y puerto correctos de Plaspy
- Facilita el diagnóstico cuando un dispositivo no aparece en Plaspy o cuando los mensajes están incompletos
- Aclara qué funciones dependen de los mensajes del dispositivo frente a la configuración del servidor
- Apoya la planificación de actualizaciones de firmware y pruebas de funciones para preservar el comportamiento esperado
- Mejora la confianza al habilitar funciones críticas como inmovilización y monitoreo SOS

## Por qué usar Plaspy con este protocolo

Usar el PST AVL-011 con Plaspy ofrece una forma centralizada de recopilar ubicación, alarmas y estado operativo para flotas o vehículos individuales. Plaspy consolida la telemetría entrante del rastreador para que las organizaciones puedan monitorear movimientos, responder a alertas SOS y actuar ante eventos antirrobo desde una sola plataforma, a la vez que se mantiene la capacidad del dispositivo para operar de forma discreta.

Si desea conocer más sobre cómo Plaspy maneja la integración de dispositivos y los servicios disponibles para visibilidad de flotas y respuesta a incidentes visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente específica del dispositivo con el fabricante en su sitio web oficial.
