---
slug: /trackerking/dk12/protocol
id: dk12-protocol
sidebar_label: Protocol
title: TrackerKing - DK12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TrackerKing DK12 y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - Protocolo TrackerKing DK12
  - Protocolo GPS TrackerKing DK12
  - Protocolo TrackerKing DK12 Plaspy
  - Protocolo del rastreador DK12
  - Rastreador GPS DK12
  - Compatibilidad TrackerKing DK12
  - Rastreo de flotas DK12
  - Rastreador antirrobo DK12
  - Telemetría TrackerKing DK12
  - Protocolo rastreador vehicular DK12
---

# TrackerKing - Protocolo DK12

Esta página documenta el contexto público del protocolo para usar el TrackerKing DK12 con la plataforma Plaspy. Describe cómo el DK12 se comunica con Plaspy en términos operativos, explica el papel del protocolo de reporte del rastreador y apunta consideraciones prácticas para la configuración y la resolución de problemas. La información está dirigida a usuarios técnicos que necesiten integrar, desplegar o mantener dispositivos DK12 con Plaspy.

El DK12 es un rastreador GPS robusto y multifunción basado en el módulo SIMCOM7670SA que soporta 4G Cat1 con conmutación automática a 2G y variantes opcionales Cat M y NB IoT. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, revisiones de hardware y decisiones del fabricante. Para detalles a nivel de dispositivo y comportamientos específicos del firmware consulte la documentación del fabricante.

## Resumen del protocolo

El DK12 comunica ubicación, telemetría y eventos de alarma a un endpoint en la nube utilizando protocolos de reporte de rastreadores comunes. Estos protocolos permiten que el dispositivo se identifique, reporte fixes GNSS, envíe telemetría de entradas y sensores, y notifique a la plataforma sobre condiciones de alarma que requieren atención. Plaspy ingiere estos mensajes estándar para ofrecer seguimiento en vivo, alertas y reproducción histórica sin necesidad de parsers personalizados en muchos despliegues típicos del DK12.

- Permite el reporte de ubicación y la entrega de telemetría del DK12 hacia Plaspy para monitoreo en tiempo real.
- Transporta información de identificación y estado para que Plaspy atribuya los mensajes al dispositivo y vehículo correctos.
- Envía eventos de alarma como vibración, disparos de geocerca, alertas de exceso de velocidad y acciones de inmovilizador para activar reglas en la plataforma.
- Soporta estadísticas de kilometraje y odómetro junto con telemetría de voltaje de batería utilizadas en informes y flujos de mantenimiento.
- El DK12 es compatible con protocolos de rastreador comunes como GT06, JT808 y Tianqin, lo que facilita su integración con Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador utilizado por un dispositivo cuando este está correctamente configurado para reportar al servidor de Plaspy. En la práctica, esto significa que la mayoría de las unidades DK12 pueden enviar sus mensajes de protocolo estándar directamente a Plaspy y requieren una selección mínima en el lado de la plataforma.

- Plaspy utiliza un endpoint de servidor compartido en d.plaspy.com y la IP del servidor 54.85.159.138 para la ingesta de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo de los paquetes entrantes.
- En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.
- La autodetección de protocolo cubre protocolos documentados y comunes soportados por el DK12 como GT06, JT808 y Tianqin.
- Si un dispositivo no logra conectarse o reportar correctamente, revisar la configuración del dispositivo y la compatibilidad del firmware suele ser el primer paso para la resolución de problemas.

## Transporte y contexto de conexión

El DK12 puede configurarse para enviar datos sobre transportes IP estándar según el firmware y la configuración de despliegue. Plaspy soporta las opciones de transporte comunes usadas por rastreadores de campo y acepta tráfico tanto orientado a conexión como sin conexión en el puerto de ingesta compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y ajustes del equipo.
- Las unidades DK12 pueden apuntar al nombre de host d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para alcanzar Plaspy.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que las mismas reglas de firewall y red se aplican a una flota mixta.
- La elección del transporte puede afectar el comportamiento de entrega en condiciones de red límite, por lo que debe verificarse que la configuración del DK12 coincida con los requisitos operativos.
- Asegúrese de que el APN y las credenciales de datos en el DK12 permitan tráfico IP saliente hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar cómo se reportan ciertos comandos y campos de telemetría aun cuando se use el mismo protocolo.
- Revisiones de hardware y variantes de radio opcionales como Cat M o NB IoT pueden afectar el comportamiento del transporte o las características disponibles.
- Herramientas de configuración del fabricante o ajustes de mapeo de IMEI a veces requieren que el dispositivo apunte al endpoint exacto de Plaspy para habilitar la detección automática.
- Seleccionar UDP frente a TCP en el DK12 puede influir en la reintención y el reenvío en zonas con conectividad intermitente.
- Al integrar, valide la compatibilidad con la documentación más reciente del fabricante y pruebe builds de firmware representativos antes de un despliegue a gran escala.
- La ingesta de Plaspy soporta los protocolos establecidos usados por el DK12, pero confirme qué variante de protocolo está configurada para transmitir el dispositivo.

## Por qué es importante entender el protocolo

Conocer cómo el DK12 se comunica con Plaspy ayuda a asegurar una configuración confiable, alertas precisas y una resolución de problemas eficiente en flotas en producción. Comprender de manera práctica las elecciones de protocolo y transporte reduce el tiempo de integración y ayuda a los equipos de operaciones a responder más rápido ante problemas de conectividad o consistencia de datos.

- Ayuda a confirmar que los reportes del dispositivo llegan al servidor de Plaspy en d.plaspy.com puerto 8888 usando el transporte esperado.
- Facilita el diagnóstico de telemetría o eventos de alarma faltantes al considerar el comportamiento del firmware y las variantes de protocolo.
- Apoya la configuración correcta de encendido (ACC), inmovilizador y entradas de alarma para que los eventos se mapeen a alertas y flujos de trabajo en Plaspy.
- Informa la decisión sobre la selección del transporte en despliegues en zonas con cobertura celular variable.
- Permite la verificación planificada del odómetro y la telemetría de batería que alimentan los informes de mantenimiento y cumplimiento.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing DK12 con Plaspy ofrece una combinación práctica para organizaciones que requieren conciencia vehicular robusta, controles antirrobo y telemetría confiable en condiciones de red variadas. El amplio rango de voltaje de entrada del DK12, su diseño resistente al agua y funciones orientadas al vehículo como detección de ACC, soporte de encendido virtual y acciones remotas de inmovilizador lo hacen adecuado para flotas y activos. Plaspy ingiere los mensajes de protocolo estándar del DK12 para proporcionar seguimiento en vivo, alertas, reproducción histórica e informes sin una extensa personalización de protocolos.

Para conocer más sobre cómo Plaspy maneja la conectividad de dispositivos y explorar las características del producto visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique información específica del dispositivo con TrackerKing en https://trackerking.cn/ para obtener la guía más actualizada.
