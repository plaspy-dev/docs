---
slug: /ev/ev_601/protocol
id: ev_601-protocol
sidebar_label: Protocol
title: EV - EV-601 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS EV-601 y cómo se comunica con Plaspy para rastreo vehicular
keywords:
  - Protocolo EV EV-601
  - Protocolo GPS EV-601
  - Protocolo de comunicación EV EV-601
  - Protocolo de rastreo EV EV-601
  - Compatibilidad rastreador EV con Plaspy
  - Protocolo rastreador GPS EV
  - Rastreo vehicular EV-601
  - Rastreador para motocicletas EV-601
  - Protocolo de dispositivo Plaspy
  - Rastreador EV en Plaspy
---

# EV - Protocolo EV-601

Esta página describe el contexto público del protocolo para usar el rastreador EV EV-601 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel y qué puede esperar usted al integrar el rastreador para monitoreo de vehículos y motocicletas. El EV-601 es un equipo versátil que ofrece rastreo en tiempo real vía web, reportes por SMS, conectividad GSM/GPRS, almacenamiento a bordo, geo-cercas, alarmas, inmovilización remota y actualizaciones de firmware OTA; estas capacidades determinan los tipos de mensajes y eventos que su plataforma de seguimiento recibirá.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, revisión de hardware e implementación del fabricante, por lo que aunque Plaspy acepta conexiones de dispositivos EV-601, la disponibilidad de comandos específicos y los detalles de los mensajes pueden diferir entre unidades y versiones de firmware. Para la configuración de red, Plaspy escucha en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888, y los dispositivos pueden configurarse para usar UDP o TCP en ese mismo puerto.

## Visión general del protocolo

A nivel general, el protocolo de comunicación del EV-601 regula cómo el rastreador informa posición, eventos y estado a un servidor remoto y cómo se entregan los comandos remotos. El protocolo define la estructura y el ritmo de transmisión de fixes GPS, alertas y cambios en estados de entradas o salidas, de modo que Plaspy pueda presentar datos precisos de ubicación y eventos a los usuarios.

- Permite que el EV-601 envíe actualizaciones de ubicación, alertas de movimiento e informes de estado a un endpoint remoto para su procesamiento en Plaspy
- Transporta información de eventos como disparo de geo-cercas, alarmas SOS, pérdida de alimentación y cambios en entradas que Plaspy interpreta como alertas accionables
- Autoriza comandos remotos para las funciones que el dispositivo expone, incluyendo inmovilización o control de salidas, sujeto al firmware y la configuración del equipo
- Soporta métodos de reporte basados en SMS y GPRS en el lado del dispositivo, utilizando transporte IP hacia Plaspy cuando la conectividad de datos está disponible
- Funciona con la memoria interna y las opciones de reporte del dispositivo para garantizar que los datos se entreguen o se almacenen en búfer cuando la conectividad sea intermitente

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido y determina automáticamente el protocolo de rastreador adecuado cuando un dispositivo reporta. En la mayoría de los casos no necesitará seleccionar manualmente un protocolo en Plaspy si el EV-601 está configurado para reportar al servidor de Plaspy.

- Plaspy escucha en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138 para conexiones de dispositivos
- Todos los dispositivos que reportan a Plaspy utilizan el mismo puerto, por lo que una sola configuración puede cubrir múltiples modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando un EV-601 correctamente configurado inicia la comunicación
- Los usuarios por lo general configuran el EV-601 para apuntar a Plaspy y no necesitan seleccionar un protocolo dentro de Plaspy para el reporte básico
- Si un dispositivo se comporta de manera diferente por firmware o ajustes regionales, consulte la documentación del fabricante y los registros del equipo para confirmar la configuración de reporte

## Transporte y contexto de conexión

El EV-601 puede configurarse para usar transporte IP a través de la red móvil para enviar datos a un servidor remoto. Al conectarse a Plaspy, la configuración de transporte y destino determina cómo el dispositivo alcanza el endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y ajustes del equipo
- Plaspy acepta conexiones de dispositivos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y del equipo
- Elija UDP o TCP en el dispositivo conforme a las indicaciones del firmware del rastreador y al comportamiento de red que necesite
- Si la conectividad celular es intermitente, el rastreador puede almacenar datos en la memoria del dispositivo antes de enviarlos cuando el enlace esté disponible

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar comandos disponibles, intervalos de reporte y contenido de mensajes incluso dentro del mismo modelo EV-601
- Revisiones de hardware u accesorios opcionales pueden agregar o quitar canales de entrada/salida y tipos de eventos que el protocolo transmitirá
- El firmware regional del fabricante puede habilitar funciones localizadas o distintas configuraciones de transporte por defecto
- La selección de transporte entre UDP y TCP afecta las características de entrega y debe coincidir con cómo se aprovisionó el dispositivo
- Verifique que el EV-601 esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para alcanzar Plaspy
- Confirme siempre los detalles de compatibilidad con la documentación más reciente de EV y las notas de la versión antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del EV-601 a un nivel práctico ayuda a garantizar una configuración fluida, reportes fiables y una resolución efectiva de problemas al usar Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce la fricción de integración y mejora los resultados operativos.

- Ayuda a verificar que el dispositivo apunte al endpoint y puerto correctos de Plaspy para una comunicación exitosa
- Permite un diagnóstico más rápido de mensajes faltantes o malformados que puedan deberse a diferencias de firmware o desajustes de transporte
- Orienta la decisión entre UDP y TCP según el comportamiento de entrega deseado y las opciones de configuración del dispositivo
- Aclara qué eventos y alarmas del equipo deberían aparecer en Plaspy y cuáles pueden requerir configuración adicional del dispositivo
- Facilita la planificación de actualizaciones de firmware OTA y la previsión de posibles cambios de comportamiento tras las actualizaciones

## Por qué usar Plaspy con este protocolo

Usar el EV-601 con Plaspy ofrece a las organizaciones una forma práctica de reunir en una sola plataforma la ubicación, el estado y los eventos de vehículos y motocicletas. Plaspy presenta actualizaciones de ubicación en vivo, alertas e historial, mientras que el puerto compartido y la detección automática de protocolos de Plaspy simplifican la incorporación de múltiples modelos de dispositivos.

Si desea profundizar en cómo Plaspy maneja la conectividad de dispositivos o revisar las funcionalidades de la plataforma para visibilidad y monitoreo de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la documentación más reciente del EV EV-601 y la información de firmware en el sitio del fabricante http://www.eviewltd.com/ antes de finalizar despliegues.
