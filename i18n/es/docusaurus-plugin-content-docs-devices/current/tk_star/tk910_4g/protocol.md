---
slug: /tk_star/tk910_4g/protocol
id: tk910_4g-protocol
sidebar_label: Protocol
title: TK-Star - TK910 4G Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TK-Star TK910 4G, compatibilidad con Plaspy y contexto de conexión
keywords:
  - TK Star
  - protocolo TK910 4G
  - protocolo GPS TK910 4G
  - compatibilidad TK910 4G Plaspy
  - protocolo de dispositivo Plaspy
  - comunicación tracker GPS
  - protocolo de rastreo vehicular
  - rastreador para gestión de flotas
  - protocolo rastreador GNSS
  - compatibilidad rastreador TK Star
---

# TK-Star - Protocolo TK910 4G

Esta página describe el contexto público del protocolo para usar el rastreador TK-Star TK910 4G con Plaspy. Se centra en cómo el equipo se comunica con la plataforma Plaspy de forma general, qué ajustes de conexión se utilizan y qué comportamientos del dispositivo son relevantes al integrarlo en una implementación de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando la unidad reporta correctamente a la plataforma. El comportamiento exacto del protocolo, la cadencia de mensajes y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía ofrece un contexto seguro, no sensible, y notas prácticas de compatibilidad para trabajar con el TK910 4G y Plaspy.

## Resumen del protocolo

El protocolo del rastreador define el intercambio de telemetría y eventos entre el TK910 4G y un servidor como Plaspy. A alto nivel, permite que el dispositivo se identifique, reporte posición y eventos de sensores, y reciba controles desde la plataforma de manera que Plaspy pueda procesar y mostrar la información a los usuarios.

- Permite que el dispositivo se autentique o identifique para que Plaspy asocie la telemetría al activo correcto
- Transporta la ubicación GNSS, ayudas de ubicación asistida y banderas de eventos como vibración o activación de geocercas
- Lleva telemetría de estado necesaria para funciones de flota como reproducción de rutas, alertas y monitoreo de disponibilidad
- Soporta la entrega de acciones de control remoto iniciadas desde la plataforma cuando el dispositivo y el firmware lo permiten
- Habilita mensajes de latido o keepalive para que Plaspy pueda seguir la conectividad y el estado en línea del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un endpoint de ingestión compartido y detecta automáticamente el protocolo del rastreador cuando los datos llegan con un patrón reconocible. En la mayoría de integraciones, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint y puerto de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos y protocolos soportados, lo que simplifica la configuración
- Configure el equipo para reportar a la dirección del servidor Plaspy para habilitar la detección automática por la plataforma
- Cuando el rastreador reporta correctamente, Plaspy asigna los datos entrantes al registro de dispositivo y al manejador de protocolo correspondiente
- Normalmente usted solo debe asegurarse de que APN, SIM y ajustes de dirección de reporte estén correctos en el lado del dispositivo
- Si un dispositivo no aparece, confirme que está apuntando al endpoint correcto de Plaspy y que los ajustes de transporte coinciden con la configuración del equipo

## Transporte y contexto de conexión

El TK910 4G puede configurarse para enviar telemetría mediante transportes comunes para alcanzar Plaspy. Plaspy acepta conexiones en un único endpoint y puerto para simplificar la operación entre dispositivos y despliegues.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración locales
- El endpoint de ingestión de Plaspy está disponible como d.plaspy.com y también puede alcanzarse en 54.85.159.138
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, el puerto 8888, lo que estandariza los ajustes de conexión para muchos modelos
- Elija el transporte que mejor soporte su firmware y las condiciones de red, teniendo en cuenta que UDP y TCP tienen características de entrega diferentes
- Verifique que el APN de la SIM y el registro en la red estén funcionando para que la telemetría pueda llegar al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden modificar los campos de telemetría disponibles, los intervalos de reporte de eventos y las capacidades de comandos remotos
- Las revisiones de hardware o variantes por región pueden afectar las bandas celulares soportadas y el comportamiento de conmutación, lo que influye en la conectividad
- Los métodos de configuración del fabricante y los servidores predeterminados varían según la versión; confirme que el rastreador esté apuntando explícitamente al endpoint de Plaspy
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con cómo fue provisionado
- Algunas funciones como controles de inmovilizador o entradas auxiliares dependen del firmware y del cableado del dispositivo más que del protocolo en sí
- Valide siempre el comportamiento del equipo en un entorno controlado antes del despliegue en producción

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador le ayuda a configurar los equipos con seguridad, resolver problemas de conectividad o datos más rápidamente y garantizar que las alertas y controles funcionen como se espera en Plaspy.

- Acelera la puesta en marcha al aclarar qué dirección y transporte configurar en el dispositivo
- Ayuda a diagnosticar telemetría faltante o actualizaciones inconsistentes identificando si el problema es de conectividad o de contenido del mensaje
- Guía decisiones sobre intervalos de reporte, consumo de energía y expectativas de batería de respaldo para un rastreo fiable
- Mejora la respuesta a incidentes al asegurar que notificaciones de eventos como vibración o geocerca lleguen a Plaspy con prontitud
- Facilita conversaciones informadas con los proveedores cuando una diferencia de firmware o comportamiento afecta la integración

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TK910 4G junto con Plaspy brinda a las organizaciones una vía sencilla hacia el seguimiento centralizado en tiempo real, alertas y reproducción histórica de rutas. Plaspy ingiere la telemetría del rastreador para que los operadores puedan monitorear activos, recibir alertas de geocercas y vibración, y aprovechar datos históricos para auditorías e informes.

Para obtener más información sobre Plaspy y cómo gestiona la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y guías de configuración del fabricante, verifique la información actual en el sitio oficial de TK Star https://www.tk-star.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante al planificar despliegues.
