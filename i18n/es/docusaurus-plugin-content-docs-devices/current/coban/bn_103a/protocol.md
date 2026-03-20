---
slug: /coban/bn_103a/protocol
id: bn_103a-protocol
sidebar_label: Protocol
title: Coban - BN-103A Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador Coban BN 103A con Plaspy para seguimiento vehicular en tiempo real
keywords:
  - protocolo Coban BN 103A
  - protocolo GPS Coban BN 103A
  - protocolo de rastreo Coban BN 103A
  - protocolo rastreador GPS Coban
  - compatibilidad BN 103A Plaspy
  - protocolo de comunicación BN 103A
  - protocolo rastreador vehicular Coban
  - protocolo de dispositivo Plaspy
  - seguimiento de flotas Coban BN 103A
  - telemetría y alarmas BN 103A
---

# Coban - Protocolo BN-103A

Esta página describe el contexto público del protocolo para utilizar el rastreador vehicular Coban BN-103A con Plaspy. Se centra en cómo comunica el dispositivo con la plataforma Plaspy en términos generales y qué debe considerarse al apuntar el equipo a Plaspy para seguimiento en vivo, telemetría y reporte de eventos. Los detalles técnicos de configuración específicos del fabricante o de la versión de firmware no se reproducen aquí y deben confirmarse con la documentación oficial.

El BN-103A es un rastreador para montaje en vehículo diseñado para instalaciones de 12–24V, con GNSS de alta sensibilidad, conectividad GSM GPRS multibanda y entradas de alarma configurables. Plaspy acepta reportes del BN-103A a través del endpoint y puerto compartidos de Plaspy, y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que puede ser necesario ajustar la configuración del equipo para coincidir con el formato de reporte de una unidad concreta.

## Visión general del protocolo

El protocolo de comunicación utilizado por el BN-103A define cómo el rastreador envía posiciones GNSS, telemetría y datos de eventos a un servidor remoto y cómo la plataforma puede emitir acciones remotas. Para la integración con Plaspy, este protocolo es el puente entre las señales brutas del dispositivo y las funciones de la plataforma como ubicación en tiempo real, alarmas y reproducción de historial.

- Traduce las posiciones GNSS y las marcas de tiempo en informes de posición que Plaspy ingiere para seguimiento en vivo y reproducción histórica.
- Transmite entradas digitales y eventos de alarma como encendido ACC, estado de puertas, SOS y disparos de geocercas para que Plaspy pueda generar notificaciones y reglas.
- Transporta variables de telemetría, incluyendo calidad de señal y estado de batería, que ayudan al monitoreo del estado del dispositivo en Plaspy.
- Proporciona un canal para comandos de control remoto o configuración cuando el dispositivo y el fabricante lo soportan.
- Soporta múltiples métodos de transporte para que los equipos utilicen el modo de red más adecuado según la instalación del vehículo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de rastreadores en un endpoint compartido y determina automáticamente el protocolo del dispositivo en función del formato de los datos entrantes y la configuración del equipo. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo en la plataforma cuando el rastreador está configurado correctamente para reportar a Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com, que resuelve al endpoint de ingestión de Plaspy.
- La dirección IP del servidor Plaspy es 54.85.159.138 para entornos que requieren configuración por IP directa.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden enviar datos por UDP o TCP al endpoint de Plaspy según la capacidad y configuración del equipo.
- Cuando un BN-103A está apuntado al endpoint de Plaspy y los transportes de red son correctos, la plataforma detectará automáticamente el protocolo y comenzará a procesar los reportes.

## Transporte y contexto de conexión

Las opciones de conexión forman parte del contexto público de integración para el BN-103A. El rastreador soporta opciones de transporte comunes en dispositivos vehiculares y puede configurarse para alcanzar Plaspy usando nombre de dominio o dirección IP según la preferencia del instalador.

- El BN-103A puede configurarse para usar UDP o TCP en el puerto 8888 para comunicarse con Plaspy.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 cuando se requiere un endpoint numérico.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de servidores y firewalls.
- Algunas implementaciones pueden usar SMS como transporte secundario para comandos específicos o reporte de respaldo según las características del dispositivo y la capacidad de la tarjeta SIM.
- Asegúrese de que la SIM del rastreador tenga un APN operativo y un plan de datos para que los reportes TCP o UDP alcancen el endpoint de Plaspy de manera confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades BN-103A pueden afectar los formatos de reporte, los campos disponibles y los comandos soportados.
- Las revisiones de hardware u opciones de accesorios pueden añadir o quitar canales de telemetría como entradas para sensor de combustible o accesorios externos.
- Algunas configuraciones del fabricante requieren cambiar explícitamente los parámetros de servidor o el modo de reporte desde los valores por defecto antes de que el dispositivo envíe datos a una plataforma de terceros.
- La elección entre TCP y UDP puede afectar el comportamiento de la conexión y debe coincidir con la configuración del dispositivo y el entorno de red.
- El transporte por SMS puede ser soportado para comandos o como respaldo, pero no sustituye el reporte en tiempo real vía TCP o UDP.
- Valide siempre el comportamiento del equipo en una prueba controlada antes de un despliegue amplio para confirmar que los eventos y alarmas aparecen en Plaspy según lo esperado.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a instaladores y gestores de flotas a lograr una conexión confiable y mantenible entre los equipos BN-103A y Plaspy. Tener expectativas claras sobre lo que envía el dispositivo y cómo la plataforma interpreta esos mensajes reduce el tiempo de inactividad y facilita la resolución de problemas.

- Asegura que los reportes de posición y las alarmas se mapeen correctamente en los paneles de Plaspy y en las reglas de notificación.
- Facilita el diagnóstico de actualizaciones faltantes, banderas de eventos incorrectas o valores de telemetría desajustados durante la puesta en marcha.
- Orienta la elección del método de transporte, la configuración del APN y la dirección del servidor para un reporte consistente.
- Ayuda a determinar cuándo una actualización de firmware o un cambio de configuración es necesario para habilitar funciones deseadas o mejorar la fiabilidad.
- Soporta un comportamiento predecible en flujos de trabajo de control remoto como inmovilización o monitoreo remoto cuando esas funciones están habilitadas.

## Por qué usar Plaspy con este protocolo

Usar el Coban BN-103A con Plaspy ofrece a operadores de flotas y gestores de vehículos un camino práctico desde la telemetría bruta del dispositivo hasta información operativa accionable. Plaspy ingiere posiciones GNSS, alarmas y telemetría del BN-103A para que los equipos puedan monitorear ubicaciones en vivo, reproducir recorridos, aplicar geocercas y activar notificaciones basadas en reglas de eventos.

Plaspy está diseñado para aceptar reportes de rastreadores compatibles usando el endpoint y puerto compartidos de Plaspy y para detectar automáticamente el protocolo del dispositivo, por lo que la integración suele ser directa una vez que la unidad está configurada para reportar a d.plaspy.com a través de la red.

Para conocer más sobre cómo Plaspy apoya integraciones de dispositivos y las funciones de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre el protocolo específico del equipo y las notas de firmware con el fabricante en https://www.coban.net/.
