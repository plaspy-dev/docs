---
slug: /concox/jm_bl11/protocol
id: jm_bl11-protocol
sidebar_label: Protocol
title: Concox - JM-BL11 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para integrar Concox JM-BL11 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - Protocolo Concox JM-BL11
  - Protocolo GPS JM-BL11
  - Protocolo de rastreo Concox
  - Compatibilidad JM-BL11 Plaspy
  - Protocolo rastreador GPS Concox
  - Protocolo de comunicación JM-BL11
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS para bicicletas compartidas
  - Protocolo rastreador para micromovilidad
  - Integración de protocolo Concox
---

# Concox - Protocolo JM-BL11

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-BL11 con Plaspy. Se centra en cómo el dispositivo informa ubicación, telemetría y eventos a Plaspy y en qué aspectos de la comunicación del rastreador son relevantes para la integración y la operación. El contenido destaca detalles que pueden compartirse públicamente y no revela implementaciones privadas o específicas del proveedor.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente los protocolos de los rastreadores cuando estos informan al endpoint de Plaspy. En el caso del JM-BL11, esto significa que los dispositivos pueden apuntar a Plaspy y normalmente no requieren selección manual de protocolo dentro de la plataforma. El comportamiento exacto del equipo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que los operadores deben validar los ajustes del dispositivo y el estado del firmware al desplegar a escala.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de convenciones que el JM-BL11 utiliza para identificarse ante la nube y enviar datos de ubicación, telemetría y eventos que Plaspy pueda procesar. En la práctica, el protocolo abarca cómo se reportan las posiciones GNSS, las alertas de movimiento y manipulación, la telemetría de batería y carga, y los eventos locales de desbloqueo, de modo que puedan mostrarse en mapas, alertas e informes históricos.

- Transmite fijaciones GNSS y fuentes de ubicación alternativas para que Plaspy pueda ubicar el dispositivo y construir el historial de rutas.
- Reporta telemetría de estado y eventos como alertas de manipulación o vibración, estado de batería e indicadores de carga solar para monitorización operativa.
- Envía identidad del dispositivo e información de sesión para que Plaspy asocie los datos entrantes con el activo de la flota correspondiente.
- Entrega mensajes orientados por eventos usados para activaciones de geocercas, notificaciones anti robo y registros de uso para operaciones de micromovilidad.
- Emplea opciones de transporte seguro cuando están habilitadas en el dispositivo, manteniendo la confidencialidad e integridad de la telemetría en tránsito.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint de ingestión compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo comunica con ese endpoint. Para la mayoría de despliegues con JM-BL11, los usuarios no necesitan elegir un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al servidor de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la dirección IP del servidor para reporte de dispositivos es 54.85.159.138.
- Plaspy utiliza un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración del reporte de los equipos.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes y los patrones de mensaje.
- Cuando un JM-BL11 está configurado para reportar al endpoint de Plaspy, la selección manual de protocolo en la plataforma suele ser innecesaria.
- Confirme los ajustes de reporte del dispositivo y la configuración APN para garantizar que el rastreador pueda alcanzar el endpoint de Plaspy de forma fiable.

## Transporte y contexto de conexión

El transporte de conexión es una parte importante de la planificación de la integración. El JM-BL11 soporta enlace celular y puede configurarse para usar cualquiera de los tipos de transporte estándar según el firmware del dispositivo y la preferencia del operador. Plaspy emplea un puerto único y coherente para todos los dispositivos, lo que reduce la complejidad de configuración en flotas mixtas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones de configuración.
- Los dispositivos pueden apuntar al servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la provisión y los despliegues a escala.
- Las comunicaciones aseguradas con TLS son compatibles en el JM-BL11 para proteger la telemetría en tránsito cuando el dispositivo las habilita.
- Los operadores deben verificar el APN y la conectividad saliente desde el dispositivo para asegurar un reporte fiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos de telemetría disponibles y los modos de transporte soportados; verifique la versión de firmware del equipo para un comportamiento predecible.
- Las variantes de hardware o los modelos regionales pueden ofrecer diferente soporte de bandas GNSS o caídas celulares que afecten la conectividad y el rendimiento del posicionamiento.
- El manejo de TLS y certificados puede variar según el firmware; confirme que el dispositivo soporta las configuraciones de seguridad requeridas para su despliegue.
- Seleccione TCP o UDP según la fiabilidad de la red y la preferencia operativa, pero recuerde que el puerto de destino en Plaspy permanece igual.
- Pruebe un número reducido de dispositivos antes de un despliegue masivo para confirmar que los tipos de evento, la telemetría de batería y las alertas de manipulación lleguen como se espera a Plaspy.
- Considere siempre la documentación oficial del fabricante para obtener las instrucciones específicas del dispositivo y las notas de firmware más recientes.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los operadores de flota e integradores a configurar los dispositivos correctamente, agilizar la resolución de problemas y mantener telemetría confiable y duradera para las operaciones de la flota. Una clara comprensión de qué datos reporta el JM-BL11 y cómo se conecta a Plaspy reduce el tiempo de integración y aumenta la confianza operativa.

- Solución de problemas más rápida cuando los dispositivos dejan de reportar o aparecen como fuera de línea revisando transporte, APN y ajustes del servidor.
- Mejor precisión en geocercas y antirrobo al confirmar cómo y cuándo se reportan eventos de ubicación y movimiento.
- Planificación de mantenimiento de batería y paneles solares más efectiva mediante la interpretación precisa de la telemetría de energía reportada.
- Despliegues a escala más predecibles cuando las elecciones de protocolo y transporte se validan entre versiones de firmware.
- Mayor seguridad y cumplimiento al confirmar las configuraciones de TLS y conexión entre el dispositivo y Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el JM-BL11 con Plaspy ofrece a los operadores de micromovilidad una combinación práctica de hardware resistente en el dispositivo y una plataforma en la nube que ingiere la telemetría necesaria para operaciones en tiempo real. Plaspy recopila datos de ubicación, movimiento, batería y eventos para alimentar mapas en vivo, aplicación de geocercas, rutas históricas y paneles de salud de la flota adaptados a casos de uso de bicicletas compartidas y equipos distribuidos.

Si administra flotas grandes, integrar dispositivos JM-BL11 con Plaspy puede reducir la carga operativa, mejorar la detección de robos y proporcionar la telemetría necesaria para optimizar disponibilidad y mantenimiento. Conozca más sobre Plaspy en https://www.plaspy.com y verifique los detalles más recientes sobre protocolo y firmware del dispositivo en el sitio del fabricante https://www.iconcox.com/ donde puede haber actualizaciones sobre el comportamiento e implementación del protocolo.
