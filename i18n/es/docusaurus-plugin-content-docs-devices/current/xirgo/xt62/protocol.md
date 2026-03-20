---
slug: /xirgo/xt62/protocol
id: xt62-protocol
sidebar_label: Protocol
title: Xirgo - XT62 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Xirgo XT62 y su comunicación con Plaspy para telemetría de cadena de frío y ubicación
keywords:
  - Protocolo Xirgo XT62
  - Protocolo GPS Xirgo XT62
  - Compatibilidad XT62 con Plaspy
  - Protocolo de rastreador de cadena de frío Xirgo
  - Protocolo de comunicación XT62
  - Protocolo de seguimiento XT62
  - Protocolo de módulo de activos Xirgo
  - Rastreadores compatibles con Plaspy
  - Guía de protocolo para rastreadores GPS
  - Seguimiento de remolques refrigerados
---

# Xirgo - Protocolo XT62

Esta página describe el contexto público del protocolo para usar el módulo de activos Xirgo XT62 con Plaspy. Se centra en el comportamiento observable de la comunicación y en el papel del protocolo del rastreador para entregar telemetría de ubicación y condiciones desde remolques refrigerados y contenedores hacia Plaspy, facilitando monitoreo unificado, alertas e informes.

Plaspy recibe la telemetría del XT62 utilizando configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El XT62 normalmente se configura para reportar temperatura, estado de puertas, señales I/O remotas y ubicación vía enlaces celulares. El comportamiento exacto del protocolo y el contenido de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar la implementación en terreno y estar al tanto del firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el XT62 informa identidad, ubicación y telemetría de sensores a un servicio backend como Plaspy. A alto nivel, el protocolo permite que el dispositivo entregue datos de posición y condiciones en tiempo oportuno que Plaspy puede normalizar y mostrar en paneles, alertas y APIs.

- Información de identificación y registro del dispositivo para asociar el activo con una cuenta en Plaspy.
- Reportes de ubicación periódicos para que los activos aparezcan en mapas y permitan monitoreo de rutas.
- Entrega de telemetría de sensores, incluyendo lecturas de temperatura, eventos de sensores de puerta y roll up, y estado de E/S remota para monitoreo de condiciones.
- Reporte de eventos por condiciones relevantes como excursiones de temperatura o eventos de acceso que disparan alertas y reglas.
- Soporte para control remoto e interacciones de E/S cuando se configuran mediante comandos de Plaspy y el firmware del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar datos de muchos modelos de rastreadores minimizando la configuración por dispositivo. Cuando un XT62 se configura para enviar datos al endpoint de Plaspy, la plataforma usa los patrones de conexión y de mensaje entrantes para determinar cómo analizar la transmisión y mapear la telemetría a los registros de Plaspy.

- Los dispositivos deben apuntar al servidor de Plaspy en d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto de escucha de Plaspy, que es el 8888.
- El XT62 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Cuando está correctamente configurado, por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy porque la plataforma detecta automáticamente el protocolo del rastreador.
- Confirme la configuración de reporte del dispositivo y la APN o la configuración de la SIM para que los mensajes lleguen al endpoint de Plaspy y permitan la detección automática.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el XT62 alcanza el endpoint de Plaspy y qué opciones de transporte se usan comúnmente. Entender el transporte ayuda a asegurar la entrega confiable de telemetría en tiempo real y notificaciones de eventos para activos refrigerados.

- El XT62 puede configurarse para comunicarse usando UDP o TCP en el puerto 8888.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del servidor para rastreadores en una flota mixta.
- Se requiere conectividad de datos celulares para el reporte en tránsito; la configuración del operador y la APN pueden afectar la entrega.
- Condiciones de red como NAT, tiempos de espera de sesión del operador o reglas de firewall pueden influir en si UDP o TCP es preferible para una implementación determinada.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes, el orden de los campos o la disponibilidad de reportes de sensores; revise las notas de firmware al validar la compatibilidad.
- Las revisiones de hardware u opcionales módulos de E/S pueden añadir o quitar canales de sensores, lo que afecta la carga útil de telemetría que Plaspy recibe.
- Las opciones de configuración del fabricante pueden permitir que el XT62 use distintos transportes o intervalos de reporte; confirme la configuración del dispositivo al integrarlo.
- La selección de transporte entre UDP y TCP puede afectar las garantías de entrega y los requisitos de firewall en el trayecto de la red móvil.
- Pruebe una unidad representativa antes de un despliegue a gran escala para confirmar que Plaspy recibe los datos de sensores y eventos esperados.
- Para preguntas específicas del dispositivo, consulte la documentación del fabricante para confirmar consideraciones de compatibilidad.

## Por qué es importante comprender el protocolo

Conocer cómo el XT62 se comunica con Plaspy ayuda a asegurar una configuración correcta, acelerar la resolución de problemas y mantener una operación confiable a largo plazo para activos de cadena de frío. Tener claro el comportamiento del protocolo reduce la fricción de integración y facilita alertas e informes previsibles.

- Identificación más rápida de problemas de conectividad confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Mejor resolución de problemas de mapeo de sensores o eventos al entender qué telemetría envía el dispositivo y cuándo.
- Planeación más segura para actualizaciones de firmware que puedan cambiar el comportamiento de la telemetría o introducir nuevos campos.
- Alertas y reportes de cumplimiento más confiables al verificar los formatos de eventos y los intervalos de reporte.
- Validación más sencilla de flujos de trabajo de E/S remota y control cuando se comprenden las respuestas del dispositivo y las rutas de comando.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT62 con Plaspy integra telemetría de activos refrigerados y ubicación en una sola plataforma. Para equipos de operaciones que gestionan refrigeradores, farmacéutica de cadena de frío o carga de alto valor, esa vista unificada soporta optimización de rutas, alertas basadas en condiciones y una respuesta más rápida a incidentes sin trabajo de integración de servidores a medida.

Para conocer más sobre Plaspy y las funciones de la plataforma para visibilidad de activos y flotas visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos del dispositivo, el comportamiento del firmware y la guía del fabricante más actual, verifique la información con Xirgo en https://xirgo.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
