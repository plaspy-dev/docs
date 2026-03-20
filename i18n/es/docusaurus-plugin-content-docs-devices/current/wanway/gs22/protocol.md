---
slug: /wanway/gs22/protocol
id: gs22-protocol
sidebar_label: Protocol
title: WanWay - GS22 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador WanWay GS22 y compatibilidad con Plaspy para reportes vehiculares confiables
keywords:
  - protocolo WanWay GS22
  - protocolo GPS WanWay GS22
  - protocolo de comunicación WanWay GS22
  - protocolo de rastreo WanWay GS22
  - compatibilidad WanWay GS22 con Plaspy
  - protocolo rastreador GPS WanWay
  - protocolo de seguimiento de vehículos WanWay
  - protocolo OBD II rastreador GPS WanWay
  - compatibilidad rastreadores Plaspy
  - comunicación dispositivo GPS Plaspy
---

# WanWay - Protocolo GS22

Esta página describe el contexto público del protocolo para usar el rastreador WanWay GS22 con Plaspy. Explica, en términos no sensibles y neutrales respecto a la implementación, cómo el dispositivo suele comunicar la posición y los datos del vehículo a la plataforma Plaspy. El GS22 es un dispositivo OBD II compacto con 4G y funciones como seguimiento en tiempo real, geocercas, alarma por desmontaje, diagnóstico del vehículo, batería recargable integrada y soporte para uso como hotspot Wi‑Fi; estas capacidades determinan qué tipos de mensajes enviará el equipo a una plataforma de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de conexión y en consideraciones prácticas de compatibilidad más que en formatos de paquetes de bajo nivel o lógica privada de análisis.

## Resumen del protocolo

A alto nivel, el protocolo de reporte es el conjunto de reglas que el GS22 emplea para identificarse y entregar telemetría útil al servidor. El protocolo permite que el dispositivo informe posición, estado y eventos, de modo que Plaspy pueda presentar seguimiento, diagnóstico y alertas de geocercas a los usuarios.

- Identificación y datos de autenticación del dispositivo que permiten a Plaspy asociar los mensajes con el activo correcto
- Informes de ubicación periódicos y por eventos que aportan posición, velocidad y datos de movimiento con sello temporal
- Actualizaciones de estado y diagnóstico, por ejemplo estado de alimentación, actividad de respaldo de batería y alertas de fallo o desmontaje
- Eventos de geocerca y alarmas que el dispositivo dispara y entrega al servidor para procesamiento inmediato
- Mensajes opcionales de latido o keepalive relacionados con la red que ayudan a Plaspy a mantener una visión confiable de las sesiones

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el GS22 está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados, lo que simplifica la configuración de red
- El endpoint del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Si un GS22 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma
- La detección automática exitosa depende de que el dispositivo envíe su identificación estándar y los tipos de mensajes implementados por el fabricante

## Transporte y contexto de conexión

Las opciones de transporte determinan cómo el GS22 envía su telemetría al servidor. El dispositivo puede configurarse para usar UDP o TCP en el puerto de la plataforma, según el soporte del equipo y la configuración elegida en los ajustes del rastreador.

- Los dispositivos GS22 pueden configurarse para conectarse usando UDP o TCP en el puerto 8888
- Los equipos pueden apuntar al dominio Plaspy d.plaspy.com o directamente a 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los rastreadores soportados, reduciendo la complejidad de firewalls y gateways
- Asegúrese de que el equipo de red del vehículo o de la flota permita tráfico saliente UDP y TCP hacia el endpoint de Plaspy en el puerto 8888
- La fiabilidad de la red y el modo de transporte elegido pueden afectar las características de entrega de mensajes y la latencia

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto de mensajes que envía un GS22 o el ritmo de los reportes; confirme siempre la versión de firmware al validar el comportamiento
- Diferentes lotes de hardware o revisiones pueden presentar pequeñas variaciones en el comportamiento de reporte o en las funciones soportadas
- Opciones de configuración del fabricante, como la selección de transporte o los intervalos de reporte, afectarán cómo se comporta el dispositivo con Plaspy
- Si un dispositivo soporta UDP y TCP, elija el transporte que mejor se adapte a su red y a sus necesidades de fiabilidad
- Valide la conectividad básica apuntando el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y observando el registro inicial y los reportes de posición
- Para despliegues a escala de flota, pruebe con una unidad de muestra para confirmar que se reciben correctamente los tipos de eventos esperados, como geocercas y alertas de desmontaje

## Por qué es importante comprender el protocolo

Comprender, en términos generales, cómo se comunica el GS22 ayuda durante la configuración, la resolución de problemas y el mantenimiento de un despliegue de seguimiento de flotas fiable en Plaspy. Saber qué se espera que envíe el dispositivo y cómo se conecta a la plataforma reduce tiempos de inactividad y errores de configuración.

- Diagnóstico más rápido cuando un dispositivo no aparece en línea o faltan eventos esperados
- Decisiones mejor fundamentadas sobre el modo de transporte TCP frente a UDP según su entorno de red
- Verificación más sencilla de que el diagnóstico del vehículo y los eventos de geocerca están disponibles y se reenvían correctamente
- Expectativas claras sobre cómo los avisos de respaldo de batería y desmontaje serán reportados a Plaspy
- Menos fricción en el despliegue al preconfigurar los dispositivos para que reporten al endpoint de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el WanWay GS22 con Plaspy ofrece una forma práctica de recopilar en una sola plataforma la ubicación de los vehículos, el diagnóstico y los eventos. La detección automática de protocolos de Plaspy y el uso de un puerto unificado simplifican la integración, para que los equipos puedan concentrarse en casos operativos como monitoreo, reproducción de trayectos y gestión de geocercas en lugar de en detalles de conectividad de bajo nivel.

Si desea conocer más sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y las funciones de flotas visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben confirmarse con la documentación del fabricante en https://www.wanwaytech.net/ para obtener la información específica más actual.
