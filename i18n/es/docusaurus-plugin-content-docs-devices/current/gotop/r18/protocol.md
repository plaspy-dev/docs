---
slug: /gotop/r18/protocol
id: r18-protocol
sidebar_label: Protocol
title: GOTOP - R18 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP R18 y su comunicación con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - protocolo GOTOP R18
  - protocolo GPS GOTOP R18
  - GOTOP R18 Plaspy
  - protocolo de rastreo GOTOP R18
  - protocolo de rastreador GPS GOTOP
  - rastreador GPS R18
  - protocolo de gestión de flotas
  - compatibilidad de rastreadores con Plaspy
  - protocolo de rastreo de vehículos
  - comunicación de rastreadores GPS
---

# GOTOP - Protocolo R18

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP R18 con Plaspy. Explica cómo el dispositivo reporta ubicaciones y eventos al endpoint de Plaspy y qué papel tiene ese protocolo de reporte en habilitar el seguimiento en tiempo real, las alarmas y la telemetría dentro de la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general y no sensible que ayuda con la configuración y la resolución de problemas.

## Resumen del protocolo

El protocolo del rastreador es el método de comunicación a nivel de dispositivo que transporta posiciones GPS, telemetría y alertas de eventos desde el R18 hasta Plaspy, y permite que la plataforma interprete la ubicación y los datos de alarma para paneles y reportes. Define cómo el rastreador se identifica, cómo envía mensajes periódicos y por evento, y qué entradas de telemetría suministra Plaspy para normalizar en flujos de trabajo de flotas y seguridad.

- Permite la entrega de actualizaciones de ubicación y telemetría como estado de ignición, entradas analógicas y eventos de alarma a Plaspy.
- Soporta la identificación y el reporte del dispositivo para que Plaspy pueda correlacionar los mensajes entrantes con la unidad R18 registrada.
- Transporta notificaciones de eventos usadas para SOS, geocercas, pérdida de energía y otros flujos de alarma en Plaspy.
- Proporciona la telemetría utilizada para seguimiento en tiempo real, reproducción histórica e informes automatizados.
- Funciona con flujos de actualización OTA y gestión de dispositivos cuando el fabricante lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y utiliza detección automática para identificar el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar un protocolo manualmente. Si el R18 está configurado para reportar al endpoint de Plaspy, la plataforma intentará emparejar los mensajes entrantes con formatos conocidos y enrutar los datos para su procesamiento.

- Plaspy expone un único endpoint público para que los dispositivos reporten y detecta automáticamente el protocolo del rastreador.
- Cuando el R18 está configurado para enviar telemetría al endpoint de Plaspy, generalmente no se requiere selección manual del protocolo en Plaspy.
- Una identificación adecuada del dispositivo y intervalos de reporte consistentes ayudan a Plaspy a reconocer y mantener una sesión estable con el equipo.
- Las diferencias entre variantes de firmware o configuraciones del fabricante pueden afectar cómo se presentan los mensajes a Plaspy y pueden requerir validación.
- Si la detección automática no ocurre, se recomienda revisar la configuración del dispositivo y la documentación del fabricante.

## Contexto de transporte y conexión

El R18 puede configurarse para usar transporte de datos celular estándar para entregar la telemetría a Plaspy. Los dispositivos pueden reportar por UDP o TCP según la capacidad y configuración del equipo, y Plaspy provee un endpoint de red consistente para recibir esos reportes.

- Plaspy server domain for reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and Plaspy listens on port 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración locales.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y centralizar el tráfico entrante.
- Elija UDP o TCP en el dispositivo según la documentación del rastreador y los requisitos de confiabilidad de la red.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden alterar el tiempo de los mensajes, las alarmas soportadas o campos opcionales que afectan cómo llegan los datos a Plaspy.
- Las revisiones de hardware o variantes regionales pueden cambiar bandas disponibles o el comportamiento de periféricos que impacten el reporte.
- Los parámetros de configuración del fabricante controlan la selección de transporte y los ajustes de destino que deben apuntar al endpoint de Plaspy.
- Características opcionales como corte de motor mediante relé o entradas adicionales de sensores pueden requerir habilitación explícita en el firmware del dispositivo.
- Valide la compatibilidad con la documentación oficial de GOTOP y las notas de versión para comportamiento específico del equipo.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar conectividad.

## Por qué importa conocer el protocolo

Comprender cómo se comunica el R18 ayuda a garantizar una configuración exitosa, reportes confiables y una resolución de problemas más rápida al integrarlo con Plaspy. El conocimiento práctico del protocolo y del contexto de conexión reduce tiempos de inactividad y favorece un manejo consistente de eventos en toda la flota.

- Asegura configuraciones de destino correctas para que el dispositivo reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar reportes o alarmas faltantes revisando la elección del transporte y el comportamiento del firmware.
- Permite a los operadores comparar capacidades del dispositivo, como entradas analógicas y detección de ignición, con los campos de datos en Plaspy.
- Soporta la validación de flujos de eventos como SOS, geocercas y reportes de corte de energía para alertas y escalamiento.
- Facilita la planificación de despliegues que dependan de actualizaciones OTA y otras funciones de gestión de dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP R18 con Plaspy ofrece a las organizaciones una opción compacta de rastreador 4G que entrega la telemetría principal y las entradas de alarma necesarias para visibilidad de flota, flujos anti robo y reportes operativos. El amplio rango de alimentación del R18, sus antenas internas y modos de telemetría flexibles lo hacen apto para motocicletas, automóviles, activos marinos y protección de bienes en general, mientras que Plaspy normaliza y presenta los datos entrantes para casos de uso reales.

Para saber más sobre cómo Plaspy funciona con rastreadores compatibles y explorar opciones de despliegue, visite https://www.plaspy.com. Para obtener los detalles más actuales del protocolo específico del dispositivo, notas de firmware y orientación del fabricante, verifique la información con GOTOP en https://www.gotop.cc/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación oficial del fabricante ayuda a asegurar una configuración correcta y el comportamiento esperado.
