---
slug: /totemtech/at09_4g/protocol
id: at09_4g-protocol
sidebar_label: Protocol
title: Totemtech - AT09-4G Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para la compatibilidad del rastreador Totemtech AT09-4G con servidores Plaspy y ajustes de conexión
keywords:
  - Protocolo Totemtech AT09-4G
  - Compatibilidad AT09-4G Plaspy
  - Protocolo rastreador GPS Totemtech
  - Reporte de telemetría AT09-4G
  - Protocolo de rastreo vehicular
  - Seguimiento de flotas Totemtech
  - Protocolo GNSS para rastreadores
  - Compatibilidad de dispositivos con Plaspy
  - Telemetría TPMS AT09-4G
  - Protocolo de telemetría vehicular
---

# Totemtech - Protocolo AT09-4G

Esta página describe el contexto público del protocolo para usar el rastreador Totemtech AT09-4G con Plaspy. Aquí se explica, a alto nivel, cómo se comunica el dispositivo con Plaspy, qué ajustes de conexión emplea la plataforma y cómo el comportamiento del protocolo influye en la entrega de datos GNSS, telemetría y alarmas. Administradores y lectores técnicos encontrarán orientación sobre el flujo de comunicación sin exponer detalles internos del firmware.

El AT09-4G es un rastreador 4G resistente, diseñado para ambientes vehiculares exigentes. Ofrece posicionamiento GNSS multiconstelación y telemetría avanzada como TPMS y monitoreo de combustible en múltiples canales. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta el protocolo del equipo de forma automática, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Confirme siempre el comportamiento específico del dispositivo con la documentación del fabricante para obtener los detalles más recientes.

## Visión general del protocolo

El protocolo del dispositivo define la lógica y la estructura de los mensajes usados para reportar posición, estados de sensores y alarmas a un servidor remoto. En el caso del AT09-4G, este protocolo permite que el rastreador se identifique ante Plaspy, entregue coordenadas GNSS y telemetría, y reporte eventos que alimentan el mapeo, las alertas y los historiales.

- Transporta informes de posición y soluciones GNSS multiconstelación para que Plaspy muestre ubicaciones en tiempo real e históricas.
- Transmite telemetría como TPMS, lecturas de sensores de combustible, estados de entradas/salidas digitales y eventos de alarma para visibilidad operacional.
- Permite configurar disparadores de reporte en el equipo para equilibrar precisión y uso de datos según la frecuencia de envío.
- Habilita la identificación del dispositivo y un manejo básico de sesión para que Plaspy asocie los datos con el activo correcto.
- Puede incluir canales de respaldo o auxiliares, como SMS o envío a servidores secundarios, dependiendo de la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint unificado y determina automáticamente el protocolo del rastreador. Cuando el AT09-4G está configurado para reportar a Plaspy, la plataforma usa ese tráfico entrante para asociarlo con el parser adecuado sin exigir una selección manual de protocolo.

- Plaspy escucha en el dominio compartido d.plaspy.com y también acepta conexiones dirigidas a 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto de red en Plaspy, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no es necesario seleccionar el protocolo dentro de la plataforma si el dispositivo reporta correctamente.
- La configuración adecuada del dispositivo en el lado del rastreador es el requisito habitual para que Plaspy reconozca y parse los datos entrantes.
- Si encuentra problemas de detección, verifique el destino de reporte del dispositivo, el tipo de transporte y el comportamiento del firmware antes de modificar ajustes del servidor.

## Transporte y contexto de conexión

El transporte de conexión es una capa distinta al propio protocolo. El AT09-4G soporta transportes de red estándar y puede configurarse para usar UDP o TCP según la configuración del equipo y las condiciones de la red. Plaspy documenta un único puerto que usan todos los dispositivos compatibles, reduciendo la complejidad de configuración.

- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy.
- El endpoint público de Plaspy está disponible como el dominio d.plaspy.com y también puede alcanzarse en la dirección IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que el mismo puerto de reporte saliente puede configurarse en distintos modelos de rastreadores.
- La selección del transporte puede afectar las características de entrega para telemetría sensible al tiempo y debe coincidir con la capacidad del dispositivo y el entorno de red.
- Algunos dispositivos ofrecen SMS o reporte a servidores secundarios como canal de respaldo; revise la configuración del equipo si depende de entregas alternativas.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de los mensajes y los campos de telemetría disponibles; verifique la compatibilidad con la revisión de firmware instalada en sus unidades.
- Las revisiones de hardware y los periféricos opcionales (módulos TPMS, LoRa, Bluetooth, cámara) pueden cambiar qué flujos de telemetría están disponibles para Plaspy.
- Configure el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte que soporte la unidad para una ingesta confiable.
- Los dispositivos que soportan reporte simultáneo a dos servidores pueden configurarse para redundancia; asegúrese de que otros ajustes no entren en conflicto con la ingesta de Plaspy.
- Ajustes del fabricante como disparadores de reporte, mapeo de sensores y cableado de entradas afectan cómo aparecen los datos en Plaspy y deben validarse durante la puesta en marcha.
- Compare siempre el comportamiento del equipo con la hoja de datos y las notas de versión del fabricante antes de desplegar flotas a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el AT09-4G facilita la configuración, el diagnóstico y la garantía de una entrega fiable de telemetría a Plaspy. La familiaridad con el contexto de conexión y la variabilidad común reduce el tiempo de integración y ayuda a los equipos a ajustar los reportes según sus necesidades operativas.

- Diagnóstico más rápido de problemas de conectividad al confirmar endpoint del servidor, transporte y puerto en el dispositivo.
- Mejor configuración de los disparadores de reporte para equilibrar uso de datos y precisión de rastreo, optimizando costos y desempeño de la flota.
- Decisiones informadas sobre el uso de periféricos opcionales como TPMS, nodos LoRa o sensores Bluetooth y cómo sus datos fluirán hacia Plaspy.
- Expectativas claras sobre actualizaciones de firmware que puedan cambiar la telemetría disponible o el timing de los mensajes.
- Coordinación más sencilla con el soporte del fabricante cuando el comportamiento del dispositivo difiera de los patrones esperados.

## Por qué usar Plaspy con este protocolo

Usar el Totemtech AT09-4G con Plaspy ofrece a las organizaciones un flujo consolidado de telemetría y ubicación que soporta monitoreo de flotas, flujos de seguridad e insights de mantenimiento. El diseño robusto del AT09-4G, su GNSS multiconstelación y el amplio soporte de periféricos lo hacen adecuado para flotas mixtas y entornos exigentes, mientras que Plaspy procesa esas corrientes para mapeo, alertas e informes.

Para saber más sobre Plaspy y cómo la plataforma se integra con dispositivos como el AT09-4G, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo, por lo que confirme la información más reciente sobre el protocolo y el firmware del dispositivo en el sitio del fabricante http://www.totemtek.com/ antes de desplegar a gran escala.
