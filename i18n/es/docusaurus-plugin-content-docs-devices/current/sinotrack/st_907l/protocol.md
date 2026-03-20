---
slug: /sinotrack/st_907l/protocol
id: st_907l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-907L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST 907L y su comunicación con Plaspy para seguimiento en tiempo real y gestión de flotas
keywords:
  - protocolo SinoTrack ST 907L
  - protocolo GPS ST 907L
  - protocolo SinoTrack Plaspy
  - protocolo de comunicación ST 907L
  - protocolo de rastreo SinoTrack
  - guía de integración ST 907L
  - compatibilidad de dispositivos Plaspy
  - rastreador GPS ST 907L
  - seguimiento de flotas SinoTrack
  - telemetría ST 907L
---

# SinoTrack - Protocolo ST-907L

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del SinoTrack Relay ST-907L cuando se utiliza con Plaspy. Se centra en cómo el equipo informa la ubicación y la telemetría a la plataforma Plaspy y qué considerar al configurar la unidad para un seguimiento en tiempo real y una gestión de flotas fiables.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El ST-907L es un rastreador GNSS compacto con posicionamiento SIMCOM 7670SA, conectividad 4G LTE y 2G GSM, y funciones como inmovilizador remoto y respaldo ante pérdida de alimentación que generan la telemetría que Plaspy consume.

## Descripción general del protocolo

El protocolo del dispositivo es el conjunto de convenciones que el ST-907L utiliza para identificarse y enviar informes de posición, alarmas y telemetría a un servidor remoto. Para la integración con Plaspy, la función del protocolo se limita a permitir mensajes coherentes y parseables para que la plataforma muestre ubicaciones en tiempo real, alertas y datos históricos.

- Permite que el rastreador informe periódicamente posiciones GNSS y telemetría básica como estado de batería y eventos.
- Transmite señales de alarma y eventos como vibración, corte de alimentación, batería baja y disparos del inmovilizador para su gestión inmediata.
- Proporciona identificadores que permiten a Plaspy asociar cada mensaje entrante con el registro de dispositivo correcto.
- Transporta actualizaciones de posición periódicas y por eventos para que Plaspy construya mapas en vivo y el historial de rutas.
- Habilita comandos de control remoto cuando el dispositivo lo soporta y la plataforma está autorizada para emitirlos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido e inspecciona los informes para determinar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones, un ST-907L configurado correctamente empezará a reportar a Plaspy sin que usted tenga que seleccionar manualmente el protocolo en la interfaz.

- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles, por lo que no se requiere un puerto distinto por modelo.
- Los dispositivos configurados para reportar al endpoint de Plaspy normalmente se reconocen automáticamente cuando llegan los mensajes.
- Usualmente usted solo necesita configurar la unidad para que informe a la dirección de Plaspy y confirmar los ajustes de transporte.
- Si un dispositivo usa múltiples modos de transporte, Plaspy aceptará conexiones y procesará los informes desde el transporte seleccionado.
- Para variantes inusuales o firmware personalizado, la verificación con logs del dispositivo y la guía del fabricante puede ayudar a resolver casos límite de detección.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el ST-907L alcanza los servidores de Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, y puede apuntar al dominio de Plaspy o a la dirección IP de la plataforma según las necesidades de provisión.

- Plaspy acepta informes de rastreadores en el puerto 8888 para todos los dispositivos de la plataforma.
- El dominio del servidor de Plaspy para reportes es d.plaspy.com.
- Como objetivo alternativo, los rastreadores pueden apuntar a la IP del servidor Plaspy 54.85.159.138.
- El ST-907L soporta configuración para usar transporte UDP o TCP según el firmware del dispositivo y los requisitos de la red.
- Elegir UDP puede reducir la sobrecarga en informes de posición frecuentes, mientras que TCP puede ofrecer una sesión más fiable para acuses de recibo de comandos cuando está soportado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden alterar la frecuencia de mensajes, los conjuntos de campos o campos de telemetría opcionales; siempre revise las notas de firmware del dispositivo para detectar diferencias.
- Las revisiones de hardware y variantes regionales (para bandas LTE) pueden afectar la conectividad de red disponible y, por ende, el comportamiento de reporte.
- Las configuraciones del fabricante o las direcciones de servidor predeterminadas pueden variar de una unidad a otra; confirme el servidor de reportes en el propio dispositivo.
- La selección de transporte entre UDP y TCP se hace en el equipo y debe coincidir con la configuración prevista para alcanzar Plaspy en el puerto 8888.
- Algunas funciones avanzadas, como comandos de inmovilizador, requieren soporte del dispositivo y el cableado correcto o relés externos.
- En caso de duda, valide mensajes y comportamiento con la documentación oficial de SinoTrack y las notas de la versión.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el ST-907L proporcione datos de posición y eventos fiables a Plaspy y facilita la resolución de problemas cuando los informes faltan o están incompletos. Tener claro cómo se comunica el rastreador con el servidor reduce el tiempo de despliegue y favorece la monitorización estable a largo plazo.

- Acelera la configuración inicial al aclarar los ajustes de servidor y transporte requeridos por el equipo.
- Ayuda a distinguir problemas del lado del dispositivo de problemas de red o configuración del servidor durante el diagnóstico.
- Informa sobre qué campos de telemetría estarán disponibles según la versión de firmware o la revisión de hardware.
- Aclara las condiciones bajo las cuales Plaspy puede aceptar y actuar sobre controles remotos y alarmas.
- Apoya la planificación de soluciones alternativas, como cambiar modos de transporte o verificar APN y compatibilidad con el operador.

## Por qué usar Plaspy con este protocolo

Vincular el ST-907L con Plaspy ofrece a las organizaciones una forma centralizada de ver ubicación en vivo, historial de rutas, alarmas y telemetría básica desde un rastreador compacto diseñado para motocicletas y automóviles. La plataforma de Plaspy ingiere los informes del ST-907L para que los equipos puedan gestionar geocercas, responder a eventos antirrobo y analizar el kilometraje y la utilización en una flota mixta.

Plaspy recibe los datos del rastreador en un endpoint y puerto consistentes, y la plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al servidor de Plaspy. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el ST-907L visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de protocolo específica más reciente en el sitio del fabricante https://www.sinotrackgps.com/.
