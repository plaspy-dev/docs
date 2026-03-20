---
slug: /lk_gps/lk106/protocol
id: lk106-protocol
sidebar_label: Protocol
title: LK-GPS - LK106 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público y completo del protocolo para usar el rastreador LK106 con Plaspy
keywords:
  - LK-GPS LK106 protocolo
  - LK-GPS LK106 protocolo GPS
  - LK-GPS LK106 protocolo de comunicación
  - LK-GPS LK106 protocolo de rastreo
  - LK-GPS protocolo Plaspy
  - LK106 compatibilidad Plaspy
  - LK106 protocolo rastreador GPS
  - Plaspy protocolo de dispositivo
  - Integración rastreador GPS Plaspy
  - protocolo rastreador personal
---

# LK-GPS - Protocolo LK106

Esta página documenta el contexto público del protocolo para usar el rastreador LK-GPS LK106 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a un alto nivel y qué verificar al integrar el LK106 para seguimiento en tiempo real y reportes de eventos. Está dirigida a administradores e integradores que requieren una visión clara y no sensible de cómo el rastreador intercambia telemetría con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como un recurso de conectividad y contexto de protocolo, no como un reemplazo del manual del dispositivo.

## Resumen del protocolo

El protocolo es el conjunto de reglas que usa el LK106 para enviar posiciones GPS, alertas y actualizaciones de estado a un servidor. A nivel público, comprender el protocolo le permite confirmar que el dispositivo está apuntando a Plaspy y que los eventos esperados, como posiciones GPS, alertas SOS e informes de batería, llegan a la plataforma.

- Permite la transmisión periódica y por eventos de datos GPS y telemetría desde el LK106 hacia un servidor remoto.
- Proporciona los medios para que el rastreador se identifique y la plataforma pueda asociar los datos entrantes con el registro de dispositivo correcto.
- Transporta eventos accionables como alarmas SOS, disparos de geocerca, alertas de movimiento y estado de batería para su uso en paneles y reglas de Plaspy.
- Soporta soluciones alternativas como configuración por SMS en entornos sin datos móviles, de modo que la configuración del equipo y alertas básicas sigan siendo posibles.
- Funciona junto con la configuración de transporte (TCP o UDP) y el endpoint del servidor para ofrecer reportes confiables a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en su endpoint compartido y utiliza esa entrada para determinar qué protocolo de rastreador está usando un dispositivo. En la mayoría de los casos, cuando un LK106 se configura para reportar a Plaspy, no se requiere selección manual de protocolo dentro de la plataforma.

- Plaspy escucha en un único puerto para todos los dispositivos soportados y detecta automáticamente el protocolo a partir de las conexiones entrantes.
- Los dispositivos deben configurarse para reportar a la dirección del servidor de Plaspy para que ocurra la detección automática.
- Si el LK106 está correctamente apuntado al endpoint de Plaspy, la plataforma asociará la telemetría entrante con el dispositivo de forma automática.
- Las tareas típicas de integración se limitan a configurar el APN del dispositivo y la dirección de reporte para que el rastreador pueda alcanzar Plaspy.
- Si encuentra un comportamiento inesperado, verifique la versión de firmware y la configuración de reporte del dispositivo antes de cambiar ajustes en la plataforma.

## Transporte y conexión

El LK106 puede enviar telemetría a través de la red móvil usando UDP o TCP según la configuración del dispositivo y las capacidades del firmware. Plaspy ofrece un endpoint y un puerto consistentes que el rastreador puede usar para reportar.

- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para configuración directa del dispositivo puede ser 54.85.159.138.
- El puerto de red que utiliza Plaspy para las conexiones de dispositivos es 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- El LK106 puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y el transporte elegido.
- Asegúrese de que el APN y la configuración de la SIM permitan conexiones salientes al endpoint de Plaspy y que las reglas de la red móvil permitan el transporte escogido.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos incluye el dispositivo en la telemetría, por lo que confirme el comportamiento esperado para su compilación de firmware.
- Revisiones de hardware o variantes regionales del LK106 pueden presentar ligeras diferencias en los reportes; verifique el modelo y la revisión del dispositivo al solucionar problemas.
- Las opciones de configuración del fabricante, como la alternativa por SMS, el intervalo de reporte y los modos de activación por movimiento, afectan el volumen y la frecuencia de datos que recibe Plaspy.
- La selección del transporte (UDP vs TCP) puede influir en la confiabilidad en ciertos entornos de red; pruebe el transporte preferido en condiciones reales.
- Apuntar dispositivos a d.plaspy.com o a la IP numérica 54.85.159.138 en el puerto 8888 es el enfoque estándar de conexión para la ingestión en Plaspy.
- Siempre valide la compatibilidad y las recomendaciones de configuración con la documentación oficial de LK-GPS para el dispositivo y firmware específicos.

## Por qué es importante entender el protocolo

Conocer el contexto público del protocolo ayuda a asegurar una configuración fluida, agilizar la resolución de problemas y lograr un comportamiento operativo predecible al usar el LK106 con Plaspy. Incluso sin profundizar en los detalles internos del protocolo, estar al tanto de lo que envía el rastreador y cómo lo recibe Plaspy reduce la fricción en la integración.

- Acelera la puesta en marcha al confirmar que el dispositivo está apuntando al endpoint y puerto correctos de Plaspy.
- Mejora la resolución de problemas al aclarar si un problema se debe al transporte, a la configuración del dispositivo o a condiciones de red.
- Ayuda a ajustar los intervalos de reporte y la configuración de eventos para equilibrar la vida útil de la batería y la frescura de la posición.
- Aclara cómo deberían aparecer alertas como SOS y eventos de geocerca en Plaspy, facilitando la configuración de reglas y el enrutamiento de notificaciones.
- Recomienda verificar las notas de la versión de firmware cuando observe un cambio de comportamiento tras actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el LK106 con Plaspy ofrece a las organizaciones un rastreo compacto y discreto junto con una plataforma que recibe datos de ubicación y eventos en vivo para monitoreo, alertas y visibilidad operacional. Para casos de uso de seguridad personal, protección de activos y telemetría ligera, el LK106 combina un tamaño reducido con funciones como alarmas SOS y alertas de movimiento que se integran de forma natural en los flujos de trabajo de Plaspy.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona la conectividad y la telemetría de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y orientación del fabricante sobre el LK106, verifique la información actual en el sitio oficial de LK GPS en https://www.lk-gps.com.
