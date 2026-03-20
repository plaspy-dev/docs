---
slug: /trackerking/ec35/protocol
id: ec35-protocol
sidebar_label: Protocol
title: TrackerKing - EC35 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas para conectar el TrackerKing EC35 a Plaspy con ajustes compartidos y detección automática
keywords:
  - Protocolo TrackerKing EC35
  - Protocolo GPS TrackerKing EC35
  - TrackerKing EC35 Plaspy
  - Compatibilidad EC35 GT06
  - Compatibilidad EC35 JT808
  - Compatibilidad EC35 Tianqin
  - Rastreo de flotas EC35
  - Protocolo de telemetría EC35
  - Compatibilidad GPS TrackerKing
  - Rastreo inmovilizador EC35
---

# TrackerKing - Protocolo EC35

Esta página explica el contexto público del protocolo para usar el TrackerKing EC35 con Plaspy. Se centra en cómo el EC35 informa ubicación y telemetría a Plaspy y en cómo Plaspy recibe esos reportes. El contenido está pensado para usuarios técnicos que necesitan comprender consideraciones de conexión y compatibilidad sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo del EC35 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; ante la duda, verifique los detalles del dispositivo con TrackerKing.

## Visión general del protocolo

El EC35 usa protocolos estándar de rastreo GPS que muchas plataformas de flotas admiten para enviar posiciones, telemetría de sensores y eventos a un back end como Plaspy. Esos protocolos proporcionan un lenguaje común para que el dispositivo se identifique, reporte su estado y transmita valores de sensores que Plaspy puede mostrar y procesar.

- El EC35 es reportado como compatible con protocolos de tipo GT06, JT808 y Tianqin para interoperabilidad con plataformas telemáticas.
- Los protocolos transmiten coordenadas GPS, eventos con marca de tiempo, estado de encendido y sensores, además de telemetría como lecturas de combustible y temperatura.
- La identificación a nivel de protocolo ayuda a Plaspy a asociar los reportes entrantes con un dispositivo específico y a presentar datos en vivo e históricos de forma consistente.
- El protocolo de comunicación determina cómo el EC35 codifica los datos y qué campos puede extraer Plaspy para paneles, alertas y reglas.
- La compatibilidad de protocolo permite que Plaspy exponga funciones del dispositivo, como control de inmovilizador, identificación de conductor y telemetría de sensores externos, cuando el firmware del equipo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y realiza detección automática del protocolo, de modo que la mayoría de los dispositivos no requieren selección manual del protocolo dentro de la plataforma. La condición principal para la detección y el alta automática es que el equipo esté correctamente configurado para apuntar a Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración.
- Los dispositivos deben configurarse para reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Cuando un dispositivo apunta correctamente al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del tracker a partir de los reportes entrantes.
- En instalaciones típicas, no es necesario seleccionar un protocolo dentro de Plaspy una vez que el EC35 está reportando al endpoint de Plaspy.
- Si un equipo utiliza una variante de firmware o un comportamiento de reporte no estándar, revisar la documentación del fabricante ayuda a resolver problemas de detección.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el EC35 envía sus reportes a Plaspy, más que los detalles internos del protocolo. El EC35 soporta modos de transporte comunes y debe configurarse para alcanzar Plaspy usando los ajustes de servidor compartidos.

- El EC35 puede configurarse para usar transporte UDP o TCP para enviar reportes a Plaspy, según el soporte y la configuración del dispositivo.
- Apunte el equipo al servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 y use el puerto 8888 para el reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita el despliegue y reduce la necesidad de cambiar puertos por dispositivo.
- Use el modo de transporte (UDP o TCP) que corresponda con el firmware de su unidad y con las necesidades de fiabilidad de la red; algunas instalaciones prefieren TCP por las garantías de entrega, mientras que otras usan UDP por menor overhead.
- Verifique que el enrutamiento de la red y las reglas del firewall permitan conexiones salientes desde los dispositivos hacia el endpoint y el puerto 8888 de Plaspy.

## Notas de compatibilidad del protocolo

- El soporte de protocolo puede depender del build específico del firmware del EC35; GT06, JT808 y Tianqin son comúnmente soportados, pero el comportamiento puede variar entre revisiones de firmware.
- Revisión de hardware entre lotes de producción puede introducir pequeñas diferencias en soporte de funciones y en el cableado de sensores; confirme la revisión del dispositivo si el comportamiento preciso es crítico.
- Algunas funciones avanzadas como control remoto de inmovilizador, identificación del conductor o integración con relés Bluetooth requieren tanto soporte de firmware como un mapeo correcto en Plaspy.
- La selección del transporte (TCP vs UDP) debe coincidir con la configuración en el dispositivo; un transporte incorrecto impedirá que el equipo reporte correctamente.
- Personalizaciones por parte del fabricante o variantes regionales pueden alterar campos de reporte o tipos de mensaje opcionales; siempre contraste con la documentación de TrackerKing.
- Valide la compatibilidad y la disponibilidad de funciones contra los recursos oficiales de TrackerKing cuando planifique despliegues o integre nuevas versiones de firmware.

## Por qué importa comprender el protocolo

Conocer cómo comunica el EC35 y qué protocolo utiliza ayuda a garantizar una configuración fluida, operaciones confiables y una resolución de problemas más rápida al integrar con Plaspy. Estar al tanto del comportamiento del protocolo reduce el tiempo hasta la primera ubicación válida y mejora la confianza en la calidad de los datos del dispositivo.

- Una configuración de protocolo adecuada permite que Plaspy identifique el dispositivo y asigne la telemetría entrante al vehículo o activo correcto.
- Entender las opciones de transporte y los ajustes de servidor ayuda a evitar problemas comunes de conectividad causados por direcciones de servidor incorrectas o puertos bloqueados.
- Conocer las diferencias de firmware y hardware reduce sorpresas al habilitar funciones como sensores de combustible, detección de ACC o corte remoto.
- La familiaridad con el protocolo acelera la resolución de reportes perdidos, valores de sensor incorrectos o conexiones intermitentes al acotar las causas probables.
- Tener expectativas claras sobre qué datos expone un protocolo permite a los administradores diseñar alertas, reglas y paneles que reflejen las capacidades reales del equipo.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing EC35 con Plaspy brinda a flotas y operadores visibilidad fiable de la ubicación del vehículo, su estado y la telemetría de sensores. El diseño robusto del EC35, su amplio rango de voltaje y batería interna lo hacen adecuado para entornos vehiculares exigentes donde la continuidad de los reportes y la resiliencia son importantes. Cuando el EC35 está configurado para reportar a Plaspy, los operadores pueden usar mapas en vivo, reproducción histórica, alertas y funciones de control remoto para mejorar la seguridad y la supervisión operativa.

Para comenzar, configure el EC35 para reportar a Plaspy en d.plaspy.com o en 54.85.159.138 usando el puerto 8888 y seleccione el modo de transporte que soporte su unidad (UDP o TCP). Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente del protocolo específico del dispositivo con TrackerKing en https://trackerking.cn/.
